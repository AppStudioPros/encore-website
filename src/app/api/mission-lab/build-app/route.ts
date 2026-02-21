export const runtime = "nodejs";
export const maxDuration = 120;

const SYSTEM_PROMPT = `You are an expert frontend developer building interactive government software prototypes. You generate COMPLETE, SELF-CONTAINED HTML pages with inline CSS and JavaScript.

REQUIREMENTS:
- Generate a SINGLE HTML document with all CSS and JS inline
- The app should look like REAL enterprise government software — professional, polished, dark theme
- Use a color scheme: dark background (#0a0f1e), white/light text, with electric purple (#a855f7) accents for interactive/working elements
- Fill ALL data with realistic demo data relevant to the agency and challenge described
- Make interactive elements ACTUALLY WORK: buttons that toggle, tabs that switch, search that filters, forms that respond, charts that animate
- Every interactive/working element must have a class="interactive-highlight" which gives it a shimmering purple border/glow animation
- Include a top bar with: "[Agency Name] — [App Name] | Powered by Encore Custom AI Agents | NOT GPT"
- Include realistic metrics, tables, charts (use CSS-only charts — gradient bars, animated progress rings, etc.)
- The app must fill the full viewport (100vw x 100vh, no scroll on the outer page)
- Use CSS Grid or Flexbox for professional layouts — sidebar nav, main content area, header
- Add subtle animations: fade-ins, pulse on metrics, smooth transitions
- NO external dependencies, NO CDN links, NO images — everything pure HTML/CSS/JS
- Make it feel like a $500K enterprise app, not a toy

INTERACTIVE ELEMENTS TO INCLUDE (pick what's relevant based on modules):
- Dashboard with live-looking metrics (numbers that increment on load)
- Tabbed interface (clicking tabs shows different content)
- Search bar that filters a data table
- Status toggles/switches that change state
- A sidebar navigation that highlights active section
- Data table with sortable columns (click header to sort)
- Progress indicators that animate
- Alert/notification panel
- At least one form that shows a response when submitted

CRITICAL: Include this CSS for the interactive-highlight class:
.interactive-highlight {
  border: 1px solid rgba(168, 85, 247, 0.5);
  animation: shimmer-purple 2s ease-in-out infinite;
}
@keyframes shimmer-purple {
  0%, 100% { box-shadow: 0 0 8px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.1); border-color: rgba(168, 85, 247, 0.5); }
  50% { box-shadow: 0 0 16px rgba(168, 85, 247, 0.7), 0 0 40px rgba(168, 85, 247, 0.2); border-color: rgba(168, 85, 247, 0.8); }
}

STRUCTURE:
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[App Name]</title>
  <style>/* ALL CSS HERE */</style>
</head>
<body>
  <!-- FULL APP HTML -->
  <script>/* ALL JS HERE - make interactive elements work */</script>
</body>
</html>

OUTPUT: Return ONLY the HTML. No markdown, no explanation, no code fences. Just the raw HTML document.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, agency, role, selectedModules, briefing } = body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "API key not configured" }, { status: 500 });
    }

    const contextNote = `\n\nCONTEXT: Agency: ${agency || "Government Agency"}. Role: ${role || "government professional"}. Modules: ${selectedModules?.length ? selectedModules.join(", ") : "general"}.`;

    const anthropicMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    // Add briefing context and build instruction
    if (briefing) {
      anthropicMessages.push({
        role: "user" as const,
        content: `Here is the briefing document that was generated:\n\n${briefing}\n\nBased on our conversation and the briefing document, build an interactive prototype application. The agency is ${agency || "Government Agency"}. Build it as a full-page enterprise application with realistic demo data. Make all interactive elements work and mark them with class='interactive-highlight'. Return ONLY the complete HTML document, no markdown or explanation.`,
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8192,
        system: SYSTEM_PROMPT + contextNote,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return Response.json({ error: `Anthropic API error: ${response.status}` }, { status: 500 });
    }

    if (!response.body) {
      return Response.json({ error: "No response body" }, { status: 500 });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const readable = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6).trim();
                if (data === "[DONE]") continue;
                try {
                  const parsed = JSON.parse(data);
                  if (
                    parsed.type === "content_block_delta" &&
                    parsed.delta?.type === "text_delta" &&
                    parsed.delta?.text
                  ) {
                    controller.enqueue(encoder.encode(parsed.delta.text));
                  }
                } catch {
                  // skip
                }
              }
            }
          }
          controller.close();
        } catch (err) {
          console.error("Stream read error:", err);
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Build app API error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to build app" },
      { status: 500 }
    );
  }
}
