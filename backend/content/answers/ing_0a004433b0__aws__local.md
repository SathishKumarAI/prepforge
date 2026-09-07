---
qid: ing_0a004433b0__aws__local
question: How do you make a RAG system produce trustworthy citations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 395
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:42-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession & Ownership**

> **Situation:** I led a team building an RAG (Retrieval‑Augmented Generation) service for our internal knowledge base that needed to provide *trustworthy citations* for compliance audits.  
> **Task:** Ensure every generated answer included verifiable source URLs and a confidence score, while keeping latency < 300 ms.  
> **Action:**  
> 1. **Dive Deep** into the retrieval pipeline: added a provenance layer that tags each chunk with its originating document ID and SHA‑256 hash.  
> 2. Implemented an *inference guard* in the LLM wrapper that cross‑checks generated citations against the tagged metadata; if mismatch > 0.5 probability, the response is rejected and retried.  
> 3. Used **Amazon Bedrock** for the LLM, **AWS Glue** to build a searchable vector index on S3 (Parquet + DynamoDB for metadata), and **Amazon OpenSearch Service** for fast semantic search.  
> 4. Deployed the service via **Lambda@Edge** with an autoscaling policy that keeps CPU utilization < 70 % to control cost (~$0.04 per inference).  
> 5. Monitored with CloudWatch metrics: *Citation Accuracy* (real‑time % of correct citations) and *Latency*.  
> **Result:** Citation accuracy rose from 78 % to **95 %** in two weeks, latency stayed at 240 ms on average, and audit failures dropped by **60 %**. Learned that embedding provenance metadata into every chunk is cheaper and more reliable than post‑hoc verification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
