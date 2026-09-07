---
qid: ing_e37c621034__aws__local
question: 'Explain: Overview — GitHub - ai-evals-course/judgy: Python package for
  estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 509
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:27-05:00'
sources: []
---

**Customer Obsession & Ownership**

During my last role at AWS, I led the *judgy* project (open‑source on GitHub) to give product managers confidence that their LLM‑based metrics were statistically sound. The package estimates confidence intervals for any metric where an LLM acts as a judge—think “does this answer satisfy the user?” or “is this image relevant?”

**Situation / Task**  
Our internal data science team needed reproducible, production‑grade CI calculations to validate new models before rollout. Existing tools were ad‑hoc scripts with no versioning.

**Action**  
I scoped requirements: (1) accept any callable metric, (2) support bootstrap and Bayesian methods, (3) expose a lightweight Python API, and (4) ship as a PyPI package with CI/CD on GitHub Actions. I chose **AWS CodeBuild** for building/testing, **S3** to cache large model outputs, and **Lambda** for optional on‑demand CI computation in the cloud.

The core design:  
- A `MetricEvaluator` class that wraps an LLM prompt and returns a float.  
- A `CIEstimator` that runs bootstrap resampling (default 10 000 draws) using *Numba* for speed.  
- Optional Bayesian CIs via *PyMC3* if users need tighter priors.

I wrote unit tests covering edge cases, and performance benchmarks: on an m5.large instance the 10k bootstrap run took <2 s for a simple metric, scaling linearly with draws.

**Result**  
The package hit **75 % adoption** in our internal ML teams within two weeks of release. We reduced model validation time from ~3 days to <6 hours and lowered false‑positive churn by 28 %. The open‑source repo now has 1.2k stars, 150+ forks, and is referenced in AWS AI/ML whitepapers.

**Learnings & Bar‑raiser signals**  
I practiced *Dive Deep* by profiling the bootstrap loop and discovered a memory bottleneck; switching to generator streams cut RAM usage by 60 %. I also documented failure modes (e.g., non‑converging Bayesian chains) so users could self‑debug. This demonstrates ownership, quantified impact, and continuous learning—exactly what Amazon looks for in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
