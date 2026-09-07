---
qid: ing_4d948677ef__aws__local
question: 'Explain: URL Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 383
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:49-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While leading a web‑crawling team for an e‑commerce search engine, duplicate URLs caused stale product pages and inflated crawl budgets by ~35 %.  
*Task*: Design a URL deduplication pipeline that scales to 10⁹ URLs/day while keeping latency < 200 ms per fetch.  
*Action*:  

1. **Ingest**: Use Kinesis Data Streams to buffer raw HTTP requests.  
2. **Dedup**: A Lambda layer computes a SHA‑256 fingerprint of the URL (normalized by scheme, host, path, sorted query keys). The fingerprint is stored in an Amazon DynamoDB Global Secondary Index with TTL 24 h, acting as a cache.  
3. **Filtering**: If the key exists → drop; else → forward to SQS FIFO for downstream crawler workers.  
4. **Analytics**: Streams the deduplication events into Athena via Glue catalog for reporting.

*Result*: Reduced duplicate fetches by 92 %, saving ~US$12k/month on EC2/Spot costs and improving index freshness by 18 %. The system sustained 5× peak traffic without SLA violations, thanks to DynamoDB’s provisioned capacity auto‑scaling and Lambda’s concurrency limits.  

**Bar‑raiser Notes**

- Demonstrated *ownership* by turning a pain point into a measurable savings metric.  
- Showed *dive deep* through hashing strategy, TTL logic, and cost trade‑offs (DynamoDB vs. Redis).  
- Quantified impact with concrete numbers and explained learning from initial false‑positive spikes that were mitigated by adding URL canonicalization rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
