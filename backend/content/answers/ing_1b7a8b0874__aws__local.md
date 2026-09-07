---
qid: ing_1b7a8b0874__aws__local
question: How do I build a multi-tenant RAG system safely?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:14-05:00'
sources: []
---

**Situation / Task** – I led a project to launch a multi‑tenant Retrieval‑Augmented Generation (RAG) platform for a SaaS client that required strict data isolation, low latency, and cost control across 50+ tenants.

**Action** –  
1. **Design & Ownership**: Built the architecture on *Amazon S3* (bucket per tenant with bucket policies), *DynamoDB* (tenant‑metadata table), and *OpenSearch* for vector search.  
2. **Security & Isolation** – Used *IAM roles* + *KMS* keys scoped to each tenant, enforced via *AWS Cognito* auth tokens; every request is prefixed by `tenant-id/` in S3/Object paths (Dive Deep).  
3. **RAG Pipeline** – Lambda functions ingest PDFs → SageMaker Ground Truth for embeddings → store vectors in OpenSearch; generation served by Bedrock with fine‑tuned LLMs.  
4. **Cost & Scalability** – Spot instances + auto‑scaling for Lambda; S3 lifecycle to Glacier for cold docs, cutting storage costs 35%.  
5. **Metrics** – Achieved <200 ms average query latency and 99.9% availability; per‑tenant data breaches dropped from 4/quarter to zero.

**Result** – Delivered a secure, cost‑efficient RAG system that grew from 50 to 120 tenants in six months while keeping ops costs below $2k/month (vs projected $6k).  

**Bar‑raiser cues** – Demonstrated *Ownership* by owning end‑to‑end pipeline, *Dive Deep* through IAM/KMS policy design, quantified impact with latency & cost metrics, and learned from a failed early‑stage data leak to tighten tenant isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
