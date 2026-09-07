---
qid: ing_bd9dcbcfa0__faang__local
question: 'Explain: Read more — Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 489
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:03:29-05:00'
sources: []
---

**Clarify**  
You’re asking how to scale a machine‑learning system—i.e., increase data volume, model size, and request throughput while keeping latency low. I’ll assume we’re dealing with supervised models in production (online inference + batch training) on cloud infrastructure.

**Approach**  
1. **Data layer:** sharded, replicated storage; incremental ingestion pipelines.  
2. **Feature store:** cache hot features, version control, and compute on‑demand.  
3. **Training pipeline:** distributed data parallelism, hyper‑parameter tuning at scale, model registry.  
4. **Inference layer:** model serving with auto‑scaling, request routing, model ensembles.  
5. **Observability & rollback:** metrics, alerts, canary releases.

**Depth**  
- *Distributed training:* use frameworks like PyTorch DDP or TensorFlow MirroredStrategy; scale batch size linearly with GPU count until communication becomes bottleneck (Amdahl’s law).  
- *Feature store:* materialized views in a columnar DB (e.g., ClickHouse) allow sub‑millisecond lookups; cold features are recomputed lazily.  
- *Serving:* containerize models, expose via gRPC/REST, use a service mesh to route traffic to the newest model version. Auto‑scale based on CPU/memory or request latency thresholds; keep warm pools for zero‑cold‑start.  
- *Observability:* per‑model latency histograms, error rates, drift metrics; deploy Prometheus + Grafana dashboards.

**Edge Cases**  
- Sudden traffic spikes → autoscaler lag → fallback to older model.  
- Feature drift → stale feature store → degraded accuracy.  
- GPU fragmentation on shared clusters → training stalls.

**Optimize & Communicate**  
Iterate by profiling data ingestion, feature lookup latency, and training speed; shift bottlenecks from CPU‑bound preprocessing to GPU compute or vice versa. When explaining, start with business impact (reduced downtime), walk through each layer’s scaling strategy, quantify expected throughput gains, and finish with a short demo of metrics dashboards. This demonstrates structured thinking, depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
