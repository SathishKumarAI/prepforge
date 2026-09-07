---
qid: ing_3732d32af8__faang__local
question: 'Explain: Step 4: Scale the design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 462
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:28-05:00'
sources: []
---

**Clarify**

The question asks how to *scale a machine‑learning (ML) design* using the guidance from GitHub’s `donnemartin/system-design-primer`. We’ll assume:  
1️⃣ A production ML pipeline (feature extraction → model inference).  
2️⃣ The goal is high throughput, low latency, and fault tolerance.  

**Approach**

1. **Identify bottlenecks** – profiling data ingestion, feature store, inference engine.  
2. **Decouple components** – publish‑subscribe for data flow; micro‑services for feature extraction and inference.  
3. **Horizontal scaling** – autoscale workers behind a load balancer; use Kubernetes or ECS.  
4. **Caching & batching** – cache frequently used features (Redis); batch inference requests to reduce GPU idle time.  
5. **Observability** – metrics, logs, alerts for latency and error rates.

**Depth**

- *Feature Store*: Use a distributed KV store (e.g., DynamoDB) with TTL; shard by user ID to avoid hotspots.  
- *Inference Service*: Deploy models as containers behind a gRPC gateway; use TensorRT or ONNX Runtime on GPU nodes for ~10× speedup.  
- *Autoscaling*: Trigger on queue depth > X or CPU/GPU utilization > Y%.  
- *Consistency*: Employ eventual consistency for feature updates, but strong consistency for critical features via versioning.

**Edge Cases**

- Sudden spike in traffic → ensure burst capacity (pre‑warm pods).  
- Model drift → roll out new model versions with A/B testing; fallback to baseline.  
- Data loss during scaling → idempotent message processing, dead‑letter queues.

**Optimize & Communicate**

Explain trade‑offs: more caching reduces latency but increases memory cost; batching improves throughput at the expense of per‑request latency. Highlight that scaling is iterative—start with a single-node prototype, then add sharding and autoscaling based on real metrics. This structured plan demonstrates clear problem framing, thoughtful design, and pragmatic deployment strategy—all key signals for FAANG system‑design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
