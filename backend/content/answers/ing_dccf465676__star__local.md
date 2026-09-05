---
qid: ing_dccf465676__star__local
question: 'Explain: CA (Consistency and Availability) — The CAP Theorem in DBMS -
  GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 332
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:37-05:00'
sources: []
---

**Situation:**  
At my last role, we were migrating a real‑time inventory system from a single‑node MySQL database to a distributed NoSQL cluster (Cassandra) to support our mobile app’s 10 k concurrent users during flash sales.

**Task:**  
I had to design the data model and replication strategy so that customers could always see accurate stock levels (consistency) while also ensuring the service remained responsive under peak traffic (availability).

**Action:**  
I first mapped out the critical “read‑after‑write” requirement for the mobile UI. Using Cassandra’s tunable consistency, I set QUORUM reads and writes on a 3‑node cluster to guarantee that any read would see the most recent write. To avoid latency spikes when one node was overloaded, I enabled read repair and hinted handoff so that eventual consistency could recover quickly without blocking users. I also added a lightweight transaction (LWT) for high‑value items to enforce strict serializability on those writes.

**Result:**  
During our first flash sale, we maintained < 50 ms latency for 99.9 % of requests while never showing stale inventory data. Post‑sale analytics showed a 30 % reduction in cart abandonment compared to the old system. I learned that balancing CAP trade‑offs often means accepting controlled staleness on non‑critical paths and using application‑level checks for critical operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
