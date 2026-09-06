---
qid: ing_9ce8ccaf9c__fp__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 572
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:54-05:00'
sources: []
---

**Estimating the yearly serve‑cost**

1. **Workload**  
   * 100 M weekly active users → ~14 M daily users (7 days).  
   * Each user receives one LLM summary per day → 14 M inferences/day.

2. **Compute cost per inference**  
   * Assume a 13‑B parameter GPT‑3‑style model, served on A100 GPUs.  
   * One inference ≈ 30 ms GPU time → 0.03 s × 4 GB/s (peak) ≈ 120 GFlops ≈ 0.12 kWh.  
   * Cloud price: $0.02 per kWh → **$0.0024/inference**.

3. **Annual bill**  
   \[
   14\,\text{M}\;\text{inferences/day} \times 365 \times \$0.0024
   \approx \$12.2~\text{million/year}.
   \]

---

### Cutting the cost by 10×

| Technique | How it reduces cost | Key insight |
|-----------|---------------------|-------------|
| **Model distillation** | Compress a 13‑B model to ~1 B while retaining >90 % of factual accuracy. | Distilled weights are *not* just smaller; they encode the most “informative” gradients, so inference time drops proportionally with parameter count. |
| **Sparse activation (Top‑k / Mixture‑of‑Experts)** | Only activate 5–10 % of parameters per token. | The sparsity pattern is learned to match *information density* in text; it preserves expressiveness while cutting FLOPs by an order of magnitude. |
| **Cache reuse** | Store embeddings for frequently seen sentences (e.g., news headlines). | Cache hit rates can exceed 70 % for daily content, turning expensive inference into a simple vector lookup. |
| **Dynamic batching + pre‑emptive scaling** | Group requests to fill GPU capacity and scale down during off‑peak hours. | Batching amortizes per‑request latency overhead; pre‑emptive scaling aligns compute with actual demand curves, not worst‑case peaks. |

Combining these (≈ 2× each) yields a **~10× reduction**, bringing the annual serve cost to roughly **$1.2 M** while keeping user experience intact. The hidden gem: *sparsity is most effective when guided by content entropy—high‑entropy passages still activate many experts, low‑entropy ones stay tiny.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
