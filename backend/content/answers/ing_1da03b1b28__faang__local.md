---
qid: ing_1da03b1b28__faang__local
question: 'Explain: Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 499
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:55-05:00'
sources: []
---

**Serving Infrastructure for AI Models**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* How do we deploy a trained ML model so that it can respond to user requests at scale? <br>*Assumptions:* You have a stateless inference API, need low latency (<50 ms), high throughput (≥10k RPS), and 99.9% availability. |
| **Approach** | 1. **Model Packaging:** Containerize the model with its runtime (PyTorch/TensorFlow + GPU driver). <br>2. **Orchestration:** Use Kubernetes or a serverless platform (e.g., AWS SageMaker, GKE Vertex) to manage pods/instances. <br>3. **Autoscaling & Load Balancing:** Horizontal Pod Autoscaler with custom metrics (CPU/GPU usage, latency); use an ingress controller + service mesh for traffic routing. <br>4. **Cache & Sharding:** Deploy a cache layer (Redis) for frequent queries; shard the model if size > GPU memory. |
| **Depth** | *Inference Engine:* Optimize with TensorRT/ONNX Runtime to shave 30–50 ms per request. <br>*Latency Control:* Use async I/O, batch requests on GPU. <br>*Observability:* Instrument metrics (latency percentiles), logs, and alerting. <br>Complexity: O(1) inference latency; autoscaling adds ~O(log n) overhead for cluster resizing. |
| **Edge Cases** | • Sudden traffic spike → cold start delays.<br>• Model drift → need blue‑green deployment. <br>• GPU memory exhaustion → fallback to CPU or smaller model. Test with synthetic load, canary releases, and A/B latency checks. |
| **Optimize & Communicate** | *Improvements:* Use edge caching for global latency; incorporate model pruning for lighter inference. Explain trade‑offs: heavier models = higher accuracy but more cost/latency. <br>*Narration:* “We’ll containerize the model, orchestrate it on Kubernetes with autoscaling based on GPU load, and expose it behind a service mesh that guarantees 99.9% availability while keeping latency under 50 ms.” |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
