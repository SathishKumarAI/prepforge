---
qid: ing_8273469f6d__aws__local
question: Ready to power your search with AI? — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 530
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:01-05:00'
sources: []
---

**Situation** – I was leading a migration from a legacy relational store to an open‑source search platform for a fintech product that handles ~3 M daily transactions. The goal: give users instant, AI‑enhanced search over audit logs while keeping cost <30 % of the current spend.

**Task** – Build a “search‑as‑a‑service” layer that leverages Elasticsearch/OpenSearch with minimal data duplication, supports real‑time relevance via LLM embeddings, and guarantees 99.9 % availability in a multi‑AZ VPC.

**Action**  
1. **Architecture** – Use *Amazon OpenSearch Service* (managed) for index storage; feed raw logs into an *S3 lake* with nightly *Glue ETL* that extracts fields + runs a *Bedrock* inference job to generate vector embeddings.  
2. **Index design** – One index per log type, shard‑count = 4× EC2‑M6i instances (high‑IO). Enable *Cross‑Cluster Replication* for disaster recovery.  
3. **Search API** – Fronted by an *API Gateway* + *Lambda@Edge* to inject the embedding vector and perform a hybrid query: keyword filter + cosine similarity score.  
4. **Cost control** – Spot instances for nightly ETL, reserved capacity for steady traffic; use *S3 Intelligent‑Tiering* for archived logs.  
5. **Monitoring** – CloudWatch metrics (latency 200 ms avg), anomaly detection on query volume; set up a *Step Functions* pipeline to auto‑scale OpenSearch nodes during spikes.

**Result** – Deployed in 6 weeks, cut search latency from 1.2 s to <250 ms (90th percentile). User satisfaction ↑ 35 % (NPS), cost ↓ 28 %. The solution is fully “serverless” for the ingestion pipeline and scales linearly with query load.

---

**Leadership Principles Highlighted**

- **Customer Obsession** – Built a low‑latency, AI‑powered search that directly improved user experience.  
- **Ownership / Dive Deep** – Owns end‑to‑end data flow, from raw logs to embeddings; deep dive into OpenSearch tuning and Bedrock cost trade‑offs.

*Bar‑raiser takeaways*: Look for measurable impact, a clear ownership loop, and evidence of learning from the first run (e.g., shifting to spot instances after initial on‑demand costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
