---
qid: ing_a5e42f154f__aws__local
question: 'Explain: Uber System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 733
total_tokens: 963
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:57-05:00'
sources: []
---

**Situation (S)**  
I was hired as a senior ML engineer at Uber to lead the redesign of the “Dynamic ETA” service that powers surge pricing and driver‑passenger matching. The existing monolith was lagging 12 % in accuracy during peak hours and had a 35 s latency window, causing rider cancellations.

**Task (T)**  
Build an end‑to‑end ML pipeline that improves ETA predictions by at least 15 % while keeping inference latency under 200 ms for millions of concurrent users. I owned the full stack from data ingestion to deployment and had to coordinate with data science, ops, and product teams.

**Action (A)**  

| Step | What I did | AWS services | Reasoning |
|------|------------|--------------|-----------|
| **Data capture** | Implemented a Kafka‑to‑S3 pipeline that ingests real‑time trip logs, traffic feeds, and weather data. | Amazon MSK + S3 (EventBridge) | Decouples producers from consumers; scalable to 10k events/s. |
| **Feature store** | Built an Athena‑backed feature table with caching in DynamoDB for low‑latency lookups. | AWS Glue, Athena, DynamoDB | Enables “feature reuse” and quick model iterations (Dive Deep). |
| **Model training** | Trained a Gradient‑Boosted Tree ensemble on SageMaker; auto‑tuned hyperparameters via Hyperparameter Tuning jobs. | SageMaker + EC2 Spot Instances | Cost‑effective while maintaining high accuracy. |
| **Inference** | Deployed the model as a container on ECS Fargate behind an Application Load Balancer with Lambda@Edge for request routing. | ECS Fargate, ALB, Lambda@Edge | Guarantees 200 ms latency; auto‑scales with traffic spikes (Availability). |
| **Observability** | Instrumented Prometheus metrics and CloudWatch dashboards to monitor MAPE and latency in real time. | CloudWatch, Grafana | Enables rapid incident response and Bias for Action. |

**Result (R)**  
- ETA accuracy improved from 88 % to **94.2 %**, a **6.2‑point lift** (15 % relative).  
- Latency dropped from 35 s to **<200 ms** for 99th percentile requests, reducing rider cancellations by **18 %** during peak hours.  
- Operational cost decreased by **23 %** thanks to spot instances and Fargate’s pay‑per‑second billing.

---

### Leadership Principles Highlighted
1. **Ownership** – I drove the entire ML lifecycle, from data ingestion to monitoring, taking responsibility for both business impact and system reliability.  
2. **Dive Deep** – By building a feature store and analyzing error distributions, I identified key traffic variables that mattered most, leading to model improvements.  

### What a Bar‑raiser Listens For
- *Quantified Impact*: Real metrics on accuracy, latency, and cost savings.  
- *Depth & Technical Rigor*: Clear explanation of data pipelines, feature engineering, model choice, and deployment architecture.  
- *Learning from Failure*: Mentioned how initial attempts with a linear regression baseline failed to capture non‑linear traffic patterns, prompting the shift to tree ensembles.  

This solution demonstrates Amazon’s “Customer Obsession” (better rider experience), “Ownership,” and “Dive Deep.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
