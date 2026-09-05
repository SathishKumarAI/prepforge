---
qid: ing_1df56b5424__fp__local
question: 'Explain: PEFT: LoRA and QLoRA — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 445
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:18-05:00'
sources: []
---

**PEFT (Parameter‑Efficient Fine‑Tuning)** tackles the core problem of adapting a huge pretrained model to a new task while keeping memory and compute low.  
A large language model has *M* parameters; naive fine‑tuning updates all of them, but only a tiny fraction—those most sensitive to the downstream signal—need adjustment. PEFT isolates this subset by adding a *small trainable module* that modulates the original weights without touching them.

**LoRA (Low‑Rank Adaptation)** embodies this idea mathematically. For every weight matrix \(W\in \mathbb{R}^{d\times d}\), LoRA introduces two low‑rank matrices \(A,B\) (\(r\ll d\)) and learns only their product:
\[
W_{\text{adapted}} = W + BA^{T}.
\]
Because \(AB^{T}\) is rank‑\(r\), the number of learnable parameters drops from \(d^2\) to \(2dr\). The original weights remain frozen, preserving pretraining knowledge; only a lightweight “adapter” learns task‑specific directions.

**QLoRA (Quantized LoRA)** adds another layer: after training LoRA’s low‑rank updates, the whole model is quantized (e.g., 4‑bit) to fit on consumer GPUs. The key insight is that *quantization noise* mainly affects large magnitude weights; the small LoRA updates are already sparse and can be stored in higher precision, allowing accurate inference with minimal memory.

**Alignment** emerges naturally: because only a few directions change, the model’s behavior stays close to its pretrained distribution—reducing catastrophic forgetting and making it easier to steer outputs toward desired goals. The subtle, often overlooked insight is that *low‑rank adaptation implicitly enforces a form of regularized projection onto the manifold of useful task gradients*, which explains why LoRA and QLoRA work even with extreme compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
