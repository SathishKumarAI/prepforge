---
qid: ing_8dc37b36de__aws__local
question: 'Explain: the trip using fake GPS location ads — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 432
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:26-05:00'
sources: []
---

**Situation / Task**  
At my previous gig I was asked to design a fraud‑resistant ride‑hailing platform that could detect and block users exploiting fake GPS coordinates for targeted advertising revenue (the “trip‑using‑fake‑GPS” problem). The goal was to keep the system highly available, cost‑efficient, and compliant with privacy regulations while delivering real‑time user experience.

**Action – Design**  
1. **Real‑time location validation** – A Lambda stream ingests every GPS ping into Kinesis Data Streams; a microservice (EC2 Auto Scaling Group) runs a Bayesian anomaly detector using Amazon SageMaker to compare current coordinates against historical velocity & trajectory models.  
2. **Fraud score & throttling** – The model outputs a fraud‑score fed to DynamoDB (partitioned by userID). If the score > 0.8, we trigger an immediate session termination via API Gateway + Cognito; otherwise, normal routing continues.  
3. **Audit & reporting** – All flagged events are stored in S3 Glacier for compliance and sent to Athena for ad‑hoc analysis.  
4. **Cost control** – Spot Instances + Lambda concurrency limits keep compute < 30 % of baseline.

**Result**  
Within 6 months, fake GPS fraud dropped from 12 % of rides to <0.5 %, cutting $3M in wasted advertising spend annually while maintaining 99.98 % uptime. The model’s precision improved by 35 % after iterative retraining (feedback loop from real‑world alerts).

**Leadership Principles Highlighted**  
- **Customer Obsession** – Protecting riders and advertisers from fraud.  
- **Dive Deep & Ownership** – Building end‑to‑end data pipeline, continuously refining the ML model, and owning the cost/availability trade‑offs.

*Bar‑raiser takeaway:* clear ownership, deep technical dive into AWS services, quantified impact, and iterative learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
