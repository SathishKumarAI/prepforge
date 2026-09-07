---
qid: ing_d8015e57d3__faang__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 530
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:00-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *serving stack* that exposes a Claude‑scale LLM (≈ 10–30B params) as an API. The goal: **maximise GPU utilisation** while keeping the 99th percentile latency below, say, 200 ms. Key assumptions: single‑GPU nodes (or small multi‑GPU), stateless inference requests, batchable workloads, and a shared pool of GPUs behind a load balancer.

---

**Approach**  
1. **Request batching** – accumulate short‐lived requests into micro‑batches (size 8–32) before sending to the GPU.  
2. **Greedy queueing + back‑pressure** – use an asynchronous event loop that pulls from a high‑throughput message bus, applies a *token‑budget* per worker.  
3. **GPU pooling** – keep each GPU in a “ready” state; when idle, pull the next batch.  
4. **Adaptive scheduling** – monitor queue depth and latency; dynamically adjust batch size or spin up temporary workers if latency spikes.

---

**Depth**  
- **Batching kernel**: use Triton/FlashAttention to fuse multiple prompts into one GPU pass; amortises launch overhead.  
- **Throughput vs. latency trade‑off**: empirical studies show a batch of 16 yields ~3× throughput with <30 ms extra latency per request.  
- **Back‑pressure**: expose a *max queue length* (e.g., 1k) to the load balancer; beyond that, return `503`.  
- **Complexity**: O(batch_size × seq_len) GPU compute; O(1) CPU overhead per request.

---

**Edge Cases**  
- Extremely long prompts → spill to CPU or split across GPUs.  
- Sudden traffic burst → queue overflow → service degradation.  
- GPU failure → graceful worker termination and re‑routing.

---

**Optimize & Communicate**  
- Profile latency distribution; if p99 > 200 ms, reduce batch size to 8 and pre‑warm more workers.  
- Use *prefetching* of embeddings to hide I/O.  
- Explain decisions to stakeholders: “We batch to keep GPUs busy, but we cap the queue so that tail latency stays within SLA.”  

This design balances utilisation with strict latency guarantees, a pattern many FAANG teams use for large‑model serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
