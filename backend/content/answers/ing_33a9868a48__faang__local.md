---
qid: ing_33a9868a48__faang__local
question: 'Explain: AI Gateways and Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 526
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:54-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *AI gateways* and *model routing*. I’ll assume the context is a production ML system where many models live behind an API surface, and we need to decide which model serves each request in real‑time.

**Approach**  
1. Define “gateway” as the front‑end entry point that receives raw requests.  
2. Explain “model routing” as the logic inside the gateway (or a downstream service) that selects the appropriate inference engine/model.  
3. Outline typical components: request parser, feature extractor, selector, and fallback.

**Depth**  

| Component | Purpose | Typical Tech |
|-----------|---------|--------------|
| **Gateway API** | Exposes a single endpoint (`/predict`) to clients. Handles auth, rate‑limit, TLS. | FastAPI, gRPC gateway |
| **Feature Extraction** | Transforms raw payload into model‑friendly tensors or embeddings. | Spark/Beam batch + ONNX runtime |
| **Routing Engine** | Uses rules or ML to pick a model: e.g., “if age<18 → ModelA; else → ModelB” or a meta‑model that predicts best performer. | Decision trees, reinforcement learning policy network |
| **Model Registry / Service Mesh** | Keeps metadata (version, latency, accuracy) and routes traffic via sidecar proxies (Envoy). | MLflow registry + Istio |

*Complexity*: Routing is O(1) if rule‑based; ML‑based routing adds inference cost but can be batched. Trade‑off: simpler rules are fast but brittle; learned policies adapt to drift.

**Edge Cases**  
- **Cold starts**: route to warmed models first.  
- **Model failure**: fallback to a safe model or return an error.  
- **Feature mismatch**: gateway validates schema before routing.  
- **A/B testing**: route a percentage of traffic to new models without affecting overall latency.

**Optimize & Communicate**  
To improve, we can cache routing decisions per user/session and monitor drift metrics (accuracy vs. latency). I’d narrate this by first framing the business need (low latency + high accuracy), then walking through the architecture diagram, finally quantifying trade‑offs (e.g., 2 ms added for a learned router vs. 5 % accuracy gain). This shows structured thinking and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
