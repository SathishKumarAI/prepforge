---
qid: ing_12dbe2c946__aws__local
question: 'Explain: Serving Search Results — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 457
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:05-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our product‑search service that powered 12 M daily active users. The old monolith returned ~3 s per query and had a 0.8 % error rate, hurting conversion by 2 %. My goal: reduce latency to <200 ms, drop errors below 0.05 %, and scale to 30 M concurrent requests without breaking the budget.

**Action**  
1. **Architecture** – Split into *indexing* (Amazon OpenSearch Service) and *serving* layers.  
   * Index: daily ingest jobs via Amazon Kinesis Data Streams → Lambda → OpenSearch, with fine‑tuned shard allocation for hot data.  
   * Serving: Stateless API Gateway + AWS Fargate containers running a lightweight Java microservice that queries OpenSearch using the low‑latency REST API and applies real‑time ranking (TF‑IDF + user click‑through).  

2. **Caching** – Integrated Amazon ElastiCache for Redis to cache top 10k hot queries, cutting downstream hits by ~70 %.  

3. **Observability** – CloudWatch metrics & X-Ray tracing; automated scaling rules triggered on percentile latency thresholds.  

4. **Cost Control** – Adopted Spot Fargate and reserved OpenSearch nodes, reducing ops spend from $15K to $8K/month.

**Result**  
- Latency dropped from 3 s → 180 ms (average) and 95th‑percentile <250 ms.  
- Error rate fell from 0.8 % → 0.02 %.  
- Conversion lift of 3.5 % translated to $1.2M incremental revenue per quarter.  

**Learnings & Ownership**  
I owned the end‑to‑end flow, dove deep into query patterns (bias for action), and iterated on ranking logic after A/B testing failures—demonstrating continuous improvement and customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
