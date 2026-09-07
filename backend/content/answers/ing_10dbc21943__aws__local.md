---
qid: ing_10dbc21943__aws__local
question: 'Explain: Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 426
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:39-05:00'
sources: []
---

**Answer – Deep Learning (Amazon Interview Style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*

### Situation
I led a project at my previous company to replace legacy fraud detection rules with a deep‑learning model, aiming to reduce false positives while maintaining high true‑positive rates.

### Task
Deliver a production‑ready system that scales to 10 M transactions/day and integrates with existing monitoring dashboards.

### Action
1. **Data pipeline** – Built an S3 bucket + Glue crawler to ingest raw logs; used Redshift for feature engineering (feature store).  
2. **Model** – Trained a *Deep Neural Network* in SageMaker, leveraging GPU instances (p3.2xlarge) and hyper‑parameter tuning via SageMaker Experiments.  
3. **Deployment** – Deployed as a SageMaker endpoint behind an Application Load Balancer with auto‑scaling based on latency metrics.  
4. **Observability** – Integrated CloudWatch metrics & X-Ray tracing; set up automated retraining jobs in Lambda triggered by drift detection.  

### Result
- **Accuracy:** 92 % true‑positive rate (up from 84 %) and false positives dropped 35 %.  
- **Cost:** Managed to keep inference cost < $0.05 per 1,000 predictions, a 40 % savings vs. prior rule engine.  
- **Latency:** Average inference time 120 ms, meeting SLA of < 200 ms.

### Reflection
I took full ownership by mapping business metrics to model performance and iterating on feature engineering until the ROI threshold was met. The project taught me that *dive deep* into data quality can yield larger gains than simply adding model complexity. This experience reinforced my bias for action: I moved from proof‑of‑concept to production in 8 weeks, delivering measurable impact while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
