---
qid: ing_3f52281f32__aws__local
question: 'Explain: How to choose the right workflow API — Introduction | Developer
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 409
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:55-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a data‑science pipeline for a fintech client that needed to test multiple ML models daily while keeping model drift under 2 %. The team had two options: SageMaker Pipelines (managed workflow) or Airflow on EKS (self‑hosted). I had to pick the right API and justify it.

**Action**  
1. **Customer Obsession & Ownership** – I mapped each option against the client’s SLA of 99.9 % uptime, 30‑second latency for retraining triggers, and a $15k/month budget.  
2. **Dive Deep** – I benchmarked both on a 10 TB dataset: SageMaker Pipelines finished 1‑hour jobs in ~7 min with automated hyper‑parameter tuning; Airflow took ~12 min but required custom Docker images.  
3. **Bias for Action & Invent & Simplify** – I designed a hybrid workflow: use SageMaker’s `ProcessingJob` for data prep, `TrainingJob` for model fit, and an SQS‑driven Lambda that triggers retraining on drift alerts (detected via CloudWatch metrics). This eliminates the need to maintain Airflow nodes.  
4. **Cost & Scalability** – With SageMaker, we pay per second; projected cost $10k/month vs $14k for EKS + workers. The architecture scales automatically with Spot instances for training.

**Result**  
- Reduced retraining latency from 12 min to 7 min (30% improvement).  
- Cut costs by 29 % in the first quarter.  
- Achieved drift monitoring compliance, keeping model accuracy above 97%.  

**Bar‑raiser takeaway**  
I demonstrated ownership by aligning technical choices with business goals, dove deep into performance metrics, quantified impact, and learned from a failed Airflow prototype that exposed hidden operational overheads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
