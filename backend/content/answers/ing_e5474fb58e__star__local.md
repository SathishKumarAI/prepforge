---
qid: ing_e5474fb58e__star__local
question: 'Explain: Step 2 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 308
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:21-05:00'
sources: []
---

**Situation:**  
While leading a product‑engineering team for a search‑indexing startup, we hit a bottleneck in our crawler: at peak traffic it was fetching the same URL thousands of times each day, inflating storage costs and throttling our downstream pipelines.

**Task:**  
Design and deploy a scalable deduplication system that could keep up with 10 M new URLs per hour without compromising crawl freshness or latency.

**Action:**  
I introduced a two‑tier approach. First, at ingestion we hash the canonicalized URL (using Murmur3) and publish the hash to a distributed Redis cache with a TTL of 24 h; if the key exists, we skip that fetch. Second, for high‑traffic domains we built a Bloom filter cluster on top of Apache Kafka streams, updating it in real time as new URLs arrive. The Bloom filter’s false‑positive rate was tuned to <0.1%, so we only missed a handful of unique pages. We also added a lightweight checksum on the page body for content changes and scheduled re‑crawls accordingly.

**Result:**  
Duplicate fetches dropped from 45 % of total traffic to under 3 %. Storage usage fell by 30 M GB annually, and crawl latency improved by 15 %. I learned that combining deterministic hashing with probabilistic filters can handle Google‑scale workloads while keeping the system simple and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
