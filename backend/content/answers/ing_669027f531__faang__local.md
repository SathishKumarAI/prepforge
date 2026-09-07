---
qid: ing_669027f531__faang__local
question: 'Explain: We now pair LPX decode accelerators with NVIDIA GPUs doing prefill
  and attention. Design the serving path across those two machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 501
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:49-05:00'
sources: []
---

**Clarify**

You’re asked to design a *serving pipeline* that splits work between an LPX‑decode accelerator (responsible for decoding token streams) and an NVIDIA GPU (handling prefill and attention).  
Assumptions:  
1. The LPX runs on one machine, the GPU on another, connected via high‑speed fabric (e.g., NVLink/InfiniBand).  
2. Latency is critical; we want minimal round‑trips.  
3. Batches of requests arrive continuously.

**Approach**

1. **Front‑end router** receives requests and pushes a *decode job* to the LPX via RDMA.  
2. The LPX decodes until it reaches the *prefill boundary* (e.g., first 128 tokens). It streams that partial sequence back to the GPU.  
3. The GPU receives the prefill, runs its transformer blocks, and produces a *key/value cache*.  
4. For each subsequent token, the GPU requests the next decoded chunk from LPX; LPX decodes incrementally, sending only the needed tokens.  
5. Resulting logits are returned to the client.

**Depth**

- Use zero‑copy RDMA (e.g., NVMe over Fabrics) so that buffers aren’t copied between host and device memory.  
- Implement a *pipeline* where multiple requests share GPU compute: while one request is in attention, another LPX can be decoding its next token.  
- Complexity: O(1) per token on GPU (attention) + O(1) decode cost; overall latency ≈ decode latency + logit computation.

**Edge Cases**

- **Burst traffic**: buffer overflow on LPX → back‑pressure the front‑end.  
- **Decoding errors**: retry or fallback to CPU decoder.  
- **Long sequences**: GPU memory limits → spill KV cache to host and stream back when needed.

**Optimize & Communicate**

Explain that by decoupling decode (CPU‑friendly) from heavy attention (GPU‑friendly), we keep both devices at high utilization. Highlight the use of RDMA for low‑latency data movement, pipelining to hide inter‑machine round‑trips, and back‑pressure mechanisms for robustness. This showcases structured problem solving, clear communication, and depth in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
