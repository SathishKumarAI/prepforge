---
qid: ing_57f69b9bef__aws__local
question: 'Explain: Bandwidth — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 472
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:32-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a live comment system for a streaming platform that could handle **10 M concurrent viewers** and support **5 k comments per second** while keeping latency under 200 ms.

**Action**  
1. *Requirements & Architecture* – I scoped the system into three layers: ingest, store, broadcast.  
   - **Ingest**: API Gateway → Lambda (idempotent validation) → Kinesis Data Streams for buffering.  
   - **Store**: DynamoDB Global Tables (partitioned by stream ID) for low‑latency read/write; a TTL column auto‑purges old comments.  
   - **Broadcast**: AWS Elemental MediaLive pushes to CloudFront with WebSocket API (API Gateway WebSocket).  
2. *Scalability* – Kinesis shards auto‑scale based on throughput, Lambda concurrency scales via provisioned concurrency. DynamoDB autoscaling keeps 99.9 % availability; CloudFront edge locations reduce RTT globally.  
3. *Cost & Trade‑offs* – Using managed services cuts ops overhead by ~70 %. The trade‑off is a higher unit cost for Kinesis (~$0.015/GB), but the elasticity outweighs it for peak events.  

**Result**  
After launch, the system sustained **12 M concurrent viewers**, with average comment latency **≈120 ms** and 99.8 % uptime during a 3‑hour live concert. Cost was $18k/month versus an estimated $30k for a self‑hosted solution.

---

### Leadership Principles Highlighted  
- **Ownership** – I drove the full end‑to‑end design, from requirements to post‑deployment monitoring.  
- **Dive Deep** – Detailed analysis of shard sizing, DynamoDB read/write capacity, and CloudFront cache behavior.  

**Bar‑raiser notes:** Look for clear ownership, data‑driven impact, deep technical decisions, and learning loop (e.g., “We found latency was higher during peak; we added an extra shard to Kinesis and reduced it by 30 %”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
