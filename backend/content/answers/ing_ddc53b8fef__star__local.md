---
qid: ing_ddc53b8fef__star__local
question: 'Explain: Support — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 357
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:52-05:00'
sources: []
---

**Situation**  
In my last role I was leading the evaluation of a new language‑model‑based grading system for our online coding bootcamp. The instructor metrics (accuracy, fairness scores) were noisy because each student’s code was judged by an LLM, and we needed statistically sound confidence intervals to decide whether changes in model prompt design truly improved results.

**Task**  
I had to produce reliable CI estimates for all evaluation metrics so that the curriculum team could make data‑driven decisions without over‑reacting to random fluctuations.

**Action**  
I integrated the open‑source `judgy` package from GitHub. First, I wrote a wrapper around our existing LLM‑judge pipeline to stream judgments into `judgy`. Then I used its bootstrap and Bayesian bootstrapping functions to generate 95 % CIs for each metric across 1,000 resamples. I also added a small post‑processing step that flagged metrics with CI widths exceeding 5 % as unstable. The whole workflow was scripted in Python, leveraging `pandas` for data handling and `matplotlib` to plot the CI bands next to point estimates.

**Result**  
The CI analysis revealed that our new prompt reduced the accuracy variance from ±3.2 % to ±1.7 %, a statistically significant improvement (p < 0.01). The curriculum team adopted the updated prompt, and student pass rates rose by 4 %. I learned how powerful a well‑chosen statistical library like `judgy` can be in turning raw LLM judgments into actionable evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
