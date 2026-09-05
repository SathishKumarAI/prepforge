---
qid: ing_1b075a87bc__star__local
question: 'Explain: HTTP Method Behavior — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 326
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:33-05:00'
sources: []
---

**Situation** – I was leading the redesign of our recommendation API for a large e‑commerce platform that served millions of requests per day. The old endpoint used `POST` to fetch recommendations, and every call triggered a new model inference, causing duplicate predictions and inflated GPU usage.

**Task** – I needed to make the service cost‑effective, reduce latency, and guarantee consistent results for identical inputs while still allowing dynamic user context updates.

**Action** – First, I switched the endpoint to `GET` with query parameters representing immutable features (user ID, timestamp). For mutable features like browsing history, I introduced a short‑lived cache keyed by a hash of those features. The GET call was declared idempotent: multiple identical requests returned the same cached prediction without re‑computing. When a user performed an action that changed their context, we invalidated the cache entry and triggered a single inference using `POST` under the hood, but exposed it as a background job so clients could poll with GET later. I also added ETag headers to let browsers reuse responses.

**Result** – The GPU usage dropped 45 %, overall latency fell from 350 ms to 120 ms, and we saw a 30 % reduction in duplicate inference calls. I learned that careful HTTP method semantics can dramatically improve ML system efficiency and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
