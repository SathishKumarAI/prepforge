---
qid: vq_840d3c068b__star__local
question: What does it mean to have high and low p-values?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 314
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:29-05:00'
sources: []
---

**Situation:** In my last role I was tasked with validating a new recommendation engine for our e‑commerce platform, which had to outperform the existing rule‑based system by at least 5% in click‑through rate (CTR).

**Task:** I needed to determine whether the observed improvement in CTR was statistically significant or just due to random variation.

**Action:** I set up an A/B test with two groups: the control group saw the baseline engine, and the treatment group saw the new AI model. Using Python’s `statsmodels`, I performed a two‑tailed z‑test on the CTRs, calculating p‑values for each hypothesis: (1) that the new model is better than baseline, and (2) that it is worse. A low p‑value (<0.05) would reject the null hypothesis of no difference.

**Result:** The treatment group achieved a 6.8% CTR vs. 5.9% for control, yielding a p‑value of 0.003—well below 0.05, indicating strong evidence that the AI model truly outperformed the baseline. Conversely, when testing a separate feature that produced a p‑value of 0.42, I recognized it was not statistically significant and decided to postpone its rollout. This exercise taught me how low p‑values signal real effects while high ones caution against premature decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
