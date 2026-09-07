---
qid: ing_72aeb26a1f__aws__local
question: 'Explain: Data & context strategy — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 560
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:50-05:00'
sources: []
---

**Situation** – I led the launch of a semantic‑search engine for a large e‑commerce client that had ~1 M SKUs and 10 TB of product data. The goal was to reduce search friction by 30 % and increase conversion from organic queries by 15 %.  

**Task** – Build a data & context strategy that turns raw product attributes, customer reviews, and support tickets into a unified semantic index while ensuring low latency (<200 ms) at scale.

**Action** –  
1. **Data ingestion**: Used **AWS Glue** to crawl relational catalogs (RDS), S3 documents, and streaming logs (Kinesis). Schema‑agnostic ETL created a *searchable* table in **DynamoDB** with versioning for audit.  
2. **Context enrichment**: Deployed **SageMaker Endpoint** (Transformer model fine‑tuned on BERT) to generate embeddings per SKU, then stored them in **OpenSearch** as dense vectors. A Lambda layer updated embeddings every 24 h from the Glue job output.  
3. **Semantic ranking**: Leveraged OpenSearch’s *kNN* plugin and a custom scoring script that blended TF‑IDF with embedding similarity (weight 0.6/0.4). Added a *context filter* that surfaced recent customer reviews using a secondary index on review timestamp.  
4. **Scalability & cost**: Sharded OpenSearch into 3 data nodes, autoscaled via CloudWatch alarms; estimated $1.2 k/month vs. $4.5 k for legacy Elastic Stack.  

**Result** – Within two months post‑launch, search latency dropped from 650 ms to 180 ms, organic conversion rose by **17 %**, and the search‑related churn fell by **22 %** (measured via A/B test). The system now supports >50k concurrent queries with 99.9 % availability.

---

### Leadership Principles  
- **Customer Obsession** – focused on real user metrics (conversion, churn) to validate the strategy.  
- **Dive Deep** – engineered a full data pipeline, quantified trade‑offs, and tuned OpenSearch scoring for measurable impact.

**Bar‑raiser notes** – Looked for ownership of every layer, deep understanding of AWS services, concrete ROI numbers, and evidence that failures (e.g., initial embedding noise) were turned into lessons (refining the fine‑tuning data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
