---
qid: ing_cf0ce37571__star__local
question: 'Explain: The Decoder-Only Block — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 326
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:15-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building a lightweight language model to generate poetry in real‑time on a Raspberry Pi. The professor warned that the model had to be small yet still produce coherent sentences.

**Task:**  
I needed to understand how GPT‑2’s decoder‑only architecture could be compressed and still capture long‑range dependencies, so I could prune layers without losing fluency.

**Action:**  
First, I dissected the transformer block: a single multi‑head self‑attention sublayer followed by a position‑wise feed‑forward network, all wrapped in residual connections. I visualized each head’s attention maps to see which tokens influenced others—this confirmed that earlier words heavily guided later ones. Next, I experimented with 4‑head instead of 12, reduced the hidden size from 768 to 384, and swapped GELU for ReLU to speed inference. Using PyTorch’s `torch.jit.trace`, I compiled the model and benchmarked it on the Pi, noting latency dropped from 1.2 s per token to 0.4 s while BLEU scores stayed above 0.65.

**Result:**  
The final model generated poetry in under a second per line with high grammatical coherence. The exercise taught me that a decoder‑only transformer relies on self‑attention to propagate context, and careful pruning can preserve quality while meeting strict hardware constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
