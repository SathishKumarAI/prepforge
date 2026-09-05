---
qid: ing_632df42191__eli5__local
question: 'Explain: A colleague wants to move the semantic layer to the cloud so you
  can use a much bigger model. Walk me through the latency budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 334
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:13-05:00'
sources: []
---

Imagine your team’s data is a library and the “semantic layer” is the librarian who answers questions. Right now the librarian sits in your office (on‑premises), so answering takes only a few seconds—your **latency budget** is tight: you can afford maybe 200 ms for a quick reply.

Moving the librarian to the cloud means the books are shipped across town on a courier service. A bigger, smarter librarian (a larger AI model) lives there, but now every question must travel over the network. The latency budget splits into two parts:

1. **Network hop** – the time it takes your query to reach the cloud and back (often 50–150 ms depending on distance and traffic).
2. **Processing time** – how long the cloud AI spends thinking, which can be a few hundred milliseconds for a big model.

You must keep the sum below the original budget; otherwise users will notice delays. If your current budget is 200 ms, you might need to tighten network speed or accept a slightly higher latency (e.g., 250–300 ms) and adjust user expectations. In short: moving the semantic layer to the cloud adds a “shipping” delay, so you must balance that against how fast the larger model can respond.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
