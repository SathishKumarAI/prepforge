---
qid: ing_af9dc0ffd7__aws__local
question: 'Explain: FAQ — Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 418
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** I was asked by a product manager how we could turn an internal FAQ chatbot into a “smart” assistant that understood user intent and delivered relevant answers in real time.  
> **Task:** Build a deep‑learning pipeline that processes millions of FAQ documents, indexes them, and serves predictions with < 200 ms latency at scale.  
> **Action:**  
> 1. **Ownership & Bias for Action** – I scoped the solution as an end‑to‑end SageMaker workflow: preprocess text in Glue, train a BERT‑based intent classifier (2 GB GPU), and deploy it on a Lambda‑powered API behind API Gateway.  
> 2. **Dive Deep** – Benchmarked RoBERTa vs DistilBERT; chose DistilBERT for 3× cost savings while maintaining 94 % F1 on a held‑out FAQ set.  
> 3. **AWS Services & Scalability** – Used S3 for raw data, DynamoDB for hot key lookups (99.9 % availability), and CloudWatch for real‑time metrics. Auto‑scaling Lambda handled peak traffic (~10k QPS).  
> 4. **Deliver Results** – After deployment, query latency dropped from 1.2 s to 180 ms, and user satisfaction (NPS) rose by 12 points in three months.  
> **Result:** The model was adopted across three regions, processing ~5 M queries/month with < $200/month cost.  

**Bar‑raiser focus:** Demonstrated ownership of the end‑to‑end solution, deep technical dive into model trade‑offs, quantified impact on latency and NPS, and a clear lesson: always validate performance against real user traffic before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
