---
qid: ing_938384a649__aws__local
question: 'Explain: Implementation with RAGatouille — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:24-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a *Late‑Interaction Retrieval‑Augmented Generation* (RAG) system that could pull the latest policy documents for legal counsel while keeping latency under **200 ms**. The requirement was to support ad‑hoc queries from over 5,000 concurrent users.

**Action – Architecture & AWS Services**  
1. **Data Layer** – Store PDFs in **S3** (bucket lifecycle → Glacier Deep Archive).  
2. **Indexing** – Trigger a **Lambda@Edge** on upload; use Amazon Textract + Bedrock to extract text and embed via an open‑source model, pushing embeddings into **Pinecone** for fast similarity search.  
3. **Inference Layer** – A **Step Functions** orchestration calls a **SageMaker Endpoint** (LLM fine‑tuned on policy data) that receives the user query + top‑k documents from Pinecone and returns the final answer.  
4. **Caching & Scaling** – Fronted by an **API Gateway + CloudFront** edge cache; Lambda concurrency auto‑scales with **Application Auto Scaling** to keep warm for burst traffic.

**Result**  
- Latency dropped from 1,200 ms to **180 ms** (30% below SLA).  
- Cost per query fell by **$0.02** thanks to cold‑start mitigation and S3 lifecycle policies, saving **≈$15k/month**.  
- User satisfaction score rose from 78% → 92%.

**Leadership Principles Highlighted**  
- *Customer Obsession* – focused on the legal team’s need for speed & accuracy.  
- *Ownership* – drove end‑to‑end automation and cost control.  

**Bar‑raiser Takeaway**  
Showed deep dive into each AWS component, quantified impact, and iterated after a first‑round failure where we over‑provisioned Lambda concurrency—pivoting to smarter scaling policy reduced waste.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
