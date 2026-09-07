---
qid: ing_580ffa64ac__faang__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:32-05:00'
sources: []
---

**Clarify**  
> *“Design a web crawler.”*  
We’ll assume the goal is to fetch and store pages for indexing, respecting politeness (robots.txt), handling large‑scale sites, and ensuring deduplication. I’d confirm: target scale (pages/sec), storage budget, crawl frequency, and whether we need real‑time freshness.

**Approach**  
1. **Frontier & Scheduler** – priority queue of URLs, segmented by domain to enforce politeness and rate limits.  
2. **Fetcher Workers** – stateless HTTP clients that honor `robots.txt`/Crawl-delay, retry on transient errors, and stream responses to storage.  
3. **Deduplication Layer** – Bloom filter for seen URLs + hash table for content fingerprints (e.g., SHA‑256) to avoid re‑fetching identical pages.  
4. **Storage** – object store (S3/Blob) keyed by URL hash; metadata in a distributed DB (Cassandra/Spanner).  
5. **Back‑off & Scheduling** – exponential back‑off for failed domains, adaptive politeness based on server response codes.

**Depth**  
- *Complexity*: Frontier ops are O(log N) per URL insertion/deletion. Fetcher throughput scales linearly with worker count; storage is O(1) per page.  
- *Trade‑offs*: Bloom filter false positives reduce frontier size but risk missing rare URLs; we can use a 2‑stage filter to mitigate.

**Edge Cases**  
- Dynamic content: detect `robots.txt` blocks, skip or use headless browser if needed.  
- Cycles & duplicate redirects: maintain redirect chain history.  
- Rate limits: monitor per‑domain request latency and throttle accordingly.

**Optimize & Communicate**  
To improve freshness, introduce a “recrawl queue” based on content change detection (ETag/Last‑Modified). For scalability, partition frontier by hash prefixes to distribute load. I’d explain each layer’s responsibility, justify choices with metrics (e.g., 10k pages/sec, <1 % duplicate fetches), and outline monitoring dashboards for latency, error rates, and storage usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
