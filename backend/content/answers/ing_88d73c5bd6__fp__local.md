---
qid: ing_88d73c5bd6__fp__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 498
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:48-05:00'
sources: []
---

**From first principles**

A binary classifier outputs a *score* \(s\).  
For any threshold \(\tau\) we decide “positive” if \(s\ge\tau\).  
The two ways to evaluate this decision are:

| Metric | What it compares | Formula (in terms of TPR, FPR or precision‑recall) |
|--------|------------------|---------------------------------------------------|
| **ROC‑AUC** | The *ranking* quality: how well the model orders positives above negatives. | \(\displaystyle\int_{0}^{1}\!\text{TPR}(f)\,df = P(s_+>s_-)+\tfrac12P(s_+=s_-)\) |
| **PR‑AUC** | The *calibration* of high‑score predictions: how many predicted positives are truly positive. | \(\displaystyle\int_{0}^{1}\!\text{Precision}(f)\,df = P(y=1\,|\,s>t)\) |

Both integrate over all possible thresholds, but ROC does so in the *error space* (TPR vs FPR), whereas PR works directly with the conditional probability of a positive label given a high score.

**Why ROC looks good on imbalanced data**

Let \(p=P(y=1)\ll 0.5\).  
The random baseline for ROC is \(\frac12\) regardless of \(p\).  
But the *effective* FPR space shrinks: a single false positive moves the curve far toward the top‑right corner because the denominator \(N_{\text{neg}}\) dominates.  
Thus a model that merely flags a few negatives as positives can still achieve a high ROC‑AUC, even though it misses almost all true positives.

**Non‑obvious insight**

The “deceptive” ROC is a consequence of *sampling independence*: the FPR term does not penalize for the rarity of positives.  
In contrast, PR‑AUC’s precision component explicitly divides by the number of predicted positives, so it automatically down‑weights models that over‑predict positives in highly imbalanced settings.  Therefore, on skewed data, PR‑AUC is a stricter, more informative gauge of useful signal than ROC‑AUC.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
