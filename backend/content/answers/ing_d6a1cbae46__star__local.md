---
qid: ing_d6a1cbae46__star__local
question: 'Explain: Consistency, Availability & Partition Tolerance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 307
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:59-05:00'
sources: []
---

**Situation**  
I was leading a team that built a real‑time recommendation engine for an e‑commerce platform. The system needed to process millions of user events per day across three geographic regions, so we deployed a sharded Cassandra cluster with read replicas in each region.

**Task**  
We had to guarantee that customers always saw up-to-date recommendations (consistency), could access the service from any region at any time (availability), and the system kept working even if a data center went offline (partition tolerance).

**Action**  
I applied the CAP theorem by choosing *AP* as our priority. We set Cassandra’s consistency level to ONE for writes and QUORUM for reads, allowing fast local writes while still ensuring that at least two replicas agreed on each read. To handle partitions, we implemented a background repair job that reconciled divergent replicas once connectivity was restored. For eventual consistency, we added a lightweight transaction layer that flagged stale recommendations and refreshed them in the next request cycle.

**Result**  
The service achieved 99.9% uptime during a regional outage, with recommendation latency dropping from 350 ms to under 200 ms after tuning. User engagement rose 12% over three months, proving that prioritizing availability and partition tolerance, while accepting controlled eventual consistency, delivered the best balance for our AI‑driven recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
