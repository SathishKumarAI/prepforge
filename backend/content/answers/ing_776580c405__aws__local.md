---
qid: ing_776580c405__aws__local
question: 'Explain: Putting It All Together — The AI Agent Tech Stack Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:13-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team that built an autonomous recommendation agent for a media platform. The goal was to deliver real‑time content suggestions while keeping cost < $0.05 per inference and latency < 100 ms.

**Action (Tech Stack)**  
1. **Data ingestion & feature store –** *Amazon Kinesis Data Streams* → *AWS Glue* → *Amazon SageMaker Feature Store*.  
2. **Model training –** *SageMaker Pipelines* with *Neural Architecture Search* on GPU instances; model served via *SageMaker Endpoint (Multi‑Model)*.  
3. **Inference & orchestration –** *API Gateway* + *AWS Lambda* for request routing, backed by *ECS Fargate* for heavy pre‑processing.  
4. **Observability –** *Amazon CloudWatch*, *X-Ray*, and custom Prometheus metrics in *Grafana*.  
5. **Security & compliance –** *IAM*, *KMS*, and *AWS Secrets Manager*.

I chose SageMaker for its managed training/hosting, reducing operational overhead by 70 %. Lambda + Fargate gives elastic scaling; at peak load we handled 10k QPS with < 95 % SLA. Cost was $0.03 per inference—25 % below target.

**Result**  
The agent boosted click‑through rate from 3.2 % to **4.8 %** (≈ 50 % lift) and reduced churn by 12 %. The architecture earned a “Best Practices” badge in the internal AWS Cloud Adoption Framework audit.

**Reflection & Learning**  
Initially we underestimated cold‑start latency; adding *SageMaker Edge Manager* for pre‑warm containers cut that by 60 %. This experience sharpened my **Ownership** (end‑to‑end delivery) and **Dive Deep** (profiling bottlenecks), aligning with Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
