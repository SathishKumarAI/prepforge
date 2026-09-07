---
qid: ing_39772e6b1f__faang__local
question: 'Explain: Web Crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 526
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:31-05:00'
sources: []
---

**Web Crawler – System Design (FAANG style)**  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | • Goal: index pages for search, respecting politeness and freshness.<br>• Scale: 10⁹ URLs, 10⁵‑10⁶ fetches/sec. <br>• Constraints: bandwidth limits, robots.txt, duplicate detection, latency. | Sets scope & trade‑offs. |
| **Approach** | 1️⃣ *URL Frontier*: priority queue (depth, recency).<br>2️⃣ *Scheduler*: worker pool with per‑host throttling.<br>3️⃣ *Fetcher*: HTTP client + caching, retry, compression.<br>4️⃣ *Parser*: extract links, metadata, content.<br>5️⃣ *Deduplication*: Bloom filter + hash table.<br>6️⃣ *Storage*: NoSQL for raw pages; inverted index for search. | Layered design keeps components independent and scalable. |
| **Depth** | - Frontier: use a distributed K‑sorted list (e.g., Apache Kafka + RocksDB).<br>- Scheduler: token bucket per host, limit concurrent requests.<br>- Fetcher: async I/O, HTTP/2 multiplexing, respect `robots.txt` & `Crawl-delay`.<br>- Dedup: Bloom filter (≤1% false positives) → confirm with SHA‑256 hash. <br>Complexities: O(log N) enqueue/dequeue; O(1) dedup check. | Ensures politeness, high throughput, low memory. |
| **Edge Cases** | • Cyclic links → cycle detection via visited set.<br>• Large binary resources → size limit + skip if MIME type disallowed.<br>• Dynamic content (AJAX) → headless browser fallback for key sites.<br>• Malformed URLs → normalise & validate. | Prevents resource leaks and wasted bandwidth. |
| **Optimize & Communicate** | • Cache `robots.txt` per domain (TTL 24 h).<br>• Adaptive politeness: raise limits on fast‑responding hosts.<br>• Use CDN for static assets to reduce load.<br>Explain trade‑offs: higher dedup false positives → less storage but more re‑fetches. | Clear narrative shows you balance scalability, correctness, and cost—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
