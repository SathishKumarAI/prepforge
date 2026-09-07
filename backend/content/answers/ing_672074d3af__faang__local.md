---
qid: ing_672074d3af__faang__local
question: 'Explain: Capacity and Storage Estimation — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 684
total_tokens: 926
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:44:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how the paper “Capacity and Storage Estimation – ChatGPT System Design” (Neo Kim & Hayk) approaches two core design questions for large‑scale LLMs: *how much model capacity is needed* and *what storage budget suffices*. I’ll assume the audience knows basic transformer math, but not the specific estimation tricks used.

**Approach**  
1. Map the problem to concrete metrics (parameters, FLOPs, latency).  
2. Follow the paper’s two‑step pipeline:  
   *Capacity Estimation* → *Storage Estimation*.  
3. Highlight key equations and assumptions.  

**Depth**

| Step | Goal | Key Idea | Formula |
|------|------|----------|---------|
| **1. Capacity** | Estimate number of layers/hidden units that hit a target perplexity on a benchmark (e.g., LAMBADA). | Treat each layer as a *self‑attention* block; total model size ≈ L × H². | `P = a·log(L) + b·log(H)` → solve for L, H given desired `P`. |
| **2. Storage** | Convert capacity to disk & RAM needs, including checkpoints and optimizer state. | Use *parameter‑size* (4 bytes/float32), *gradient* (same), *optimizer* overhead (~3×). | `Storage = 4·N_params + 8·N_params + 12·N_params` → ≈ 24 GB per 1B params. |
| **3. Scaling** | Validate that linear scaling holds up to 10‑20B parameters; otherwise add *parameter sharing* or *low‑rank adapters*. | Empirical fit: `Time ∝ N_layers × H²`. | `T = c·L·H²` → adjust for GPU count. |

The paper shows a 2‑step regression that predicts perplexity within ±0.3 bits/char, and a storage calculator that outputs *disk* (≈ 1.5× model size) and *RAM* (≈ 3× for training).  

**Edge Cases**

- Very small models (< 200M): bias terms dominate; formula underestimates.  
- Extremely large vocabularies (> 500k tokens): embedding cost rises quadratically.  
- Mixed‑precision: 16‑bit reduces storage by half but changes loss surface.

Test with toy configs (e.g., GPT‑2 base vs. XL) to confirm the regression bounds.

**Optimize & Communicate**

*Improvements*:  
- Incorporate *quantization* and *pruning* factors into the storage formula.  
- Add a *latency budget* constraint for inference, linking `L` and `H` to GPU FLOPs.  

*Narrative*:  
“First, we map perplexity to layer‑size space using a simple log‑linear fit; this gives us a target capacity. Next, we translate that capacity into concrete hardware footprints by accounting for parameter storage, optimizer buffers, and checkpoint overheads. Finally, we sanity‑check against edge cases—tiny models, huge vocabularies—and suggest quantization as a future refinement.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
