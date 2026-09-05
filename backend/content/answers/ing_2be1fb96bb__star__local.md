---
qid: ing_2be1fb96bb__star__local
question: 'Explain: Relational vs. Non-Relational Databases — 11 System Design Concepts
  Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 428
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:42-05:00'
sources: []
---

**Situation**  
I was leading the architecture sprint for a new e‑commerce platform that had to support both product catalog queries (highly structured, ACID‑compliant) and real‑time user activity streams (massive write throughput). The stakeholders were unsure whether to stick with a single relational database or introduce a NoSQL store.

**Task**  
My goal was to clarify the trade‑offs between relational and non‑relational databases—covering schema design, consistency models, scaling strategies, query patterns, and operational costs—so the team could make an informed decision on a hybrid architecture.

**Action**  
I organized a 45‑minute workshop where I first mapped out the data model: product attributes, inventory levels, and orders fit naturally into tables with foreign keys. I highlighted how joins, ACID guarantees, and normalisation help maintain data integrity for transactional workloads. Then I contrasted this with a document store (MongoDB) for user session logs and clickstreams, showing its schema‑less flexibility, horizontal sharding, and eventual consistency model that supports high write rates. I used real metrics from our load tests—100 k writes/second on the NoSQL side versus 10 k transactions per second on PostgreSQL—to illustrate scalability gaps. Finally, I presented a hybrid diagram where read‑heavy analytics run against a materialised view in Redshift, while real‑time alerts tap into Kafka and Redis.

**Result**  
The team adopted a dual‑store strategy: PostgreSQL for core e‑commerce data and MongoDB for event streams. This reduced latency by 35 % on user activity queries and lowered operational costs by 20 % through better resource utilisation. I also wrote a concise design document that became the reference guide for future database decisions, reinforcing my reputation as a pragmatic systems thinker.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
