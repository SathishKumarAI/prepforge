---
qid: ing_3ce30ef96a__star__local
question: 'Explain: DoRA (Weight-Decomposed Low-Rank Adaptation)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:55-05:00'
sources: []
---

**Situation** – While leading a research sprint to accelerate inference on our vision‑transformer model for mobile devices, the baseline weighed 150 MB and lagged behind the 60 ms latency target.

**Task** – I had to compress the model by at least 70 % while keeping top‑1 accuracy within 0.5 % of the full model.

**Action** – I implemented DoRA (Weight‑Decomposed Low‑Rank Adaptation). First, I factored each weight matrix \(W \in \mathbb{R}^{m\times n}\) into a low‑rank core \(U \in \mathbb{R}^{m\times r}\), \(V \in \mathbb{R}^{r\times n}\) with \(r=8\). Instead of updating all entries, I trained only the two small matrices per layer, using AdamW with a learning rate of 1e‑4. To preserve expressiveness, I added a residual “bias” tensor that learned to correct for rank truncation errors. Training took 12 h on a single GPU; the adaptation modules were then frozen and merged back into the original weights.

**Result** – The compressed model dropped to 45 MB and achieved 74 % fewer FLOPs, delivering 48 ms latency on an ARM Cortex‑A55. Accuracy loss was just 0.3 %, meeting our target. I learned that careful rank selection combined with residual correction can unlock aggressive compression without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
