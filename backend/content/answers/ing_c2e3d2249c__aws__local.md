---
qid: ing_c2e3d2249c__aws__local
question: What Makes It Special? — Blind 75
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:39-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were asked to build a real‑time fraud detection model that could flag 95 % of high‑risk transactions with < 1 s latency. The challenge was that the data drifted daily, and the system had to scale to millions of events per second.

**Action (Design)**  
I owned the solution and drove a **Serverless ML pipeline**:  
- *Data ingestion*: Kinesis Data Streams → Lambda for feature engineering.  
- *Model training*: SageMaker Pipelines with automatic hyper‑parameter tuning, storing artifacts in S3.  
- *Serving*: SageMaker Endpoints behind an Application Load Balancer; autoscaling on CPU usage and request latency.  
- *Observability*: CloudWatch metrics + Evidently to monitor drift and trigger retraining.

I chose this stack for its **scalability** (auto‑scaling), **availability** (multi‑AZ endpoints), and **cost‑effectiveness** (pay‑per‑use Lambda & SageMaker). Trade‑offs: higher latency vs. lower cost compared to on‑prem GPU clusters, but acceptable given the 1 s SLA.

**Result**  
Within two weeks of deployment we achieved a **0.97 precision/recall** and reduced false positives by 30 %. The system handled 3 M TPS with < 0.8 s average latency at an annual cost of $120k, down from the projected $250k for a traditional EC2‑based solution.

**Reflection (Bar‑raiser focus)**  
I took full ownership, dove deep into drift detection, quantified impact through A/B testing, and learned that *serverless* can outperform expensive clusters when latency constraints are moderate. This experience reinforced my bias for action and commitment to customer obsession—delivering a reliable fraud shield for our users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
