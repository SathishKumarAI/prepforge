---
qid: ing_73ccc88223__aws__local
question: What is agentic RAG? — Ai System Design Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 488
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:49-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Situation** – A client needed a chatbot that could answer product questions in real time while continuously learning from new FAQ documents. The baseline was a simple retrieval‑augmented generation (RAG) pipeline that hit latency > 2 s and drifted over time because the document store wasn’t updated automatically.  
> **Task** – Design an *agentic RAG* system that: 1) autonomously ingests new documents, 2) updates embeddings without downtime, and 3) guarantees < 800 ms response for 99.9% of queries.  
> **Action** – I architected a serverless micro‑service stack:  
> * **S3 + EventBridge** trigger → **Lambda** to parse PDFs, store text in **DynamoDB** (partitioned by product).  
> * **Lambda** → **Bedrock (LLM)** for embedding generation; results written back to DynamoDB.  
> * Retrieval via **Amazon Kendra** (indexing on the fly) + **OpenSearch** for semantic search, both behind an **Application Load Balancer** with auto‑scaling.  
> * The query Lambda calls Bedrock’s chat model only after a top‑k retrieval, cutting inference cost by ~70%.  
> * For availability, we enable cross‑region read replicas; for cost, we use **SageMaker Endpoint** spot instances for heavy LLM calls.  
> **Result** – Within 3 weeks: query latency dropped to 620 ms (avg), uptime 99.97%, and the system processed 15k docs/month with $1.2K/Month vs. $4.5K baseline, a 73% cost saving while improving NPS from 78 → 92.  
> **Learnings** – Early monitoring revealed cold‑start spikes; adding a pre‑warm Lambda layer reduced it by 40%. This iteration taught me to embed *continuous feedback loops* into the architecture—an ownership trait that turns a simple RAG into an agentic system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
