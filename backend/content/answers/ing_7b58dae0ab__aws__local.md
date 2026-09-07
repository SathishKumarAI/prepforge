---
qid: ing_7b58dae0ab__aws__local
question: 'Explain: Design the reliability layer for calls to an LLM provider: timeouts,
  retries, circuit breakers, idempotency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 393
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a reliability layer for our micro‑service that calls an external LLM provider (OpenAI). The goal was to keep the SLA at **99.9 % uptime** while keeping latency < 200 ms for 95 % of requests.

**Action**  
1. **Timeouts** – Set a hard deadline of *180 ms* per request; anything longer falls back to an in‑house fallback model.  
2. **Retries & Idempotency** – Implemented exponential backoff (100 ms → 200 ms → 400 ms) with a maximum of 3 attempts, guarded by a unique idempotency token derived from the prompt hash. This guarantees no duplicate inference costs.  
3. **Circuit Breaker** – Used AWS *API Gateway* + *Lambda Destinations* to track failures; after 5 consecutive 5xx responses the breaker trips for 30 s, redirecting traffic to a cached response.  
4. **Observability** – Employed CloudWatch metrics (`llm_latency`, `llm_error_rate`) and X-Ray traces; set SNS alerts when error rate >1%.

**Result**  
After deployment, uptime rose from *98.7 %* to *99.92 %*, latency improved by 35 %, and cost savings of **18 %** were realized due to fewer expensive retries.  

> **Leadership Principles**: *Customer Obsession* (ensuring a smooth user experience), *Ownership* (owning the end‑to‑end reliability stack).  
> **Bar‑raiser focus**: quantified impact, deep dive into failure modes, and learning loop from post‑mortems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
