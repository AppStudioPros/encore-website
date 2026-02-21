export async function POST(req: Request) {
  try {
    const { agency, challenge, modules } = await req.json();

    const braveKey = process.env.BRAVE_SEARCH_API_KEY;
    const samKey = process.env.SAM_GOV_API_KEY;

    const braveQueries = [
      `${agency} AI contracts 2024 2025`,
      `${agency} technology challenges`,
      `${agency} existing systems platforms`,
    ];

    // Parallel fetches
    const bravePromises = braveKey
      ? braveQueries.map(async (q) => {
          try {
            const res = await fetch(
              `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(q)}&count=5`,
              {
                headers: {
                  Accept: "application/json",
                  "X-Subscription-Token": braveKey,
                },
              }
            );
            if (!res.ok) return [];
            const data = await res.json();
            return (data.web?.results || [])
              .slice(0, 5)
              .map((r: { title: string; description: string; url: string }) => ({
                title: r.title,
                description: r.description,
                url: r.url,
              }));
          } catch {
            return [];
          }
        })
      : [Promise.resolve([])];

    const samPromise = samKey
      ? (async () => {
          try {
            const res = await fetch(
              `https://api.sam.gov/opportunities/v2/search?api_key=${samKey}&keyword=${encodeURIComponent(agency + " AI")}&postedFrom=01/01/2024&limit=10`
            );
            if (!res.ok) return [];
            const data = await res.json();
            return (data.opportunitiesData || []).slice(0, 10).map(
              (o: {
                title: string;
                description: string;
                type: string;
                postedDate: string;
                fullParentPathName: string;
              }) => ({
                title: o.title,
                description: o.description?.slice(0, 200),
                type: o.type,
                postedDate: o.postedDate,
                agency: o.fullParentPathName,
              })
            );
          } catch {
            return [];
          }
        })()
      : Promise.resolve([]);

    const [braveResults, samResults] = await Promise.all([
      Promise.all(bravePromises).then((r) => r.flat()),
      samPromise,
    ]);

    // Build summary
    const braveSnippets = braveResults
      .slice(0, 8)
      .map((r: { title: string; description: string }) => `- ${r.title}: ${r.description}`)
      .join("\n");
    const samSnippets = (samResults as { title: string; type: string }[])
      .slice(0, 5)
      .map((r) => `- ${r.title} (${r.type})`)
      .join("\n");

    const summary = `AGENCY RESEARCH FINDINGS FOR ${agency}:

Recent contracts and AI initiatives:
${braveSnippets || "No specific results found — will use general knowledge."}

SAM.gov Opportunities:
${samSnippets || "No recent AI-related opportunities found."}

Challenge context: ${challenge}
Selected modules: ${modules?.join(", ") || "General"}`;

    return Response.json({ braveResults, samResults, summary });
  } catch (error) {
    console.error("Research API error:", error);
    return Response.json(
      { braveResults: [], samResults: [], summary: "Research unavailable — proceeding with general knowledge." },
      { status: 200 }
    );
  }
}
