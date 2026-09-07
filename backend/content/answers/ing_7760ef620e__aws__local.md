---
qid: ing_7760ef620e__aws__local
question: 'Explain: Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 400
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:08-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role I led a recommendation engine that served 4 M daily users. The monolithic model database hit latency spikes during peak “black‑friday” traffic; we risked losing $2 M in revenue per hour if the service timed out.

**Action (Ownership & Dive Deep)**  
I designed a *sharding* strategy: split user embeddings by hashed customer ID into 32 shards, each on an **Amazon DynamoDB Global Secondary Index**. I added a lightweight **Redis cache** (ElastiCache) for hot shard look‑ups and enabled **DynamoDB Auto Scaling** to handle burst traffic. For model inference, I moved to **AWS SageMaker endpoints** behind a **Application Load Balancer** with *sticky sessions* per shard.

- **Scalability:** 32 shards + auto‑scaling → 10× throughput with <1 ms latency.  
- **Availability:** Multi‑AZ DynamoDB + cross‑region read replicas; 99.99% SLA.  
- **Cost:** Reduced EC2 usage by 70%, cut DynamoDB writes from 200 k/s to ~6 k/s per shard → $12K/month savings.

**Result (Deliver Results)**  
Post‑migration, peak latency dropped from 650 ms to 45 ms; request failures fell from 8% to <0.1%. Revenue during high‑traffic windows increased by **15%**, translating to ~$3 M additional annual revenue.  

**Learning & Bar‑Raiser Takeaway**  
I documented shard key design, monitored edge cases (hash collisions), and iterated on cache eviction policies—showing deep ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
