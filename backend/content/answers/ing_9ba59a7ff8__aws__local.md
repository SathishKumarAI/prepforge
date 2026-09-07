---
qid: ing_9ba59a7ff8__aws__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 503
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:01-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of the photo‑feed service for a social app that grew from 10 M to 200 M daily active users (DAU). The team needed a caching layer that could reduce database reads by ≥90% while keeping latency <50 ms under peak traffic.

**Action**  
I scoped requirements:  
* **Read‑heavy, write‑light** – feeds change rarely per user but are read constantly.  
* **Data freshness** – 5‑second staleness acceptable for non‑critical posts; critical events (likes, comments) must propagate instantly.  

Design:  
1. **S3 + CloudFront** for static media (images/videos).  
2. **DynamoDB** for feed metadata (user → post IDs), with a global secondary index on `last_updated`.  
3. **ElastiCache‑Redis** as a two‑tier cache:  
   * Tier 1 – hot posts (`top 10k` per user) cached in Redis for <5 ms reads.  
   * Tier 2 – pre‑computed feed slices stored in S3+CloudFront, invalidated via DynamoDB Streams to update Redis when new content appears.  

**Result**  
- Read latency dropped from **120 ms → 30 ms** (average).  
- Database read volume fell by **92%**, cutting operating cost from $150k/month to $18k/month.  
- The system handled a 4× traffic spike during a viral event with zero outages.

**Leadership Principles Highlighted**  
* **Customer Obsession** – ensured instant feed updates for high‑engagement users.  
* **Ownership & Dive Deep** – I audited every read path, identified the bottleneck, and engineered a scalable solution that balanced cost and performance.  

The bar‑raiser looks for ownership (I drove the whole redesign), depth (exploited DynamoDB Streams + Redis eviction policies), quantified impact (latency & cost metrics), and learning from failure (initial attempt with only S3 cache caused 15 % latency spike, prompting the two‑tier approach).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
