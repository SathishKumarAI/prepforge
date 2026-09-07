---
qid: ing_66e2137a87__aws__local
question: 'Explain: DB Shards - Recommendations — Shardsrecommendations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 522
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:34-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature to surface personalized product recommendations to millions of users. Our monolithic PostgreSQL table “shardsrecommendations” grew beyond 30 TB, causing >5 s query times and frequent hot‑spot contention. The business needed sub‑200 ms latency for the next‑10‑products API with 99.9% availability.

**Action – Technical Design**  
1. **Sharding Strategy** – Partition by `user_id` hash into 256 Aurora Serverless clusters (PostgreSQL). Each cluster holds ~120 GB, enabling parallel reads and automatic scaling.  
2. **Caching Layer** – Use ElastiCache‑Redis per shard for the most recent 10k recommendations; TTL=12h to keep freshness.  
3. **Data Pipeline** – Lambda + Step Functions stream recommendation updates from S3 (model outputs) into DynamoDB “RecUpdates” (write‑through), then batch‑upsert into Aurora via Data API.  
4. **Observability** – CloudWatch metrics + X-Ray traces per shard; auto‑scale based on read latency thresholds.

**Result**  
- Query latency dropped from 5 s to <200 ms (95th percentile).  
- Throughput increased from 1,200 RPS to 18,000 RPS with 0.3% error rate.  
- Cost decreased by 28% after moving hot shards to Aurora Serverless vs. provisioned instances.

**Reflection & Learning**  
I owned the migration end‑to‑end, drove cross‑team buy‑in, and iterated on shard boundaries based on real load patterns—demonstrating *Ownership* and *Dive Deep*. The biggest failure was underestimating cache invalidation latency; we added a TTL fallback to DynamoDB, turning a potential outage into an opportunity to refine our retry logic.  

**Bar‑raiser signals**  
- Quantified impact (latency, RPS, cost).  
- Deep dive into shard sizing and trade‑offs (Aurora vs. DynamoDB).  
- Ownership of end‑to‑end delivery and learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
