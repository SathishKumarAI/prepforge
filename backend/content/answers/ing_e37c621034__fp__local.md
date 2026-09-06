---
qid: ing_e37c621034__fp__local
question: 'Explain: Overview — GitHub - ai-evals-course/judgy: Python package for
  estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 400
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:03:23-05:00'
sources: []
---

**Why this tool is needed**

When we let large language models (LLMs) act as *judges*—scoring or ranking other LLM outputs—we obtain noisy, biased estimates of a downstream metric (accuracy, coherence, safety). The fundamental problem is to quantify **how reliable those estimates are**: what confidence interval (CI) should we attach to the reported metric? Traditional bootstrap or normal‑approximation CIs assume independent, identically distributed samples and may break when judgments come from a single LLM with internal correlations.

**What it does**

The *judgy* package treats each LLM‑judge’s score as an observation of a latent “true” metric value plus noise. It estimates the **variance component** induced by the judge (via repeated evaluation of the same instance) and propagates this through to a CI on the aggregate metric using **mixed‑effects modeling**. The result is a principled, model‑agnostic interval that respects the hierarchical structure: instances nested within judges.

**Deeper principle**

This is an application of *hierarchical Bayesian inference* distilled into a frequentist CI. By separating between‑instance variance from judge‑specific noise we effectively perform **variance partitioning**, akin to random‑effects meta‑analysis, ensuring that uncertainty grows with the number of unique instances and shrinks as more judgments per instance are collected.

**Non‑obvious insight**

Most people assume that simply increasing the number of LLM evaluations tightens CIs. Judgy shows that *doubling* judgments on a **fixed set** of instances can actually widen the CI if judge noise dominates—because we learn less about the latent metric and more about the judge’s idiosyncrasies. Thus, allocating resources to **more diverse instances** is often more valuable than repeated scoring of the same content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
