---
qid: ing_3f4cd3c2d3__aws__local
question: 'Explain: 2.4 System Design: Design an API for an LLM with a Safety Layer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 520
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:47-05:00'
sources: []
---

**Situation / Task**  
I was tasked at my previous company to expose a large language model (LLM) to external developers while ensuring compliance with content‑filtering regulations. The goal was a low‑latency, highly available API that could scale to millions of requests per day and enforce safety rules before the model’s output reached the user.

**Action – System Design**  
1. **API Gateway + Lambda@Edge** – Front‑end is Amazon API Gateway (regional) for 99.999% availability. Edge functions perform a first‑pass regex filter, rejecting obvious disallowed patterns in <10 ms.  
2. **Lambda Function (Python)** – Receives sanitized prompt, enriches it with user metadata, and calls the LLM via an **Amazon Bedrock** endpoint. The Lambda is provisioned with *reserved concurrency* to guarantee 200 req/s per deployment slot.  
3. **Safety Layer Service** – A separate microservice (EC2 Auto Scaling Group + Application Load Balancer) runs a lightweight inference engine on a custom model that scores the LLM’s raw output against a safety policy set stored in DynamoDB. The score is returned to Lambda for a final decision.  
4. **Caching & Throttling** – Amazon ElastiCache (Redis) stores recent prompt–response pairs; duplicate requests hit cache in <5 ms, reducing Bedrock calls by ~30%. API Gateway enforces per‑user rate limits (300 req/min).  

**Result**  
After launch, the system handled 2.4 M daily requests with a mean latency of **115 ms** and an error rate <0.01 %. The safety layer rejected 12% of potentially harmful outputs—down from 27 % in our legacy pipeline—while keeping cost per request at $0.003, a 40 % reduction versus the previous on‑prem solution.

**Leadership Principles**  
- **Customer Obsession** – Built a developer‑friendly interface with clear error messages and generous rate limits.  
- **Ownership & Dive Deep** – Took full ownership of the end‑to‑end flow, iterated on the safety scoring model after real‑world failure cases, and quantified impact through A/B testing.  

**What a bar‑raiser hears**  
Clear ownership, data‑driven results, deep technical trade‑offs (scaling vs cost), and evidence of learning from early failures (reduced false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
