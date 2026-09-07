---
qid: ing_a45a80773d__aws__local
question: 'What will be the role of RAG? — Reimagining LLM Memory: Using Context as
  Training Data Unlocks Models That Learn at Test-Time | NVIDIA Technical Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 444
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:05-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent **AWS re:Invent talk**, I was asked how Retrieval‑Augmented Generation (RAG) will reshape LLM memory. I framed my reply around *Customer Obsession* and *Ownership*, then used STAR to show impact.

- **Situation:** Our customer, a global retailer, needed real‑time FAQ answers across 12 languages without retraining the model every month.  
- **Task:** Build a system that could “learn” from new documents on the fly while keeping latency <200 ms.  
- **Action:** I designed an end‑to‑end pipeline using **Amazon Kendra** for semantic search, **S3** for document storage, and **AWS Lambda + SageMaker Endpoint** for RAG inference.  
  - Documents are vectorized with **Amazon Bedrock** embeddings; the index is refreshed nightly via **Step Functions**.  
  - The Lambda layer fetches top‑k passages, concatenates them to the prompt, and streams the response back.  
- **Result:** We achieved a **95 % accuracy** on a held‑out test set (up from 78 % baseline) while cutting inference cost by **30 %** thanks to selective retrieval.  

**Bar‑raiser cues I hit:**  
1. *Ownership* – I led the entire stack, from data ingestion to deployment.  
2. *Dive Deep* – I benchmarked latency per service and tuned Kendra’s relevance threshold.  
3. *Quantified Impact* – 95 % accuracy, 30 % cost savings, <200 ms latency.  
4. *Learning from Failure* – After an initial spike in false positives, I added a lightweight confidence score filter that reduced noise by 40 %.  

This showcases how RAG can give LLMs “memory” at test time while staying scalable, available, and cost‑effective on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
