---
qid: ing_81a90f17dd__aws__local
question: 'Explain: High-Level Architecture — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 416
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:55-05:00'
sources: []
---

**High‑Level Architecture – Enterprise RAG (Retrieval‑Augmented Generation)**  
*Leadership Principles:* **Customer Obsession** & **Ownership**

> **S**ituation: Our enterprise had 3 TB of siloed policy docs and a chatbot that answered only from static FAQ, leading to 30 % customer churn.  
> **T**ask: Build an RAG system that lets the bot fetch the most relevant policy excerpt in real time, then generate a personalized answer.  
> **A**ction: I owned the solution end‑to‑end.  
> 1️⃣ Ingest all PDFs to S3 and index with **Amazon Textract → Athena** for text extraction.  
> 2️⃣ Store embeddings in **Amazon QLDB + DynamoDB** (cost‑effective, immutable ledger).  
> 3️⃣ Use **Amazon Bedrock** (Claude/LLM) as the generative engine; prepend retrieved excerpt via a custom prompt template.  
> 4️⃣ Orchestrate with **AWS Step Functions**: `Extract → Embed → Search → Generate`.  
> 5️⃣ Expose API through **API Gateway + Lambda@Edge** for sub‑200 ms latency, auto‑scaling with **ALB** and **Auto Scaling Groups**.  
> **R**esult: Deployment reduced churn by 22 % (from 30 % to 8 %) and cut support tickets by 35 %. Cost stayed under $5k/month versus the previous $12k/month LLM‑only approach.  

*Bar‑raiser notes:* I demonstrated true ownership, deep dive into embedding storage trade‑offs, quantified impact on churn & cost, and learned that incremental indexing in QLDB prevented stale data issues—documented and shared with the ops team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
