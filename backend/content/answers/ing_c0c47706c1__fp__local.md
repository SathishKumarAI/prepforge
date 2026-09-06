---
qid: ing_c0c47706c1__fp__local
question: 'Explain: Get Started Architecting on AWS — Reference Architecture Examples
  and Best Practices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 522
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:35-05:00'
sources: []
---

### Why a *reference* architecture is essential

When you launch an ML project you start with a **constraint space**: data ingestion, compute budgets, model life‑cycle, and compliance rules.  
The reference architecture is the **optimal mapping** of that constraint space onto AWS services, derived from three principles:

| Principle | What it guarantees | How it shapes the design |
|-----------|--------------------|--------------------------|
| **Data locality & immutability** | Reduces egress costs and audit risk | Store raw data in Amazon S3 (immutable object store) and copy only curated subsets into a managed warehouse (Redshift, Athena). |
| **Stateless compute + elastic scaling** | Enables cost‑effective training & inference | Use SageMaker endpoints or Lambda for inference; use Spot/OnDemand instances for training jobs that auto‑scale with the dataset size. |
| **Observability + governance** | Detect drift and meet compliance | Integrate CloudWatch, X-Ray, and IAM policies; tag every resource with project metadata. |

### Core AWS components in a typical ML stack

1. **Data ingestion** – Kinesis Data Streams or EventBridge → S3 (raw lake).  
2. **Feature store** – SageMaker Feature Store or DynamoDB for fast lookup.  
3. **Training** – SageMaker Training jobs on Spot instances; use `ml.p4d` for GPU‑heavy models, `ml.m5` for CPU‑bound tasks.  
4. **Model registry & versioning** – SageMaker Model Registry (captures metrics, lineage).  
5. **Inference** – SageMaker endpoints or Lambda + API Gateway for low‑latency workloads; use Auto Scaling policies.  
6. **Monitoring** – CloudWatch Alarms on latency/throughput; GuardDuty for security anomalies.

### One non‑obvious insight

Most teams forget that **feature drift is a *cost* problem as much as a performance one**. By storing feature definitions and their statistics in the same registry as the model, you can automatically trigger retraining or rollback when variance exceeds a threshold—turning drift detection into an automated expense controller.

> **Bottom line:** A reference architecture is not a template to copy; it’s a *formal mapping* of business constraints onto AWS primitives that guarantees scalability, compliance, and cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
