---
qid: ing_d65299b01d__aws__local
question: 'Explain: Eventual consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 407
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our code‑review platform from a single‑region PostgreSQL cluster to a multi‑region DynamoDB architecture to support 200k concurrent users worldwide. The biggest risk was maintaining data integrity across regions while keeping latency under 30 ms.

**Action**  
I championed an *eventual consistency* model with **DynamoDB Global Tables** and **AWS DAX** for read amplification.  
- Implemented a conflict‑resolution strategy using Lamport timestamps, ensuring that the latest commit wins.  
- Added a background Lambda that reconciles divergent states every 5 min, guaranteeing eventual convergence within 2 seconds for 99.9% of writes.  
- Introduced CloudWatch metrics and an alerting pipeline; we saw read latency drop from 70 ms to 22 ms post‑migration while write throughput scaled from 1k ops/s to 10k ops/s without cost overruns.

**Result**  
*Customer Obsession*: Users reported a 40% reduction in perceived lag during cross‑region merges.  
*Ownership*: I owned the design, built the proof of concept, and rolled it out across all regions.  
*Deliver Results*: The migration cut infrastructure costs by 18 % and increased global availability from 99.5 % to 99.97 %.  

**Reflection**  
The trade‑off was a brief period of stale reads during failover; we mitigated this with a “read‑your‑writes” session token that temporarily routes writes to the local region, balancing consistency needs against performance. This experience taught me that *eventual consistency* can be engineered for high‑speed, global services when paired with clear conflict rules and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
