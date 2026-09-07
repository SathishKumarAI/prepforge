---
qid: ing_06201cca39__aws__local
question: 'Explain: DoorDash — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 636
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:49-05:00'
sources: []
---

**Situation (S)**  
At DoorDash I led the end‑to‑end redesign of the *Dynamic Delivery Window* model that predicts ETA for each rider. The old rule‑based system had a 27 % error rate and caused frequent rider cancellations, hurting both revenue and customer trust.

**Task (T)**  
Reduce ETA prediction error to <10 %, increase rider utilization by 15 %, and deploy the solution with zero downtime on our production platform.

**Action (A)**  

| Step | What I did | AWS services |
|------|------------|--------------|
| **Data pipeline** | Built a streaming ETL from Kafka‑to‑S3 using Glue, aggregating geo‑features, traffic, weather, and rider history. | Amazon Kinesis, AWS Glue, S3 |
| **Feature store** | Implemented Feast on SageMaker Feature Store for real‑time feature lookup in inference. | SageMaker Feature Store |
| **Model training** | Trained a Gradient Boosting model (XGBoost) with 1M rows, then distilled to a LightGBM ensemble for latency <5 ms. Used Hyperopt on SageMaker Pipelines for automated hyper‑parameter tuning. | SageMaker Training & Pipelines |
| **Inference** | Deployed as a SageMaker RealTime endpoint behind an Application Load Balancer; autoscaled based on CloudWatch metrics. | SageMaker Hosting, ALB, Auto Scaling |
| **Observability** | Integrated Evidently for canary releases and drift detection; set up CloudWatch dashboards to track MAPE and rider churn. | Evidently, CloudWatch |

**Result (R)**  
- ETA error dropped from 27 % → **9 %** (MAPE).  
- Rider cancellations fell by **18 %**, increasing revenue by **$2M/month**.  
- Model latency stayed below 5 ms with <0.5 % request failures, meeting SLA.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – focused on rider & customer satisfaction metrics.  
2. **Dive Deep** – built a full data‑to‑model pipeline, monitored drift, and iterated until performance met targets.  

---

### What a Bar‑Raiser Looks For

| Signal | Why it Matters |
|--------|----------------|
| Ownership of end‑to‑end system | Shows I can drive from data ingestion to deployment without handoffs. |
| Quantified impact (MAPE, churn) | Demonstrates real business value. |
| Deep technical dive (feature store, distillation) | Validates deep knowledge and trade‑off reasoning. |
| Learning loop (canary, drift detection) | Indicates continuous improvement mindset. |

By combining **AWS services** for scalability, cost‑efficiency, and reliability with a clear customer focus, I delivered a production ML solution that materially improved DoorDash’s delivery experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
