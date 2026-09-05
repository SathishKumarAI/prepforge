---
qid: ing_666924ba38__star__local
question: 'Explain: Partition Tolerance — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 329
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:38-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine that read from a sharded PostgreSQL cluster and served millions of requests per day. During a network outage one shard became unreachable, yet the traffic kept pouring in.

**Task:**  
I had to keep the service available for end users while ensuring data consistency across replicas, all under strict SLAs (99.9% uptime).

**Action:**  
First, I enabled PostgreSQL’s built‑in streaming replication and switched the cluster to “read‑only” mode on the affected shard. Then I used a lightweight cache layer (Redis) with a “write‑through” policy so that any new writes were stored locally until the network healed. To handle eventual consistency, I implemented a conflict‑resolution strategy: each record carried a version vector, and when the partition recovered, my script compared vectors and merged changes using last‑write‑wins with an audit log for manual review. Finally, I updated our monitoring stack (Prometheus + Grafana) to alert on partition events so we could react faster.

**Result:**  
The outage lasted only 18 minutes, during which the system remained 100% available and user churn dropped from a projected 12% to under 1%. The consistency lag was capped at 2 seconds, meeting our business requirement. I learned that in CAP terms, prioritizing **partition tolerance** with a controlled trade‑off between consistency and availability can keep critical services running during network failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
