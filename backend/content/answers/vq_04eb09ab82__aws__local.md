---
qid: vq_04eb09ab82__aws__local
question: How should Outlier Values be Handled?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 484
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:53-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*  

**Situation (S)**  
At my previous role we built a real‑time fraud‑detection pipeline on Kinesis + Lambda that fed a SageMaker model. A sudden spike in transaction amounts from a handful of merchants caused the model to flag 30 % of all transactions, overwhelming downstream alerts and costing $12k/day in false positives.

**Task (T)**  
I had to design a robust outlier‑handling mechanism that kept the system accurate, cost‑effective, and compliant with GDPR data‑retention policies.

**Action (A)**  

1. **Collect & analyze** – Ingested raw logs into Amazon Redshift for 90 days; used SQL window functions to compute median absolute deviation (MAD) per merchant.  
2. **Automated flagging** – Created a Lambda function triggered every hour that compares new values against the MAD‑based threshold (`median ± 3×MAD`). Outliers are tagged in DynamoDB with `is_outlier=true`.  
3. **Dynamic scaling & cost control** – If a merchant’s outlier rate >10 %, we auto‑scale an Amazon ECS Fargate task that runs a lightweight Spark job to recompute the median, keeping compute bounded by CPU credits.  
4. **Model retraining** – Outliers are excluded from nightly SageMaker training jobs; we store them in S3 for audit logs and future feature engineering.

**Result (R)**  
- False‑positive alerts dropped from 30 % to <2 %, saving $9k/day.  
- The Lambda/DynamoDB pipeline handled >1M records/hour with <99.9 % availability.  
- Overall compute cost fell by 18 % while maintaining GDPR compliance.

**Bar‑raiser takeaways:**  
- **Ownership**: I owned the end‑to‑end solution, from data ingestion to model training.  
- **Dive Deep**: Used MAD analysis and real metrics (false‑positive rate) to quantify impact.  
- **Learning from Failure**: The initial spike taught us that static thresholds are brittle; we moved to a statistical, adaptive approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
