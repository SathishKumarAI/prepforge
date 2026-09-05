---
qid: ing_b3dccc1170__star__local
question: Why does scaled dot-product attention divide by √d_k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:44-05:00'
sources: []
---

**Situation:**  
During a research sprint at my previous company we were building an LSTM‑based language model that struggled to converge when we added more heads to the multi‑head attention layer. The training loss plateaued and GPU memory usage shot up.

**Task:**  
I needed to identify why adding heads degraded performance and propose a tweak that would keep the model scalable without sacrificing accuracy.

**Action:**  
I dug into the dot‑product calculations: each head computes \(QK^T\) where \(d_k\) is the dimensionality of key vectors. I realized that as \(d_k\) grew, the raw scores became large in magnitude, pushing softmax into a saturated regime and producing tiny gradients. To counter this, I applied the √\(d_k\) scaling factor—dividing each dot‑product by its square root before softmax. I re‑implemented the attention module in PyTorch, added unit tests to verify gradient norms, and ran a controlled experiment with 8 versus 16 heads.

**Result:**  
After scaling, training loss dropped by ~30 % within the first epoch, and the model achieved a perplexity of 32 on the validation set (previously 45). GPU memory usage stayed constant, allowing us to train deeper models. I learned that seemingly minor mathematical normalizations can have outsized effects on stability and performance in deep learning systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
