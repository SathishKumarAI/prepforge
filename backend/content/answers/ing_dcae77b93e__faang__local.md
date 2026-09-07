---
qid: ing_dcae77b93e__faang__local
question: 'Explain: ⚡ Inference, Serving & Production LLM Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:36-05:00'
sources: []
---

**Clarify**  
We’re asked how a large language model (LLM) moves from *inference* to being a live, production‑grade service (“serving”). Key assumptions: the model is already trained, we need low latency, high throughput, and fault tolerance for real users.

---

**Approach**  
1. **Inference engine** – efficient runtime (e.g., ONNX/TF‑Lite, Triton) that loads weights into GPU/TPU memory.  
2. **Serving layer** – API gateway + request queue (K8s pods, autoscaling).  
3. **Production plumbing** – monitoring, logging, A/B testing, rollback, and security.

---

**Depth**  
- *Inference*: batch vs streaming; beam search vs greedy; token‑level caching; model sharding across GPUs; quantization (INT8) to cut memory.  
- *Serving*: REST/GRPC endpoints with rate limits; request batching for GPU efficiency; per‑user context stored in a fast KV store (Redis).  
- *Production*: Canary releases, chaos testing, automated rollback on SLA breach. Latency targets: <200 ms for single turn; throughput: 10k QPS. Complexity: O(1) per token inference after batching; memory ~model size + cache.

---

**Edge Cases**  
- **Cold starts**: pre‑warm pods; keep a “mini” checkpoint in RAM.  
- **Model drift**: continuous evaluation against held‑out queries.  
- **Security**: input sanitization, differential privacy for user data.

---

**Optimize & Communicate**  
To improve latency, switch to *tensor parallelism* and *pipeline parallelism*. For throughput, use *prefill + decode* batching. I’d narrate this by first showing the high‑level flow diagram, then diving into each layer’s trade‑offs (compute vs memory), and finally summarizing SLAs with concrete numbers. This demonstrates structured thinking, clear communication, and deep technical grasp—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
