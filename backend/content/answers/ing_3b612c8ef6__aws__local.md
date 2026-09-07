---
qid: ing_3b612c8ef6__aws__local
question: 'Explain: Query timeout — Circuitbreaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 428
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:31-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the ML inference pipeline for a real‑time recommendation service that served ~200 k requests/sec. A sudden spike in traffic caused our GPU workers to hit a hard timeout, triggering an exponential back‑off loop and a 15 % drop in NPS. The business asked me to implement a *query‑timeout circuit breaker* so we could fail fast, protect downstream services, and recover quickly.

**Action**  
I scoped the requirement:  
1. Detect per‑request latency > 250 ms.  
2. Open the circuit after 3 consecutive failures within a rolling 30‑second window.  
3. Keep it open for 5 s before allowing test traffic.  

Implementation used **Amazon API Gateway + Lambda@Edge** to wrap the inference endpoint, storing state in **DynamoDB TTL** (key: `serviceName|window`). The Lambda increments a counter and checks the threshold; if exceeded it returns HTTP 429 (“Too Many Requests”). When the window expires, the circuit automatically closes.  

I added an SNS alarm that fired when the circuit opened, auto‑scaling the GPU fleet by 20 % to absorb the load. Unit tests hit > 95 % coverage and integration tests ran on a nightly CI pipeline.

**Result**  
After deployment, query latency dropped from 1.2 s to 350 ms for 99.9 % of requests; NPS rose from 72 to 84 within two weeks. The circuit breaker also cut GPU idle time by 18 %, saving ~\$12k/month in compute costs.

**Reflection**  
I learned that *ownership* means anticipating failure modes early and building graceful degradation. By “dive deep” into latency telemetry I identified the exact threshold that balanced user experience with cost, a key trade‑off in any scalable ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
