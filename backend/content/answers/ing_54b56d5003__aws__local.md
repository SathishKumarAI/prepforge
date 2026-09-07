---
qid: ing_54b56d5003__aws__local
question: 'Explain: Caching Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 500
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:49-05:00'
sources: []
---

**Situation / Task**  
While leading the **AI‑Inference Service** at a fintech startup, we hit a 30 % latency spike during peak trading hours (4–6 pm). Users were complaining about “slow predictions,” threatening churn.

**Action**  
I owned the problem and formed a cross‑functional squad. We first *dive deep* into CloudWatch traces, discovering that model inference (`/predict`) was hitting EFS storage 60 % of the time, causing 100 ms I/O delays.  

1. **Cache on‑device** – deployed an in‑memory LRU cache (Redis‑compatible) inside each Lambda container using **Amazon ElastiCache for Redis** (cluster mode).  
2. **Edge caching** – added a **CloudFront** distribution with a 24‑hour TTL to serve static model weights and feature vectors, reducing EFS reads by 70 %.  
3. **Cache invalidation policy** – used SNS topic “ModelUpdated” to trigger `CACHE_CLEAR` events; Lambda functions subscribed via SQS processed the message and flushed stale keys.

We added automated *canary* deployments with **AWS CodeDeploy**, ensuring zero‑downtime rollouts. All changes were rolled out in a single day, within our sprint goal.

**Result**  
Latency dropped from 350 ms to 95 ms (–73 %) during peak windows; error rate fell by 85 %. Our A/B test showed a **12 % lift in user retention** over the next quarter. Cost increased by only 4 % due to Redis nodes, but overall savings from reduced EFS I/O and higher throughput more than offset this.

**Learning & Bar‑raiser notes**  
- Demonstrated *Ownership* by taking end‑to‑end responsibility for latency.  
- Applied *Dive Deep* to pinpoint the root cause (EFS vs. compute).  
- Quantified impact with clear metrics (latency, error rate, retention).  
- Learned that caching is most effective when combined with a robust invalidation strategy; future iterations will explore DynamoDB TTLs for automatic eviction.

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **AWS Services:** ElastiCache, CloudFront, Lambda, SNS, SQS, CodeDeploy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
