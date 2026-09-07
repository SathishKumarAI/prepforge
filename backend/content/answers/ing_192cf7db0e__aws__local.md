---
qid: ing_192cf7db0e__aws__local
question: 'Explain: Advanced RAG (Multi-Stage) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 538
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:04-05:00'
sources: []
---

**Situation** – I led a team that had to build an enterprise chatbot for a Fortune‑500 insurer. The requirement was to answer policy questions with up‑to‑date documents while staying compliant with data‑privacy rules.

**Task** – Deliver a *Multi‑Stage Retrieval Augmented Generation (RAG)* pipeline that pulls the most relevant clauses from a 5 TB legal corpus, filters them for privacy, and generates concise answers—all under 2 seconds per request.

**Action** –  
1. **Indexing**: Ingested PDFs into **Amazon Kendra** (custom data source) and stored raw text in **S3**. Built a DynamoDB table of *document hashes → encryption keys* for compliance.  
2. **Stage‑1 Retrieval**: A **Lambda@Edge** function receives the user query, queries Kendra via its API, and returns top‑5 passages with cosine‑similarity scores.  
3. **Stage‑2 Filtering**: The same Lambda calls a **SageMaker Endpoint** (privacy‑aware transformer) to redact PII from each passage.  
4. **Stage‑3 Generation**: Cleaned passages are sent to **Amazon Bedrock** (GPT‑4o) with a prompt template that enforces policy‑specific tone and length.  
5. **Observability**: All interactions logged in CloudWatch, metrics pushed to **Prometheus via Grafana**, and usage billed via **AWS Cost Explorer**.

**Result** – Achieved 92 % accuracy against a manually annotated test set, reduced average latency from 4.8 s to 1.6 s, and cut operational cost by 35 % compared to the prior monolithic LLM solution. The system also maintained GDPR compliance, verified through quarterly audits.

> **Leadership Principles**: *Customer Obsession* (fast, accurate answers), *Ownership* (end‑to‑end pipeline), *Dive Deep* (privacy filtering logic), *Bias for Action* (quick Lambda deployment).  
> 
> **Bar‑raiser focus** – I documented failure modes (e.g., Kendra throttling) and implemented exponential back‑off retries, turning a 5 % error rate into <0.1 %. This demonstrates ownership, depth, and learning from setbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
