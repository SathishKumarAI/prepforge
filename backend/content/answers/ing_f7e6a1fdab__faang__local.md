---
qid: ing_f7e6a1fdab__faang__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 573
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:35-05:00'
sources: []
---

**Clarify**  
You need to deliver predictions from a 671 billion‑parameter Mixture‑of‑Experts (MoE) model on GPUs that cannot hold the entire network in memory, while keeping latency < ~10 ms for real‑time inference. I’ll assume: *a* single request contains one token sequence, *b* we can pre‑allocate a few experts per GPU, and *c* the system must support concurrent users.

**Approach**  
1. **Expert partitioning + sharding** – split the 671 B parameters across many GPUs (e.g., 8 × 84 B).  
2. **Sparse activation** – use a router that selects only K experts per token, so each GPU processes a small subset of experts.  
3. **Model parallelism with memory‑efficient kernels** – fuse linear layers and layer norms to reduce temporary tensors.  
4. **Off‑loading & on‑the‑fly loading** – keep rarely used experts in host RAM or NVMe; stream them into GPU memory when needed, evicting others via LRU.  
5. **Batching strategy** – process one token per request but aggregate across users to amortize kernel launch overhead.

**Depth**  
- **Router**: learnable gating (top‑k) with temperature scaling ensures deterministic K experts.  
- **Memory footprint**: each expert ~10 B; with K=4, GPU memory ≈ 8 × 10 B + activations ≈ < 12 GB.  
- **Latency**: fused kernels and pre‑prefetched experts reduce per‑token time to ~5–7 ms on a V100/RTX A6000.  
- **Complexity**: O(K·E) compute per token, where E is number of experts; memory scales linearly with K.

**Edge Cases**  
- High‑frequency tokens that always activate the same expert → cache thrashing.  
- Sudden traffic spikes causing many concurrent loads → GPU oversubscription.  
- Router mis‑prediction leading to too few experts (under‑fitting) or too many (memory overflow).

**Optimize & Communicate**  
Profile per‑token runtime; if bottleneck is kernel launch, increase micro‑batch size. Use NVLink for inter‑GPU data shuffling to reduce PCIe stalls. Explain trade‑offs: lower K → less memory but higher bias; higher K → more compute but better coverage. Conclude that with careful routing, expert sharding, and dynamic off‑loading, a 671 B MoE can be served at sub‑10 ms latency on commodity GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
