---
qid: ing_74c9ad134a__faang__local
question: 'Explain: How It Works — GitHub - ai-evals-course/judgy: Python package
  for estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 484
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:18-05:00'
sources: []
---

**Clarify**  
You’re asking how the *judgy* library estimates confidence intervals (CIs) for metrics that are derived from large‑language‑model (LLM) judges.  
Assumptions to confirm:  
1. Each evaluation is independent and sampled from a fixed distribution of LLM outputs.  
2. The metric (e.g., accuracy, F1) can be expressed as an average over binary or continuous judgments.  

**Approach**  
1. Treat each LLM judgment as a Bernoulli trial (success = correct).  
2. Compute the sample mean \(\hat{p}\).  
3. Use a statistical method (e.g., Wilson score, Clopper–Pearson, or bootstrap) to obtain a CI for \(\hat{p}\).  

**Depth**  
- *Wilson interval*: \( \displaystyle \hat{p} + z^2/(2n) \pm z\sqrt{\frac{\hat{p}(1-\hat{p})}{n}+z^2/(4n^2)} \big/ (1+z^2/n)\).  
  - Advantages: good coverage for small \(n\), symmetric in log‑odds.  
- *Bootstrap*: resample judgments with replacement, recompute metric, and take percentile bounds.  
  - Handles non‑binary metrics but is computationally heavier.  

The package implements both; it exposes a simple API (`estimate_ci(metric_values, conf=0.95)`) that returns the lower/upper bounds.

**Edge Cases**  
- Zero or one successes → Wilson still works; bootstrap may produce degenerate intervals.  
- Highly skewed distributions (e.g., 99% success) can mis‑represent uncertainty if only a few failures exist.  
- Dependent judgments (same LLM instance reused) violate independence and inflate CI width.

**Optimize & Communicate**  
Explain that Wilson is the default for speed/accuracy trade‑off; switch to bootstrap when metrics are continuous or when user requests empirical CIs. Provide unit tests covering extreme proportions, small \(n\), and non‑binary scores. Conclude by emphasizing that these intervals let researchers quantify how much a LLM judge’s score might vary if more prompts were evaluated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
