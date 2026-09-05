---
qid: ing_4d948677ef__star__local
question: 'Explain: URL Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 328
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:41-05:00'
sources: []
---

**Situation:**  
In my last role I led the redesign of our web‑crawler for a large news aggregator. The old system was crawling millions of URLs per day, but we were ingesting duplicate pages 30 % of the time because every new request hit the same domains with different query parameters.

**Task:**  
I had to implement an efficient URL deduplication pipeline that could keep up with 10 M requests/day while minimizing memory usage and latency for the crawler’s scheduling queue.

**Action:**  
I introduced a two‑stage approach. First, I built a Bloom filter (size 512 MB, false‑positive rate 0.1 %) to reject obvious duplicates in real time. For URLs that passed the filter, I ran a SHA‑256 hash of a canonicalized form (scheme, host, path, sorted query keys, stripped fragments). The hash was stored in a Redis cluster with a TTL matching our crawl frequency. When a URL hit the cache, it was dropped; otherwise it entered the work queue. To handle high write throughput I sharded Redis across 8 nodes and used pipelining for batch writes.

**Result:**  
Duplicate fetches fell from 30 % to under 2 %, saving ~200 GB of bandwidth per week. Crawl latency improved by 15 %. The experience taught me how to balance probabilistic data structures with exact lookups, and the importance of canonicalizing URLs before hashing to avoid false negatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
