---
qid: ing_5b88794560__faang__local
question: 'Explain: Scalability and Performance — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 531
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:56-05:00'
sources: []
---

**Scalability & Performance – Core System‑Design Building Blocks**

| # | Building Block | Why It Matters | Typical Tech Choices |
|---|-----------------|----------------|----------------------|
| 1 | **Horizontal Partitioning (Sharding)** | Distributes data across nodes to avoid bottlenecks. | Hash or range sharding on key, consistent hashing libraries. |
| 2 | **Caching Layer** | Lowers read latency and offloads database load. | Redis/Memcached; write‑through vs read‑through patterns. |
| 3 | **Batch vs Real‑Time Pipelines** | Balances freshness with throughput. | Spark/Beam for batch; Kafka + Flink/Spark‑Structured Streaming for real‑time. |
| 4 | **Model Serving & Autoscaling** | Handles variable inference traffic. | TensorFlow‑Serving, TorchServe, or custom REST/GRPC endpoints behind a load balancer (e.g., NGINX, Envoy). |
| 5 | **Feature Store** | Centralizes feature reuse and versioning. | Feast, Tecton; integrates with storage like BigQuery or Delta Lake. |
| 6 | **Observability & Monitoring** | Detects latency spikes, drift, or data quality issues early. | Prometheus + Grafana; custom metrics for inference latency, batch job duration. |

### Approach
1. **Clarify**: Determine traffic patterns (read‑heavy vs write‑heavy), SLA for inference latency, and acceptable model update frequency.  
2. **Design**: Map each requirement to the appropriate block—e.g., use sharding + caching for training data; employ a feature store for inference consistency.  
3. **Depth**: Specify sharding key, cache eviction policy (LRU vs LFU), batch window size, and autoscaling triggers (CPU/latency thresholds). Discuss trade‑offs: larger cache → higher memory cost; more shards → increased coordination overhead.  
4. **Edge Cases**: Sudden traffic spikes (“hot keys”), model version conflicts, data drift leading to stale features. Test with load simulators and canary deployments.  
5. **Optimize & Communicate**: Explain how incremental improvements (e.g., moving from Redis single‑node to clustered Redis) reduce latency by X%, and narrate the trade‑off between consistency and availability.

> *Signal*: Structured problem framing, clear rationale for each building block, depth in implementation choices, and proactive edge‑case handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
