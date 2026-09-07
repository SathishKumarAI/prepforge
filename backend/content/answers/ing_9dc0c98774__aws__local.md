---
qid: ing_9dc0c98774__aws__local
question: 'Explain: Event Notification — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 465
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role as a ML Ops lead at a fintech startup, we were asked to replace the monolithic batch training pipeline with an **event‑driven** architecture so that model updates could be triggered automatically whenever new transaction data arrived.  

- **Situation:** The batch job ran nightly and produced 200 GB of training data; latency between ingestion and inference was >12 h, hurting fraud detection accuracy.  
- **Task:** Design a real‑time event‑driven pipeline that ingests streaming data, triggers retraining, and deploys updated models with minimal downtime.  
- **Action:** I leveraged **Amazon Kinesis Data Streams** to capture every transaction as an event, then routed records to **AWS Lambda** functions for preprocessing. A **step‑function** orchestrated the training workflow: it triggered **SageMaker Training Jobs**, stored artifacts in S3, and updated a **Model Registry**. For deployment I used **Amazon SageMaker Endpoint** with a blue/green strategy via **AWS CodeDeploy**.  
  *Scalability:* Kinesis shards auto‑scales to millions of events per second; Lambda scales horizontally without provisioning.  
  *Availability:* Each component is multi‑AZ, and the step function retries on failure (5×).  
  *Cost:* Eliminated a 24 h EC2 batch job ($400/month) and cut storage by 60 % (~$120/month).  
- **Result:** Training latency dropped from >12 h to <30 min; fraud detection precision improved by 4.7 %, saving the company ~$1.8 M annually.  

**Leadership Principles highlighted:** *Customer Obsession* (faster, more accurate fraud alerts), *Ownership* (owning end‑to‑end pipeline), and *Dive Deep* (choosing services based on data flow, cost, and SLA).  

A bar‑raiser would listen for my ownership of the failure path (step‑function retries), deep dive into AWS pricing, and quantified impact on business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
