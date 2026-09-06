---
qid: ing_ef171b5ac3__fp__local
question: GLM has been bilingual Chinese/English since GLM-130B. What changes in tokenization,
  data, and evaluation when a model must serve both languages well?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 476
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:27:05-05:00'
sources: []
---

**Why bilingual models need new tokenization, data handling and metrics**

The core objective of a language model is *predicting the next symbol given all previous symbols*.  
When the symbol set expands from one script (English) to two (Latin + Han characters), the distribution over symbols changes dramatically: Chinese words are often single characters with high frequency, while English relies on sub‑word units. If we keep a fixed tokeniser, the model will either

1. **Over‑compress** Chinese (many rare characters become separate tokens) and
2. **Under‑compress** English (long words split into many sub‑words).

Hence bilingual training requires a *joint sub‑word vocabulary* that respects both scripts. The usual solution is to run byte‑pair encoding (BPE) on the concatenated corpus but with a language‑specific “prefix” token (`<en>`, `<zh>`). This forces the model to learn a **shared embedding space** while still allowing script‑aware segmentation, reducing cross‑script interference.

Data must be **balanced and representative**: otherwise the high‑frequency Chinese tokens dominate training loss. Practically we oversample low‑resource languages or use a temperature‑scaled sampling scheme so that each language contributes roughly equal perplexity gradients.

Evaluation shifts from monolingual perplexity to **language‑specific metrics** (perplexity, BLEU, accuracy on downstream tasks) plus *cross‑lingual consistency* checks (e.g., translation recall). The non‑obvious insight: a single perplexity number hides catastrophic forgetting; you must report per‑language perplexities and a “language‑balance” score that penalises large disparities. This ensures the model truly serves both languages rather than merely preferring the dominant one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
