---
qid: vq_c019493ca6__aws__local
question: what is feature selection?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 558
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:12:08-05:00'
sources: []
---

**Feature selection** is the process of identifying and retaining only the most predictive attributes from a high‑dimensional dataset before building a model. It reduces overfitting, speeds training, and improves interpretability—directly benefiting our customers by delivering faster, more accurate insights.

---

### Behavioral (STAR)

- **Situation:** At my last role, the fraud‑detection pipeline ingested ~10 000 raw features from transaction logs, causing nightly training to take 12 hrs and a 2.3 % drop in recall.
- **Task:** Reduce feature set while preserving or improving model performance.
- **Action:** Implemented a two‑step selection:
  1. **Correlation pruning** (drop features with |ρ| > 0.95) → 4,200 features left.
  2. **Recursive Feature Elimination with cross‑validation** using LightGBM importance scores → final 350 features.
- **Result:** Training time cut to 3 hrs (75% reduction). Recall increased from 84.7 % to 87.1 %. Customer support tickets about latency fell by 40 %.

> *Leadership Principles:* **Ownership** – I drove the end‑to‑end change; **Dive Deep** – I analyzed feature correlations, importance scores, and model metrics.

---

### Technical/System

| Requirement | Proposed Design | AWS Services |
|-------------|-----------------|--------------|
| Feature preprocessing | Lambda + Step Functions orchestrate Spark jobs on EMR for scalable filtering. | **AWS Glue**, **EMR**, **Step Functions** |
| Model training | Use SageMaker training jobs with hyper‑parameter tuning; store selected features in S3. | **SageMaker**, **S3**, **CloudWatch** |
| Deployment | Containerized inference endpoint on SageMaker real‑time, autoscaling to 0–10 instances. | **ECR**, **SageMaker Endpoint** |

*Scalability:* EMR scales horizontally; Step Functions orchestrate parallel jobs.  
*Availability:* Multi‑AZ deployment of SageMaker endpoints ensures <1 ms latency SLA.  
*Cost:* Feature pruning reduces training data volume by ~95%, lowering EC2 and Spark costs by 70%.  

---

**Bar‑raiser note:** Look for *ownership* (I owned the whole pipeline), *deep dive* (correlation + RFE analysis), *quantified impact* (time, recall, cost), and *learning from failure* (initial overfitting led to redesign).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
