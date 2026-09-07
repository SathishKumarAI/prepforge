---
qid: ing_3dbf6afd2a__aws__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 445
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:24-05:00'
sources: []
---

**Situation & Task**  
A retail client demanded a custom‑fine‑tuned GPT model for their support tickets to “own” the solution. I knew that fine‑tuning an open model on proprietary data would raise privacy, compliance, and scalability concerns. My goal was to protect data while delivering a high‑performance, low‑cost solution that met their ownership expectation.

**Action**  
1. **Customer Obsession + Ownership** – I scheduled a joint workshop, asked why they believed fine‑tuning was essential, and mapped their pain points (latency, brand consistency).  
2. **Dive Deep & Invent & Simplify** – I proposed Retrieval‑Augmented Generation (RAG) using Amazon Kendra to index the knowledge base and Amazon Bedrock for RAG inference. This keeps raw tickets in a secure S3 bucket, indexed with fine‑tuned embeddings, and returns answers without exposing data to external services.  
3. **Bias for Action** – I built an end‑to‑end proof of concept: Kendra index (100 GB), Bedrock RAG model, Lambda orchestration, and API Gateway fronting the solution. Within 48 hrs we had a demo that returned answers in <200 ms with a cost of $0.04 per query versus ~$2 per fine‑tuned inference.

**Result**  
The client approved RAG; we achieved a **95% accuracy** on their validation set, cut latency by 80%, and reduced monthly inference costs by **90% ($18k → $1.8k)** while keeping all data on‑prem via S3 + KMS. I documented the architecture for future onboarding and shared lessons on trade‑offs between fine‑tuning vs RAG with the team.

**Bar‑raiser Takeaway**  
Ownership: I owned the entire redesign; Dive Deep: I quantified latency & cost savings; Learned from failure: early tests showed fine‑tuned models overfitted to noisy tickets, guiding us to RAG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
