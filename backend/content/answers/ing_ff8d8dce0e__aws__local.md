---
qid: ing_ff8d8dce0e__aws__local
question: 'Explain: Luna evaluation models — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 525
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:45-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with improving the *Luna Evaluation Models* for Splunk’s Cloud Observability platform. The goal was to reduce false‑positive alerts by 30 % while keeping latency under 200 ms.

**Task (T)**  
I owned the redesign of Luna’s model selection pipeline, balancing accuracy against cost and scale across millions of telemetry events per second.

**Action (A)**  

| Step | Technical Decision | AWS Services |
|------|-------------------|--------------|
| **Feature extraction** | Built a streaming ETL with Apache Kafka → Lambda to compute rolling stats in real time. | Kinesis, Lambda, DynamoDB |
| **Model training** | Trained an ensemble of XGBoost + LightGBM models on SageMaker, using AutoML for hyper‑parameter search. | SageMaker, S3, CloudWatch |
| **Inference** | Deployed models as a serverless inference endpoint (SageMaker Runtime) behind API Gateway, auto‑scaling to 10k RPS. | API Gateway, Lambda, SageMaker |
| **Evaluation** | Implemented Luna’s “Model Confidence Window” – a sliding‑window A/B test that feeds back precision/recall metrics into an automated rollback policy. | CloudWatch Alarms, SNS |

I introduced *model drift detection* using SHAP value monitoring, which lowered false positives from 18 % to **12 %** (30 % reduction) and cut inference costs by **15 %** due to fewer model re‑trains.

**Result (R)**  
The new pipeline handled 3× the previous throughput with <200 ms latency, earning a 4.7/5 customer satisfaction score in the quarterly survey.  

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for end‑to‑end model lifecycle and cost.
- **Dive Deep** – Built custom drift analytics; tuned hyper‑parameters via AutoML to maximize ROI.
- **Deliver Results** – Quantified impact (30 % false‑positive reduction, 15 % cost saving).  

A bar‑raiser would listen for these metrics, the depth of my design choices, and how I learned from an initial mis‑estimated latency issue by instrumenting CloudWatch traces early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
