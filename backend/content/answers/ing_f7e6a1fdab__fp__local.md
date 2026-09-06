---
qid: ing_f7e6a1fdab__fp__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 576
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:58-05:00'
sources: []
---

**First‑principle sketch**

A 671 B‑parameter MoE (Mixture‑of‑Experts) network solves the *curse of dimensionality* by activating only a handful of “experts” per token, so that each expert can be small yet collectively expressive.  
To keep latency low under GPU‑memory limits we must guarantee three invariants:

| Invariant | Why it matters | How to enforce |
|-----------|----------------|----------------|
| **Sparse activation** | Only ~2–4 experts are touched per token → fewer weights in flight. | Use a top‑k gating network that returns indices; fetch only the corresponding expert tensors from DRAM into GPU SRAM on‑the‑fly. |
| **Balanced load** | Avoid one GPU idling while another stalls. | Perform *global* load‑balancing: after routing, redistribute experts across GPUs so each device receives roughly equal FLOPs (e.g., via a lightweight hash of token IDs). |
| **Cache locality** | GPU SRAM is precious; repeated accesses amortize transfer cost. | Maintain an LRU cache per GPU for the most frequently used expert weights, and compress weights on‑device with 8‑bit quantization before caching. |

**Pipeline**

1. **Token‑wise gating**: Compute gate logits on CPU (or a lightweight GPU), pick top‑k experts, send indices to the device scheduler.
2. **Expert sharding**: Partition the full expert set across GPUs; each GPU hosts only its shard plus a small shared “fallback” expert for load balancing.
3. **On‑device caching**: When a token needs an unseen expert, fetch the compressed weight matrix from host memory into the GPU’s SRAM cache; if the cache is full evict LRU.
4. **Parallel execution**: While one batch of tokens is being routed, another batch can be processed on already cached experts, hiding transfer latency.

**Non‑obvious insight**

Because MoE routing is *data‑dependent*, a token’s expert choice often repeats within a micro‑batch. Exploiting this intra‑batch redundancy—by grouping tokens with identical expert sets before the forward pass—dramatically reduces memory traffic and allows a single weight matrix to serve dozens of tokens, keeping latency flat even when experts are large.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
