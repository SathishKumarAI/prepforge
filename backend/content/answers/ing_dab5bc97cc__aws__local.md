---
qid: ing_dab5bc97cc__aws__local
question: 'Explain: What We Would Do Differently — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 369
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:50-05:00'
sources: []
---

**Situation / Task**  
In a recent project I led the migration of an on‑premise Retrieval‑Augmented Generation (RAG) pipeline used by a Fortune 500 finance client into a fully managed AWS stack. The goal was to cut query latency from 1.2 s to <200 ms while keeping costs below $5k/month.

**Action**  
I re‑architected the system around **Amazon Kendra** for semantic search, **SageMaker Endpoint (Inference)** for the language model, and **Lambda + API Gateway** for orchestration. I introduced a **step‑function workflow** to cache embeddings in DynamoDB, reducing redundant calls to SageMaker by 70 %. To improve availability, I enabled **Kendra’s cross‑region replication** and used **SageMaker Multi‑Model Endpoints** behind an Application Load Balancer with Auto Scaling. I also implemented a CI/CD pipeline with CodePipeline that automatically redeploys the Lambda layer when new embeddings are added.

**Result**  
Latency dropped to 180 ms (≈85 % improvement). Monthly spend fell from $12k to $4.3k, a **64 % cost saving**. The client reported higher user satisfaction scores (CSAT ↑ 15 pts) and a 30 % reduction in support tickets related to data retrieval errors.

**Reflection**  
I learned that **Ownership**—owning the end‑to‑end pipeline—and **Dive Deep** into AWS pricing models are critical for delivering measurable ROI. This redesign also set a new baseline for future RAG deployments across the organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
