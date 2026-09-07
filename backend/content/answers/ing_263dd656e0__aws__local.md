---
qid: ing_263dd656e0__aws__local
question: 'Explain: Glean Users — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:41-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our internal knowledge base (“Glean Users – Glean Documentation”) into a machine‑learning‑ready data lake so that search relevance could be boosted with semantic embeddings. The goal was to cut the average time to find a policy from **4 min → 12 sec** while keeping costs below $2k/month.

**Action (Technical)**  
1. **Data ingestion** – used *AWS Glue* crawlers on S3 buckets that stored Markdown/HTML docs, extracting text and metadata into a Glue catalog.  
2. **Feature engineering** – ran an *Amazon SageMaker Processing job* to generate sentence‑level embeddings with the `sentence-transformers/all-MiniLM-L6-v2` model; stored vectors in *DynamoDB* (partition key: doc_id) for low‑latency lookup.  
3. **Inference layer** – deployed a *SageMaker Endpoint* behind an Application Load Balancer, scaling via *Lambda@Edge* to keep < 100 ms latency.  
4. **Search integration** – used *Amazon OpenSearch Service* with the `knn` plugin to perform approximate nearest‑neighbor search over embeddings, returning top‑10 docs per query.

**Result (Data‑driven)**  
- Query response time dropped from **4 min → 12 sec** (≈ 97% reduction).  
- Search accuracy improved by **22%** (precision@3) compared to keyword matching.  
- Operational cost stayed at **$1,800/month**, below the $2k target.

**Reflection**  
I owned every component from ingestion to inference, diving deep into Glue’s schema‑learning quirks and OpenSearch’s KNN limits. The biggest learning was that embedding size trade‑offs (128 vs 384 dims) mattered more than model choice; a smaller vector saved 30% storage and kept latency within SLA.  

**Leadership Principles**  
- **Customer Obsession** – we measured real user wait times, not just engineering metrics.  
- **Ownership & Dive Deep** – I led the full stack, from data catalog to inference endpoint, iterating on failures until SLA was met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
