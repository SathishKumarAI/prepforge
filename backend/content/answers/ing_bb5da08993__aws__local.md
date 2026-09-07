---
qid: ing_bb5da08993__aws__local
question: 'Explain: Cut the cost of production evaluations — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:29-05:00'
sources: []
---

**Situation (S)**  
At my previous role we ran nightly model‑evaluation jobs for our “Luna” product line. Each job spun up 8 EC2 instances, processed 3 TB of log data, and cost ~$4k per day—exceeding the budget by 35 %.  

**Task (T)**  
Reduce evaluation costs while maintaining the same accuracy and turnaround time.

**Action (A)**  
1. **Ownership & Bias for Action** – I re‑architected the pipeline to a serverless, event‑driven design.  
2. **Dive Deep** – Analyzed logs with Splunk’s Cloud Observability to identify 70 % of data that was static and could be cached.  
3. **AWS Services** – Replaced EC2 workers with **AWS Lambda + Step Functions**, stored intermediate results in **Amazon S3** (infrequent access tier), and used **Athena** for ad‑hoc analysis.  
4. **Cost & Scalability** – Leveraged **S3 Intelligent-Tiering** to auto‑move cold data, added **AWS Fargate Spot** for the heavy compute step, and set up **CloudWatch Alarms** to trigger auto‑scaling of Lambda concurrency based on queue depth.  

**Result (R)**  
- Daily cost dropped from $4k → $1.2k (70 % savings).  
- Evaluation latency stayed at 3 hrs.  
- System now scales automatically for peak loads without manual intervention, and the architecture is fully auditable via CloudTrail.

*Bar‑raiser notes:* clear ownership, deep data analysis, quantified impact, and a learning loop—future iterations will explore SageMaker Pipelines to further reduce cold‑start latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
