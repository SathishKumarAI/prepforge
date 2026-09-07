---
qid: ing_e655eb4c28__faang__local
question: 'Explain: High Scalability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 563
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:00-05:00'
sources: []
---

**High‑Scalability ML System Design – Cheat Sheet**

| Step | What to Cover | Why It Matters |
|------|---------------|----------------|
| **Clarify** | • *Goal*: serve millions of predictions per second with < 100 ms latency.<br>• *Assumptions*: read‑heavy workload, batch‑training offline, data locality matters. Ask about data volume, update frequency, SLA. | Ensures you’re solving the right problem and sets constraints for trade‑offs. |
| **Approach** | 1️⃣ *Data pipeline*: ingest → preprocessing → feature store.<br>2️⃣ *Model layer*: serve via model registry + inference API.<br>3️⃣ *Scalability knobs*: horizontal scaling, caching, sharding, autoscaling. | Gives interviewers a roadmap to evaluate your system‑thinking. |
| **Depth** | • **Feature Store**: distributed KV store (e.g., Redis, DynamoDB) with TTL; versioned features.<br>• **Inference API**: stateless containers behind an LB; use gRPC for low overhead.<br>• **Model Serving**: TensorFlow‑Serving or TorchServe with GPU shards; load‑balancing via Envoy. <br>• **Cache Layer**: LRU in‑memory cache per shard; fallback to feature store.<br>• **Autoscaling**: K8s HPA + custom metrics (CPU/latency).<br>Complexity: O(log N) lookup, linear scaling with replicas. | Shows you know the right tech and trade‑offs (e.g., GPU vs CPU, cache hit ratio). |
| **Edge Cases** | • Feature drift → stale cache; handle via TTL or event‑driven invalidation.<br>• Model rollback: keep old version for A/B testing.<br>• Network partitions: use eventual consistency in feature store. | Demonstrates robustness and operational awareness. |
| **Optimize & Communicate** | • Batch predictions during off‑peak to amortize GPU costs.<br>• Use model quantization (INT8) to cut latency.<br>• Profile end‑to‑end; iterate on bottlenecks.<br>Explain trade‑offs: higher cache hit → less DB traffic but more memory cost. | Conveys you can tune and justify decisions, a key FAANG quality. |

**TL;DR:** Build an ingest → feature store → stateless inference API stack with horizontal scaling, caching, and autoscaling. Validate edge cases, quantify latency/throughput, and iterate on bottlenecks while explaining trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
