---
qid: ing_7b93d62ca0__aws__local
question: 'Explain: Cross-Shard Queries — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:55-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built a global recommendation engine for a video‑streaming platform. Our data was horizontally partitioned across 12 DynamoDB shards (region = customer ID prefix) to keep write throughput high. When we introduced “cross‑shard” analytics—e.g., “top 10 titles watched by users in every shard over the last week”—the naive approach of scanning each table cost us >$5K/month and added 8 s latency.

**Action**  
I designed a **decentralized aggregation pipeline**:  

1. **Materialized Views** – Each shard writes daily aggregates (views, likes) to an Aurora Serverless cluster using the `partition key` as a foreign key.  
2. **Cross‑Shard Query Layer** – A Lambda authorizer triggers an Athena query on S3‑exported CSVs from all shards (`UNION ALL`).  
3. **Cost & Scaling** – Athena charges $5/TB scanned; our 10 GB daily export kept cost <$20/day. Serverless Aurora auto‑scales to 2–4 ACUs, keeping CPU <70% and latency <200 ms.

I also added a **retry policy with exponential backoff** and a **metrics dashboard (CloudWatch + QuickSight)** to surface failures within 30 s, ensuring ownership of the pipeline.

**Result**  
Cross‑shard query latency dropped from 8 s to 0.35 s (≈95% reduction). Monthly cost fell from $5K to <$1K, saving ~80%. The solution was adopted by two other services, proving its scalability and reusability.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster insights improved recommendation quality (+12% engagement).  
- **Ownership & Dive Deep** – I own the full data path, debugged failures, and quantified impact.  

*Bar‑raiser note:* Look for ownership of the end‑to‑end system, depth in trade‑offs (cost vs latency), and learning from a failed monolithic query approach.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
