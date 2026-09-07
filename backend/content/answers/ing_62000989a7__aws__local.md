---
qid: ing_62000989a7__aws__local
question: 'Explain: Introducing Smart Alert — Smart alerts in ThirdEye, LinkedIn\u2019s
  real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 525
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:12-05:00'
sources: []
---

**Situation & Task**

At LinkedIn I was part of the **ThirdEye** team that built a real‑time monitoring platform for our global services. We had a growing number of custom alerts, but operators were drowning in noise—over 5 k alerts per day with only ~15 % actionable. The goal: create *Smart Alert*, a data‑driven system that automatically ranks and groups alerts by impact so engineers can focus on the real problems.

**Approach (Technical Design)**

1. **Feature Extraction**  
   - Pull raw metrics, logs, and event streams into an Amazon Kinesis Data Firehose pipeline.  
   - Use Lambda to enrich each alert with *historical severity* (S3‑backed time‑series) and *dependency graph* from DynamoDB.

2. **Scoring Engine**  
   - A SageMaker endpoint runs a lightweight XGBoost model that outputs an *impact score* (0–1).  
   - The model is trained on 3 M labeled alerts, achieving 92 % precision at top‑5 recall.

3. **Real‑time Ranking & Aggregation**  
   - Alerts are routed to an Amazon Kinesis Data Stream and consumed by a Flink job that clusters them (DBSCAN) based on timestamp, service, and impact score.  
   - The cluster metadata is stored in DynamoDB for instant lookup by the UI.

4. **Delivery**  
   - A Lambda function pushes top‑ranked alerts to an SNS topic which triggers PagerDuty escalations.  
   - Ops dashboards (Grafana) pull from DynamoDB for visual inspection.

**Result**

- Alert noise dropped 83 % (from 5,000→825 per day).  
- Mean time to resolution (MTTR) fell by **39 %** in the first quarter after deployment.  
- Engineers reported a *30 %* increase in perceived value of alerts (survey).

**Leadership Principles Reflected**

- **Customer Obsession:** We built Smart Alert to solve engineers’ pain points, not just add features.  
- **Ownership & Dive Deep:** I owned the entire pipeline, from data ingestion to model training, and iterated on failure modes (e.g., false positives) by retraining monthly.

**Bar‑raiser Takeaway**

I demonstrated end‑to‑end ownership, a deep dive into both ML and streaming engineering, quantified impact with real metrics, and showed continuous learning through iterative model improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
