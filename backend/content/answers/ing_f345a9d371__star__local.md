---
qid: ing_f345a9d371__star__local
question: 'Explain: Eventual Consistency — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 320
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:30-05:00'
sources: []
---

**Situation:**  
At my last role, we migrated a global e‑commerce catalog from a single‑region SQL database to a distributed NoSQL store (Cassandra) to support 50+ million daily users and real‑time inventory updates across 10 data centers.

**Task:**  
I had to ensure that product prices and stock levels were reflected accurately on the website while keeping latency under 100 ms for every request, even during peak traffic spikes.

**Action:**  
We designed a dual‑write strategy: writes went first to Cassandra (eventual consistency) for speed, then asynchronously replicated to an RDBMS with strong consistency for audit trails. I implemented lightweight transactions (LWT) on critical “price change” updates where ACID guarantees were required, and used read‑repair mechanisms for inventory checks. For user-facing reads, we employed a quorum of replicas (N=3, W=2) to strike the balance between availability and consistency, leveraging Cassandra’s tunable consistency model.

**Result:**  
The system achieved 99.9 % request latency below 80 ms, while consistency violations dropped from 0.5 % in the legacy system to <0.01 %. We reduced database costs by 30 % and improved developer productivity by eliminating complex locking logic. I learned that strong consistency is essential for a few key operations, but eventual consistency, when combined with targeted reconciliation, delivers scalability without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
