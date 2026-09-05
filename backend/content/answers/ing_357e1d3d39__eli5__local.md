---
qid: ing_357e1d3d39__eli5__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 230
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:29-05:00'
sources: []
---

Think of a robot chef who wants to make a sandwich.

**Plan‑then‑execute** is like writing out the whole recipe first: “Get bread, spread peanut butter, add jelly, cut in half.” The chef follows the steps one by one, checking nothing until the end. It works best when the kitchen (the environment) is predictable and all ingredients are available—just as a robot can finish a task that doesn’t change while it’s working.

**Reactive (ReAct‑style)** is like a chef who keeps looking at the counter while cooking: if a jar of jelly runs out, she immediately grabs jam instead; if the bread gets soggy, she swaps to toast. The chef reacts to what happens right now and updates her plan on the fly. This wins when conditions change or information arrives during the task—think of a robot that must adapt to sensor noise or unexpected obstacles.

So: write‑it‑all‑first for stable tasks; react‑and‑adapt for dynamic, uncertain ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
