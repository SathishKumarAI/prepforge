---
qid: ing_76e4529c83__faang__local
question: What are different Model Evaluation Techniques in Machine Learning?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 573
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:21-05:00'
sources: []
---

**Model evaluation techniques – a FAANG‑style breakdown**

| # | Technique | When & Why |
|---|-----------|------------|
| 1 | **Hold‑out / Train–Test split** | Fast sanity check; good when data is plentiful and non‑time‑dependent. |
| 2 | **k‑Fold Cross‑Validation (CV)** | Balances bias/variance; use `k=5–10` for tabular data, `Leave‑One‑Out` for tiny sets. |
| 3 | **Stratified k‑Fold CV** | Preserve class distribution in classification problems. |
| 4 | **Repeated CV** | Reduces variance further by averaging over multiple random splits. |
| 5 | **Time‑Series Split (Rolling / Expanding)** | Respect temporal order; essential for forecasting or online learning. |
| 6 | **Nested CV** | Hyper‑parameter tuning inside an outer CV loop to avoid optimistic bias. |
| 7 | **Bootstrapping (e.g., .632+ bootstrap)** | Provides variance estimates and confidence intervals, especially with small samples. |
| 8 | **Learning Curves & Validation Curves** | Diagnose under/over‑fitting by plotting training vs validation performance against data size or hyper‑parameters. |
| 9 | **Cross‑Domain / Transfer Evaluation** | Test generalization on a hold‑out domain (e.g., different sensor, demographic). |
|10 | **Ablation & Sensitivity Analysis** | Quantify the impact of features/regularizers by systematically removing them. |

---

### Quick Flow for an Interview

1. **Clarify** – Confirm data type (tabular, image, time‑series), class balance, and evaluation goal (accuracy vs calibration).  
2. **Approach** – Start with a simple hold‑out split; then adopt stratified k‑fold CV or time‑series split as per the data structure. For hyper‑parameter search, wrap it in nested CV.  
3. **Depth** – Detail metrics: accuracy, precision/recall/F1 for classification; RMSE/MAPE for regression; ROC‑AUC and PR‑curve for imbalanced sets. Mention computational complexity (O(k·n) for k‑fold).  
4. **Edge Cases** – Small datasets → leave‑one‑out or bootstrap; highly imbalanced classes → stratification + SMOTE or focal loss.  
5. **Optimize & Communicate** – Use parallel CV, early stopping, and memoization to speed runs. Explain trade‑offs: more folds = less bias but higher runtime; nested CV = unbiased but expensive.

> *Total word count: ~220.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
