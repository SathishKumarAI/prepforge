---
qid: ing_1e86b16fe6__faang__local
question: 'Explain: High Latency — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 608
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:06-05:00'
sources: []
---

**High‑Latency in ML Pipelines – 8 Common Causes & Fixes**

| # | Problem | Why it hurts latency | Quick Solution |
|---|---------|---------------------|----------------|
| **1** | *Cold starts of model servers* | Each request spins up a container/VM → seconds delay. | Use pre‑warm pools, keep‑alive sockets or serverless with provisioned concurrency. |
| **2** | *Large feature vectors sent over the network* | Serialization + transport time dominates. | Compress features (e.g., protobuf), shard into micro‑services, cache frequent vectors locally. |
| **3** | *Inefficient model inference code* | Unvectorized ops or CPU‑bound loops add ms per request. | Profile with `torch.profiler`/`tf.profiler`; move to GPU or use ONNX Runtime; batch requests. |
| **4** | *Blocking I/O in data pipelines* | Reading from S3/HDFS on‑demand stalls the thread. | Prefetch data, stream via async IO, use SSD caching layers. |
| **5** | *Synchronous feature store lookups* | Each request waits for DB round‑trip. | Cache feature values in Redis/Memcached; batch lookups; denormalize where possible. |
| **6** | *Model version churn* | Frequent redeploys trigger heavy load balancer re‑routing. | Blue/green or canary releases, maintain immutable containers. |
| **7** | *Network congestion / MTU mismatches* | Packet fragmentation and retransmission delay inference traffic. | Tune MTU, use QUIC/TCP keep‑alive, enable ECMP routing. |
| **8** | *Resource contention in shared clusters* | CPU/IO throttling from other workloads. | Dedicated GPU nodes, Kubernetes QoS classes, resource quotas. |

---

### Structured Walk‑through

1. **Clarify** – We’re addressing sub‑second latency for real‑time inference services; confirm SLA, traffic patterns, and current bottleneck metrics.
2. **Approach** – Identify the 8 categories above, rank by impact via profiling, then iteratively remediate.
3. **Depth** – For each fix, note complexity (e.g., caching adds consistency overhead), trade‑offs (pre‑warming uses idle capacity), and validation steps.
4. **Edge Cases** – Sudden traffic spikes may still hit cold starts; feature store cache TTLs must handle stale data; network issues can bypass MTU fixes.
5. **Optimize & Communicate** – After applying fixes, re‑measure latency, present a before/after dashboard, and plan for automated alerts on drift.

This structured plan aligns with FAANG expectations: clear problem framing, systematic solution mapping, deep technical justification, edge‑case awareness, and communication of results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
