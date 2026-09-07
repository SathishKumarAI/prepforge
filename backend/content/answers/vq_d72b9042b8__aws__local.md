---
qid: vq_d72b9042b8__aws__local
question: What is the ROC Curve, and how do you make one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 388
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:59-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession**, **Dive Deep**  
> *Behavioral focus:* Ownership of the metric, deep dive into data, quantified impact.

---

### Situation / Task
I was tasked with validating a new fraud‑detection model for our marketplace. The client demanded a clear, quantitative way to trade off false positives against missed frauds, so I had to build and present an ROC curve.

### Action
1. **Collect labeled test data** (≈ 200k transactions) stored in Amazon S3; processed with AWS Glue to clean and split into train/validation sets.
2. **Run the model on SageMaker** to generate probability scores for each transaction.
3. **Compute TPR/FPR at every threshold** using Pandas, then plot with Matplotlib (hosted via an ECR‑based container in ECS for reproducibility).
4. **Automate**: scheduled Lambda pulls new predictions from S3, updates the curve daily, and pushes a JSON payload to Amazon QuickSight dashboards.

### Result
- The ROC AUC improved from 0.81 (baseline) to **0.93**, cutting false positives by 38 % while maintaining ≥ 95 % true‑positive rate.
- Stakeholders could instantly see the impact of threshold changes, leading to a 12 % reduction in customer support tickets for disputed payments.

### Learnings
I realized that storing intermediate scores in S3 and using Glue for ETL made the pipeline idempotent—critical for compliance audits. The next iteration will replace Matplotlib with QuickSight’s native visualizations to cut rendering time by 70 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
