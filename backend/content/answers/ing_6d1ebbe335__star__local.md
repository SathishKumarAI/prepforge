---
qid: ing_6d1ebbe335__star__local
question: 'Explain: Implementation — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 344
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:22-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time ad‑delivery platform that served millions of requests per second. Our cache hit rate was only 70 % because the cache store became saturated with keys that were never requested again, causing frequent evictions and lookups in the slow database.

**Task:**  
I had to reduce unnecessary DB hits by quickly determining whether a key might exist in the cache before querying it, without adding extra latency or memory overhead.

**Action:**  
I designed a Bloom filter layer using Redis‑Bloom. First, I modeled the expected cardinality (~10 M unique keys) and false‑positive tolerance (1 %) to choose 20 000 bits per bucket and 4 hash functions. The filter was updated on every cache insert/delete via pipelined Lua scripts to keep it in sync. In the request pipeline, we checked the Bloom filter first; a negative result meant a guaranteed miss, so we skipped Redis entirely. For positives, we still performed a standard get but logged false positives for later tuning. I also added TTL‑based eviction of stale entries from the filter using a background job.

**Result:**  
After deployment, cache misses dropped by 85 %, reducing DB traffic by ~3 M queries per day and cutting latency by 15 ms on average. The Bloom filter used less than 2 MB of RAM per shard, proving that lightweight probabilistic data structures can yield measurable performance gains in high‑throughput systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
