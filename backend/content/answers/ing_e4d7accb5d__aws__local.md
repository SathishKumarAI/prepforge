---
qid: ing_e4d7accb5d__aws__local
question: 'Explain: Hash-Based Partitioning — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:33-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of our URL‑shortener service for a media platform that served > 50 M unique URLs per day. The monolithic hash‑based partitioning scheme caused hot‑spot contention on one shard and unpredictable latency spikes.

**Task (T)**  
My goal was to create a scalable, fault‑tolerant architecture that maintained sub‑200 ms response times while keeping operational cost < $5K/month.

**Action (A)**  
1. **Dive Deep into metrics** – profiled CPU & DB hot‑spots; discovered 80 % of writes hit a single partition.  
2. **Design change** – switched to *consistent hashing* with virtual nodes, using Amazon DynamoDB as the key store and Elasticache Redis for reverse‑lookup caching.  
3. **AWS services** –  
   - **DynamoDB** (Provisioned capacity 10 k RCU/WCU) for write‑heavy ingestion; auto‑scales with CloudWatch alarms.  
   - **Elasticache Redis Cluster** (Cluster mode enabled) to cache the most popular URLs, reducing DB reads by 60 %.  
   - **Lambda + API Gateway** for stateless request routing, ensuring high availability and zero‑downtime deployments.  
4. **Cost & trade‑offs** – eliminated a single expensive EC2 instance; paid ~$3K/month for DynamoDB + $1.5K for Redis. Latency dropped from 350 ms to 180 ms on average.

**Result (R)**  
- Achieved **99.9 % SLA** with 95 % of requests < 150 ms.  
- Cut operational cost by **35 %** while handling a 4× traffic increase without additional engineering effort.  

*Leadership Principles*: **Customer Obsession** – delivering fast, reliable links; **Ownership** – taking full responsibility for performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
