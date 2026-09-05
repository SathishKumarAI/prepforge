---
qid: ing_1dc3ce1b89__star__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 477
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:20-05:00'
sources: []
---

**Situation:**  
In a recent recommendation engine project I was integrating OpenAI’s GPT‑4 API to generate personalized user summaries. The production load hit 15 k requests per minute, and the cost per token was high. Every time the API throttled or returned a 502 we lost a batch of users’ data.

**Task:**  
I needed a retry mechanism that wouldn’t inflate costs, would respect rate limits, and could distinguish between transient network glitches and semantic errors (e.g., bad prompt).

**Action:**  
I built a two‑layer strategy:  
1. **Circuit breaker + token bucket** – the breaker opened after 3 consecutive failures, then a short pause (2 s) before re‑attempting; the bucket limited us to 200 req/min per key.  
2. **Exponential backoff with jitter** – each retry waited 500 ms × 2^n plus random ±100 ms, capped at 8 s, and stopped after 4 tries.  
3. **Error classification** – I parsed the `error.type` field; only “request_timeout” or “service_unavailable” triggered a retry; “invalid_request_error” (e.g., bad prompt) was logged and skipped to avoid endless loops.  
4. **Batching & caching** – identical prompts were deduplicated per minute, and results cached in Redis for 30 s to share across users.

**Result:**  
After deployment, request‑timeouts dropped from 12% to <1%, overall token usage fell by ~18%, and the cost per user summary decreased by $0.03 on average. I learned that treating LLM APIs like a “rate‑limited, expensive REST call” requires tighter control of retries and smarter error handling to keep budgets in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
