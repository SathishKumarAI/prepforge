---
qid: ing_8b9f8030ca__aws__local
question: 'Explain: Different Events to update the search index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 439
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:45-05:00'
sources: []
---

**Situation / Task**  
In my last role I was responsible for keeping our product catalog searchable in real‑time while serving 1 M active users daily. The challenge: every time a product changed (price drop, new variant, inventory update) we had to propagate that change to the search index with minimal latency and without over‑loading the indexing pipeline.

**Action – Design & Implementation**  
I defined *three* event types that drive the index:

| Event | Trigger | AWS Service | Rationale |
|-------|---------|-------------|-----------|
| **Create / Update** | DynamoDB Streams + Lambda (dedupe) | **Amazon OpenSearch Service** | Immediate write‑through; low latency (<200 ms). |
| **Delete** | S3 object delete marker + SNS topic | **OpenSearch Bulk API** via Lambda | Batch deletes reduce API calls and cost. |
| **Reindex / Refresh** | Scheduled CloudWatch Event (nightly) | **AWS Glue + OpenSearch** | Rebuild entire shard for data consistency after major migrations or schema changes. |

The lambda functions performed *dive deep* validation: they checked the delta against a cached hash, logged metrics to CloudWatch, and retried with exponential back‑off on transient failures.

**Result**  
- Index latency dropped from 1 s to <200 ms for 95 % of events.  
- Search hit‑rate improved by **18 %**, translating to ~$2 M in incremental revenue per year.  
- Cost savings: bulk deletes cut OpenSearch API calls by 60 %, reducing monthly spend from $12k to $4.8k.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dove deep into stream throttling patterns, quantified impact with A/B tests, and learned that batching even “small” deletes prevented API exhaustion during traffic spikes. This architecture remains scalable as we added 2× product volume while keeping cost per update below $0.0003.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
