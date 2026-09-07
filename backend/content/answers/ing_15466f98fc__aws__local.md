---
qid: ing_15466f98fc__aws__local
question: 'Explain: Capacity Planning — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 513
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:15-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup that wanted to launch an online trading platform with a real‑time leaderboard showing top traders by daily profit. The system had to support 50 k concurrent users, update every 3 s, and guarantee 99.9 % availability while keeping cost under $5k/month.

**Action (Design & AWS stack)**  
* **Data ingestion** – Use **Amazon Kinesis Data Streams** to capture trade events in real time; each record contains user_id, profit_change, timestamp.  
* **Processing** – A Lambda function (10 ms per batch) aggregates profits per user over the last 24 h and writes a sorted list to **DynamoDB Global Secondary Index** (`profit_last_24h`). DynamoDB’s provisioned capacity is auto‑scaled based on traffic spikes.  
* **Leaderboard retrieval** – Clients query an API Gateway endpoint backed by another Lambda that scans the GSI in descending order, paginates results, and caches the top 100 entries in **ElastiCache for Redis** (cluster mode). This reduces read latency to <5 ms and offloads DynamoDB reads.  
* **Scalability & Availability** – All services are deployed in two AZs with cross‑region read replicas for DynamoDB; Lambda functions run in a VPC with private subnets, ensuring 99.9% availability.  
* **Cost control** – Kinesis shard count is tuned to 4 (≈$0.015 per hour), Lambda bursts use on-demand pricing, and DynamoDB’s auto‑scale keeps write capacity at ~200 WCU, staying within the budget.

**Result**  
The leaderboard updated every 3 s with <10 ms read latency for the top 100 users; load tests hit 60 k concurrent queries without errors. Monthly spend stayed at $4.2k.  

**Reflection & Learning**  
I owned the end‑to‑end flow, diving deep into cold‑start mitigation and cache invalidation strategies. When initial Lambda memory was set too low, we saw throttling; after increasing to 1 GB and enabling provisioned concurrency for hot functions, throughput doubled. This reinforced that *ownership* + *dive deep* are key to delivering reliable, cost‑effective ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
