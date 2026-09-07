---
qid: ing_eba09fbe39__faang__local
question: 'Explain: AI Applications — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 449
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:48:04-05:00'
sources: []
---

**Clarify**  
We’re asked to design a client‑server ML system that serves predictions (e.g., image classification, recommendation) in production. Key assumptions:  
* Clients are mobile/web apps with intermittent connectivity.  
* Latency < 200 ms for real‑time inference.  
* Model size ≈ 100 MB; updates occur weekly.  
* Scale: 10⁶ concurrent users, 10⁹ requests/day.

**Approach**  
1. **Model Serving Layer** – containerized inference services (e.g., TensorFlow‑Serving or TorchServe) behind a load balancer.  
2. **Edge Caching** – lightweight ONNX models on the client for offline fallback; sync with server via delta updates.  
3. **Feature Store & Preprocessing** – shared Redis/Memcached layer to cache expensive feature transformations.  
4. **Observability** – request‑level metrics (latency, error) + model‑level drift alerts.  
5. **Scalable Architecture** – autoscaling groups + Kubernetes for horizontal scaling; use gRPC for low‑overhead RPC.

**Depth**  
- *Latency*: Use async I/O, keep inference under 80 ms by batching requests (batch size 32).  
- *Throughput*: Scale horizontally; each pod handles ~10⁴ req/s.  
- *Model Updates*: Canary rollout via A/B testing; rollback on drift.  
- *Security*: Mutual TLS + JWT auth for client calls.

**Edge Cases**  
* Client offline → serve cached edge model.  
* Model degradation → automated retraining trigger.  
* Sudden traffic spike → rate limiting and queueing (Kafka) to avoid overload.

**Optimize & Communicate**  
Explain trade‑offs: heavier on‑device models reduce latency but increase bandwidth; lighter server models need more compute. Highlight how observability informs continuous improvement, and how autoscaling keeps cost under control while meeting SLAs. This structured narrative aligns with FAANG’s emphasis on clear problem framing, scalable design, and measurable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
