---
qid: ing_64008e5793__star__local
question: 'Explain: Active-active — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 362
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a global recommendation engine that needed to serve millions of requests per second with zero downtime. The existing single‑region deployment was hitting 99.8 % availability and the SLA demanded 99.999 %.  

**Task:**  
Design an active‑active architecture so traffic could be split across two data centers, each fully synchronized, while keeping latency under 50 ms and ensuring eventual consistency for user preferences.

**Action:**  
I started by mapping out the read/write patterns: writes were mostly small preference updates, reads were large catalog queries. I chose a dual‑region PostgreSQL cluster with logical replication, but to avoid write conflicts I introduced *optimistic concurrency control* via vector clocks stored in a Redis cache per user. For request routing I used AWS Global Accelerator combined with an edge‑based GeoDNS that weighted traffic 60/40 between regions, adjusting weights in real time based on latency probes. To handle the “split brain” scenario, I implemented a consensus layer using Raft over etcd; each region elected a leader for writes and promoted a follower if the leader failed. Finally, I wrote integration tests that simulated a regional outage and verified that traffic was automatically redirected without any data loss.

**Result:**  
The new active‑active system achieved 99.999 % availability during our two‑month pilot, reduced average query latency from 68 ms to 42 ms, and increased user engagement by 12 %. I learned that combining logical replication with a lightweight consensus layer can give you the best of both worlds—low latency and strong consistency—without overengineering the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
