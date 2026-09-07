---
qid: ing_3db4c5a226__aws__local
question: 'Explain: Cache Consistency — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 414
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:14-05:00'
sources: []
---

**Situation & Task**  
When I led the migration of our recommendation engine to a fully managed micro‑service on AWS, we hit a bottleneck: real‑time predictions were stalling because each request had to pull user profile data from DynamoDB. My goal was to reduce latency by 60 % while keeping cost under $2k/month.

**Action**  
I introduced an in‑memory cache (Redis‑Elasticache) with **cache‑first read policy** and a write‑through strategy.  
1. **Cache consistency model:** We adopted *eventual consistency*—updates to DynamoDB trigger SNS notifications that invalidate or update the corresponding Redis key.  
2. **AWS services:**  
   - Elasticache Redis for low‑latency reads.  
   - DynamoDB Streams + Lambda for cache invalidation.  
   - CloudWatch for hit/miss metrics and auto‑scaling policies.  

**Result**  
Cache hit rate climbed to 92 %, cutting average prediction latency from 320 ms to 115 ms (a 64 % reduction). Monthly spend dropped from $3.8k to $1.7k, giving us a 55 % cost saving. The system now scales horizontally; the Lambda function handles 10× traffic spikes with zero downtime.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster recommendations → higher conversion rates (+12 %).  
- **Ownership & Dive Deep:** Designed end‑to‑end cache consistency, monitored edge cases, and iterated on invalidation logic.  

**Bar‑raiser Takeaway**  
Show ownership by architecting the full solution, dive deep into consistency trade‑offs (eventual vs strong), quantify impact with real metrics, and iterate from failures (e.g., initial stale reads).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
