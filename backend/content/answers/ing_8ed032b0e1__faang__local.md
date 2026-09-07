---
qid: ing_8ed032b0e1__faang__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 544
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:20-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to design a parking‑garage system that can *check which spots are occupied*—i.e., provide real‑time occupancy status for every slot.  
Key assumptions to confirm:  

- Size of garage (number of levels, rows, columns).  
- Expected traffic (vehicles per minute).  
- Latency requirement for “spot check” queries (≤ 100 ms?).  
- Persistence needs (daily/weekly logs, audit trail).  
- Scalability: can the system grow to thousands of spots?  

**2️⃣ Approach**  
1. **Model** each spot as a record in a distributed key‑value store (`SpotID → Status`).  
2. **Event source**: sensors at entry/exit gates or inside each bay fire events (vehicle enters/exits).  
3. **Processing pipeline**: Kafka → Kinesis Firehose → Lambda to update the spot status.  
4. **Cache layer**: Redis cluster for low‑latency reads; fall back to DB if cache miss.  
5. **API Gateway** exposing `/spots/{id}` and `/spots/occupied`.  

**3️⃣ Depth**  
- *Data store*: DynamoDB (partition key `SpotID`) gives O(1) reads, auto‑scaling.  
- *Consistency*: Use eventual consistency for reads; transactional writes via DynamoDB’s conditional updates (`IfStatus = “free”`).  
- *Latency*: Redis cache < 5 ms; DB read ~20 ms.  
- *Throughput*: Kafka topic can handle >10k events/s; Lambda scales automatically.  

**4️⃣ Edge Cases**  
- Sensor failure → spot status stale: implement heartbeat checks, mark as “unknown”.  
- Simultaneous entry/exit on same spot → race condition mitigated by conditional writes.  
- Power outage → cache loss: refresh from DB on startup.  

**5️⃣ Optimize & Communicate**  
- **Batch updates**: accumulate sensor events and batch write to DynamoDB (write‑throughput savings).  
- **Geo‑sharding**: if garage spans multiple locations, shard by region for locality.  
- **Monitoring**: CloudWatch metrics on cache hit ratio, latency, error rates; alert on >10 % stale spots.  

Explain trade‑offs: using a single Redis cluster is simpler but a single point of failure; sharded caches add complexity but improve availability. Conclude with how this design meets scalability, low latency, and reliability goals typical for Amazon’s parking‑garage system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
