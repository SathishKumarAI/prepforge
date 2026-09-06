---
qid: ing_86e986142a__think__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 579
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:57:26-05:00'
sources: []
---

**1. Clarify the goal & assumptions**

- *Goal*: Keep evaluation metrics (e.g., accuracy, F1) from the old judge model comparable after switching to a new version.
- *Assumptions*:  
  - Both models accept the same input format.  
  - We have access to the same validation/test set and ground‑truth labels.  
  - The new model may be more powerful but has different calibration.

**2. Choose a mental model / framework**

Use a *re‑scoring & alignment* pipeline:  
1. **Baseline collection** – run both models on a held‑out set to gather raw outputs.  
2. **Calibration mapping** – fit a transformation (e.g., Platt scaling, isotonic regression) from the old model’s logits to the new model’s logits.  
3. **Score adjustment** – apply this mapping so that the new scores are expressed in the same scale as the old ones.

This is essentially *domain adaptation* of scoring functions.

**3. Step‑by‑step reasoning**

1. **Collect paired outputs**: For each sample, record `(old_score, new_score)`.  
2. **Fit a monotonic mapping**: Use isotonic regression to learn `f(old_score) ≈ new_score` or vice versa; alternatively fit a logistic function if scores are probabilities.  
3. **Validate the mapping**: Apply `f` on a validation split and compare ROC/PR curves to ensure shapes align.  
4. **Apply to production**: For every new inference, transform the raw new‑model score via `f`.  
5. **Recompute metrics**: With transformed scores, recalc accuracy/F1 etc.; they should now be directly comparable to the old model’s numbers.

**4. Common traps & how to avoid them**

- *Assuming linearity*: Scores may not linearly relate; use monotonic methods instead of simple scaling.  
- *Overfitting the mapping*: Fit on a separate calibration set, not on the test data used for reporting metrics.  
- *Ignoring class imbalance*: Calibration should be performed per‑class or with class‑aware weighting.  
- *Dropping confidence intervals*: Keep uncertainty estimates to reflect mapping noise.

**5. Sanity checks & communication**

- Plot old vs. new scores before/after mapping; they should line up along the identity line after adjustment.  
- Verify that AUC remains unchanged while raw numeric values shift appropriately.  
- Explain in a report: “We applied isotonic regression to map the new model’s probability outputs onto the old score distribution, enabling direct comparison of performance metrics.”  

This structured approach ensures that metric comparisons remain meaningful even when the underlying judge model evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
