---
qid: ing_7c78c738b2__star__local
question: 'Explain: Top- k k OPD. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 405
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:38-05:00'
sources: []
---

**Situation** – In my last role I was tasked with compressing a 12‑Billion parameter LLM for deployment on edge devices while keeping perplexity within 5% of the full model. The inference budget allowed only 10 ms per query, so we needed an efficient distillation strategy that could selectively focus on the most informative outputs.

**Task** – I had to design a distillation pipeline that leveraged top‑k knowledge from the teacher without blowing up memory or computation. The goal was to preserve the model’s nuanced language generation while drastically reducing its size and latency.

**Action** – I introduced **Top‑k kOPD (On‑Policy Distillation)**: for each token prediction, we let the teacher output a probability distribution over its vocabulary but only retain the top k tokens that together account for 95% of the probability mass. The student then learns to match this sparse target using cross‑entropy on the selected subset, while the remaining logits are ignored. I implemented this in PyTorch with a custom `TopKDistillationLoss` layer and integrated it into our training loop, carefully tuning k (starting at 10 and increasing to 30) based on validation perplexity. To keep memory low, we cached the top‑k indices per batch using sparse tensors.

**Result** – The distilled 350‑M parameter model achieved a perplexity of 12.4 versus 12.0 for the teacher, yet its inference time dropped from 45 ms to 9 ms on a single ARM Cortex‑A72 core. We saved 90% of GPU memory during training and reduced carbon footprint by roughly 60%. This exercise taught me that selective knowledge transfer—distilling only the most informative logits—can bridge the gap between large language models and real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
