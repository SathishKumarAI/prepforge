---
qid: ing_15521f6ccf__eli5__local
question: 'Explain: There''s going to be some hardware limit — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 240
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:05-05:00'
sources: []
---

Think of a library that stores all the books your machine‑learning models need to learn from.

**Vertical scaling (scale up)** is like buying a bigger, faster computer desk: you give the same librarian more space and a stronger laptop so she can handle more books at once. It’s simple—just upgrade one server—but there’s a ceiling; eventually the desk can’t get any larger.

**Horizontal scaling (scale out)** is adding another librarian with her own desk. Each librarian works on a portion of the books, and they share the workload through a system that lets them talk to each other. You keep adding desks until you have enough to finish all the reading quickly. This method can grow almost indefinitely, but it requires coordination among many workers.

In ML system design, vertical scaling means beefing up a single machine’s CPU, GPU, or memory; horizontal scaling means running many machines in parallel and distributing data or computation across them. Both help overcome hardware limits, but horizontal scaling offers far greater flexibility for very large models or datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
