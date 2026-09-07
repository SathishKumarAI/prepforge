---
qid: ing_02d5206c1f__faang__local
question: 'Explain: Two Common Types of Fine-Tuning — Fine-Tuning Explained for Noobs
  (How Pretrained Models Learn New Skills)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 464
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, beginner‑friendly explanation of the two main fine‑tuning strategies for pretrained language models: *full (or “base”) fine‑tuning* and *adapter‑based (or “parameter‑efficient”) fine‑tuning*. I’ll assume we’re talking about transformer‑style models like GPT‑3 or BERT, and that the audience knows what a pre‑trained model is but not the nitty‑gritty of downstream adaptation.

**Approach**  
1. Define each strategy in plain terms.  
2. Highlight how weights are updated.  
3. Contrast benefits (performance vs compute).  
4. End with typical use‑case scenarios.

**Depth**  
- **Full fine‑tuning**: All model parameters (≈ hundreds of millions or billions) are unfrozen and optimized on the new dataset. The model can learn highly task‑specific patterns but requires substantial GPU memory, longer training times, and risks overfitting when data is scarce.  
- **Adapter fine‑tuning**: Only a small set of newly inserted “adapter” layers (typically 1–2% of total parameters) are trained; the backbone stays frozen. This drastically cuts GPU usage, speeds convergence, and preserves the general knowledge encoded in the base weights—ideal for many downstream tasks or when deploying on edge devices.

**Edge Cases**  
- Full fine‑tuning may collapse if the new dataset is too small (catastrophic forgetting).  
- Adapter training can underperform on highly specialized domains where the backbone’s inductive biases are insufficient.  
- Mixed approaches (e.g., “low‑rank adapters”) sit between extremes.

**Optimize & Communicate**  
I’d finish by summarizing: *Full fine‑tuning → maximum flexibility, heavy compute; adapters → lightweight, fast, and safer for limited data.* I’d also mention that hybrid strategies (freezing early layers, fine‑tuning later ones) can offer a middle ground. This structure shows clear reasoning, depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
