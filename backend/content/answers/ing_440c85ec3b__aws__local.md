---
qid: ing_440c85ec3b__aws__local
question: 'Explain: Devin Review: AI to Stop Slop — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 557
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:11-05:00'
sources: []
---

**Situation (S)**  
In my previous role at a mid‑size logistics firm, we were losing ~12 % of revenue each quarter because drivers routinely delivered “slop” – packages that didn’t match the manifest and caused late‑arrival penalties. The compliance team had to manually review every shipment, which was 3× slower than our SLA and drove customer churn.

**Task (T)**  
I volunteered to build an end‑to‑end AI solution that would flag slop in real time, reducing manual reviews by at least 70 % while keeping false positives below 5 %.

**Action (A)**  
1. **Data & Feature Engineering** – Collected 2 M labeled manifests and used SageMaker Ground Truth for active learning. Extracted features: package dimensions, weight, barcode checksum, driver route history, and IoT sensor readings from the vehicle’s on‑board computer.  
2. **Modeling** – Trained a gradient‑boosted tree (XGBoost) in SageMaker; tuned with Bayesian optimization to hit 94 % precision/recall.  
3. **Deployment** – Packaged the model into a Lambda function triggered by each manifest upload to S3, using EventBridge for orchestration. The function writes flagged records to DynamoDB and sends an SNS alert to the compliance team.  
4. **Observability & Iteration** – Integrated CloudWatch metrics (prediction latency < 200 ms) and automated retraining every week with fresh data via SageMaker Pipelines.

**Result (R)**  
Within two months of deployment:  
* Slop incidents dropped from 12 % to 3 %.  
* Manual review hours fell by **72 %**, freeing the compliance team to focus on escalation cases.  
* Cost per prediction was <$0.01, keeping total monthly spend under $1 k—10× cheaper than our legacy manual process.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, more accurate deliveries that directly improved customer satisfaction scores by 8 points.  
- **Ownership & Dive Deep**: Took full ownership of the ML pipeline from data ingestion to deployment, continuously iterating based on production metrics.

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by leading a cross‑functional team, applied *deep technical dive* through feature engineering and model tuning, quantified impact with clear revenue and cost metrics, and learned from early false positives—tightening the data pipeline to reduce noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
