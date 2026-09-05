---
qid: ing_b65fd9258e__eli5__local
question: 'Explain: Request Flow — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 247
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:33-05:00'
sources: []
---

Imagine you’re ordering a coffee at a busy café that also runs a smart machine‑learning recommendation engine. You press the “Order” button once, but if your network hiccups and the server doesn’t see the click, it might think you pressed it again when the signal finally arrives. The result? Two coffees for one order—wasteful and confusing.

**Idempotency** is like giving each order a unique ticket number (the “idempotency key”). No matter how many times that ticket’s request reaches the server, the café treats it as the same single order: it either prepares the coffee once or tells you “already ordered.” In system design, we attach this key to every client request. The server checks its log; if the key is new, it processes and stores the result; if it’s seen before, it simply returns the stored answer instead of re‑executing the expensive machine‑learning inference.

Thus, idempotency guarantees *exactly one* outcome for a given request—even when retries happen—keeping resources efficient and users happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
