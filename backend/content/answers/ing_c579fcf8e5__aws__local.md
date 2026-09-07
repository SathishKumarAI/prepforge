---
qid: ing_c579fcf8e5__aws__local
question: 'Explain: Open-Source Models — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:14-05:00'
sources: []
---

**Situation**  
At my previous company we were asked to expose a suite of open‑source NLP models (BERT, GPT‑2, T5) through a single REST endpoint for internal teams. The goal was to cut model inference latency by 30 % and reduce operational overhead.

**Task**  
I owned the end‑to‑end pipeline: ingesting raw text, selecting the appropriate model, returning predictions with minimal latency, and logging usage for future cost analysis.

**Action**  
1. **Infrastructure** – Deployed each model as a Docker container on Amazon SageMaker Edge Manager (for GPU‑intensive inference) behind an Application Load Balancer.  
2. **API Layer** – Built a lightweight FastAPI service in ECS Fargate, exposed via API Gateway with Lambda authorizers for fine‑grained access control.  
3. **Observability** – Integrated CloudWatch Metrics and X-Ray traces; stored raw requests and predictions in S3 (partitioned by model version) to enable A/B testing.  
4. **Cost Control** – Leveraged SageMaker’s Spot Instances for batch inference, while keeping a small on‑demand pool for low‑latency production traffic.

**Result**  
Latency dropped from 1.2 s to 0.8 s (33 % improvement). Monthly cost fell by 18 % thanks to spot usage and auto‑scaling. API hit volume grew 4× within two months, with zero SLA breaches.  

*Leadership Principles:* **Customer Obsession** – built a user‑centric API; **Ownership** – drove the full stack from design to production; **Dive Deep** – tuned container images for GPU utilization; **Bias for Action** – iterated quickly on deployment strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
