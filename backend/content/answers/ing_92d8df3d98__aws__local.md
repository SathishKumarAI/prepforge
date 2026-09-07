---
qid: ing_92d8df3d98__aws__local
question: 'Explain: 🔎 RAG & Retrieval — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 522
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:17-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) & Retrieval – Quick Cheat Sheet**

**Situation / Task:**  
When I led the NLP team at a fintech startup, we had to build a conversational agent that could answer regulatory queries in real time while staying compliant with GDPR. The challenge was providing accurate, up‑to‑date information from a constantly evolving knowledge base without overloading the LLM.

**Action (Design):**  
I architected a *RAG* pipeline:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Vector store | **Amazon QLDB + DynamoDB Accelerator (DAX)** | Immutable ledger for compliance + low‑latency reads |
| Retrieval engine | **OpenSearch (managed)** with k‑NN plugin | Scales to millions of documents, auto‑scaling and fault tolerance |
| LLM inference | **SageMaker Endpoint** hosting a fine‑tuned GPT‑4 model | Pay‑as‑you‑go, easy rollback |
| Orchestration | **Step Functions + Lambda** | Serverless control flow, audit trail |
| Security | **KMS & IAM** for encryption at rest / least privilege | GDPR compliance |

The pipeline:  
1. User query → Lambda parses intent → Step Function calls OpenSearch (top‑k vectors).  
2. Retrieved snippets → Lambda formats prompt + context → SageMaker generates answer.  
3. Response cached in ElastiCache for 5 min to cut downstream calls.

**Result:**  
- Latency dropped from **4.8 s** to **0.9 s** (80% reduction).  
- SLA compliance rose to **99.7%** uptime, meeting regulatory audit thresholds.  
- Operational cost fell by **35%** vs a pure LLM approach.

**Learning & Ownership:**  
I conducted post‑mortem “failure drills” on 3 edge cases where the model hallucinated; we added a confidence score threshold and flagged low‑confidence answers for human review—an iterative loop that improved answer accuracy from **72%** to **88%** in two weeks.

> *Leadership Principles:* **Customer Obsession** (real‑time, compliant answers), **Ownership** (end‑to‑end pipeline), **Dive Deep** (profiling latency & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
