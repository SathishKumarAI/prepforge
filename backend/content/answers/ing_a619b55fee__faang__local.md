---
qid: ing_a619b55fee__faang__local
question: 'Explain: Summary Statistics — ai-engineering-field-guide/interview/01-interview-process.md
  at main \u00b7 alexeygrigorev/ai-engineering-field-guide \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 663
total_tokens: 929
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:05-05:00'
sources: []
---

**1️⃣ Clarify**

> *What are “summary statistics” in an AI‑engineering interview?*  
> They’re the quick‑look numbers a candidate can compute on the spot (or in a short coding exercise) to show they understand data, model fit, and evaluation metrics.  
> **Assumptions I’d confirm:** we’re dealing with tabular or time‑series data; the interview will ask for numeric summaries rather than visual plots; no external libraries beyond NumPy/Pandas.

---

**2️⃣ Approach**

1. Identify the target variable(s).  
2. Compute basic descriptive stats (mean, median, std dev, min/max, quantiles).  
3. For classification: class distribution & imbalance ratio.  
4. For regression: residual statistics (MAE, MSE, R²).  
5. Report any missing‑value or outlier flags.

---

**3️⃣ Depth**

| Metric | Formula / Code Snippet | Typical Insight |
|--------|------------------------|-----------------|
| **Mean** | `np.mean(arr)` | Center of mass |
| **Median** | `np.median(arr)` | Robust to outliers |
| **Std dev** | `np.std(arr, ddof=1)` | Spread |
| **Skewness / Kurtosis** | `scipy.stats.skew(arr)`, `kurtosis` | Shape of distribution |
| **Min/Max** | `arr.min()`, `arr.max()` | Range |
| **Quantiles** | `np.percentile(arr, [25,75])` | Inter‑quartile range |
| **Missing ratio** | `(df.isna().sum()/len(df))` | Data quality |
| **Class imbalance** | `value_counts(normalize=True)` | Need for resampling |
| **MAE/MSE/R²** (regression) | `sklearn.metrics.mean_absolute_error`, etc. | Model performance |

Complexity: *O(n)* per column; negligible memory overhead if streaming.

---

**4️⃣ Edge Cases**

- All‑zero or constant columns → std = 0, skewness undefined.  
- Extremely large numbers → risk of overflow; use `dtype=float64`.  
- Categorical data → convert to numeric (label encoding) before stats.  
- Missing values → decide imputation strategy before computing metrics.

---

**5️⃣ Optimize & Communicate**

*Optimization:* Use vectorized NumPy/Pandas ops; avoid loops. If streaming, maintain running sums for mean/variance (Welford’s algorithm).  

*Narrative:* “I first checked for missingness to ensure the stats are meaningful, then computed descriptive statistics per feature. For our target variable, I observed a heavy right‑skew with a 95th percentile far above the median, indicating potential outliers that could bias the model. The class distribution shows a 3:1 imbalance, so we’d need techniques like SMOTE or class weighting.”  

This concise, structured answer demonstrates quick analytical thinking and readiness to discuss deeper modeling implications—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
