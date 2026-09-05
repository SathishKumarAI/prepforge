---
qid: ing_b87652072c__star__local
question: How do you construct the data mixture for a fine-tune to prevent capability
  regressions - and how do you validate the mixture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 334
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:20-05:00'
sources: []
---

**Situation:** In my last role, we were fine‑tuning an open‑source LLM for a financial advisory bot. The baseline model performed well on general language tasks but started showing regressions in compliance‑related prompts after adding new proprietary data.

**Task:** I had to design a balanced training mix that preserved the original capabilities while injecting domain expertise, and set up a validation pipeline to catch any regression before deployment.

**Action:** First, I quantified each dataset’s contribution by sampling 10K prompt–response pairs per source and computing perplexity against a held‑out compliance benchmark. Using these scores, I weighted the new financial corpus at 30 % and kept the original open‑source data at 70 %, then applied importance sampling to oversample rare regulatory terms. For validation, I built an automated test suite: (1) a regression set of 500 prompts covering core language functions; (2) a compliance set of 200 prompts with known correct answers; and (3) a continuous‑integration script that runs every training epoch and flags any metric drop > 5 %. If a drop occurred, I cycled back to the previous checkpoint and re‑balanced the mix.

**Result:** The fine‑tuned model achieved a 12 % reduction in compliance error rate while maintaining zero regression on general language tasks. Post‑deployment monitoring showed no new regressions over three months. This process taught me that careful statistical weighting coupled with automated, domain‑specific validation is key to preventing capability loss during fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
