---
qid: ing_4037aecf9e__star__local
question: 'Explain: URL Frontier Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 310
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:44-05:00'
sources: []
---

**Situation:**  
At my previous company we built a data‑collection platform for a competitive intelligence product. Our first prototype crawled about 10,000 URLs per day, but the queue grew exponentially and our latency hit 30 minutes—too slow to surface fresh news.

**Task:**  
I was tasked with redesigning the URL frontier so that we could handle millions of seed URLs, prioritize high‑value domains, and keep crawl latency under five minutes while respecting politeness policies.

**Action:**  
I introduced a sharded priority queue backed by Redis Streams. Each shard handled a hash bucket of hostnames to enforce per‑host throttling. I added a Bloom filter for de‑duplication across shards and an adaptive back‑off algorithm that raised the fetch interval for hosts hitting rate limits. The crawler workers pulled URLs via Kafka, processed them with asyncio, and pushed new URLs back into the stream after parsing. For freshness, I implemented a “time‑to‑live” (TTL) field so stale entries automatically expired.

**Result:**  
The new frontier cut crawl latency from 30 minutes to under five minutes while scaling to 2 million URLs/day. We reduced duplicate fetches by 68% and achieved a 45% higher coverage of target news sites. I learned that sharding on hostname plus dynamic back‑off is key for large‑scale, polite crawling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
