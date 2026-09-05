---
qid: ing_80184898b0__star__local
question: 'Explain: Option 3: Bloom Filter — How to Avoid Crawling Duplicate URLs
  at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 329
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:47-05:00'
sources: []
---

**Situation**  
At a previous role, I worked on the internal crawler for a large content aggregation platform that indexed over 500 million new pages daily. Our duplicate‑URL detection was a bottleneck: each URL had to be checked against a massive in‑memory hash table, and as traffic grew we hit memory limits and latency spikes.

**Task**  
I needed to devise a scalable mechanism to filter out duplicate URLs before the crawling pipeline consumed resources, without sacrificing accuracy or adding significant overhead.

**Action**  
I introduced a Bloom filter—a space‑efficient probabilistic data structure—into the front‑end of the crawler. Using Go’s `github.com/willf/bloom` library, I configured a 1 Gb filter with a false‑positive rate of <0.01%. Each new URL was hashed into the Bloom filter; if it returned “not present,” we forwarded it to the fetcher and added it to the filter. For URLs that hit the filter, we dropped them immediately, avoiding redundant network calls. I also implemented a periodic reset strategy tied to our daily ingestion cycle to keep the false‑positive rate stable.

**Result**  
The change cut duplicate crawl attempts by 96 %, reducing crawler CPU usage from 75 % to 28 %. Storage requirements fell from 2 TB of hash tables to just 1 Gb for the filter, freeing memory for other services. I learned how probabilistic data structures can provide near‑perfect performance at web scale when tuned correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
