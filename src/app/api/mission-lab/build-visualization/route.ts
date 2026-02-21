export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `You are an expert at analyzing government processes and generating visual process flow maps. You take a conversation about a government agency's challenge and generate a JSON structure representing how Encore's AI-powered solution would work for their specific use case.

OUTPUT FORMAT: Return ONLY valid JSON, no markdown, no code fences, no explanation. The JSON structure:

{
  "title": "Encore AI Solution — [Agency-Specific Title]",
  "subtitle": "Process flow generated from your mission briefing",
  "nodes": [
    {
      "id": "1",
      "type": "flowNode",
      "position": { "x": number, "y": number },
      "data": {
        "label": "Node Name",
        "subtitle": "Brief description",
        "icon": "emoji",
        "type": "start|process|ai|parallel|team|end|loop",
        "isKey": true/false,
        "insight": "What this node does and why it matters (shown on hover)",
        "insightMetric": "60% faster" 
      }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2",
      "animated": true,
      "className": "edge-glow" 
    }
  ],
  "stats": [
    { "label": "Processing Time", "value": "12 days → hours" },
    { "label": "Cost Reduction", "value": "~60%" },
    { "label": "Accuracy", "value": "96.8%" },
    { "label": "ROI Timeline", "value": "90 days" }
  ]
}

RULES FOR BUILDING THE FLOW:
1. Create 8-14 nodes that map the Encore AI solution for their SPECIFIC agency and challenge
2. Start with a "start" node (data input/trigger point)
3. Include 2-3 "ai" type nodes — these are where ACUMEN-7 does the heavy lifting
4. Include at least 1 "parallel" node showing simultaneous processing (AI advantage)
5. Include exactly 1 "team" node — "Encore Mission Team" — showing the human partnership element
6. Include 1 "loop" node — the AI learning feedback loop (this is the moat)
7. End with an "end" node showing the outcome
8. Mark 3-4 nodes as "isKey": true — these are the key differentiators that get extra visual emphasis
9. The "insight" field should explain WHY this step matters — cost savings, speed, accuracy, safety
10. The "insightMetric" field should be a punchy number/stat when applicable
11. Use relevant emojis for icons: 📥 🤖 ⚡ 🔍 🛡️ 📊 👥 🎯 🔄 ✅ 🧠 📡 🔐 💡
12. Position nodes in a flowing layout — generally top-to-bottom with branches for parallel processing
13. X positions: center around 400, spread parallel nodes at x=200 and x=600
14. Y positions: increment by ~120-150 between levels
15. Edges should be animated (animated: true)
16. Use className "edge-glow" for edges connecting to/from AI nodes
17. Use className "edge-loop" for the feedback loop edge
18. Stats should be agency-specific and REALISTIC — credible numbers, not fantasy

USE REAL FEDERAL ACQUISITION TERMINOLOGY IN NODES — not generic process labels:
- Instead of "Data Input" → "PR Intake & Requirements Validation"
- Instead of "AI Processing" → "ACUMEN-7 Market Research Engine" with insight: "Cross-references SAM.gov historical data, FPDS award patterns, and SBA vendor profiles"
- Instead of "Cost Analysis" → "IGCE Generator" with insight: "Maps labor categories to CALC+ ceiling rates, applies SCA wage determinations, builds defensible cost model"
- Instead of "Document Creation" → "Solicitation Drafting — Section L/M/C" with insight: "AI-assisted generation with FAR/DFARS clause matrix and conflict detection"
- Instead of "Review" → "Compliance Firewall" with insight: "Scans against current FAR/DFARS/agency supplement, flags clause conflicts before legal review"
- Instead of "Evaluation" → "Evaluation Workbench" with insight: "Structured scoring with mandatory evidence links per evaluation factor — protest-proof by design"
- Instead of "Decision" → "Source Selection Package" with insight: "Auto-generates SSDD narrative from evaluation data with tradeoff rationale"
- Instead of "Output" → "Award-Ready Package" with insight: "Complete documentation from intake to award — debriefing materials pre-built"

REALISTIC STATS (use these ranges, adapt to agency):
- PALT Reduction: 30-50% (NOT 90%)
- IGCE Prep: "3 weeks → 48 hours"
- Solicitation Draft: "4-6 weeks → 1 week (AI + human review)"
- Evaluation Doc Time: "-60%"
- Clause Conflicts Caught: "12 per solicitation avg"
- Audit Readiness: "Day 1"
- Compliance Check: "2 days manual → minutes"

AGENCY-SPECIFIC CONTEXT (use when you know the agency):
- VA: Reference VAAR, Oracle Health EHR, SDVOSB/VOSB goals, claims backlog
- DoD: Reference DFARS, CMMC, color-coded eval ratings, JADC2, Middle Tier of Acquisition
- DHS: Reference FirstSource III, EINSTEIN/CDM, border tech, immigration processing
- Civilian: Reference Category Management, Cloud Smart, Zero Trust (OMB M-22-09), TMF

CRITICAL: Make every node, label, insight, and stat specific to the agency and challenge discussed. Generic outputs are useless. The prospect should see their world reflected back — "PR Intake" not "Data Input," "PALT Reduction" not "Time Savings," "protest-proof documentation" not "better records."`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, agency, role, selectedModules, briefing } = body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "API key not configured" }, { status: 500 });
    }

    const anthropicMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    // Add context and build instruction
    anthropicMessages.push({
      role: "user" as const,
      content: `Based on our entire conversation, generate a process flow visualization JSON showing how Encore's AI solution would work for ${agency || "this agency"}. ${briefing ? `Here's the briefing for context:\n\n${briefing}\n\n` : ""}The user's role is ${role || "government professional"}. Modules discussed: ${selectedModules?.join(", ") || "general"}. Return ONLY the JSON.`,
    });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: anthropicMessages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return Response.json({ error: `API error: ${response.status}` }, { status: 500 });
    }

    const result = await response.json();
    const text = result.content?.[0]?.text || "";

    // Parse the JSON
    try {
      // Try to extract JSON if wrapped in anything
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return Response.json({ error: "No valid JSON in response" }, { status: 500 });
      }
      const flowData = JSON.parse(jsonMatch[0]);
      return Response.json(flowData);
    } catch (parseErr) {
      console.error("JSON parse error:", parseErr, "Raw:", text.slice(0, 500));
      return Response.json({ error: "Failed to parse visualization data" }, { status: 500 });
    }
  } catch (error) {
    console.error("Build visualization API error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to build visualization" },
      { status: 500 }
    );
  }
}
