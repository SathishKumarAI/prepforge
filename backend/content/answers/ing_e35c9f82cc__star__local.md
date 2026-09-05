---
qid: ing_e35c9f82cc__star__local
question: 'Explain: When to Use Eventual Consistency — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 305
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:21-05:00'
sources: []
---

**Situation:**  
At my previous startup, we built a real‑time recommendation engine that served millions of users. The user activity stream was written to a NoSQL store (Cassandra) and later read by the recommendation microservice. Our dashboard showed a 12 % drop in click‑through rate after a major feature rollout.

**Task:**  
I had to identify why the recommendations lagged behind the latest clicks and restore fresh data without compromising availability during peak traffic.

**Action:**  
We examined the consistency model: Cassandra’s default “eventual consistency” meant that writes were propagated asynchronously, causing stale reads. I introduced lightweight transactions (LWT) for critical user actions (e.g., subscription changes) to enforce **strong consistency**, while leaving the bulk click events on eventual consistency. Additionally, we added a “read‑repair” routine that refreshed out‑of‑date replicas during read requests and tuned the replication factor from 3 to 5. Finally, I set up a metrics pipeline in Prometheus to monitor read latency versus data freshness.

**Result:**  
The click‑through rate rebounded to 95 % of its pre‑rollout level within 48 hours. Read latency increased by only 8 %, and we maintained high availability during traffic spikes. I learned that balancing strong consistency for critical updates with eventual consistency for high‑volume streams can optimize both performance and correctness in distributed ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
