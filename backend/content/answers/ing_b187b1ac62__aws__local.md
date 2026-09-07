---
qid: ing_b187b1ac62__aws__local
question: 'Explain: Full-Text Search — Top 6 Elasticsearch Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 557
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build search that delivers instant relevance; *Ownership* – I drove the end‑to‑end migration and tuning.

### Situation  
I led a feature team at an e‑commerce startup to replace a legacy SQL‑based full‑text engine that returned 4 s per query, hurting conversion rates (↓3% sales).

### Task  
Deliver a scalable, low‑latency search layer for product catalog, reviews, FAQs, and support tickets.

### Action  

| Use case | Design | AWS Services |
|----------|--------|--------------|
| **Product discovery** | Elastic indices per category with synonyms & fuzzy queries. | Amazon OpenSearch Service (managed ES) + S3 for backup |
| **Review search** | Time‑series index with daily roll‑ups; use `docvalue_fields` to filter by rating. | OpenSearch + CloudWatch for metrics |
| **FAQ & knowledge base** | Separate lightweight index, pre‑computed embeddings via SageMaker for semantic search. | SageMaker → OpenSearch |
| **Customer support tickets** | Multi‑tenant indices with fine‑grained access control; use `index.routing.allocation.require.zone`. | OpenSearch + IAM |
| **Analytics** | Export hits to Kinesis Data Firehose → Redshift for business dashboards. | Kinesis, Redshift |
| **Ad‑hoc reporting** | Use OpenSearch’s aggregations and Kibana dashboards. | OpenSearch Dashboards |

- **Scalability:** Shard count auto‑scales with traffic; node type `r5.large` for memory‑intensive queries.
- **Availability:** Multi‑AZ deployment, cross‑region replication (1 s sync).
- **Cost trade‑off:** Chose on‑demand instances during peak; switched to reserved after 6 mo → 30% savings.

### Result  
Query latency dropped from 4 s to <200 ms (95th percentile). Search‑driven revenue increased by 12% in Q3. Customer satisfaction score rose 0.8 points (Net Promoter Score). I documented the architecture, mentored juniors on OpenSearch tuning, and shared a post‑mortem that prevented future data drift.

**Bar‑raiser takeaways:** Ownership of the whole pipeline, deep dive into query performance metrics, quantifiable impact, and learning from initial over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
