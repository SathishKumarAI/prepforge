---
qid: ing_3612cbcfad__aws__local
question: How should we compute the hash of a URL?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 440
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:59-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with adding a “canonical URL” feature for our media platform—every article needed a deterministic hash to de‑duplicate feeds and power recommendation engines. The requirement: compute the hash in real time, keep it collision‑free across millions of URLs, and support eventual consistency across 3 regions.

**Action**  
I chose **SHA‑256** (Amazon KMS for key rotation) because its 64‑char hex output gives 2⁶⁴ collisions probability—well below our 10⁹ traffic. To keep latency <5 ms I offloaded hashing to a **Lambda@Edge** function triggered by CloudFront requests, so the hash is generated close to the user and cached in **CloudFront Edge caches** (TTL 24 h). For batch jobs we used an **AWS Glue** ETL job that reads S3 object metadata, hashes URLs with Spark, writes results back to DynamoDB.  

I added a **deduplication layer**: a global secondary index on the hash field in DynamoDB (partition key `url_hash`) with conditional writes (`PutItem` with `ConditionExpression='attribute_not_exists(url_hash)'`). This guarantees idempotency and allows us to track first‑seen timestamps.

**Result**  
Hash generation latency dropped from 120 ms to <5 ms, throughput scaled to 1M requests/day without cold starts, and we avoided duplicate article ingestion by 99.9%. Costs stayed under $0.02 per million hashes (Lambda + DynamoDB).  

**Learning & Bar‑raiser notes**  
I owned the end‑to‑end flow, dived deep into AWS pricing tiers, quantified impact via latency and duplication metrics, and iterated after a first‑pass that caused 3 % collision rate—re‑evaluating SHA‑256 vs MD5. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
