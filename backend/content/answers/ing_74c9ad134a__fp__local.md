---
qid: ing_74c9ad134a__fp__local
question: 'Explain: How It Works — GitHub - ai-evals-course/judgy: Python package
  for estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 419
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:27-05:00'
sources: []
---

### How **judgy** Works – From First Principles

At its core, *judgy* solves the problem of **statistical inference on noisy human‑like judgments** made by a large language model (LLM).  
1. **Metric definition** – A user supplies a scoring function \(f\) that maps an LLM’s text output to a real‑valued score (e.g., 0–5 for relevance).  
2. **Repeated evaluation** – The same input is fed to the LLM multiple times, yielding a set \(\{s_1,\dots,s_n\}\). Each draw reflects the stochasticity of prompt‑tuning and token sampling; thus \(s_i = f(x_i)\) where \(x_i\) are i.i.d. LLM outputs.  
3. **Bootstrap resampling** – *Judgy* draws many bootstrap samples from \(\{s_i\}\), recomputes the aggregate statistic (mean, median, etc.) for each sample, and constructs an empirical distribution of that statistic.  
4. **Confidence interval construction** – From the bootstrap distribution it reports percentile‑based or bias‑corrected intervals, giving a principled measure of uncertainty.  

Why bootstrap? Because we have no closed‑form variance for LLM outputs; bootstrapping approximates the sampling distribution without assuming normality. The deeper principle is that **sampling variability in language generation can be treated like any other random process**—the same tools from nonparametric statistics apply.

#### Non‑obvious insight  
Most users assume the LLM’s output variance is negligible, but *judgy* shows that even with deterministic prompts, sampling choices (temperature, top‑k) introduce **heavy‑tailed variability**. The bootstrap captures this tail behavior, often yielding wider intervals than naive analytic formulas would suggest. This nuance is critical when comparing models or tuning prompts for fairness and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
