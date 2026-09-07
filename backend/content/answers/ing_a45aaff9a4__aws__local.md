---
qid: ing_a45aaff9a4__aws__local
question: 'Explain: How Event-Driven Architecture Works — Event-Driven Architecture
  (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 381
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:05-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Our recommendation engine lagged during holiday spikes—latency rose to 1 s, hurting conversion by ~12 %.  
*Task:* Redesign the data pipeline so that new user interactions trigger real‑time model updates without overloading downstream services.  
*Action:* I championed an **Event‑Driven Architecture (EDA)** using Amazon EventBridge and Lambda. Each click or purchase emitted a JSON event to EventBridge; rules routed events to distinct consumer Lambdas (e.g., *UpdateModel*, *NotifyUser*, *AuditLog*). I added idempotent Kinesis Streams for replayability, ensuring no data loss if a function fails.  
  - **AWS Services:** EventBridge (routing), Lambda (stateless compute), Kinesis Data Streams (buffering), DynamoDB (feature store), SageMaker Endpoint (online inference).  
  - **Scalability:** Autoscaling Lambdas handle burst traffic; Kinesis shards scale horizontally, keeping 99.9 % availability during peak load.  
  - **Cost & Trade‑offs:** Serverless eliminates idle capacity, costing ~30 % less than EC2‑based pipelines; trade‑off is higher cold‑start latency, mitigated by provisioned concurrency for critical functions.

*Result:* Latency dropped to <200 ms, conversion rose by 8 %, and operational cost fell 32 %.  
**Bar‑raiser notes:** I demonstrated ownership (led the migration), deep dive (chose specific services & tuning), quantified impact (metrics above), and learned from initial cold‑start failures—now we auto‑warm Lambdas during peak hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
