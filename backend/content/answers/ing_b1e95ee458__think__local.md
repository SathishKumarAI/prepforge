---
qid: ing_b1e95ee458__think__local
question: 'Explain: Your fraud dataset is 0.5% positive. Walk me through your strategy
  for handling the imbalance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 561
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:44:41-05:00'
sources: []
---

**1️⃣ Clarify & State Assumptions**  
- Confirm what “positive” means (fraud cases) and that 0.5 % is the class proportion in the *training* set.  
- Assume we’ll keep a held‑out test split, and that evaluation metrics like precision/recall or ROC‑AUC matter more than raw accuracy.

**2️⃣ Mental Model / Framework**  
Use the “imbalanced learning” triad: **(a) data‑level tricks**, **(b) algorithmic adjustments**, **(c) metric‑driven evaluation**. Think of it as balancing a seesaw—give the minority side extra weight while still respecting overall performance.

**3️⃣ Step‑by‑Step Reasoning**

| Stage | Action | Rationale |
|-------|--------|-----------|
| *Data* | • Undersample majority (e.g., random 1:10 or use SMOTE to synthesize fraud) | Keeps learning signal; avoid overfitting on noise. |
|       | • Keep a small hold‑out of untouched data for unbiased evaluation | Prevents leakage. |
| *Algorithm* | • Choose algorithms tolerant to imbalance (XGBoost, LightGBM with `scale_pos_weight`) | They internally reweight gradients. |
|       | • Tune class weights or use focal loss if using neural nets | Directly penalises minority misclassifications. |
| *Evaluation* | • Use PR‑AUC, F1, and a cost matrix (false negative > false positive) | Reflects business impact of missing fraud. |
| *Iteration* | • Cross‑validate on stratified folds; monitor recall at fixed precision | Ensures stability across splits. |

**4️⃣ Common Traps to Avoid**

- **Over‑undersampling**: discarding useful majority examples → high variance.  
- **Synthetic over‑generation**: creating unrealistic fraud patterns → model learns artifacts.  
- **Relying solely on accuracy**: will stay near 99.5 % regardless of performance.  
- **Not validating on untouched data**: risk of optimistic bias.

**5️⃣ Sanity Check & Communicate**

1. Plot class distribution before/after sampling.  
2. Show ROC‑AUC and PR‑AUC curves; compare to baseline (majority rule).  
3. Explain that the chosen strategy trades a modest drop in overall accuracy for a significant lift in fraud recall, aligning with business goals.

By iterating through this framework, you can systematically tame extreme class imbalance while keeping stakeholder‑relevant metrics front and center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
