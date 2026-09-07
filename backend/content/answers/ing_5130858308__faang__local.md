---
qid: ing_5130858308__faang__local
question: How Grab store and process millions of orders daily?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:16-05:00'
sources: []
---

**Clarify**  
The question asks how Grab handles the ingestion, storage, and processing of *millions* of ride‑hailing/food‑delivery orders per day.  
Assumptions to confirm:  
1. Orders arrive in real‑time from mobile apps.  
2. The system must provide low latency (≤ 200 ms) for matching drivers & customers.  
3. Historical data is needed for analytics, fraud detection, and ML training.  

**Approach**  
1. **Event‑driven ingestion** – use a distributed message bus (Kafka/ Pulsar).  
2. **Microservice architecture** – each domain (orders, pricing, driver assignment) runs as stateless services behind a load balancer.  
3. **Real‑time processing** – stream processors (Kafka Streams/Flink) compute matches and update state stores.  
4. **Persistent storage** – NoSQL for hot data (Cassandra/ DynamoDB), relational DB for ACID‑required transactions, and an analytics warehouse (Snowflake/ BigQuery).  

**Depth**  
- Orders are published to a Kafka topic; consumer groups scale horizontally to maintain throughput.  
- Each order triggers a stateful stream that looks up nearby drivers using geohash indexes stored in Redis or RocksDB for sub‑second lookups.  
- Successful matches write back to the orders DB and publish “match” events for downstream services (payment, notifications).  
- Periodic batch jobs extract data into a columnar store (Parquet on S3) for ML pipelines.  

**Edge Cases**  
- Out‑of‑order messages → deduplication via idempotent keys.  
- Network partitions → Kafka’s replication ensures no loss; services retry with exponential backoff.  
- Driver surge zones → dynamic scaling of assignment workers.  

**Optimize & Communicate**  
To improve latency, we shard by geohash and pre‑warm state stores during peak hours. For scalability, we add consumer instances per partition and use autoscaling on Kubernetes. I would explain this flow to the interviewer, highlighting how each layer (ingestion → processing → storage) is decoupled yet tightly coupled through contracts, ensuring both performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
