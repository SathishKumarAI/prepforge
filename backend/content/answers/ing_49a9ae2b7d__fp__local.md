---
qid: ing_49a9ae2b7d__fp__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 387
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:59-05:00'
sources: []
---

**Why do ML systems suddenly lose reliability?**

At the core, an ML model is a *probabilistic mapping* \(f_\theta(x)\) learned from data \(\mathcal{D}\). Reliability means that for any incoming input \(x^*\), the distribution of the prediction error remains bounded with high probability. This property hinges on three intertwined assumptions:

1. **Stationarity** – The test distribution \(P_{\text{test}}(X,Y)\) must be close to the training distribution \(P_{\text{train}}\). Any shift (covariate drift, concept drift) inflates the KL divergence \(\mathrm{KL}(P_{\text{test}}\|P_{\text{train}})\), causing the learned likelihood ratios to misalign with reality.  
2. **Model capacity & regularization** – A model that is too expressive will overfit \(\mathcal{D}\), capturing noise as signal. When deployed, its predictive variance collapses on training‑like samples but explodes elsewhere, breaking calibration.  
3. **Deployment constraints** – Latency, memory, or quantization alter the effective hypothesis class \(f_{\theta'}\). These changes can be seen as an implicit *adversarial perturbation* in parameter space; small perturbations may push the model into a regime where gradients vanish or saturate.

The non‑obvious insight: **reliability is not merely about low test error—it’s about keeping the *error distribution shape* stable under domain shift and system perturbations.** Techniques that explicitly bound \(\mathrm{KL}\) divergence (e.g., robust optimization, uncertainty calibration) and that preserve model expressivity across deployment pipelines are therefore essential for trustworthy ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
