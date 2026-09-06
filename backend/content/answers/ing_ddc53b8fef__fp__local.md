---
qid: ing_ddc53b8fef__fp__local
question: 'Explain: Support — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 544
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:03-05:00'
sources: []
---

**Why “judgy” exists**

When an LLM is used as a *judge*—i.e., it scores or ranks candidate outputs—the evaluation becomes a **noisy random variable**. The true quality of the system is unknown; we only observe one (or a few) noisy judgments per item. A naïve point estimate (mean score) hides this uncertainty and can mislead downstream decisions such as model selection, hyper‑parameter tuning, or fairness audits.

**Fundamental problem**

We need to infer *confidence intervals* for any metric derived from those judgments (accuracy, BLEU, pass@k, etc.) without assuming a parametric form of the LLM’s error distribution. The interval must reflect both sampling variability (different items) and judgment noise (different model runs or prompts).

**Derivation**

1. **Model the data** as \(y_{ij} = \theta_i + \epsilon_{ij}\), where \(i\) indexes items, \(j\) indices judgments, \(\theta_i\) is the true item quality, and \(\epsilon_{ij}\) captures LLM noise (zero‑mean, unknown variance).  
2. The metric of interest is a functional \(M(\{\theta_i\})\) (e.g., accuracy). Since we observe only noisy \(y_{ij}\), we estimate \(M\) via plug‑in: \(\hat M = M(\{ \bar y_i \})\).  
3. **Bootstrap the item–wise means** \(\bar y_i\): resample items with replacement, recompute \(\hat M\) each time. This non‑parametric bootstrap preserves the dependence structure induced by the LLM’s noise while accounting for item heterogeneity.  
4. The empirical distribution of \(\hat M\) yields percentile‑based CIs that are valid under mild regularity conditions (CLT on bootstrapped means).

**Non‑obvious insight**

The key advantage is that **bootstrapping operates on *item* level**, not on raw judgments. This automatically integrates over the LLM’s noise without ever estimating \(\epsilon_{ij}\) directly, sidestepping assumptions about its distribution—often a strong, unverified assumption in prior work.

**Implementation**

`judgy` implements this pipeline in pure Python: load judgment CSVs → compute item means → bootstrap metric → output point estimate and CI. It supports arbitrary metrics via user‑supplied functions, making it a versatile tool for rigorous LLM evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
