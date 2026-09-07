---
qid: ing_731dac0d02__faang__local
question: 'Explain: Scaling Our Logging System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:39-05:00'
sources: []
---

**Scaling Our Logging System – Structured FAANG‑style Answer**

| Section | Key Points |
|---------|------------|
| **Clarify** | *Problem:* The current log ingestion pipeline is bottlenecked at high traffic spikes (e.g., 10 k logs/s). We need to maintain low latency, durability, and cost while ensuring data integrity. <br>*Assumptions:* Logs are JSON‑like key/value pairs; retention policy: hot store for 1 day, cold archive for 90 days. |
| **Approach** | 1️⃣ Partition logs by *source* + *time window*.<br>2️⃣ Use a message broker (Kafka) with compaction per partition.<br>3️⃣ Stream into a tiered storage: hot in DynamoDB Streams/Redis, cold in S3 Glacier via Athena. |
| **Depth** | - **Throughput:** Kafka can handle >100 k/s; partitions ≈ #CPUs × 2.<br>- **Durability:** Replication factor = 3; at‑least‑once semantics with idempotent producers.<br>- **Latency:** <50 ms for hot reads via Redis cache. <br>- **Cost:** S3 Standard‑IA + Glacier = ~$0.004/GB/month for cold tier. |
| **Edge Cases** | • Burst spikes >10× baseline → auto‑scale Kafka brokers.<br>• Corrupt log entries → schema registry validation before ingestion.<br>• Backpressure from downstream analytics → back‑pressured consumer groups. |
| **Optimize & Communicate** | - Add *log compression* (Snappy) to cut bandwidth by 60 %. <br>- Implement a *deduplication window* for idempotent writes. <br>Explain trade‑offs: higher replication improves fault tolerance but increases cost; more partitions reduce latency but raise management overhead. |

*Result:* A horizontally scalable, cost‑efficient pipeline that guarantees sub‑second ingestion while preserving data integrity and meeting retention requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
