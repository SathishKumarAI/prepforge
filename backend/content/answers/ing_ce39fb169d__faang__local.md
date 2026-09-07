---
qid: ing_ce39fb169d__faang__local
question: 'Explain: Routing tiers — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 551
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:40:09-05:00'
sources: []
---

**Routing tiers – LLM Gateway & Serving Platform**

| Tier | Purpose | Typical Responsibilities |
|------|---------|--------------------------|
| **LLM‑Gateway (Front‑end)** | *Entry point* for all client requests. Handles authentication, rate‑limiting, request validation and routing to the appropriate model instance. | • API gateway or edge proxy<br>• OAuth/JWT auth<br>• Request shaping (prompt formatting)<br>• Load‑balancing across serving nodes |
| **Serving Platform (Back‑end)** | *Model execution* layer that hosts the actual inference engines. Provides low‑latency inference, autoscaling, and model versioning. | • Container orchestration (K8s, ECS)<br>• GPU/TPU allocation<br>• Model registry & version control<br>• Metrics collection (throughput, latency) |

---

### Clarify
- **Goal:** Low‑latency, highly available inference for multiple LLMs.  
- **Assumptions to confirm:** Expected traffic (requests/sec), SLA (e.g., 99.9% uptime), number of models and versions.

### Approach
1. **Design the gateway** with a stateless API layer + caching for common prompts.  
2. **Implement request routing rules** (e.g., “chat” → GPT‑4, “summarize” → Llama).  
3. **Build the serving stack** using GPU nodes behind an autoscaler; expose models via a gRPC/REST endpoint.

### Depth
- **Gateway:** Uses Envoy or AWS API Gateway + Lambda for auth & validation (O(1) per request).  
- **Serving Platform:** Each model runs in its own pod with a dedicated GPU. The platform exposes a *model‑router* that forwards requests to the right pod, ensuring zero‑copy data transfer and minimal serialization overhead.  
- **Metrics & Health Checks** are streamed to Prometheus; autoscaling triggers on CPU/GPU utilization >70%.

### Edge Cases
- Sudden traffic spike → gateway throttles and scales serving pods automatically.  
- Model failure → fallback to a healthy replica or a lower‑capacity model.  
- Security breach → gateway revokes tokens instantly.

### Optimize & Communicate
- **Caching** of prompt embeddings reduces GPU load.  
- **Batching** at the serving layer aggregates requests for better throughput (especially on GPUs).  
- I would explain how each component scales horizontally and how observability guarantees SLA adherence, highlighting trade‑offs between latency vs. resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
