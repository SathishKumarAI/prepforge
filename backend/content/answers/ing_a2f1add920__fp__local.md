---
qid: ing_a2f1add920__fp__local
question: 'Explain: ML Production Systems — Machine Learning in Production | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 455
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:15-05:00'
sources: []
---

**Why “ML production” is a distinct discipline**

At its core, machine learning solves *prediction problems*: given data \(x\), produce an output \(\hat{y}\) that maximises expected utility under the true distribution \(P(x,y)\). In research labs we often optimise for a single performance metric on a fixed test set. Production, however, turns this optimisation into a *continuous decision process* subject to constraints that are invisible in the lab:

1. **Stochastic data drift** – real‑world inputs arrive from non‑stationary sources (e.g., user behaviour). The model must adapt or flag when \(P_{\text{prod}}(x)\neq P_{\text{train}}(x)\).
2. **Latency & throughput budgets** – inference time becomes a cost term in the objective: minimise \(\mathbb{E}[\ell(\hat{y},y)+\lambda\,t_{\text{inference}}]\) where \(t_{\text{inference}}\) is measured on production hardware.
3. **Reliability & safety** – failures can have high downstream cost, so we optimise for *robustness*: \(\max_{P} \min_{\theta}\mathbb{E}_{(x,y)\sim P}[\ell(f_\theta(x),y)]\) over plausible data shifts \(P\).

These constraints turn the problem into a multi‑objective optimisation that must be solved *online*. Hence we need pipelines for continuous monitoring, A/B testing, feature drift detection, and automated rollback—essentially an engineering system built on top of statistical learning.

**Non‑obvious insight:**  
In production, the *model’s confidence* is not just a diagnostic; it becomes a *control variable* that can be tuned to trade off latency against accuracy. By shaping the decision boundary (e.g., via temperature scaling), we can make the system “lazy” on easy cases and expensive only when uncertainty is high—an approach rarely considered in research but critical for real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
