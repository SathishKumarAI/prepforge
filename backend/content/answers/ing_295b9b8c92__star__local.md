---
qid: ing_295b9b8c92__star__local
question: 'Explain: RedisBloom — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:05-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time recommendation engine that served millions of users per day. The backend stored user preference sets in Redis, and every request required checking if an item was already recommended to avoid duplicates. A simple key lookup was too slow because the data set grew beyond 10 M items and caused memory thrashing.

**Task:**  
I needed a lightweight, probabilistic structure that could tell us “likely not seen” with minimal space, while still fitting into our existing Redis cluster without adding extra infrastructure.

**Action:**  
I introduced **RedisBloom**, a Bloom filter module for Redis. I designed a schema where each user had a dedicated Bloom filter stored as a Redis key (e.g., `bf:user:{id}`). We configured the filter with a 1 % false‑positive rate, which required about 12 bits per element—dramatically smaller than storing full sets. During request handling, we first queried the Bloom filter; if it returned “not present,” we proceeded to generate and store the recommendation, then added the item ID to the filter via `BF.ADD`. For items that the filter flagged as possibly seen, we performed a secondary check against a small Redis set only when necessary, keeping false positives low.

**Result:**  
The memory footprint dropped from 3 GB for raw sets to under 400 MB across the cluster. Lookup latency improved by ~35 %, and our recommendation throughput increased from 12k to 18k requests per second. I learned that coupling probabilistic data structures with Redis modules can yield significant performance gains while keeping operational complexity minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
