---
qid: ing_9426a8947f__star__local
question: 'Explain: Reliability Targets — Reliability Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 391
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:19-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a recommendation engine for an e‑commerce platform that served over 1 million active users per day. The product owner insisted on a 99.9% uptime target because any downtime would directly impact sales.

**Task:**  
I had to design the system so it met that reliability target while keeping latency under 200 ms and cost within budget. This required mapping out the “reliability patterns” (e.g., graceful degradation, retry with exponential backoff, circuit breaker) that could be applied across our microservices.

**Action:**  
First, I conducted a failure mode analysis on each service—identifying points where model inference, data cache, and network calls could fail. Then I implemented a layered approach:  
1. **Graceful degradation** – when the GPU inference cluster was overloaded, we switched to a CPU fallback that returned a pre‑computed “best‑guess” vector instead of blocking the request.  
2. **Retry with exponential backoff** – for transient DB reads, we added a Polly policy that retried up to three times before giving up.  
3. **Circuit breaker** – after five consecutive failures in the recommendation service, traffic was diverted to a static cache until health checks restored normal operation.  
I also set up Prometheus alerts and an automated rollback script.

**Result:**  
After deployment, our uptime rose from 99.2% to 99.95% over six months, keeping latency below 180 ms on average. Monthly ops costs dropped 12% because the fallback logic reduced GPU usage during peak loads. I learned that a disciplined pattern catalog not only meets SLAs but also makes incident response predictable and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
