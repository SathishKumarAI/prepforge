---
qid: ing_8c6f0a1073__aws__local
question: 'Explain: Failure — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 404
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:30-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science team that built an ML inference service for a high‑traffic e‑commerce recommendation engine (10M requests/day). The client‑server design we shipped in 2019 suffered from *exponential latency spikes* during flash sales, causing a 12 % drop in conversion rates.  

**Action**  
- **Ownership & Dive Deep:** I performed a root‑cause analysis using CloudWatch traces and identified that the single stateless inference container was becoming a bottleneck when the request queue length exceeded 500.  
- **Bias for Action & Invent & Simplify:** Re‑architected to a *serverless microservice* model:  
  - **AWS Lambda** (scales automatically) triggered by **API Gateway** requests.  
  - **Amazon SageMaker Endpoint** for inference, with autoscaling based on CPU utilization.  
  - **DynamoDB** stores cached predictions; **ElastiCache‑Redis** holds a hot key cache for the top 10k items.  
- Implemented *retry & circuit breaker* logic in API Gateway to guard against downstream failures.  

**Result**  
- Latency dropped from 1.8 s (peak) to <200 ms average, eliminating flash‑sale spikes.  
- Conversion rate rebounded by **15 %**, translating to an additional $2.3M annual revenue.  
- Operational cost fell by **18 %** due to Lambda’s pay‑per‑invocation model and auto‑scaling.  

**Bar‑raiser notes** – I showed full ownership, a deep technical dive, quantified impact, and learned that *statelessness + serverless scaling* is key for ML inference at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
