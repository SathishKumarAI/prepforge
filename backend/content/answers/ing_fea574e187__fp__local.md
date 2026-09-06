---
qid: ing_fea574e187__fp__local
question: 'Explain: Luna Evaluation Models FAQs — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 454
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:21-05:00'
sources: []
---

**Why Luna’s Evaluation Models work**

At its core, Luna is a *probabilistic anomaly detector* that must decide whether a new event stream belongs to the “normal” operational manifold or represents an incident.  
1. **Data‑driven prior** – Luna learns a multivariate density \(p(\mathbf{x})\) from historical telemetry via kernel density or normalizing flow.  
2. **Bayesian update** – For each incoming window \(\mathbf{w}\), it computes the likelihood ratio
   \[
   \Lambda(\mathbf{w})=\frac{p_{\text{anomaly}}(\mathbf{w})}{p_{\text{normal}}(\mathbf{w})}
   \]
   and applies a threshold tuned to the desired false‑positive rate.  
3. **Cost‑optimal decision** – The threshold is chosen by minimizing expected loss
   \[
   L=\alpha\,P(\text{miss})+\beta\,P(\text{false alarm}),
   \]
   where \(\alpha,\beta\) encode business impact, embodying the *principle of optimality* from dynamic programming.

**Connecting to deeper theory**

This is a direct application of **Bayes’ rule + Neyman–Pearson lemma**, ensuring that for any fixed false‑positive rate the chosen threshold maximizes detection probability. The models also exploit *information geometry*: Luna projects high‑dimensional logs onto a low‑dimensional manifold via t‑SNE, preserving KL‑divergence, which guarantees that subtle deviations are still measurable.

**Non‑obvious insight**

Many think evaluation is only about ROC curves. In Luna, the *evaluation model* itself is *adaptive*: it re‑weights feature importance based on recent drift detection, effectively performing online learning of \(p_{\text{normal}}\). This self‑correcting property keeps the system robust even when underlying workloads shift—an essential trait for cloud observability where workloads evolve daily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
