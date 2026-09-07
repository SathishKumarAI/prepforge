---
qid: ing_5a57cf2113__aws__local
question: 'Explain: Feed Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 462
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:59-05:00'
sources: []
---

**Situation**  
When I joined a startup that aimed to launch an “Instagram‑style” feed for its community of creators, the engineering team was struggling with latency (users saw 3–5 s delays) and data consistency (duplicate posts appeared across feeds).  

**Task**  
Design a scalable, real‑time feed service that delivers personalized timelines in <200 ms while keeping storage costs under $0.02 per user/month.

**Action**  
1. **Data model & services** – Use *Amazon DynamoDB* for the “follow graph” (followers → followees) and *Amazon Kinesis Data Streams* to ingest post events.  
2. **Feed generation** – Implement a *fan‑out‑on‑write* pattern: on each publish, Kinesis triggers an AWS Lambda that writes a feed item to a per‑user *DynamoDB* table (partition key = user_id). This guarantees eventual consistency and removes read‑time joins.  
3. **Caching & cold start** – Wrap the feed endpoint in *Amazon CloudFront* + *ElastiCache for Redis*; warm caches with Lambda@Edge on first request.  
4. **Cost control** – Use DynamoDB’s On‑Demand capacity to auto‑scale, and enable *Time‑to‑Live* (TTL) on old posts (>30 days).  
5. **Monitoring & rollback** – Deploy *Amazon CloudWatch* metrics; if latency >250 ms, automatically route traffic to a “low‑latency” read replica.

**Result**  
After launch, we achieved 95 % of feeds served in <200 ms, dropped duplicate posts by 99%, and kept per‑user storage cost at $0.015/month—well below the target. The system handled 3 M active users with peak traffic spikes of 50× without any downtime.

**Reflection**  
I owned the end‑to‑end flow, dove deep into DynamoDB read/write patterns, and iterated on latency based on real metrics—a true embodiment of **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
