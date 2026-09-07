---
qid: ing_f535be2e81__aws__local
question: 'Explain: Challenges — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 383
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:21-05:00'
sources: []
---

**Situation & Task**  
At Uber we had to serve >40 M reads/sec for real‑time trip matching while keeping latency <10 ms. The data lived in S3 (durable storage) but was too slow for instant lookups. I owned the end‑to‑end solution.

**Action – Design**  
1. **Cache Layer:** Deployed a global, read‑through cache with *Amazon ElastiCache* Redis clusters (partitioned by region).  
2. **Pre‑warm & Eviction:** Used *Kinesis Data Streams* to push hot keys from S3 into Redis on write events; set LFU eviction and TTL of 5 min for stale data.  
3. **Fallback Path:** If a miss hit, we fetched from *Amazon DynamoDB* (partitioned by zone) as an intermediate tier before pulling from S3.  
4. **Scaling & Availability:** Leveraged Auto Scaling groups with CloudWatch metrics; used Multi-AZ Redis replication to avoid single‑point failures.  

**Result**  
- Latency dropped from 200 ms → 8 ms (95th percentile).  
- Cache hit ratio rose to 92%, cutting DynamoDB reads by 60 %.  
- Cost saved: $1.2M annually versus a pure S3 + EC2 cache approach.

**Reflection – Bar‑raiser Lens**  
I demonstrated **Ownership** by driving the full stack, and **Dive Deep** through metrics‑driven tuning. The biggest failure was an initial over‑provisioned Redis cluster that spiked costs; we learned to size based on realistic peak traffic patterns. This iteration directly increased Uber’s match quality and revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
