---
qid: ing_728da240b0__aws__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 399
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:28-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**  
> 
> **Situation:** I led the redesign of an internal AI‑inference service where users submit jobs that take 2–10 min to run. The old synchronous endpoint caused timeouts and poor UX.  
> 
> **Task:** Build a scalable, low‑cost API that lets clients kick off jobs and poll or subscribe for results without blocking.  
> 
> **Action:**  
> * Adopt an asynchronous pattern: expose `/jobs` (POST) to enqueue with **Amazon SQS**; return a UUID.  
> * Use **AWS Lambda** + **Step Functions** to orchestrate the 2–10 min job, persisting state in **DynamoDB** (`JobId`, `Status`, `ResultLocation`).  
> * Provide `/jobs/{id}` (GET) for polling and an SNS topic for push notifications.  
> * Cache recent results in **ElastiCache‑Redis** to serve repeat requests instantly.  
> * Implement CloudWatch metrics (`JobsSubmitted`, `AvgRunTime`) and alarms; auto‑scale Lambda concurrency via reserved capacity.  
> 
> **Result:** After rollout, client wait times dropped from 8 min (blocking) to <2 s API latency; throughput increased by 4× with a 30% cost reduction. Customer satisfaction scores rose from 3.5/5 to 4.7/5 in the next NPS survey.  
> 
> **Learnings:** Validate idempotency early—duplicate POSTs caused duplicate jobs until I added a uniqueness constraint in DynamoDB, saving $200k/month. This exercise reinforced ownership and data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
