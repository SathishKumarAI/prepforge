---
qid: ing_3244b498cd__star__local
question: 'Explain: Terminology — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 331
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:00-05:00'
sources: []
---

**Situation**  
During my senior year, I was part of a team that built a lightweight, AI‑augmented DNS resolver for an IoT startup. One evening we noticed latency spikes whenever users typed URLs from the device dashboard.

**Task**  
I had to pinpoint why the round‑trip time jumped above 200 ms and design a solution that kept it under 80 ms while still supporting dynamic content filtering.

**Action**  
First, I profiled the request chain: browser → local DNS cache → public resolver → origin server. I discovered our custom resolver was making synchronous HTTP/2 calls to a third‑party threat‑intel API for every lookup, blocking the DNS reply. I refactored it to batch queries and use an in‑memory LRU cache (using Redis‑lite) with a 5 min TTL. Then I introduced a lightweight ML model—a tiny decision tree trained on historical query patterns—to predict whether a domain would need threat checks, bypassing the API for 90% of benign requests. Finally, I wrapped the resolver in an async Rust service to eliminate thread blocking.

**Result**  
Latency dropped from ~220 ms to ~65 ms per lookup, and overall page load time improved by 35%. The caching strategy also cut API calls by 70%, saving cost. This experience taught me how to blend system‑level optimization with targeted ML inference for real‑time web performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
