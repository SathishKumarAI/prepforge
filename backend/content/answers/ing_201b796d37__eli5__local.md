---
qid: ing_201b796d37__eli5__local
question: 'Explain: Move Slow Work Out of the Request Path — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 209
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:07-05:00'
sources: []
---

Imagine you’re ordering a pizza at a busy pizzeria (the client). The kitchen (server) can’t start baking the pizza while the cashier is still taking your order— that would waste time and cause a long wait. Instead, the cashier writes down the order on a ticket and hands it to the kitchen staff, who then get right to work on the dough, sauce, and toppings.

In client‑server architecture, “moving slow work out of the request path” means doing exactly this: when a user (client) asks for something, the server quickly acknowledges the request and passes any heavy or time‑consuming tasks—like processing large images or running complex calculations—to another worker process or background job. The original request returns promptly, so the client isn’t left hanging while the slow work finishes. This keeps the system responsive, just like a pizzeria that lets the kitchen focus on cooking instead of paperwork.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
