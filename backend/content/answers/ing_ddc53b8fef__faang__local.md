---
qid: ing_ddc53b8fef__faang__local
question: 'Explain: Support — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 453
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:27-05:00'
sources: []
---

**Clarify**  
You want an overview of *judgy*, a Python package that estimates confidence intervals (CIs) for metrics produced by Large Language Models acting as judges.  
Assumptions: the user has LLM‑as‑Judge scores on a set of items, wants statistical uncertainty, and is comfortable with Python/NumPy/PyTorch.

**Approach**  
1. Summarize the workflow: load judgments → aggregate per metric → bootstrap or analytic CI estimation → return results.  
2. Highlight key design choices: sampling strategy (bootstrap vs Bayesian), variance estimators, handling of correlated judgments, and interface with common ML libraries.

**Depth**  
*judgy* wraps LLM outputs in a `JudgmentSet` class, exposing methods like `mean()`, `std()`, `ci(method='boot', n_iter=1000)`.  
- **Bootstrap**: resample judgments (with replacement), recompute metric each time; CI from percentile of bootstrap distribution. Complexity O(n × n_iter).  
- **Analytic**: uses delta‑method for simple metrics (e.g., accuracy, BLEU); variance = Var(ŷ)/n. Faster but less accurate for non‑linear scores.  
The package supports multi‑task evaluation, weighted sampling, and parallel execution via `concurrent.futures`. It outputs Pandas DataFrames for easy reporting.

**Edge Cases**  
- Small sample size → bootstrap distribution becomes discrete; recommend n_iter ≥ 2000 or Bayesian smoothing.  
- Highly skewed judgments → percentile CI may be asymmetric; consider BCa bootstrap.  
- Correlated LLM runs (same prompt) → inflate variance if treated independently; package allows specifying a correlation matrix.

**Optimize & Communicate**  
Future improvements: GPU‑accelerated resampling, integration with Hugging Face datasets, and an API for real‑time CI updates during model fine‑tuning. When presenting to stakeholders, emphasize that *judgy* turns opaque LLM scores into statistically meaningful intervals, enabling confidence‑aware decision making in evaluation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
