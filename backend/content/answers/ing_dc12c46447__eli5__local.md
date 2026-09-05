---
qid: ing_dc12c46447__eli5__local
question: 'Explain: CP (Consistency and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 223
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:34-05:00'
sources: []
---

Think of a library that can be in two rooms connected by a hallway.  
**Consistency** means every reader sees the same book list at any moment—no one gets an old copy while another sees a new one.  
**Partition tolerance** is the ability to keep the library running even if the hallway breaks, so the two rooms stay “connected” through other routes (like a phone call).  

When a storm cuts the hallway (**partition**) and you still want every visitor to get the same book list (**consistency**), the system must sacrifice something else—perhaps it can’t answer a request from one room until the hallway is fixed. That trade‑off is what CP stands for: **C**onsistency + **P**artition tolerance, but at the cost of immediate availability when a split happens. It’s like choosing to keep all books in sync even if some people have to wait while you repair the corridor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
