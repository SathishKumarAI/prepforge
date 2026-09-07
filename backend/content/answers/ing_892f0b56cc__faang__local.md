---
qid: ing_892f0b56cc__faang__local
question: 'Explain: Likely interviewer follow-ups — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 516
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:35-05:00'
sources: []
---

**Clarify**  
You’re asking about how a production‑grade system exposes an LLM (LLM Gateway) and then delivers responses at scale (Serving Platform). I’ll assume we’re targeting latency < 200 ms, high throughput, multi‑tenant traffic, and that the model is hosted in containers or on a managed service.

**Approach**  
1. **API Gateway** – HTTP/REST or gRPC entry point, with authentication, rate limiting, request routing.  
2. **Model Service Layer** – stateless workers (e.g., FastAPI + PyTorch) that load the model once and serve batched inference requests.  
3. **Cache & Prefetching** – LRU cache for common prompts; pre‑warm embeddings for cold starts.  
4. **Load Balancer / Autoscaler** – horizontal scaling based on queue depth or latency SLA.  
5. **Observability** – distributed tracing (OpenTelemetry), metrics (Prometheus), log aggregation, and anomaly detection.

**Depth**  
- The gateway should terminate TLS, perform JWT auth, and convert to a protocol the model workers understand.  
- Workers run in pods; each pod keeps the model in GPU memory, enabling batch size > 1 for throughput.  
- Use *model parallelism* (pipeline or tensor sharding) if the LLM exceeds one device’s RAM.  
- For serving latency, implement token‑level streaming via Server‑Sent Events or gRPC streams so clients receive partial output immediately.  
- Autoscaling triggers: average queue time > 80 ms → add pod; > 95 % CPU/GPU usage → scale out.

**Edge Cases**  
- **Cold start**: delay until the model is loaded—use pre‑warm hooks or keep a warm pool of idle pods.  
- **Model version drift**: rollback mechanism and A/B testing via traffic split.  
- **Security**: protect against prompt injection by sanitizing inputs and using per‑tenant isolation.

**Optimize & Communicate**  
To improve, we can shard the request queue, use GPU‑accelerated tokenization, or switch to a lightweight inference engine (e.g., ONNX Runtime). I’d explain each trade‑off—latency vs. cost—and present metrics from A/B tests. This shows end‑to‑end understanding and readiness for real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
