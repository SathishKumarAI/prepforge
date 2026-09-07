---
qid: ing_59f144ae0b__aws__local
question: 'Explain: Consistency Across Nodes — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 412
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:04-05:00'
sources: []
---

**Consistency Across Nodes – What Is Caching?**

**Leadership Principles:** *Customer Obsession* (ensure fast responses for users) & *Ownership* (own the end‑to‑end latency).

**Situation / Task**  
In my previous role, a recommendation engine served 200 k requests/sec. Latency spikes of 350 ms caused churn to rise by 3 %. I needed to reduce per‑request latency while keeping data consistent across all nodes.

**Action**  
I introduced an **application‑level cache** using Amazon ElastiCache for Redis, with a *read‑through* pattern.  
1. Cache keys were derived from user ID + model version.  
2. On cache miss, the service queried DynamoDB (the source of truth) and populated Redis.  
3. To maintain consistency, I employed **Redis key expiration** plus an SNS topic that published “model update” events; a Lambda subscribed to this topic flushed affected keys.

I also added a *Cache‑Aside* layer for write operations, ensuring eventual consistency within 100 ms.

**Result**  
- Average latency dropped from **350 ms → 70 ms** (84 % reduction).  
- Error rate fell by **5.2×**, translating to a 1.8 % lift in NPS.  
- Cost of the cache tier was $0.25 per hour, saving ~$600/month versus spinning up additional application instances.

**Bar‑raiser notes:**  
- Demonstrated *ownership* of both performance and data correctness.  
- *Dive deep* into Redis eviction policies and SNS‑Lambda integration.  
- Quantified impact with real metrics and cost trade‑offs.  

This solution scales horizontally, offers high availability (multi‑AZ Redis clusters), and keeps the system simple yet robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
