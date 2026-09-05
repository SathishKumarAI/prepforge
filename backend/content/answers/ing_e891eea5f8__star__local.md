---
qid: ing_e891eea5f8__star__local
question: 'Explain: Web Crawlers — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 325
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:14-05:00'
sources: []
---

**Situation** – While leading the data‑engineering team at a startup that indexed millions of news articles, our crawler was hitting memory limits and re‑fetching URLs repeatedly, slowing down new content ingestion by 35 %.  

**Task** – Design an efficient duplicate‑URL detection mechanism that fits in RAM, scales to billions of URLs, and keeps the crawl rate above 5k pages/sec.  

**Action** – I introduced a probabilistic Bloom filter as the first‑pass filter. Using a 512 MB bit array with 4 hash functions (FNV‑1a + Murmur3), we reduced memory consumption from 16 GB to under 1 GB while keeping false positives <0.01 %. The crawler hashes each URL, checks the Bloom filter; if all bits are set it skips fetching, otherwise it proceeds and inserts the URL into the filter. I also implemented a tiered strategy: a fast in‑memory Bloom for hot domains and a disk‑backed Cuckoo hash table for long‑term storage to keep the false‑positive rate low for rarely visited sites.  

**Result** – Duplicate fetches dropped from 12 % to <0.1 %, crawl throughput increased by 50 %, and memory usage stayed below 600 MB. I learned that combining probabilistic data structures with a multi‑tiered approach can drastically improve scalability without compromising accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
