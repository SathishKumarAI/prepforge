---
qid: ing_c26367bdef__star__local
question: 'Q: Rate-limit errors are your top production failure. How does a gateway
  help, and how could it make things worse?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 397
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:37-05:00'
sources: []
---

**Situation:**  
At my last startup we exposed a public AI inference API that served image‑caption requests. Within two weeks of launch our traffic spiked from 200 to 15 000 QPS, causing frequent HTTP 429 “Too Many Requests” errors and a 12 % drop in overall user satisfaction.

**Task:**  
I had to design a gateway layer that would smooth traffic bursts, enforce per‑client quotas, and protect downstream inference pods from overload—while keeping latency low enough for real‑time use.

**Action:**  
We built an Envoy‑based API gateway with Lua scripts. The gateway read each client’s token bucket state from Redis, applied sliding‑window rate limits (5 req/s per key), and queued excess requests in a short‑lived buffer. For bursty traffic we added a “leaky bucket” fallback that let a limited number of requests slip through while throttling the rest. We also instrumented Prometheus alerts for 429 rates and exposed a dashboard to track per‑client usage. To avoid over‑aggressive throttling, we tuned the refill rate based on historical patterns and introduced a dynamic back‑off window that increased with sustained high load.

**Result:**  
After deployment, 429 errors dropped from 12 % to <1 %, and average latency improved by ~15 ms due to reduced pod thrashing. However, an initial misconfiguration of the refill rate caused legitimate heavy‑user accounts to hit throttling earlier than expected, leading to a temporary spike in complaints—highlighting that gateways can mask problems if not carefully tuned. I learned that while gateways protect infrastructure, they must be configured with real‑world traffic insights and continuously monitored for unintended side effects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
