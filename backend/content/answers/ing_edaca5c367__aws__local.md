---
qid: ing_edaca5c367__aws__local
question: 'Explain: Sliding Window — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 432
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:37-05:00'
sources: []
---

**Situation & Task (Amazon‑style)**  
While leading a data‑science team for an e‑commerce recommendation engine, we had to surface the top 10 trending items in real time. The stream arrived at ~50k events/s and needed low latency (<200 ms). I owned the solution design.

**Action – Sliding Window Engine**  

| Step | Design Decision | AWS Services |
|------|-----------------|--------------|
| 1️⃣ **Ingest** | Kinesis Data Streams (shard‑level scaling) | • High throughput, auto‑rebalancing. |
| 2️⃣ **Windowing** | Stateless Lambda that keys by `item_id`, stores counts in DynamoDB TTL tables with a *window* key (`partitionKey=item_id#timestamp_window`). Every 1 s the Lambda triggers a “cleanup” job to delete expired windows. | • Serverless, pay‑per‑execution; DynamoDB provides sub‑ms reads/writes and automatic scaling. |
| 3️⃣ **Aggregation** | Kinesis Data Analytics (SQL) continuously scans the TTL table for top 10 per window. | • SQL‑based streaming, zero‑code deployment. |
| 4️⃣ **Serving** | Results pushed to API Gateway + CloudFront CDN; cached in Redis (ElastiCache). | • Global low‑latency cache, cost‑effective scaling. |

**Result**  
- Reduced trend‑query latency from 1.2 s to **<200 ms**.  
- Saved ~30% on compute by eliminating a stateful Spark cluster.  
- Achieved 99.9 % availability via multi‑AZ Kinesis & DynamoDB.

**Reflection (Bar‑raiser focus)**  
I *dive deep* into TTL semantics, benchmarked Lambda cold‑start vs. container, and iterated to remove the cleanup step when DynamoDB auto‑expire proved sufficient—showing bias for action and learning from trial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
