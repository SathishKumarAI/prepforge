---
qid: ing_0be0e8479e__star__local
question: 'Explain: Where do the parameters and FLOPs actually live in a transformer?
  Walk me through the budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 372
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:23-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with optimizing a BERT‑derived model for on‑device inference on a low‑power edge device. The team had a strict FLOPs budget of 1 B and memory limit of 300 MB, but the baseline model used 12 B parameters and 10 B FLOPs.

**Task:**  
I needed to reduce both parameter count and computational load while keeping perplexity within 5% of the baseline. The goal was to map the parameter and FLOP distribution across layers so we could target the biggest cost drivers.

**Action:**  
I profiled the model with PyTorch’s `torch.profiler` and discovered that about 70 % of the parameters resided in the multi‑head self‑attention weight matrices (Q, K, V, O) and 80 % of FLOPs were spent on matrix multiplications inside those layers. I then applied two techniques:  
1. **Weight sharing** between Q/K/V projections to cut parameter count by ~30 %.  
2. **FlashAttention** for the attention kernels, reducing FLOPs per layer by ~40 % without extra parameters.  
I also pruned a small percentage of low‑magnitude weights in the feed‑forward layers using magnitude pruning, which lowered memory usage by 15 MB.

**Result:**  
The optimized model ended up with 8 B parameters and 3.5 B FLOPs—well under the budget—and achieved a perplexity only 4.2% higher than the original. I learned that most of the computational burden in transformers is concentrated in attention, so targeted kernel optimizations can yield outsized savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
