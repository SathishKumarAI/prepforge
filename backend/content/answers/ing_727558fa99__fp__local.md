---
qid: ing_727558fa99__fp__local
question: Your fine-tune gained 8 points on your benchmark. How do you know the gain
  is real and not contamination?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 519
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:07:49-05:00'
sources: []
---

### Why an 8‑point bump is “real”

**1. The fundamental problem**  
We want to know whether the new fine‑tuned model has *higher expected performance* on the target distribution, not just a lucky sample. The hypothesis test we perform must distinguish **signal** (true generalization) from **noise or contamination** (overlap, leakage).

**2. Build a clean experiment pipeline**  
| Step | Why it matters |
|------|----------------|
| **Hold‑out set** (never seen during fine‑tuning) | Guarantees no data‑leakage. |
| **Permutation test** – shuffle predictions and recompute the metric | Generates a null distribution; if the observed gain is > 95 % percentile, it’s unlikely due to chance. |
| **Cross‑validation on disjoint splits** | Confirms stability across folds; a single‑fold win can be an artefact. |
| **Leakage audit** – check for exact or near‑duplicate sentences between training and test | Even 1‑word overlap can inflate scores. |

**3. Statistical rigor**  
Compute the *confidence interval* of the difference (e.g., Wilson interval for accuracy). If the lower bound > 0, the gain is statistically significant.

**4. Distributional sanity checks**  
Plot calibration curves and ROC curves; a real improvement should shift the curve consistently, not just on a handful of easy cases.

**5. Non‑obvious insight**  
Often people ignore *rank‑based metrics* (e.g., MAP). If the model’s ranking improves across many queries but only a few high‑scoring examples drive the mean score, the gain is superficial. Inspect per‑query gains: a true signal shows uniformly positive shifts.

---

**Bottom line:**  
A real 8‑point increase emerges when it survives a permutation test, holds across cross‑validation folds, has no leakage, and shows consistent rank‑based improvements—confirming that the fine‑tune genuinely learns better representations rather than memorizing or exploiting data artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
