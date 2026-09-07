---
qid: ing_3db1ebf4d1__aws__local
question: 'Explain: Step 3: Run & Track Your Tests Regularly'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 473
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:09-05:00'
sources: []
---

**Step 3 – Run & Track Your Tests Regularly**

*Situation*:  
I led a data‑science team building an AI model for real‑time fraud detection in Amazon Pay. After training the model, we had to guarantee that its performance stayed above 99% precision while handling 1 M events per day.

*Task*:  
Implement a continuous testing pipeline that would automatically run unit, integration, and drift tests every hour, capture results, and alert if metrics fell below threshold.

*Action*:  
- **Infrastructure**: Deployed an AWS Lambda function triggered by EventBridge on a cron schedule. The function invoked SageMaker batch transform jobs for a sample of live traffic (10 k records) and ran our unit tests in a Docker container on Fargate.  
- **Monitoring**: Wrote custom metrics to CloudWatch (`Precision`, `Recall`, `DriftScore`) and set alarms with SNS notifications.  
- **Automation & Visibility**: Integrated results into an Athena table via Glue ETL, then surfaced them on QuickSight dashboards for product owners. All artifacts were stored in S3 (immutable logs).  
- **Cost & Scale**: The Lambda+Fargate combo cost <$0.20 per run; with 24 h cycles it stayed under $150/month—well below the $2K budget.

*Result*:  
Within two weeks, drift alarms flagged a precision drop from 99.3% to 98.7%. We traced this to a new payment method and retrained the model in under an hour, restoring metrics. Over six months, our pipeline prevented three potential fraud spikes that would have cost Amazon $1.2 M in payouts.  

**Leadership Principles**  
- **Ownership** – I took end‑to‑end responsibility for the testing loop.  
- **Dive Deep** – Built a custom metric suite and tuned CloudWatch alarms to surface subtle performance changes.

**Bar‑raiser cues**: Clear ownership, deep technical justification (Lambda vs. EC2, cost model), quantified impact (precision drop, $1.2 M avoided), and evidence of learning from the drift incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
