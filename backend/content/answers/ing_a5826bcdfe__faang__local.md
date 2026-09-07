---
qid: ing_a5826bcdfe__faang__local
question: 'Explain: Compute corrected rate — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 711
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:09:39-05:00'
sources: []
---

**Clarify**  
We’re asked how to “compute a corrected rate” when evaluating an AI system—typically the probability that the model’s predictions are *correct* after adjusting for known biases or noise (e.g., class imbalance, label errors). I’ll assume we have:  

- `pred` – binary prediction vector.  
- `true` – ground‑truth labels (possibly noisy).  
- A bias estimate `b` (probability that a positive is mislabeled as negative, etc.).  

We want an unbiased estimate of the true accuracy.

**Approach**  
1. Compute the raw observed rate (`r_raw = TP+TN / N`).  
2. Estimate the mislabeling rates for positives and negatives (`ε_pos`, `ε_neg`).  
3. Apply a correction formula that “undoes” the noise, yielding `r_corr`.  

This mirrors techniques used in *noisy label learning*.

**Depth**  
Let  
- `TP` = true positives (pred=1 & true=1)  
- `TN` = true negatives (pred=0 & true=0)  
- `FP`, `FN` similarly.  

Observed accuracy:  
\[
r_{\text{raw}} = \frac{TP+TN}{N}.
\]

If a fraction `ε_pos` of positives are mislabeled as negatives and `ε_neg` of negatives as positives, the expected counts become:

\[
E[TP] = (1-ε_{pos})\,TP + ε_{neg}\,FP,
\]
\[
E[TN] = (1-ε_{neg})\,TN + ε_{pos}\,FN.
\]

Solving for the *true* accuracy gives:

\[
r_{\text{corr}} = \frac{E[TP]+E[TN]}{N}
               = r_{\text{raw}}
                 + \frac{ε_{neg}FP - ε_{pos}FN}{N}.
\]

If we only know overall noise `b` (average mislabel rate), a simpler correction is:

\[
r_{\text{corr}} = \frac{r_{\text{raw}}-b}{1-2b},
\]
valid when `0<b<0.5`.  
Complexity: O(N) to count TP/FP/FN/TN; constant‑time arithmetic thereafter.

**Edge Cases**  
- **Extreme noise** (`b≈0.5`): denominator → 0, correction unstable—fallback to raw rate or collect cleaner data.  
- **Class imbalance**: If `ε_pos ≠ ε_neg`, use the full formula above; otherwise, symmetric assumption may bias results.  
- **Missing labels**: impute or ignore; missingness can itself introduce bias.

**Optimize & Communicate**  
1. Estimate `ε` via a small clean validation set or EM‑style expectation steps if no clean data exist.  
2. Cache counts to avoid recomputation across multiple metrics.  
3. Present corrected accuracy alongside raw accuracy and confidence intervals to show uncertainty.

*Narrative*: “We first compute the straightforward accuracy, then adjust for known labeling noise using a closed‑form correction that subtracts expected misclassifications from both positive and negative classes. This yields an unbiased estimate of true performance while remaining linear in data size.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
