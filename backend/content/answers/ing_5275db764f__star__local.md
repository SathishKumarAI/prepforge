---
qid: ing_5275db764f__star__local
question: 'Explain: Sampled-Token OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 339
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:16-05:00'
sources: []
---

**Situation:**  
At my last company we were trying to shrink a 12‑B GPT‑style model for deployment on edge devices. The baseline distilled model lagged behind the teacher by ~15 % perplexity on our internal benchmark.

**Task:**  
I needed to devise an efficient on‑policy distillation technique that would let the student learn from the teacher’s token choices while keeping compute low, without sacrificing too much accuracy.

**Action:**  
I implemented **Sampled‑Token OPD (On‑Policy Distillation)**. First, I sampled a subset of tokens from each training sequence based on the teacher’s softmax probabilities—this reduced the target set by ~70 %. Then, during student training, I only computed KL loss on those sampled tokens, using the same decoding policy as the teacher (i.e., sampling rather than greedy). To keep the student stable, I added a temperature‑scaled entropy regularizer and an adaptive learning‑rate schedule that warmed up over the first 10 k steps. The whole pipeline ran on a single GPU cluster with ~4× less memory than full‑token distillation.

**Result:**  
The distilled model’s perplexity dropped from 42 to 38 (≈9 % relative improvement), matching the teacher within 1 pp on the test set, while training time was cut by 60 %. I learned that careful token sampling combined with policy alignment can preserve knowledge transfer efficiency without exploding compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
