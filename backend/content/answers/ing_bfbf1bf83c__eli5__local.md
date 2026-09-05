---
qid: ing_bfbf1bf83c__eli5__local
question: 'Explain: Trace Your Application — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 266
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:46-05:00'
sources: []
---

Think of your AI app as a long road trip from the start line (data input) to the finish line (prediction output). “Tracing” is like installing a GPS tracker on every car along the route so you can see exactly where each car stops, how fast it goes, and whether any traffic jams or detours happen.

In Arize‑AI’s *phoenix* library, tracing captures tiny snapshots of the app’s state—like speed (latency), fuel usage (memory), and turns taken (function calls)—and stitches them into a single map. When something goes wrong, you can click on that map to zoom in on the exact step where the car stalled or took an unexpected detour.

Key terms:
- **Trace**: A sequence of recorded events that show how data flows through your app.
- **Span**: One event or step in the trace (e.g., loading a model, running inference).
- **Context**: Metadata attached to spans (like timestamps, IDs, or custom tags).

With this map, you can spot bottlenecks, debug failures, and prove that every part of your AI pipeline is behaving as expected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
