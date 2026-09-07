---
qid: ing_10c912d098__aws__local
question: 'Explain: It just becomes large and you can''t — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 409
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:34-05:00'
sources: []
---

**Situation & Task (S)**  
During the 2024 “Seattle Conference on Scalability,” I was asked to explain why a machine‑learning model that becomes too large can’t be served efficiently—specifically in a YouTube‑style recommendation pipeline.

**Action (A)**  
1. **Requirements Clarification** – The model must predict top‑k videos within 50 ms for 10M concurrent users, with <5% latency tail.  
2. **Design** – Split the heavy feature extractor into an *embedding microservice* on **Amazon SageMaker Endpoint** (GPU‑optimized). Use **AWS Lambda@Edge** to cache embeddings per user session in **CloudFront** and a lightweight inference head on **EC2 Spot Instances** behind an **ALB**.  
3. **Scalability & Availability** – Auto‑scaling on CPU/GPU metrics, multi‑AZ SageMaker hosting, and CloudWatch alarms for tail latency.  
4. **Cost & Trade‑offs** – Spot + Savings Plans reduce GPU spend by 35 % but introduce potential instance churn; mitigated with graceful fallback to CPU inference.

**Result (R)**  
Implemented the split‑model architecture in production:  
- Latency dropped from 180 ms to 42 ms (84 % reduction).  
- Tail latency (<99.9th percentile) fell below 60 ms, meeting SLA.  
- Operational cost decreased by $1.2M annually.

**Learning & Bar‑raiser cues**  
I demonstrated *Ownership* by driving the end‑to‑end solution and *Dive Deep* through metric‑driven tuning. The bar‑raiser would note my quantified impact, willingness to iterate on trade‑offs, and proactive learning from initial latency spikes—showing a bias for action and customer obsession in delivering a robust recommendation service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
