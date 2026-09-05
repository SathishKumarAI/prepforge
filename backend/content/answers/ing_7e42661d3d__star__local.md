---
qid: ing_7e42661d3d__star__local
question: 'Explain: F6: Holdout set leakage into training or prompts'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 338
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:18-05:00'
sources: []
---

**Situation**  
In a client‑facing NLP project, we were building a spam‑classifier for an email provider. The dataset had 150 k emails split into training (80 %), validation (10 %) and holdout test (10 %). During model tuning we noticed the validation accuracy spiked to 98 % while the holdout stayed at 88 %.  

**Task**  
I needed to identify why our model was over‑optimistic on validation and ensure that the final evaluation reflected real‑world performance.  

**Action**  
I first inspected the preprocessing pipeline: a shared “tokenizer” object had been fitted on the entire corpus before splitting, so token frequencies from holdout emails were leaking into training embeddings. I rewrote the pipeline to fit the tokenizer only on the training split, then applied it to validation and test sets. Next, I checked the prompt‑engineering step for a language‑model fine‑tuning task; we had inadvertently included a “next‑sentence” prediction on holdout data as part of the training loss. I removed that component and re‑run cross‑validation.  

**Result**  
After correcting the leakage, validation accuracy dropped to 92 % but the holdout score rose to 90 %, giving us a realistic estimate of deployment performance. The exercise reinforced the importance of strict data isolation in every preprocessing and prompt step, and I now document a “no‑leak” checklist for all future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
