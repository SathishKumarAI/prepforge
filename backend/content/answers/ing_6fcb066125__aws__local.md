---
qid: ing_6fcb066125__aws__local
question: 'Explain: Legal Retrieval Dataset — BigLaw Bench Deep Dive: Retrieval |
  Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 499
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:45-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team at a legal tech startup, we needed to build an AI model that could retrieve precedent documents from the *BigLaw Bench* dataset for law firms. The dataset had ~3 M annotated cases; our goal was to reduce retrieval latency by 70% while keeping accuracy above 92 %.  

**Task (T)** – Design a scalable, cost‑effective architecture on AWS that supports real‑time semantic search, versioning of the legal corpus, and audit trails for compliance.  

**Action (A)** –  
1. **Data ingestion & preprocessing**: used *AWS Glue* to crawl S3, clean text, and generate embeddings with *Amazon SageMaker Neo* on GPU instances.  
2. **Vector store**: deployed an *Elasticsearch Service* domain (now OpenSearch) with the *KNN plugin*, sharding 4 replicas for high availability; indexed vectors in a single index to keep cost low (~$0.25 / GB).  
3. **Query layer**: built a Lambda‑based microservice behind API Gateway, using *SageMaker Endpoint* for semantic ranking (latency < 200 ms).  
4. **Observability**: integrated CloudWatch metrics and X-Ray traces; set up automated rollback via CodePipeline if latency > 250 ms.  

**Result (R)** – Achieved a 78 % reduction in query time (from 600 ms to 140 ms) while maintaining 93 % precision‑recall, cutting infrastructure spend by 35 %. The system handled 10k concurrent queries with <1 % error rate.  

**Leadership Principles**  
- **Ownership**: drove end‑to‑end delivery and post‑launch monitoring.  
- **Dive Deep**: iterated on embedding models until we hit the target metrics.  
- **Bias for Action**: deployed a production pipeline in 6 weeks instead of waiting for “perfect” data.  

Bar‑raisers listen for clear ownership, depth (we tuned KNN parameters and monitored latency), measurable impact (latency & cost reductions), and lessons from early failures (initially we over‑sharded, causing high costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
