---
qid: ing_00f143abc9__aws__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 448
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:40-05:00'
sources: []
---

**Situation & Task**  
At Uber we needed to serve **>40 M read ops/sec** of location‑based pricing rules stored in a DynamoDB table. A naïve cache hit ratio of ~70 % still left millions of cold reads hitting the database, driving latency and cost.

**Action – Design**  
1. **Negative Cache Layer** – We introduced an *in‑memory* Redis cluster (ElastiCache) that stores two kinds of keys:  
   - **Positive**: actual rule IDs → full payload.  
   - **Negative**: “rule‑not‑found” sentinel with a short TTL (~30 s).  
2. **Read Flow** – Query cache first; on miss, fetch from DynamoDB *and* write the result (or negative sentinel) back to Redis.  
3. **Write Flow** – Invalidate or update both layers via SNS → Lambda that clears stale keys in ElastiCache and updates DynamoDB.  

**Result**  
- Cache hit ratio rose from 70 % to 99.9 %.  
- Database read traffic dropped by **92 %**, cutting $4M/yr in provisioned throughput costs.  
- Latency for rule lookup fell from 120 ms (DB‑only) to <5 ms average.

**Reflection & Ownership**  
I owned the end‑to‑end change, coordinated with infra, security, and ops teams, and iterated on TTL values after observing a 10 % hit‑rate dip during peak traffic. The negative cache proved that *small* engineering decisions can deliver *large* business value.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Deliver instant pricing to millions of riders.  
- **Ownership & Dive Deep** – Own the failure modes, instrument metrics, and refine TTLs based on real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
