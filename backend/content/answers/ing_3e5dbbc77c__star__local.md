---
qid: ing_3e5dbbc77c__star__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 384
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:04-05:00'
sources: []
---

**Situation:**  
During a production rollout of our real‑time recommendation engine, we had to share a single high‑end NVIDIA A100 across three microservices—each serving different user segments. The services all accessed the same GPU for inference but each also maintained its own key–value (KV) cache for token embeddings.

**Task:**  
I needed to ensure that sharing the GPU didn’t degrade latency, while guaranteeing that the KV caches stayed isolated so users from one service couldn’t see or overwrite data belonging to another. The goal was <10 ms inference per request and zero cross‑service leakage.

**Action:**  
1. **GPU scheduling**: I configured CUDA streams with priority queuing and set `cudaDeviceEnablePeerAccess` only for the shared memory pool, allowing all services to pull tensors from a common buffer without contention.  
2. **KV cache isolation**: Instead of using a global hash map in GPU memory, I allocated separate pinned memory regions per service and passed them as distinct `kv_cache_ptrs`. I wrapped each region with a lightweight mutex on the host side and used CUDA’s `cudaMemcpyAsync` to copy only the relevant slice during inference.  
3. **Monitoring**: Added Prometheus metrics for GPU utilization per stream and KV cache hit‑rates, alerting if any service exceeded 70 % of its allocated bandwidth.

**Result:**  
GPU throughput improved by 15 %, keeping latency below 9 ms on average. Each KV cache maintained a >95 % hit‑rate independently, and no cross‑service data leakage was observed during post‑deployment audits. I learned that while GPU memory can be shared safely with careful stream management, logical isolation of per‑request state (like KV caches) often requires dedicated host‑side buffers and explicit copy boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
