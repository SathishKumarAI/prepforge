---
qid: ing_f19a102d57__eli5__local
question: Mamba and state-space models were supposed to replace transformers. What
  actually happened, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 215
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:57:14-05:00'
sources: []
---

Imagine a city’s traffic system: the transformer is like a huge, flexible traffic controller that can handle any route but takes a long time to decide each turn. Researchers built **Mamba** and other **state‑space models** as new “traffic lights” that promise faster decisions by focusing on short, local segments of the road.

In practice, these lights work great on simple routes—small datasets or low‑resource tasks—but they still struggle with long‑haul journeys where many turns depend on distant context. Transformers keep their edge for such complex, long‑range dependencies because their architecture naturally captures everything at once.

So, Mamba and state‑space models didn’t replace transformers; instead, they added faster, lighter options that complement the transformer’s strengths, much like a city adding smart intersections to help with short trips while keeping the main traffic hub for longer commutes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
