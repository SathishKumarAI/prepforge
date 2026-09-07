---
qid: ing_df01f20a38__aws__local
question: Should you use an event-driven architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 459
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:50-05:00'
sources: []
---

**Answer (Amazon style)**  

> **S – Situation:** In 2023 we were launching a real‑time fraud detection model for a fintech client that processed ~200 k transactions per minute. The team debated whether to batch predictions in nightly jobs or shift to an event‑driven pipeline.

> **T – Task:** My goal was to design a solution that reduced latency, increased reliability, and kept cost under $12K/month while still allowing the data science team to iterate quickly.

> **A – Action (Technical):**  
> *Built an event‑driven architecture using **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for lightweight preprocessing, and **Amazon SageMaker Batch Transform** triggered by **EventBridge**.  
> *Added a **DynamoDB** cache to store recent predictions, avoiding redundant inference calls.  
> *Implemented dead‑letter queues (SQS) for failed records and CloudWatch metrics for end‑to‑end latency.

> **R – Result:**  
> *Latency dropped from 15 min (batch) to <200 ms average per transaction.  
> *Detection accuracy improved by 3% because the model could be retrained nightly on fresh data.  
> *Monthly cost stayed within $10K, a 17% savings over the batch baseline.  
> *The solution scaled elastically; during peak 300 k TPS, Lambda concurrency automatically adjusted without manual intervention.

**Leadership Principles Highlighted**

* **Customer Obsession:** Delivered near‑real‑time fraud alerts, directly protecting user funds.  
* **Ownership & Dive Deep:** I owned the end‑to‑end pipeline, dissecting every component to optimize cost and latency.

**Bar‑raiser cues**

* Clear ownership of both architecture and metric outcomes.  
* Depth in AWS service selection (Kinesis vs. Lambda vs. SageMaker).  
* Quantified impact (latency, accuracy, cost).  
* Reflection on failure: initial design used SNS + EC2; it hit high costs and lag—learning led to the event‑driven solution above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
