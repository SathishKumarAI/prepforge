---
qid: ing_db937256c9__aws__local
question: What is the best vector database? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 495
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:05-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Customer Obsession* – I always pick a solution that gives users the fastest, most accurate results with minimal cost.  
> *Ownership* – I own end‑to‑end performance and cost from data ingestion to query.

### Situation
At my previous role we needed a vector search layer for a recommendation engine serving 5 M daily requests. The requirement was sub‑10 ms latency, 99.9 % availability, and < $0.05 per query.

### Task
Choose a vector database that meets these SLAs while staying within the budget.

### Action
I evaluated **Amazon Kendra** (managed semantic search), **Pinecone**, and **Weaviate** on:
- **Latency** – measured with 100 k synthetic queries.
- **Scalability** – tested auto‑scaling across 10 shards.
- **Cost** – estimated using AWS pricing calculators.

I chose **Amazon Kendra** because it integrates natively with S3, DynamoDB, and SageMaker. I deployed it on a **Kendra Data Source** backed by an **S3 bucket** (vector embeddings) and enabled **Fine‑tuned Retrieval Augmented Generation** via SageMaker endpoint.  

- *Scalability*: Kendra automatically partitions data; we added 4 shards to keep latency <8 ms under peak load.  
- *Availability*: Multi‑AZ deployment + automatic failover gave 99.98 % uptime in our tests.  
- *Cost*: $0.02/query + $0.15/shard/month → <$0.05 total.

### Result
After rollout, query latency dropped from 35 ms to **7 ms** (5× faster), and the recommendation accuracy improved by **12% precision@10**, directly boosting revenue by ~2%. The solution stayed under budget for 18 months before scaling.

### What a bar‑raiser hears
- *Ownership*: End‑to‑end design, cost control.  
- *Dive Deep*: Detailed latency & cost analysis.  
- *Quantified Impact*: Precise metrics (latency, precision, revenue).  
- *Learning from Failure*: I compared alternatives and chose the best fit, avoiding costly re‑engineering later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
