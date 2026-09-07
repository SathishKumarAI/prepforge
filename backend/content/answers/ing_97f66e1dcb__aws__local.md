---
qid: ing_97f66e1dcb__aws__local
question: 'Explain: Redis Replication - Leader-follower technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 413
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:18-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science platform for a fintech client, we hit a 30 % latency spike in real‑time fraud detection because the Redis cache that served feature vectors was single‑point‑of‑failure and couldn’t scale with traffic spikes during market openings.

**Task (T)**  
Design a fault‑tolerant, low‑latency caching layer that keeps data consistent across regions while staying under our $2 k/month budget.

**Action (A)**  
I proposed **Redis Leader‑Follower replication**: one Redis instance (Leader) accepts writes; several Followers replicate asynchronously.  
* **AWS services** – Amazon ElastiCache for Redis with Multi-AZ enabled, CloudWatch for metrics, and Lambda to promote a failed follower to leader in <30 s.  
* **Scalability** – added read‑only replicas per region (max 5) to handle peak loads; each replica receives ~10 % of writes via the Leader’s Pub/Sub.  
* **Availability** – automatic failover and health checks keep SLA >99.9%.  
* **Cost** – using T4g.large nodes keeps us < $1,800/month while meeting throughput (>200k ops/s).  

**Result (R)**  
Latency dropped from 120 ms to 25 ms (80 % reduction), cache hit ratio improved to 98%, and we avoided a $50 k penalty for SLA breach. The architecture is now used across all product lines, saving ~10 % in infrastructure spend annually.

**Leadership Principles** – *Customer Obsession* (ensuring uninterrupted fraud checks) & *Ownership* (owning the end‑to‑end solution). I learned that even a simple replication pattern can deliver huge impact when coupled with automated failover and metrics‑driven tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
