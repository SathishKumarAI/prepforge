---
qid: ing_8dc06eb46e__faang__local
question: 'Explain: High-Level System Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 535
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:36-05:00'
sources: []
---

## Clarify  
We need a **web‑crawler** that discovers URLs, downloads pages, and stores results for later indexing.  
Assumptions to confirm:  
* Scale – millions of sites, billions of pages.  
* Latency – pages must be fetched quickly but not overload hosts.  
* Freshness – revisit policy (e.g., 7‑day cycle).  
* Politeness – respect `robots.txt` and rate limits.  

## Approach  
1. **URL Frontier** – priority queue (min‑heap) of URLs with metadata (depth, host, last‑fetched).  
2. **Fetcher Workers** – stateless HTTP clients pulling from the frontier; throttle per‑host connections.  
3. **Parser & Extractor** – parse HTML, extract links, normalize, dedupe against a Bloom filter + hash table.  
4. **Storage** – raw page blobs in object store (S3/Blob) and metadata in a key‑value DB (DynamoDB).  
5. **Scheduler** – background job that re‑queues URLs after their revisit interval.  

## Depth  
* **Frontier persistence**: use Redis Streams + Kafka for durability; each URL as a record with priority score (`-lastFetched`).  
* **Politeness**: maintain per‑host token bucket (max 5 req/s).  
* **Deduplication**: Bloom filter to reject obvious duplicates, then hash table for exact check.  
* **Scalability**: horizontal scaling of fetcher pods; statelessness allows autoscaling.  
* **Complexity**: Fetching O(1) per URL; dedupe O(1) expected with Bloom filter.  

## Edge Cases  
* Broken links → 404 → re‑queue? Usually no.  
* Infinite loops (e.g., pagination) – depth cap and duplicate detection prevent.  
* Heavy sites blocking bots → fallback to `robots.txt` or CAPTCHAs.  

## Optimize & Communicate  
- **Batch HTTP**: use multiplexed connections (HTTP/2) to reduce latency.  
- **Back‑pressure**: if frontier grows, throttle producers (seeders).  
- **Monitoring**: metrics per host, error rates, queue depth; alert on stalls.  
I’d explain each component’s responsibility, trade‑offs (Bloom filter false positives vs speed), and how they fit together to meet scale, freshness, and politeness goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
