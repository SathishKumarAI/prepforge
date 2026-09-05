---
qid: ing_e41c871c24__eli5__local
question: 'Explain: After-Sales Support — What is TPS, what is QPS, and what is the
  difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 235
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:43-05:00'
sources: []
---

Think of a customer‑support call center that answers questions about a product.  
* **TPS – Transactions Per Second** is the number of complete support “sessions” the system can finish in one second. A session might involve checking an order, updating a status, and sending a confirmation—one full task from start to finish.  

* **QPS – Queries Per Second** counts how many individual questions the system can process each second, regardless of whether they lead to a finished session. One query could be “What’s my shipping date?” or “How do I return an item?” Many queries may belong to the same transaction, but some transactions might not need any query at all (e.g., automatic status updates).

**Difference:** TPS measures finished jobs; QPS counts raw questions asked. A high QPS can still yield a low TPS if many queries are idle or redundant, while a high TPS indicates efficient completion of support tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
