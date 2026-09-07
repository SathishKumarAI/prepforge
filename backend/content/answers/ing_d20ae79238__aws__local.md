---
qid: ing_d20ae79238__aws__local
question: 'Explain: VO - System Design — My 2026 Perplexity AI Interview Process and
  Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 587
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:44-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In 2026 I was interviewing for a senior cloud‑AI architect at Amazon, tasked with designing the “Perplexity” conversational AI platform.  
> **Task:** Build a highly available, low‑latency system that can ingest millions of user queries per day while supporting real‑time model updates and multi‑region compliance.  
> **Action:**  
> 1. **Requirements & Constraints** – I scoped the problem: 10 M QPS, <200 ms latency, GDPR/CCPA support, and a 99.999% uptime SLA.  
> 2. **High‑level Architecture** –  
>    * **Front‑end API Gateway + Lambda@Edge** for global edge routing (latency <30 ms).  
>    * **EventBridge → SQS → Kinesis Data Streams** to buffer queries and decouple ingestion from downstream services.  
>    * **Amazon SageMaker endpoints** (Multi‑Model) behind an Application Load Balancer; auto‑scaling based on CloudWatch metrics (CPU & inference latency).  
>    * **DynamoDB + DAX** for session state, with global tables for cross‑region replication.  
>    * **AWS Glue & Lake Formation** to ingest training data into a secure S3 lake; nightly retraining jobs in SageMaker Processing.  
> 3. **Scalability & Cost** – Used Spot Instances for batch retraining, reserved instances for baseline traffic, and leveraged Lambda concurrency limits to cap costs (~$0.02 per inference).  
> 4. **Reliability** – Implemented health checks + automated failover via Route 53 latency routing; added retry logic in Lambda with exponential backoff.  
> 5. **Security & Compliance** – Enforced IAM roles, KMS‑encrypted data at rest, and VPC endpoints for all services.  

> **Result:** The design was approved; post‑implementation metrics showed a 35 % reduction in inference cost and maintained <180 ms latency during peak traffic (12 M QPS).  
> **Reflection:** I learned that “Dive Deep” means iterating on the data pipeline until bottlenecks are quantified, and “Ownership” is owning both performance and compliance from day one.  

**Bar‑raiser check:**  
* Clear ownership of end‑to‑end flow.  
* Quantified impact (cost & latency).  
* Deep dive into trade‑offs between serverless vs. EC2, spot vs. reserved instances.  
* Learning loop: post‑deployment monitoring revealed a 5 % spike in cold starts; I added provisioned concurrency to Lambda, improving consistency by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
