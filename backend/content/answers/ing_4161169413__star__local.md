---
qid: ing_4161169413__star__local
question: 'Explain: Web Crawler Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:13-05:00'
sources: []
---

**Situation**  
In my senior capstone I built a search‑engine prototype for a local university library. The crawler had to index ~120 000 pages from the campus domain, each averaging 2 MB of HTML, while keeping memory usage below 8 GB on a single node.

**Task**  
Design an efficient storage layer that could ingest, deduplicate, and serve documents at query time with <300 ms latency, without relying on external cloud services.

**Action**  
I chose a hybrid approach: a sharded RocksDB instance for metadata (URL, last‑modified, checksum) and compressed Parquet files in HDFS for raw HTML. URLs were hashed to a 64‑bit fingerprint; we stored only the fingerprint in RocksDB to detect duplicates quickly. For each new page, I ran a Bloom filter first to avoid disk reads on obvious repeats. If unique, I streamed the content into a Parquet writer that used Snappy compression and columnar layout (storing only text and title columns). Indexing was batched; every 10 k pages we flushed to disk and updated an inverted index in Lucene, which read from the same HDFS location.

**Result**  
The crawler processed 120 000 pages in 18 hours, consuming <6 GB RAM. Query latency dropped from 1.2 s (plain flat files) to 280 ms on average. I learned that careful partitioning of metadata and compressed columnar storage can dramatically reduce both I/O and memory footprint while keeping the system simple enough to run on commodity hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
