---
qid: ing_b87652072c__fp__local
question: How do you construct the data mixture for a fine-tune to prevent capability
  regressions - and how do you validate the mixture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 572
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:36:21-05:00'
sources: []
---

**Why a mixture matters**

Fine‑tuning distills knowledge from a large pre‑trained model (PTM) into a smaller “target” network. The PTM’s parameters encode *implicit data distribution* \(p_{\text{PTM}}(x)\). If we train only on a narrow task set \(\mathcal{D}\), the optimizer pushes the target weights toward a local optimum that satisfies \(\mathcal{D}\) but sacrifices performance elsewhere. In information‑theoretic terms, the fine‑tune reduces *mutual information* \(I(X;Y)\) between the model and unseen inputs—this is capability regression.

**Constructing a protective mixture**

1. **Anchor PTM samples**: Sample \(\alpha\%\) from the original pre‑training corpus (or a high‑coverage proxy). These retain the global knowledge base.
2. **Task‑specific data**: Add \((1-\alpha)\%\) of curated examples that target the new capability, weighted by importance.
3. **Adversarial safety set**: Include a small fraction of inputs designed to trigger known failure modes (e.g., hallucinations). This acts as an explicit regularizer against regressions.

The key is that the mixture preserves *entropy* while concentrating on relevant gradients—an application of the *information bottleneck* principle. The hyper‑parameter \(\alpha\) can be derived by solving a constrained optimization: minimize task loss subject to a bound on KL divergence from \(p_{\text{PTM}}\).

**Validating the mixture**

1. **Coverage tests**: Compute the Jensen–Shannon divergence between the mixture distribution and the PTM’s original data. A low value indicates that global knowledge is retained.
2. **Capability benchmarks**: Run the fine‑tuned model on a *hold‑out* set of tasks not present in \(\mathcal{D}\). Significant drops flag regressions.
3. **Gradient alignment**: Measure cosine similarity between gradients from PTM samples and task samples during training. If similarity falls below a threshold, adjust \(\alpha\).

**Non‑obvious insight**

The *adversarial safety set* often has the largest impact per sample because it forces the optimizer to learn *negative space*: where the model should *not* produce certain outputs. This is akin to margin maximization in SVMs and can be formalized as adding a penalty term \(\lambda \mathbb{E}_{x\in A}[\text{loss}(f(x), y_{\text{safe}})]\). Neglecting this component leads to subtle regressions that surface only under stress tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
