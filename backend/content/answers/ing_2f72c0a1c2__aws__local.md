---
qid: ing_2f72c0a1c2__aws__local
question: 'Explain: A primer on RAG: scaling to larger knowledge bases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:48-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role as a Cloud Solutions Architect I led the migration of an internal RAG (Retrieval‑Augmented Generation) system from a 2 GB local vector store to a production‑grade, multi‑TB knowledge base for a global customer support chatbot.  

- **Situation**: The bot had to answer 50k queries/day with latency <200 ms and 99.9% uptime.  
- **Task**: Scale the retrieval layer while keeping costs under $1M/yr.  
- **Action**:  
  1. Adopted **Amazon OpenSearch Service** (dedicated cluster, 8 r5.large nodes) for vector search; enabled **k‑NN plugin** and set `search_type=knn`.  
  2. Indexed the corpus using **AWS Glue** to extract embeddings from a fine‑tuned BERT model on **SageMaker**, storing them in an **S3 lakehouse** (Parquet).  
  3. Built a **Lambda@Edge + API Gateway** layer that cached top‑10 results per query for 24 h, reducing OpenSearch hits by 70%.  
  4. Implemented **Auto Scaling** and **Spot Instances** for the OpenSearch nodes; added CloudWatch alarms to trigger instance replacement on health checks.  

- **Result**: Retrieval latency dropped from 650 ms to 180 ms (≈72% improvement). Query cost fell by 60%, staying well below budget, while traffic grew 3× without SLA breach.  

*Leadership Principles*: **Ownership** – I drove the end‑to‑end solution; **Dive Deep** – iterated on indexing strategy until hit‑rate >99%; **Deliver Results** – met performance and cost targets.  

Bar‑raiser notes: clear ownership, deep technical dive (embedding pipeline, scaling choices), quantifiable impact, and learning loop (used cache to reduce costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
