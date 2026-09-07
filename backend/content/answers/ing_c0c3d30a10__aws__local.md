---
qid: ing_c0c3d30a10__aws__local
question: 'Explain: Step 1 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 416
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:36-05:00'
sources: []
---

**Situation & Task**  
At a former search‑engine start‑up I led the crawler team that handled ~5 B URLs/day. Duplicate crawls were eating 12 % of our bandwidth and inflating storage by 30 %. My goal: eliminate redundant fetches while keeping freshness.

**Action – Design**  
1. **Canonical fingerprinting** – Strip query strings, normalize HTTPS/HTTP, lower‑case hostnames, and hash the cleaned URL (SHA‑256).  
2. **Distributed deduplication store** – Deploy a DynamoDB table with the fingerprint as partition key and `lastFetched` timestamp as sort key. Use *ConditionalWrite* to ensure only one node writes per fingerprint in a 5‑minute window.  
3. **Rate‑limiting & sharding** – Partition fingerprints by hash prefix into 256 shards; each shard is served by an EC2 Spot fleet behind an Application Load Balancer, guaranteeing <99.9 % availability.  
4. **Metrics & alerts** – CloudWatch metrics on *DuplicateFetches* and *ShardThroughput* trigger autoscaling of spot instances.

**Result**  
Within 3 months:  
- Duplicate fetches dropped from 12 % to 0.5 %.  
- Bandwidth savings ≈ 600 GB/day → $4k/month in S3 storage.  
- Crawl latency improved by 18 %, boosting index freshness.

**Learning & Ownership**  
I logged every failure, reviewed the *ConditionalWrite* race conditions, and rewrote the shard logic after a 2‑hour outage. This iteration demonstrated true ownership: I owned the problem end‑to‑end, dived deep into DynamoDB consistency, and biased for action with spot fleets—meeting Amazon’s *Customer Obsession*, *Ownership*, and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
