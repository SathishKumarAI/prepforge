---
qid: ing_235a37aee9__star__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 265
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:43-05:00'
sources: []
---

**Situation** – In a client‑facing AI product, we noticed the model’s accuracy dropped from 87 % to 72 % when new user queries were introduced. The dev team suspected that our training prompts weren’t covering edge cases.

**Task** – I was asked to refine the example selection process for prompt engineering so the system could generalize better across diverse inputs without bloating the dataset.

**Action** – First, I ran an error‑analysis script on the failed queries, clustering them by intent and linguistic pattern. Then, using a Bayesian relevance score, I ranked potential examples from our existing pool based on similarity to each cluster. To avoid overfitting, I capped the number of examples per prompt at three and introduced a “negative example” slot that demonstrated common pitfalls. Finally, I automated the selection in the pipeline with a lightweight Python service that updated prompts nightly.

**Result** – After deploying the new prompts, accuracy rebounded to 84 % on the same query set, and we reduced training data size by 35 %. I learned that systematic similarity scoring and controlled example limits can dramatically improve prompt robustness without manual curation overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
