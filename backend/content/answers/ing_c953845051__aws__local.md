---
qid: ing_c953845051__aws__local
question: 'Explain: So if instead you give you know — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:52-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional ML platform at a fast‑growing fintech, I was asked to migrate the on‑prem inference pipeline (≈ 10 M requests/day) to the cloud so we could support new product features and scale during peak trading hours.

**Action**  
1. **Ownership & Dive Deep** – I scoped the problem by profiling CPU/GPU usage, latency, and cost per request.  
2. Designed a stateless inference service using **Amazon SageMaker Endpoint** with an **Elastic Inference** GPU instance to keep inference latency < 50 ms for 99.9 % of requests.  
3. Leveraged **AWS Lambda + API Gateway** as a lightweight front‑end that auto‑scales, while the endpoint runs behind a **Application Load Balancer (ALB)** with target groups per model version.  
4. Implemented **SageMaker Model Monitor** for drift detection and automated retraining via **Step Functions**, feeding back into the CI/CD pipeline.  
5. Used **AWS Cost Explorer + Savings Plans** to forecast spend, negotiating a 20 % discount on GPU capacity.

**Result**  
- Latency dropped from 200 ms to 45 ms (≈ 78 % improvement).  
- Daily inference cost fell by $12k/month (≈ 30 % reduction).  
- Model retraining cycle time shortened from 2 weeks to 4 days, enabling faster feature roll‑outs.  

**Learning** – The biggest failure was underestimating cold‑start latency for Lambda; adding a warm‑up Lambda resolved it and taught me to balance cost vs performance early in the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
