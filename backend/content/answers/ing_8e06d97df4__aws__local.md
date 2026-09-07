---
qid: ing_8e06d97df4__aws__local
question: 'Explain: Step 1: Register an Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 376
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:15-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a real‑time analytics platform that ingested event data from thousands of partner apps via webhooks. The first step was to expose a highly available “Register Endpoint” API so partners could securely register their callback URLs.

**Action (Design)**  
* **API Gateway + Lambda Authorizer** – to front the endpoint, enforce HTTPS and OAuth 2.0 tokens.  
* **DynamoDB** – store `{partner_id, webhook_url, secret_key, status}` with a TTL for stale entries.  
* **SNS Topic** – publish every successful registration; downstream services (e.g., Lambda that schedules retries) consume it asynchronously.  
* **CloudWatch Alarms & X‑Ray** – monitor latency (< 200 ms) and error rates.  

We added *rate limiting* via API Gateway’s quota, and a *deduplication window* to guard against accidental duplicate registrations.

**Result**  
Within two weeks of launch, we handled 12 M registration requests with <0.5 % failure rate and 95 th‑percentile latency of 140 ms. Cost stayed under $2k/month thanks to DynamoDB on-demand scaling.  

**Reflection (Bar‑raiser focus)**  
I owned the full flow, dived deep into DynamoDB’s consistency model to avoid race conditions, quantified impact through live metrics, and iterated on the design after a first‑phase spike that revealed a throttling issue—quickly adding API Gateway quotas resolved it. This exemplifies **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
