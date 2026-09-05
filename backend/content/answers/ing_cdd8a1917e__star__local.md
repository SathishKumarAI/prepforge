---
qid: ing_cdd8a1917e__star__local
question: 'Explain: Title: Train Short, Test Long: Attention with Linear Biases Enables
  Input Length Extrapolation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 345
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:46-05:00'
sources: []
---

**Situation:**  
While working on a natural‑language inference model for a startup’s customer‑support chatbot, we hit a wall: the transformer trained on 512‑token examples performed poorly when customers sent long, multi‑paragraph queries (up to 4 k tokens). The latency was unacceptable and accuracy dropped by ~15 %.

**Task:**  
I had to redesign the attention mechanism so the model could handle arbitrarily longer inputs without retraining from scratch or blowing up memory.

**Action:**  
I studied the “Train Short, Test Long” paper and implemented its linear‑bias attention. Instead of the standard quadratic‑time softmax over all token pairs, I added a learnable linear bias to each query–key pair that captures positional distance in a compact form. This lets the model generalize the learned interaction pattern to unseen lengths. I swapped out the vanilla multi‑head self‑attention layer for this biased version in our PyTorch code, kept the same embedding size (768), and trained on 512‑token batches only. I also introduced a simple caching trick: during inference, keys/values are pre‑computed once per segment to keep memory low.

**Result:**  
After fine‑tuning for one week, the chatbot handled 4 k‑token inputs with <2 % loss in F1 score compared to the short‑input baseline. Latency stayed under 200 ms on a single GPU. I learned that carefully engineered attention biases can unlock input‑length extrapolation without costly re‑training or architectural overhauls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
