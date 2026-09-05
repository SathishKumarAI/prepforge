---
qid: vq_617ee3d255__fp__local
question: What is the meaning of P-value?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 357
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:36-05:00'
sources: []
---

**P‑value as a measure of evidence against a null hypothesis**

When we test a statistical model, we start with a *null hypothesis* \(H_{0}\) that describes what would happen if there were no real effect. The data generate a test statistic \(T\).  
The **p‑value** is the probability—under \(H_{0}\)—that \(T\) would be at least as extreme as the observed value:
\[
p = P_{H_{0}}\!\bigl(|T|\ge |t_{\text{obs}}|\bigr).
\]
It quantifies how surprising our data are assuming no effect. A small p‑value indicates that such a result is unlikely under \(H_{0}\), thereby providing evidence against it.

Mathematically, the p‑value is the *tail probability* of the null distribution; it follows directly from the likelihood principle because the test statistic is chosen to capture deviations from \(H_{0}\). In terms of information theory, a low p‑value corresponds to high Kullback–Leibler divergence between the empirical distribution and that implied by \(H_{0}\).

**Non‑obvious insight:**  
The p‑value depends only on the *shape* of the null distribution, not on the alternative. Thus two experiments with identical data can yield different p‑values if their null models differ (e.g., different variance assumptions). This highlights that a p‑value is not an intrinsic property of the data but a function of our modeling choice—an often overlooked source of variability in inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
