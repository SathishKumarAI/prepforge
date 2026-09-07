---
qid: ing_43f7642a0b__aws__local
question: 'Explain: Step 4: Scheduling (If Required) — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 505
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:54-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a nightly batch ML pipeline that generated fraud‑risk scores for every transaction. The model ran on an EMR cluster and produced a CSV file that had to be ingested into Redshift by 3 PM daily. If the job failed, downstream teams could not launch risk alerts. I was tasked with designing a robust notification system that would alert ops, trigger retries, and automatically scale the compute resources.

**Action**  
1. **Requirements & Design** – The service had to (a) detect failures in real time, (b) notify the Ops Slack channel, (c) schedule automatic retries up to three times with exponential back‑off, and (d) expose metrics for SLA tracking.  
2. **AWS Stack** –  
   - *Amazon EventBridge* rules fired on EMR job state changes.  
   - *AWS Lambda* processed events: if `FAILED`, it sent a message via *Amazon SNS* to a dedicated Ops topic.  
   - A second Lambda function invoked the EMR cluster again with a new retry count, using the AWS SDK (`runJobFlow`).  
   - All retries were capped by a CloudWatch Alarm that stopped further attempts after 3 failures.  
   - Metrics (retry counts, success/failure rates) were pushed to *CloudWatch* and visualized in *Amazon QuickSight*.  

**Result**  
- **Availability**: SLA improved from 70 % to 99.9 % for daily ingestion.  
- **Cost**: Lambda’s pay‑as‑you‑go model added <$10/month compared to a constant EC2 worker.  
- **Scalability**: The EventBridge → Lambda pattern scales elastically; we handled spikes of up to 1,000 concurrent job events without timeout.

**Reflection**  
I owned the end‑to‑end workflow, diving deep into EMR’s APIs and AWS’s serverless event model. I learned that coupling retry logic with monitoring (CloudWatch) provides actionable visibility—an insight that guided future incident response designs.  

> **Leadership Principles**: *Ownership*, *Dive Deep*, *Deliver Results*  
> **Bar‑raiser cues**: clear ownership, deep technical reasoning, quantified impact, and evidence of learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
