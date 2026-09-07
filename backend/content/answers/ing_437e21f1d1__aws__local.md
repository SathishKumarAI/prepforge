---
qid: ing_437e21f1d1__aws__local
question: 'Explain: System Design: AI Search Infrastructure — Perplexity AI Interview
  Prep 2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 556
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:39-05:00'
sources: []
---

**Question:** *Explain the system design for an AI‑powered search infrastructure (e.g., Perplexity). What are the key components, how would you scale it on AWS, and what trade‑offs do you consider?*

---

### **Answer**

> *“In building a next‑gen AI search platform, I focused on **Customer Obsession**—ensuring every query returns high‑quality results in <200 ms—and **Ownership**—owning the entire pipeline from ingestion to ranking.*  

**S – Situation:** A startup needed to serve 50k concurrent users with real‑time semantic search over a 2 TB knowledge base.  
**T – Task:** Design an end‑to‑end architecture that scales elastically while keeping cost < $0.01/query.  
**A – Action:**  

| Layer | AWS Service(s) | Why |
|-------|----------------|-----|
| **Ingestion & Indexing** | S3 + Glue + OpenSearch (managed) | Durable storage; ETL jobs to embed docs via SageMaker endpoints. |
| **Embedding Generation** | SageMaker Batch Transform + Lambda | On‑demand embeddings, auto‑scales with spot instances. |
| **Vector Search** | Amazon Kendra + OpenSearch | Kendra for semantic ranking; OpenSearch for nearest‑neighbor (IVF) search. |
| **Serving Layer** | API Gateway + Lambda@Edge | Low‑latency edge caching; serverless scaling to 10k RPS. |
| **Observability** | CloudWatch + X-Ray | Capture latency, error rates; auto‑alert on >95th percentile >300 ms. |

*Scalability:* Use OpenSearch’s shard rebalancing and Kendra’s auto‑scaling pods.  
*Availability:* Multi‑AZ with cross‑region read replicas; failover via Route 53 health checks.  
*Cost trade‑off:* Spot instances for embeddings reduce cost by 60% but risk eviction—handled by checkpointing in S3.

**R – Result:** Achieved <180 ms average latency, 99.9% uptime, and cut per‑query cost from $0.02 to $0.008 while processing 70k queries/day.  

*Bar‑raiser note:* I demonstrated **ownership** (end‑to‑end), deep dive into AWS services, quantified impact, and learning—switching from on‑prem GPU clusters to managed SageMaker reduced ops by 40% and improved elasticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
