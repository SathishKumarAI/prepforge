---
qid: ing_a4878c381d__aws__local
question: 'Explain: Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 517
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:28-05:00'
sources: []
---

**Answer (Amazon style)**  

*Situation*: I led a product team that needed to surface the most relevant FAQ answer for millions of customer queries in real time. The existing keyword‑matching engine returned 65 % precision and caused frequent user frustration.  
*Task*: Build a **Contextual Retrieval** layer that uses semantic similarity to deliver answers with ≥90 % relevance, while keeping latency <200 ms at scale.  
*Action*:  

1. **Requirements & Design** – I scoped the system as a *Retrieval‑Augmented Generation (RAG)* pipeline:  
   * Pre‑compute dense embeddings for 3 M FAQ documents in SageMaker using Sentence‑Transformers, store vectors in DynamoDB with GSI on `embedding_id`.  
   * On request, an API Gateway + Lambda receives the user query, generates a query embedding via Bedrock’s LLM endpoint, and performs cosine‑similarity search against DynamoDB (using PartiQL and parallel scans).  
   * The top‑5 documents are concatenated and sent to Bedrock for final answer generation.  

2. **AWS Services & Trade‑offs** –  
   * **S3** holds raw FAQ text; **DynamoDB** offers single‑digit ms read latency (cost ~$0.25/mo per 10 k items).  
   * Lambda + API Gateway keep the system serverless → zero ops, auto‑scale, and cost‑efficient (~$200/month).  
   * We enable DynamoDB Global Tables for multi‑region availability, ensuring <100 ms response even during traffic spikes.  

3. **Result** – After launch, precision rose to 92 %, click‑through increased by 18 % (from 34 % to 41 %), and support tickets dropped 12 %. The cost remained under the $250/month budget.  
*Learnings*: I iterated on embedding dimensionality after a failure mode where too‑high vectors caused DynamoDB hot partitions—showing deep dive ownership.  

**Leadership Principles**: *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
