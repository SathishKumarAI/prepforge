---
qid: ing_eb7c33d2d3__fp__local
question: Your agent passes 92% of eval tasks. Why might that number be misleading,
  and what would you measure instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 485
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:20:00-05:00'
sources: []
---

**Why a raw “92 % accuracy” can mislead**

The evaluation set is an *oracle* for the *distribution* it was sampled from.  
Accuracy is simply  

\[
A=\frac{\#\text{correct predictions}}{\#\text{total examples}}
= \mathbb{E}_{x\sim D}\big[\mathbf{1}\{f(x)=y\}\big].
\]

If the test distribution \(D_{\text{test}}\) is *not* representative of the true,
real‑world distribution \(D_{\text{true}}\), then \(A\) tells us little about how
the model will behave in practice.  For example, a dataset may contain many
easy “shortcut” features (e.g., a watermark on images) that the model learns to
exploit; it will score high on the test set but fail catastrophically elsewhere.

Moreover, accuracy conflates **precision** and **recall** into a single scalar,
masking systematic biases (e.g., high precision but low recall for minority
classes).  It also ignores *calibration*: a model may be overconfident or under‑
confident even if its predictions are correct most of the time.

---

### What to measure instead

1. **Distributional robustness** – evaluate on *out‑of‑distribution* (OOD) data
   and compute *expected calibration error* (ECE) or Brier score across
   domains.
2. **Task‑specific metrics** – precision/recall, F1, ROC‑AUC, etc., stratified by
   class to expose biases.
3. **Causal fidelity** – use counterfactual or intervention tests to ensure the
   model’s predictions rely on *causal* rather than spurious correlations.

**Non‑obvious insight:**  
The *true* performance of an AI system is bounded not only by how often it gets a
label right, but also by *how reliably* it knows when it might be wrong.  A highly
accurate model that is poorly calibrated can still make disastrous decisions,
while a slightly less accurate but well‑calibrated model may act more safely in
real‑world deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
