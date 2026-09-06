---
qid: vq_5f368cbbae__think__local
question: How will you handle missing values in your data analysis?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 518
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:39:19-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**

- What kind of data are we dealing with (tabular, time‑series, image)?  
- Are the missing entries *MCAR*, *MAR* or *MNAR*?  
- How many rows/columns are affected and how critical is that feature to downstream models?  

**2️⃣ Adopt a structured framework**

| Step | What to do | Why it matters |
|------|------------|----------------|
| 1. **Quantify missingness** | Compute % missing per column & visualize patterns (heatmap). | Detect systematic gaps vs random noise. |
| 2. **Assess impact** | Check correlation with target or other features; run simple models with/without the feature. | Determines if imputation is worth it. |
| 3. **Choose strategy** | *Deletion*, *simple fill* (mean/median/mode), *model‑based* (KNN, MICE), *indicator flag*. | Balance bias vs variance. |
| 4. **Implement & validate** | Perform cross‑validation, monitor performance metrics and check for overfitting. | Ensures chosen method improves the model. |

**3️⃣ Step‑by‑step reasoning**

1. Visualize missingness → see if it’s clustered (e.g., certain time periods).  
2. If MCAR & <5 % → drop rows; otherwise consider imputation.  
3. For numeric columns: try median + indicator flag; for categorical: mode + indicator.  
4. For high‑missing columns or important features: use model‑based imputers (e.g., iterative regression).  
5. Compare models with different strategies via CV and pick the one with best generalization.

**4️⃣ Common pitfalls to avoid**

- Blindly dropping rows → loss of data & biased sample.  
- Using mean for skewed data → introduces bias.  
- Ignoring the “missingness” itself as a signal (e.g., missing payment status may indicate default).  
- Over‑fitting imputation models on training set only.

**5️⃣ Sanity‑check & communicate**

- Plot distributions before/after imputation to ensure no unrealistic values.  
- Report % of data lost, the chosen method per column, and performance impact.  
- Explain rationale: e.g., “We used KNN imputation for age because it preserves local relationships and reduces bias compared to mean substitution.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
