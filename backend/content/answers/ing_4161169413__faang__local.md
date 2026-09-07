---
qid: ing_4161169413__faang__local
question: 'Explain: Web Crawler Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 558
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:04-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a **web‑crawler** that can fetch, parse, and persist millions of pages at scale.  
Assumptions:  
* Crawl budget (bandwidth, politeness) is limited but not zero.  
* URLs are discovered dynamically; duplicates must be avoided.  
* Data durability and queryability (e.g., for search indexing) are required.  

## 2️⃣ Approach  
1. **URL Frontier** – a distributed queue (Kafka/Redis Streams).  
2. **Crawler Workers** – stateless, pull URLs, obey `robots.txt`, respect politeness timers.  
3. **Deduplication Layer** – Bloom filter + per‑domain hash set to reject repeats.  
4. **Storage** – object store (S3) for raw HTML; metadata in a NoSQL DB (Cassandra/BigTable).  
5. **Processing Pipeline** – parse → extract links, text, meta → push back to frontier.  

## 3️⃣ Depth  
* **Throughput**: 10k requests/sec → 1 TB/day. Workers use async I/O and HTTP/2 multiplexing.  
* **Deduplication**: Bloom filter (false‑positive <0.01%) + per‑domain LRU cache for exact checks.  
* **Politeness**: Token bucket per domain; if a site is slow, back off exponentially.  
* **Storage Schema**:  
  ```text
  key = {host}/{path_hash}
  value = {html_blob_ref, metadata_json}
  ```
  Enables efficient range queries by host and quick dedupe.  

## 4️⃣ Edge Cases  
* **Dynamic content** (AJAX) → headless browser fallback.  
* **Non‑HTML resources** → store MIME type; skip heavy binaries.  
* **Redirect loops** → cap depth to 10 hops.  
* **Duplicate URLs with fragments/queries** → normalize before dedupe.  

## 5️⃣ Optimize & Communicate  
* **Batching**: Pull URLs in micro‑batches, write HTML blobs in bulk to S3 for cost savings.  
* **Compression**: Store gzipped content; decompress on read.  
* **Monitoring**: Metrics (latency, error rates) feed into a Grafana dashboard; alerts for crawler stalls.  

Narrative: “We treat crawling as a data‑pipeline problem: queue → worker → dedupe → store. By separating concerns and using proven distributed primitives, we achieve horizontal scalability while keeping politeness and durability in check.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
