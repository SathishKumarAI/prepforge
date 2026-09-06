---
qid: vq_a6a020d2fd__faang__local
question: In statistics, how are missing data treated?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 587
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:40-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *missing data* are handled in statistical analysis. I’ll assume they mean common approaches (e.g., list‑wise deletion, imputation) and the assumptions that justify each method.

**Approach**  
1. Identify the mechanism of missingness: MCAR, MAR, MNAR.  
2. Choose a strategy that matches the mechanism and preserves validity.  
3. Discuss trade‑offs in bias, efficiency, and implementation complexity.

**Depth**  

| Strategy | How it works | When to use | Assumptions & Trade‑offs |
|----------|--------------|-------------|---------------------------|
| **Complete‑case (listwise deletion)** | Drop any record with missing values. | MCAR only; simple to implement. | Loses data → reduced power, potential bias if not MCAR. |
| **Pairwise deletion** | Use all available pairs for each statistic. | MCAR/MAR; keeps more data than listwise. | Inconsistent sample sizes across estimates; may violate covariance matrix properties. |
| **Single imputation (mean/mode, last observation carried forward)** | Replace missing with a single estimate. | Roughly MAR if the estimator captures variability. | Underestimates variance → overconfident inference. |
| **Multiple Imputation** | Generate *m* plausible values via model (e.g., MICE), analyze each dataset, pool results. | MAR; robust when model is correct. | Computational overhead; requires proper pooling (Rubin’s rules). |
| **Model‑based methods (Maximum Likelihood, EM)** | Treat missingness within likelihood framework. | MAR or MNAR if correctly specified. | Requires strong distributional assumptions; can be heavy on computation. |
| **Weighting / Inverse Probability** | Weight observed data by inverse of probability of being observed. | Useful for MAR when propensity model is correct. | Sensitive to misspecification of the weight model. |

**Edge Cases**  
- *MNAR*: No standard remedy; requires sensitivity analysis or joint modeling.  
- *High missingness (>30 %)*: Even multiple imputation can yield unstable estimates; consider data collection improvements.  
- *Non‑numeric variables*: Imputation must respect categorical constraints (e.g., using predictive mean matching).

**Optimize & Communicate**  
I’d recommend starting with diagnostics (missingness matrix, Little’s MCAR test) to decide the mechanism. For most datasets, multiple imputation via MICE balances bias and efficiency while preserving variance estimates—an approach favored in industry for clinical trials and large‑scale surveys. I would finish by highlighting that the choice should align with the research question, data structure, and available computational resources, ensuring transparent reporting of missingness handling in any analytic report.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
