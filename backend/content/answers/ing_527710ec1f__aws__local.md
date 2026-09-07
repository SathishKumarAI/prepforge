---
qid: ing_527710ec1f__aws__local
question: 'Explain: Use case: User searches keywords — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 478
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:37-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the design of an internal code‑search service that powers “search by keyword” for thousands of open‑source repositories (e.g., *system-design-primer*). The goal was to return relevant files within 200 ms while keeping costs under $0.02 per query.

**Approach & Design**  
1. **Ingest pipeline** – Use AWS Lambda + Amazon S3 to pull repo snapshots, parse with a lightweight Go parser, and emit a stream of `(repo_id, file_path, token)` into an Amazon Kinesis Data Stream.  
2. **Indexing layer** – A fleet of EC2 Spot instances run Elasticsearch on EBS‑optimized volumes. Each shard holds tokens for ~10 k repos; we rotate shards every 30 days to keep hot data in memory.  
3. **Query layer** – API Gateway + Lambda fronts a REST endpoint that queries Elasticsearch with a `bool` query (`must: term(token)`). Results are paginated and cached in Amazon CloudFront (TTL = 5 min).  
4. **Metrics & observability** – CloudWatch dashboards track latency, error rate, and S3 read/write costs; an automated Lambda reconciles shard usage to spot‑instance capacity.

**Result**  
- Latency dropped from 1.2 s (full‑text grep) to 180 ms average.  
- Query cost < $0.015 per search, under the $0.02 target.  
- Search accuracy improved by 27% as measured by click‑through rate on the internal portal.

**Reflection & Ownership**  
I owned the end‑to‑end flow and ran a post‑mortem after an outage that exposed shard rebalancing delays; we added an automated Canary to detect hot shards early. The design remains fully scalable: adding 10 % more repos just scales out one more Elasticsearch instance, keeping latency constant.

> *Leadership Principles:* **Ownership** – I drove the project from conception through production and continuous improvement. **Dive Deep** – I examined token distribution, shard size, and cost trade‑offs to arrive at a data‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
