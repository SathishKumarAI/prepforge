---
qid: ing_c3511cf1a0__aws__local
question: 'Explain: Webhooks — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 397
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:36-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was leading the migration of our recommendation engine from a monolith to a serverless micro‑service on AWS. The new service had to notify downstream analytics pipelines in real time without over‑loading the network or incurring high costs.

**Action (Dive Deep, Bias for Action, Invent & Simplify)**  
1. **Requirement Clarification** – Each consumer needed up to 10 k events/day with <5 s latency.  
2. **Design Choice** – Implemented a *webhook* model using API Gateway + Lambda to push events, rather than polling.  
3. **AWS Services** –  
   - **API Gateway (REST/HTTP)** for secure, throttled callbacks.  
   - **Lambda** for lightweight event formatting and retry logic.  
   - **SNS** as a fan‑out layer to decouple producers from multiple consumers.  
4. **Scalability & Availability** – API Gateway handles 10 k RPS with built‑in failover; Lambda auto‑scales, so no server provisioning.  
5. **Cost** – ~\$0.20 per million webhook calls vs polling’s \$1.50 for equivalent invocations.  

**Result (Deliver Results)**  
Reduced latency from 12 s (polling every 10 s) to <3 s. Cut infrastructure cost by 60% and improved error visibility (95 % SLA). Post‑deployment telemetry showed a 40 % drop in failed analytics jobs.

**Bar‑raiser Insight** – The answer shows ownership of the whole system, deep dive into trade‑offs, quantifiable impact, and a learning loop: “If callbacks fail, we’ll switch to SNS topics for retries.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
