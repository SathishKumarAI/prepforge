---
qid: ing_f37bbc081a__aws__local
question: 'Explain: Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 427
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:59-05:00'
sources: []
---

**Situation & Task**  
At Meta I led a cross‑functional team to migrate the real‑time recommendation engine from a tightly coupled batch pipeline into an **asynchronous microservice architecture** so that latency could drop below 50 ms for 70M daily users.

**Action**  
I broke the monolith into *producer* (event capture) and *consumer* (model inference) services.  
- Producers pushed events to **Amazon SQS**;  
- Consumers were serverless **AWS Lambda** functions triggered by SQS, each invoking a pre‑trained **SageMaker Endpoint** for inference.  
I added a caching layer with **ElastiCache Redis** to hit 95 % of requests in <5 ms.  
To guarantee high availability I used **Multi‑AZ deployments** and **Auto Scaling** on Lambda concurrency limits, and monitored with **CloudWatch**.

**Result**  
- Latency dropped from 200 ms to 45 ms (≈ 78 % improvement).  
- Cost fell by 35 % due to serverless scaling.  
- Model accuracy improved by 3 % after online A/B testing because we could iterate faster on user feedback.

**Learnings & Bar‑raiser cues**  
*Ownership*: I championed the shift, owning both code and ops.  
*Dive Deep*: We traced a 10 ms spike to a Redis eviction policy; fixing it reduced tail latency by 12 %.  
*Quantified Impact*: Metrics above demonstrate business value.  
*Learning from Failure*: A mis‑configured Lambda timeout caused data loss in early tests; we added idempotent retry logic and now guarantee at least once delivery.

**Leadership Principles** – **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
