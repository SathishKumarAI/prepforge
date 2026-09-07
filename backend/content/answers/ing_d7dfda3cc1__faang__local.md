---
qid: ing_d7dfda3cc1__faang__local
question: 'Explain: Push Notification Processor — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 501
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:35-05:00'
sources: []
---

**Clarify**  
We need a service that receives push‑notification events, validates them, and routes each to the correct device(s) via platform SDKs (APNs, FCM, etc.). Key assumptions:  

* Scale – millions of users, thousands of notifications per second.  
* High availability – 99.9 % uptime.  
* Low latency – < 200 ms from event ingestion to delivery.  
* Persistent state – device tokens, user preferences, and retry history.

**Approach**  
1. **Ingestion layer** – HTTP/GRPC API + Kafka topic for decoupling.  
2. **Validation & enrichment microservice** – checks token validity, merges user prefs, writes a “notification job” to a durable queue (Kafka).  
3. **Worker pool** – stateless workers consume jobs, batch by platform, and call the respective push SDKs.  
4. **Retry & dead‑letter handling** – exponential backoff via Kafka retention; DLQ for permanent failures.  
5. **Metrics & observability** – Prometheus + Grafana dashboards, tracing with OpenTelemetry.

**Depth**  
*Throughput*: 10k msg/s → 3 Kafka partitions per topic, 4 workers per partition.  
*Latency*: 1 ms API ack → 50 ms validation → 100 ms worker processing (batch size 50).  
*Data model*: `notification_id`, `user_id`, `payload`, `platform`, `attempts`.  
*Fault tolerance*: Kafka replication factor = 3, workers stateless ⇒ any node can take over.  

**Edge cases**  
*Invalid tokens → immediate DLQ entry.*  
*Rate limits from APNs/FCM → back‑pressure via worker throttling.*  
*User unsubscribes mid‑flight → reconcile state in validation step.*

**Optimize & communicate**  
Future: add *adaptive batching* (larger batches during low traffic) and *per‑platform throttlers*. I’d explain trade‑offs between batch size vs. latency, and the importance of decoupling with Kafka to isolate spikes. This structure shows clear reasoning, depth in design choices, and readiness for edge‑case testing—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
