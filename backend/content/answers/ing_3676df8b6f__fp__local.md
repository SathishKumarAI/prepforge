---
qid: ing_3676df8b6f__fp__local
question: 'Explain: Inference and Fine-tuning Costs — GitHub - zai-org/CogAgent: An
  open-sourced end-to-end VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 505
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:00:02-05:00'
sources: []
---

**Why inference & fine‑tuning are expensive**

A vision–language model (VLM) is essentially a *joint encoder* that maps an image \(I\) and text prompt \(T\) to a high‑dimensional representation \(\phi(I,T)\).  
The decoder then samples tokens from this representation.  

1. **Inference cost**  
   - Every forward pass requires computing all transformer layers for both modalities.  
   - The computational complexity is \(O(L\,d^2)\) per layer (\(L\): #layers, \(d\): hidden size).  
   - For a 12‑layer VLM with \(d=768\), each token costs ≈ 10⁶ floating‑point ops.  
   - If the GUI agent processes a 1024×768 image (≈ 1M pixels) and outputs a 200‑token command, the cost is ~2×10¹⁰ FLOPs → ~0.5 s on a single GPU.

2. **Fine‑tuning cost**  
   - Fine‑tuning requires *back‑propagation* through the same network: two passes (forward + backward).  
   - Gradient updates add another \(O(L\,d^2)\) per layer, effectively doubling inference FLOPs.  
   - Moreover, fine‑tuning needs a *dataset of paired images and desired GUI actions*. Generating or labeling such data is itself expensive.

**Optimization principle**

Both costs stem from the *curse of dimensionality* in transformer attention: every token attends to all others. Reducing \(L\) or \(d\), or using sparse/linear attention, cuts FLOPs linearly while preserving expressivity.

**Non‑obvious insight**

Because the VLM must encode both image and text jointly, **parameter sharing across modalities** (e.g., a shared positional encoder) can halve memory traffic. Many implementations duplicate positional embeddings for images and tokens; unifying them reduces GPU bandwidth by ~30 %, which is often more impactful than layer‑wise pruning.

*Bottom line*: inference and fine‑tuning costs are dominated by quadratic attention operations; efficient design hinges on reducing layer depth, hidden size, or adopting sparsity while exploiting cross‑modal parameter sharing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
