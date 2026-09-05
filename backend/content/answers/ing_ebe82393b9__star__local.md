---
qid: ing_ebe82393b9__star__local
question: Adam vs AdamW - what exactly is "decoupled weight decay," and why did AdamW
  become the transformer default?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 311
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:38-05:00'
sources: []
---

**Situation:** While fine‑tuning a BERT model on a downstream NER dataset, the training loss plateaued after only a few epochs and the validation F1 hovered around 78 %. My hyperparameter sweeps with standard Adam (with weight decay as L2 regularisation) kept overfitting.

**Task:** I needed to reduce over‑regularisation that was actually hurting generalisation, while still keeping the optimiser stable for the large transformer parameter set (~110M weights).

**Action:** I switched from Adam to AdamW. In Adam, weight decay is applied *inside* the adaptive update: the same scaling factor that normalises gradients also dampens the weights, so heavy‑weight updates get overly shrunk. AdamW “decouples” this by applying weight decay as a separate L2 step after the momentum update, leaving the adaptive learning rates untouched. I set `weight_decay=0.01`, used a cosine‑annealed LR schedule, and monitored training loss.

**Result:** The validation F1 jumped to 84 % within ten epochs—an 8 point lift—and overfitting dropped markedly. This experience reinforced why AdamW became the de‑facto default for transformers: it cleanly separates regularisation from adaptive optimisation, giving better generalisation on large models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
