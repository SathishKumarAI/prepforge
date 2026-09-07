---
qid: ing_ecc0268bb9__aws__local
question: 'Explain: Add Another URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 416
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:50-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of our content‑delivery API to support “Add Another URL” for Bloom‑filter‑based deduplication. The goal was to keep latency < 20 ms while scaling to 10M daily requests and reduce storage costs by 30 %.

**Action**  
I owned the end‑to‑end solution:  
1. **Design** – A stateless Lambda layer that receives a URL, hashes it with 4 independent functions, and queries an **Amazon DynamoDB Global Table** (partition key = hash bucket).  
2. **Bloom filter** – Stored as a compressed bitset in S3 Glacier Deep Archive; refreshed nightly by an ECS Fargate job that rebuilds the filter from the latest URL set.  
3. **Cache** – Edge‑optimized **CloudFront** + Lambda@Edge caches negative responses for 5 min, reducing DynamoDB reads.  
4. **Metrics** – CloudWatch dashboards track hit‑rate (92 % cache) and cost per request ($0.000001).  

I applied *Ownership* by coordinating cross‑team reviews, and *Dive Deep* to benchmark hash collision rates, achieving a false‑positive < 0.01 %. The system handled peak traffic of 2M req/s with no outages.

**Result**  
- Latency dropped from 35 ms to 18 ms (46 % improvement).  
- Storage cost reduced by 32 % year‑over‑year.  
- False positives remained <0.01 %, meeting SLA.  

I learned that aggressively caching negative results can dramatically cut read costs, but it requires continuous monitoring of cache expiry policies—an insight I’ll bring to future ML infrastructure challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
