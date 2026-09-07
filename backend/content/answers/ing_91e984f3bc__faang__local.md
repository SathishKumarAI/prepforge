---
qid: ing_91e984f3bc__faang__local
question: 'Explain: Web crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 524
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:23:44-05:00'
sources: []
---

**Clarify**  
A web‑crawler is a distributed system that fetches, parses, and indexes web pages for search engines or analytics. I’ll assume we need high throughput, fault tolerance, politeness (robots.txt), deduplication, and scalability to billions of URLs.

**Approach**  
1. **Frontier** – priority queue of seed URLs.  
2. **Scheduler** – shards frontier by host/IP to avoid over‑loading a domain; respects crawl‑delay.  
3. **Fetcher workers** – HTTP clients that honor `robots.txt`, timeouts, and retries.  
4. **Parser & extractor** – HTML parser to pull links, metadata, and content.  
5. **Deduplication** – Bloom filter + checksum cache to avoid re‑fetching the same page.  
6. **Storage** – distributed object store for raw pages; a graph database or key/value store for link structure.  
7. **Indexer** – downstream pipeline that tokenizes and updates inverted indexes.

**Depth**  
- *Throughput*: Use sharded queues (Kafka) with per‑host rate limits; each worker runs in a container for isolation.  
- *Politeness*: `robots.txt` fetched once per host, cached for 24 h; crawl‑delay enforced by scheduler.  
- *Fault tolerance*: Workers report status to a central monitor; failed URLs re‑queued with exponential backoff.  
- *Deduplication*: Bloom filter (≈1% false positive) plus HMAC of content stored in Redis; if duplicate, skip parsing.

**Edge Cases**  
- Cyclic redirects → limit depth and detect loops.  
- Dynamic content (AJAX) → optional headless browser fallback.  
- Large binary resources → stream to disk without loading into memory.  
- Rate limits / CAPTCHAs → rotate IPs or use proxy pools.

**Optimize & Communicate**  
To improve latency, batch HTTP requests per host and compress responses. For scalability, partition the frontier by hash of domain; this keeps related URLs together, reduces cross‑node traffic. I’d explain trade‑offs: more aggressive politeness lowers hit rate but ensures compliance; tighter deduplication saves storage but costs CPU. In an interview, I’d emphasize that a clean separation of concerns (scheduler, fetcher, parser) makes the system testable and maintainable—key to FAANG‑grade reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
