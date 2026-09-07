---
qid: ing_583a6dd788__aws__local
question: 'Explain: Type of Data Store — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 569
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:02-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a fintech startup, we had to expose real‑time click‑through rates (CTR) for millions of users across 10 regions. The requirement was a *distributed counter* that could ingest ~50 k events/s, provide sub‑second reads, and survive any single AZ failure.

**Action – Design & AWS Services**  
1. **Event ingestion** – I wired the front‑end to send counters via **Amazon Kinesis Data Streams** (shard capacity 5 M records/hr).  
2. **Processing & aggregation** – A fleet of **Lambda functions** (concurrency limit 10 k) read from Kinesis, update per‑user counters in a **Redis‑cluster on Amazon ElastiCache** for ultra‑fast reads/writes.  
3. **Durability** – Every minute the Lambda snapshot the current hash into an **Amazon DynamoDB table** (`CTR_UserStats`) using `UpdateItem` with optimistic locking (version attribute). DynamoDB’s global tables give cross‑region replication in ~200 ms.  
4. **Read API** – Front‑end queries a **Lambda@Edge** function that first checks ElastiCache; on miss it falls back to DynamoDB, guaranteeing <10 ms latency for 99.9% of requests.  
5. **Scalability & Cost** – Kinesis auto‑scales shards; Lambda scales by concurrency and costs ~$0.0000167 per GB‑s. ElastiCache cost is amortized across hot keys; DynamoDB’s provisioned throughput was set to 1 M RCU/WCU, costing ~\$200/month for our load.

**Result**  
- Latency: 8 ms average read, 99.9th percentile <12 ms.  
- Throughput: 60 k events/s sustained, 100% availability during a planned AZ outage (no data loss).  
- Cost: $3,200/month total, 30% lower than the legacy MySQL‑based counter system.

**Reflection & Learning**  
I owned the end‑to‑end pipeline and performed a *dive deep* analysis of hot‑spot patterns, discovering that only 12 % of users accounted for 85 % of events. I moved those into a dedicated Redis shard, saving ~15% in cache memory costs. The bar‑raiser would note my clear ownership, quantitative impact, and iterative learning from traffic spikes.

**Leadership Principles Highlighted**  
- **Ownership** – I drove the design from ingestion to persistence.  
- **Dive Deep** – Analyzed traffic distribution to optimize resource allocation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
