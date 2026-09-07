---
qid: ing_062c0aa9fc__faang__local
question: 'Explain: High-Level System Design — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 518
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:53-05:00'
sources: []
---

**Clarify**  
We’re asked to design a large‑scale generative language model system (ChatGPT‑style). Key assumptions:  
1. User requests arrive over HTTP/HTTPS with a maximum payload of ~4 kB.  
2. We need <200 ms latency for most queries, 1–2 s acceptable for longer completions.  
3. The model is pre‑trained; we only serve inference (no on‑the‑fly training).  
4. System must support millions of concurrent users and auto‑scale to spikes.

**Approach**  
1. **Front‑end API layer** – stateless gRPC/HTTP gateway, load‑balanced via Cloud Load Balancer.  
2. **Orchestration layer** – Kubernetes pod per request queue (e.g., Ray or Kubeflow) that pulls a token batch from Redis Streams.  
3. **Inference service** – GPU nodes running PyTorch/TensorFlow with model sharding (pipeline + tensor parallelism).  
4. **Cache** – In‑memory KV store (Redis/Spanner) for frequently used embeddings and partial responses.  
5. **Observability & scaling** – Prometheus metrics → Auto‑Scaler; Sentry for errors.

**Depth**  
- **Token batching**: Group up to 128 requests into a single batch; reduces GPU utilization from ~30 % to >80 %.  
- **Model parallelism**: Pipeline splits layers across GPUs; tensor sharding splits hidden states. Complexity O(L×N) where L = layers, N = shards.  
- **Latency trade‑off**: Larger batches increase throughput but add queuing delay; we cap batch latency at 50 ms and fall back to single‑request inference when needed.

**Edge Cases**  
- Sudden traffic spikes → GPU pool autoscaling may lag → use pre‑warm idle pods.  
- Long‑running completions → implement streaming via WebSocket or SSE.  
- Model failure on a shard → graceful degradation by rolling back to smaller shards.

**Optimize & Communicate**  
Explain how batching + sharding maximizes GPU FLOPs while keeping per‑request latency low. Highlight monitoring thresholds (e.g., queue length > 200 ms triggers new pod). Conclude with potential future improvements: quantization for faster inference, serverless GPUs, or edge caching for latency‑critical users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
