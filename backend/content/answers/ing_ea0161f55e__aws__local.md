---
qid: ing_ea0161f55e__aws__local
question: 'Explain: Shard key — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 385
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:23-05:00'
sources: []
---

**Customer Obsession + Dive Deep**

*Situation:* At my previous firm we had a monolithic user‑profile service that hit 3 M RPS during peak hours. The single database table grew to 15 TB, causing 200 ms latency and 99.9% SLA violations.

*Task:* Design a sharding strategy that would bring latency below 50 ms while keeping cost < $5k/month.

*Action:*  
1. **Identify shard key** – we chose `country_code` + `user_id_hash` because read traffic is country‑centric and hashing ensures even distribution.  
2. **Implement horizontal sharding** using Amazon Aurora Serverless v2 (global clusters) with 8 shards, each on a dedicated DB cluster.  
3. Route queries via an API Gateway Lambda layer that maps the key to the correct shard endpoint.  
4. Add DynamoDB as a caching layer for hot users (TTL 5 min).  
5. Monitor with CloudWatch; auto‑scale Aurora based on RPS.

*Result:* Latency dropped from 200 ms to **45 ms** (71% improvement), throughput increased by **3×**, and cost stayed at **$4,800/month**. We also reduced error rate from 0.5% to < 0.01%.

**What a bar‑raiser looks for:**  
- Ownership of the end‑to‑end solution.  
- Deep dive into shard key selection & distribution metrics.  
- Quantified impact (latency, cost).  
- Lessons learned: we later added automated re‑sharding logic to handle hot spots—showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
