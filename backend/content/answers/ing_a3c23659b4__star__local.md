---
qid: ing_a3c23659b4__star__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 392
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:50-05:00'
sources: []
---

**Situation** – At my last job I was tasked with revamping the image‑processing microservice that served millions of thumbnails per day. The cache hit ratio had slipped to 68 % because old entries were still being returned after a few minutes, causing stale images and unnecessary recompression.

**Task** – Build an in‑memory LRU cache that guarantees O(1) `get`/`put`, then extend it so each entry expires after a configurable TTL while still keeping the operations fast enough for our 20 k requests per second throughput target.

**Action** – I used a classic hash map + doubly linked list to get O(1) lookups and evictions. For TTL, I added a min‑heap of expiration timestamps that is checked lazily on `get`/`put`. When an entry is accessed or inserted, its timestamp is updated in both the heap and the node; if the current time exceeds the top of the heap during a `get`, I pop it and remove the node from the list. This keeps the cache size bounded while ensuring stale items are purged with minimal overhead. I also instrumented metrics to expose hit‑rate, eviction count, and average TTL compliance.

**Result** – After deployment, cache hits rose to 92 %, cutting recompression latency by ~35 %. The service handled 25 k req/s without a single out‑of‑memory event, and the TTL logic added less than 0.5 % CPU overhead. I learned that combining classic data structures with lazy expiration can satisfy strict real‑time constraints while keeping implementation simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
