---
qid: ing_0ab5c01771__think__local
question: 'Explain: Your model meets quality but runs at 4s p95 and you need 400ms
  with 10x the throughput. Design the compression plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 756
total_tokens: 966
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:25:19-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What is “quality” in this context?* Assume it’s a validation metric (e.g., BLEU, F1) that must stay ≥ X.  
- *Performance target*: 400 ms p95 and 10× throughput → 40 ms average if we keep the same batch size.  
- *Hardware*: CPU‑only inference or GPU? Assume typical server CPUs with AVX‑512.  
- *Model size & architecture*: Large transformer (≈ 1B params).  

**2️⃣ Mental model / framework**  
Use a **compression pipeline**:  
1. **Pruning** → remove low‑impact weights.  
2. **Quantization** → 8‑bit or mixed‑precision.  
3. **Knowledge distillation** → train a smaller teacher–student pair.  
4. **Operator fusion / graph optimisation** → reduce kernel launches.  

Balance each step against the quality budget and latency constraints.

**3️⃣ Step‑by‑step reasoning**

| Step | Action | Rationale |
|------|--------|-----------|
| A | Profile current model: identify bottlenecks (embedding lookup, attention matmul). | Targeted optimisation beats blanket compression. |
| B | Apply *structured pruning* to self‑attention matrices, keeping sparsity < 30 % to avoid too many indirect accesses. | Keeps memory locality; minimal quality loss. |
| C | Quantise weights & activations to **int8** with per‑channel scaling; fine‑tune for 0.5 % metric drop. | Int8 reduces compute by ~4× on CPUs, fits cache better. |
| D | Distill into a *student* with half the layers (e.g., 6→3). Use temperature‑scaled loss + task loss. | Achieves larger throughput gains while preserving accuracy. |
| E | Fuse consecutive ops (embedding → layernorm → activation) and use vectorised kernels (AVX‑512). | Cuts kernel launch overhead, improves cache reuse. |
| F | Batch size tuning: find minimal batch that saturates CPU cores (~8–16). | Larger batches amortise startup costs, but keep p95 ≤ 400 ms. |
| G | Validate: run latency benchmarks on target hardware; iterate pruning/quantisation ratios until 400 ms achieved. |

**4️⃣ Common traps to avoid**

- *Unstructured pruning* → many zero‑weights cause memory‑bandwidth stalls.  
- *Naïve int8 quantisation* → overflow in dot‑products; use per‑tensor scaling or bias correction.  
- *Distilling too aggressively* → student underfits, quality drops > 5 %.  
- *Ignoring cache hierarchy* → fusion can actually hurt if it forces larger registers.

**5️⃣ Sanity‑check & communicate**

1. **Check ratios**: 10× throughput ≈ 10× speed‑up → aim for ~90 % compute reduction; verify with FLOP count after pruning/quantisation.  
2. **Latency distribution**: plot histogram to confirm p95 ≤ 400 ms, not just average.  
3. **Explain trade‑offs**: “We prune sparsely to keep cache locality, quantise to 8‑bit for CPU acceleration, and distill a half‑size student; together this yields ~10× throughput while keeping the BLEU score within 1 %.”  

Use these steps as a reusable template whenever you need to compress a model under strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
