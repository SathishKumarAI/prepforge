---
qid: ing_22c20f4c7a__fp__local
question: 'Explain: Tier 1 - cheap classifier on 100% of traffic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 407
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:38-05:00'
sources: []
---

**Why a “Tier 1 – cheap classifier on 100 % of traffic” is necessary**

At the core of any AI‑driven system lies a *resource allocation* problem: we must decide which data points receive expensive, high‑accuracy models and which can be handled cheaply. The objective function balances **expected utility** (e.g., correct predictions) against **cost** (compute time, energy). If \(c_{\text{cheap}}\ll c_{\text{expensive}}\), the marginal gain of moving a sample from Tier 1 to Tier 2 is \(\Delta U = p_{\text{hard}}(U_{\text{exp}}-U_{\text{cheap}})\), where \(p_{\text{hard}}\) is the probability that the cheap model misclassifies it. To keep overall cost low, we enforce \(c_{\text{cheap}}\times N \leq \lambda\, c_{\text{expensive}}\times k\), with \(k\) samples sent to Tier 2 and \(\lambda<1\). Solving this yields a *threshold* on the confidence score: only samples whose predicted probability falls below it are forwarded. Thus, **Tier 1 must process every request**—otherwise we risk missing misclassifications entirely—and be cheap enough that its cost dominates.

**Non‑obvious insight:**  
The threshold is not merely a hyperparameter; it’s the *dual variable* of the resource constraint in Lagrangian optimization. Adjusting it changes the trade‑off curve between accuracy and cost, revealing how much we can afford to let the cheap model err before we must trigger Tier 2. This duality explains why, in practice, a small shift in confidence cut‑off often yields large savings without perceptible loss in overall performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
