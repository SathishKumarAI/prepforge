---
qid: ing_302330211b__aws__local
question: 'Explain: Non-functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 461
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:05-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑powered search revamp for a global e‑commerce catalog, we discovered that our keyword‑only engine could not surface related items (e.g., “wireless earbuds” → “noise‑cancelling headphones”). The business needed *semantic search* to improve conversion by 5–10 %.  

**Action**  
I owned the end‑to‑end solution:  
1. **Data ingestion** – Ingested product metadata and user click logs into an S3 lake; used Glue to ETL into a DynamoDB table for fast lookup.  
2. **Embedding generation** – Deployed a SageMaker endpoint (BERT‑based) to produce 768‑dim embeddings, cached in ElastiCache Redis for sub‑ms latency.  
3. **Vector search layer** – Built an OpenSearch domain with the kNN plugin; indexed vectors alongside text fields. Configured replicas across three AZs for high availability and set burst capacity to auto‑scale during traffic spikes.  
4. **API gateway + Lambda** – Exposed a REST endpoint that normalizes queries, retrieves top‑k embeddings from OpenSearch, and returns ranked results.  

**Result**  
Within two weeks of rollout, semantic search lifted the average cart‑add rate by **7 %** and reduced bounce on product pages by **12 %**, exceeding the 5 % target. The architecture cost $2.3K/month versus the legacy $4.8K, a 52 % savings while maintaining <200 ms latency.

**Learnings**  
- *Ownership*: Took full responsibility for data quality and model drift monitoring.  
- *Dive Deep*: Built custom metrics in CloudWatch to detect embedding relevance decay.  
- *Bar‑raiser focus*: Demonstrated measurable impact, scalability across 50M+ products, and a cost‑efficient trade‑off between real‑time inference vs batch embeddings.

**Leadership Principles** – Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
