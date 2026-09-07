---
qid: ing_b303b74f68__aws__local
question: 'Explain: Traffic — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:35-05:00'
sources: []
---

**Situation / Task**  
At my last company we launched a live‑comment feature for a global streaming platform that handled ~10 M concurrent viewers and ~5 k comments/second during peak events (e.g., product launches). The goal was to deliver sub‑200 ms latency, 99.999% availability, and keep costs under $2 M/month.

**Action**  
*Architecture* – I proposed an event‑driven stack:  
- **API Gateway + Lambda** for ingress (auth, rate‑limit).  
- **Amazon Kinesis Data Streams** to buffer comment events; shards tuned to 5 k/s.  
- **Lambda** downstream writes to **DynamoDB** (partition key = stream ID) and publishes to **SNS** topics per channel.  
- **Redis‑cluster on ElastiCache** caches the latest 10 k comments for each stream, refreshed via SNS triggers.  
- **CloudFront + WebSocket API** delivers cached comments to clients with <200 ms round‑trip.  

*Scalability & Availability* – Kinesis shards auto‑scale; DynamoDB uses on‑demand capacity; Redis clusters run in multi‑AZ for failover. Costs: $1.8 M/month, 15% below budget.

**Result**  
- Latency dropped from 600 ms to 150 ms (30% improvement).  
- Peak throughput handled 12 k/s with no throttling.  
- User engagement increased by 22% during events; churn fell 3%.

**Reflection**  
I owned the end‑to‑end pipeline, dug deep into shard sizing and cache eviction policies, and iterated after a 4‑hour outage that revealed SNS topic misconfigurations—learned to add automated health checks. This aligns with *Customer Obsession* (delivering real value) and *Ownership* (full accountability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
