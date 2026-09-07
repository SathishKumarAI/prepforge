---
qid: ing_77d8be5ab1__faang__local
question: Which modules do you target with LoRA, how do you pick the rank, and what
  are the actual memory savings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 604
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:22:36-05:00'
sources: []
---

**Clarify**

The question asks which layers of a pretrained Transformer we would fine‑tune with LoRA, how to choose its rank *r*, and what concrete memory reduction we can expect.

*Assumptions:*  
- Base model is a standard BERT/LLM (self‑attention + MLP blocks).  
- We target full‑finetuning for a downstream task.  
- GPU VRAM limits are the bottleneck.

---

**Approach**

1. **Identify high‑parameter modules** – query, key, value, and feed‑forward weight matrices in each Transformer block.  
2. **Insert LoRA adapters** only on these dense layers; skip small bias or LayerNorm parameters.  
3. **Rank selection**: start with *r = 4–8* for lightweight models, scaling to *r = 16–32* if validation loss plateaus.  
4. **Measure savings** by comparing parameter counts and runtime memory.

---

**Depth**

- Each LoRA rank‑*r* adapter replaces a weight matrix \(W \in \mathbb{R}^{d\times d}\) with two low‑rank matrices: \(A\in\mathbb{R}^{d\times r}\), \(B\in\mathbb{R}^{r\times d}\).  
- Parameter count per adapter: \(2dr = 2d^2 \frac{r}{d} = 2d^2 (r/d)\).  
- For *r = 8* on a 768‑dim block, we add ~12 k parameters vs. 589 k in the full matrix (~2% overhead).  
- Memory: only the adapters are stored as trainable; the base weights stay frozen and can be shared across tasks.  
- If fine‑tuning *B* blocks (≈12 per layer) with rank 8, total extra params ≈ 12 × 12 k = 144 k vs. full finetune (~7M).  
- Result: ~80–90% reduction in trainable memory and a similar drop in peak GPU usage.

---

**Edge Cases**

- Very small *r* may under‑fit; monitor validation loss.  
- Some tasks (e.g., sequence labeling) may require higher rank to capture subtle patterns.  
- Adapter placement on LayerNorm can occasionally hurt calibration—omit unless experiments show benefit.

---

**Optimize & Communicate**

Explain that LoRA trades a tiny, task‑specific parameter budget for the ability to reuse massive pretrained weights. Emphasize empirical validation: start low, scale *r* until convergence, and always benchmark memory against full finetuning. This structured reasoning demonstrates clear problem understanding, practical trade‑offs, and concise communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
