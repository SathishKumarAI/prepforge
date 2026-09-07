---
qid: ing_f7e7cbb4fc__aws__local
question: How would you build an abstraction over multiple LLM providers, and what
  breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 455
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:16-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Situation:** My team needed a unified API for our product that could call GPT‑4, Claude, and Llama‑2 without hard‑coding vendor logic. The risk was vendor lock‑in and unpredictable latency spikes.  
> **Task:** Design an abstraction layer that hides provider differences, guarantees 99.9 % availability, and limits cost to <$5k/month while keeping SLA <200 ms per request.  
> **Action:**  
> * Built a **Provider Gateway** using **API Gateway + Lambda@Edge** as the front‑end; each Lambda function routes requests based on an internal `provider_pool` table stored in DynamoDB.  
> * Implemented **Circuit Breaker** logic (Hystrix pattern) inside each Lambda to detect slow or failed calls and redirect traffic automatically.  
> * Added a **Metrics Collector** using CloudWatch Alarms and X-Ray traces to capture per‑provider latency, error rates, and cost per token.  
> * Introduced a **Dynamic Pricing Layer** that favors cheaper providers when request volume >10k/month, shifting 60 % of traffic to open‑source LLMs, saving ~30 %.  
> **Result:** In production, we achieved 99.8 % uptime, reduced average latency from 350 ms to 180 ms, and cut costs by 28 % in the first quarter. The abstraction also enabled us to add a new provider (Gemini) with zero downtime, proving true ownership of the API contract.  

**Bar‑raiser notes:**  
* Ownership: I owned both design and monitoring.  
* Dive Deep: Used CloudWatch metrics to pinpoint vendor slowdowns.  
* Quantified Impact: 28 % cost savings, 180 ms latency.  
* Learning from Failure: Initial rollout caused a 15 % spike; we fixed it by adding retries with exponential backoff.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
