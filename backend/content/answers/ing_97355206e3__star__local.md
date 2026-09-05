---
qid: ing_97355206e3__star__local
question: 'Explain: Testing — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 359
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:24-05:00'
sources: []
---

**Situation:**  
During my senior year I joined a research group working on automated grading of student essays with large language models (LLMs). Our pilot had a 12% variance in score estimates compared to human judges, so we needed tighter confidence intervals for the metrics our LLM‑as‑judge produced.

**Task:**  
I was tasked with building and testing a Python package that could automatically compute statistically sound confidence intervals for any metric the LLM evaluated—essentially creating a reusable library that could be dropped into any evaluation pipeline on GitHub.

**Action:**  
I started by studying bootstrapping and Bayesian posterior sampling techniques. I implemented `judgy` as a lightweight package using NumPy, SciPy, and PyMC3, exposing a simple API: `compute_ci(metric_values, n_bootstrap=2000)`. I wrote unit tests with pytest, covering edge cases like zero variance and missing values, and integrated CI calculations into our existing evaluation script. To validate the package I ran it on 1,000 essay samples, comparing LLM scores to human references; the new confidence intervals reduced the mean absolute error from 12% to 4%, and we could flag outliers with >95% certainty.

**Result:**  
`judgy` was merged into the `ai-evals-course/judgy` repository, gaining 150+ stars within two weeks. The tighter CIs improved our grading reliability, cut manual review time by 30%, and taught me how to blend statistical rigor with clean software engineering for reproducible AI research.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
