---
qid: ing_8dfeb07e88__star__local
question: 'Explain: Implement a client pool over multiple LLM providers with failover:
  providers fail, time out, or rate-limit, and callers should just get a completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 346
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:54-05:00'
sources: []
---

**Situation** – In our product we needed to keep generating chat responses for millions of users while staying under the cost cap. The internal SLA required that any request return in under 800 ms, even if a provider was throttled or temporarily down.

**Task** – Build a resilient client pool that automatically switches between OpenAI, Anthropic, and an on‑prem Llama model. It had to honor per‑provider rate limits, retry on timeouts, and fall back without exposing failures to the caller.

**Action** – I designed a lightweight `LLMClientPool` class in Go. Each provider was wrapped in a `ProviderAdapter` that exposed a common `Generate(ctx, prompt)` method. The pool maintained an atomic queue of adapters ordered by cost‑efficiency. For each request, it tried providers sequentially: if the call returned a 429 or a context deadline exceeded error, it logged the incident and moved to the next adapter. I added exponential backoff for transient errors and used OpenTelemetry to trace latency per provider. The pool also maintained a sliding window of success rates; adapters falling below 95 % success were temporarily deprioritized.

**Result** – Deployment reduced average response time from 1.2 s to 0.65 s, keeping 99.7 % of requests within SLA. Cost per completion dropped by 18 % because the system automatically shifted traffic to the cheaper on‑prem model during peak OpenAI pricing. I learned that a simple ordered retry strategy, combined with real‑time telemetry, can deliver robust AI service without complex orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
