---
qid: ing_84fbfc1e55__faang__local
question: Explain KV cache offloading and cross-request reuse beyond a single GPU's
  memory. When does loading a cached prefix beat just recomputing prefill?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 550
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:55-05:00'
sources: []
---

**Clarify**  
We’re asked how KV‑cache offloading and cross‑request reuse let us serve large language models on GPUs that can’t hold the full key/value tensors in‑memory. When is it cheaper to load a cached prefix from disk/CPU than to recompute the same prefill tokens?

**Approach**  
1. Explain the mechanics of KV cache (per‑token keys/values).  
2. Show how offloading moves older layers’ caches to CPU/disk, swapping them back on demand.  
3. Discuss cross‑request reuse: sharing a prefix among many requests that start with the same prompt.  
4. Derive a cost model comparing recompute vs load.

**Depth**  
- **Offload**: Each layer’s KV tensor (size ≈ 2·H·T) is paged out; on a new request we swap in only the needed slice, paying a bandwidth and latency penalty \(B\).  
- **Reuse**: If *k* requests share the same first *p* tokens, the prefix cost can be amortized.  
  - Recompute cost: \(C_{\text{recomp}} = k \times p \times F\) (F = FLOPs per token).  
  - Load cost: \(C_{\text{load}} = B + p \times L\) (L = latency per token when swapping in).  
  The cache is beneficial if \(k > \frac{B}{p(F-L)}\).  
- In practice, for a 16‑GB GPU hosting a 13‑B model, the KV tensor can be ~40 GB; offloading to CPU (≈ 10 GB/s) gives \(B ≈ 4\,s\). With \(F=1\) ms/step and \(L=0.2\) ms/step, we need \(k > \frac{4}{p(0.8)}\); for a 20‑token prefix this is ~25 requests.

**Edge cases**  
- Small prefixes or low request volume → recompute wins.  
- High contention on CPU memory → swapping stalls.  
- Disk I/O limits (e.g., NVMe) can negate gains.

**Optimize & communicate**  
Use hybrid strategies: keep the first few layers’ KV in GPU, offload deeper ones; cache hot prefixes in a shared SSD pool. Communicate thresholds to ops so they can trigger pre‑loading for popular prompts. This balances latency and throughput while staying within memory limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
