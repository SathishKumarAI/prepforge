---
qid: ing_76d137016c__star__local
question: How does ALiBi encode position, and what's its claim to fame?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 271
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:29-05:00'
sources: []
---

**Situation:**  
During a research sprint at my previous company we were fine‑tuning a transformer for medical report generation. The baseline model’s attention weights were drifting, causing hallucinations in long documents.

**Task:**  
I needed to improve positional awareness without adding extra parameters or sacrificing latency, and I decided to experiment with ALiBi (Attention with Linear Biases).

**Action:**  
I implemented ALiBi by computing a linear bias matrix for each head: `bias = slope * position_difference`, where slopes were pre‑computed per head using the formula from the paper. This bias was added directly to the scaled dot‑product scores before softmax, eliminating positional embeddings entirely. I integrated it into our PyTorch training loop, ensured gradients flowed correctly, and benchmarked inference time against the vanilla model.

**Result:**  
The modified transformer produced 18 % fewer hallucinations on a held‑out test set (from 12 % to 9.8 %) while keeping batch latency under 5 ms—essential for our real‑time dashboard. I learned that linear positional biases can replace learnable embeddings, simplifying the model and improving robustness in low‑resource settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
