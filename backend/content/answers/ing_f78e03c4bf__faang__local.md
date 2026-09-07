---
qid: ing_f78e03c4bf__faang__local
question: 'Explain: Search engine — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 558
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:44-05:00'
sources: []
---

**Clarify**  
You’re asked to design the *web‑crawler* component of a search engine – the system that discovers, fetches, and stores web pages for indexing. Confirm assumptions: (1) crawl scale (billions of URLs), (2) freshness requirement, (3) politeness constraints per host, (4) storage format (raw HTML + metadata), (5) integration with the indexer.

**Approach**  
1. **URL Frontier** – priority queue keyed by recrawl score and domain weight.  
2. **Crawler Workers** – stateless HTTP fetchers that honor `robots.txt`/Crawl‑Delay.  
3. **Politeness & Rate Limiting** – per‑host token buckets; global bandwidth cap.  
4. **Duplicate Detection** – Bloom filter + fingerprint (e.g., SHA‑256) to avoid re‑fetching identical content.  
5. **Storage Layer** – distributed object store (S3/Blob) for raw pages, metadata DB (Cassandra) for URL state.

**Depth**  
- *Frontier*: use a priority queue backed by Redis Streams; each entry contains `URL`, `next_fetch_time`, `depth`.  
- *Fetcher*: async HTTP client with retry/backoff; parse `Last‑Modified` and `ETag` to support conditional GETs.  
- *Dedup*: maintain a HyperLogLog per domain for cardinality, Bloom filter for quick membership checks.  
- *Politeness*: each host gets a token bucket (capacity = max concurrent connections); workers acquire before request; refill at `1/Delay`.  
- Complexity: fetch O(1) per URL; dedup O(k) where k is hash size; storage O(total pages). Trade‑offs: larger Bloom filter → fewer false positives but higher memory.

**Edge Cases**  
- **Robots.txt changes** mid‑crawl.  
- **Redirect loops** or 3xx storms.  
- **Large binary assets** (images, PDFs) – decide whether to store or skip.  
- **SSL/TLS failures** on rare hosts.  

**Optimize & Communicate**  
- Introduce *adaptive politeness*: throttle hosts that consistently return stale content.  
- Use *incremental crawling* by monitoring change signals from sites (webhooks/Push API).  
- Present the design as a pipeline diagram, highlighting data flow and failure handling. This shows clear reasoning, depth in trade‑offs, and readiness for scalability – key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
