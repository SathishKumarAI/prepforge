---
qid: ing_9479bf4a49__aws__local
question: 'Explain: Content Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 550
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:44-05:00'
sources: []
---

**Situation (S)** – I led a team that built a web‑crawler for an e‑commerce recommendation engine. The crawler produced >10 TB of raw HTML per day, but duplicate pages inflated storage costs by 35 % and slowed downstream ML pipelines.

**Task (T)** – Design a scalable content‑deduplication layer that runs in near real‑time, keeps latency <2 s per page, and cuts storage usage to <15 % of the raw crawl volume while preserving all unique URLs for indexing.

**Action (A)**  
1. **Ingest & Fingerprint** – Each crawled document is streamed into **Amazon Kinesis Data Streams**; a Lambda function computes a SHA‑256 fingerprint of the canonicalized body after stripping boilerplate and normalizing whitespace.  
2. **Deduplication Store** – Fingerprints are written to an **Amazon DynamoDB** table (partition key = hash, sort key = crawl timestamp). A TTL of 30 days keeps only recent history.  
3. **Deduplication Logic** – If the hash exists, the crawler writes a lightweight *duplicate record* to S3; otherwise it stores the full page in an S3 bucket partitioned by domain and date.  
4. **Cost & Availability** – DynamoDB’s on‑demand mode handles 10 M requests/sec with <99.9 % availability. Using S3 Intelligent‑Tiering reduces storage costs for infrequently accessed duplicates.  

**Result (R)** – After launch, duplicate pages dropped from 35 % to 12 % of total storage, saving $120K annually. Crawl latency remained under 1.8 s per page, and the deduplication layer scaled automatically to peak loads during product launches.

---

### Leadership Principles
- **Ownership** – I took end‑to‑end responsibility for the entire pipeline, from ingestion to cost monitoring.  
- **Dive Deep** – I benchmarked fingerprint collision rates, tuned DynamoDB provisioned capacity, and performed load tests that revealed a 5× throughput gap before iteration.  

### Bar‑raiser Takeaways
- Demonstrated *quantified impact* (cost savings, latency).  
- Showed *depth* by explaining trade‑offs between Lambda vs EC2, Kinesis vs SQS, and DynamoDB vs RDS.  
- Shared a failure: an early prototype used a naive hash causing 0.02 % false positives; we switched to SHA‑256 after profiling collision probabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
