---
qid: ing_65702dbbd2__fp__local
question: 'Explain: Getting the Baseline with df.describe() — 7 Steps to Automating
  Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 588
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:47-05:00'
sources: []
---

**Getting the Baseline with `df.describe()` – 7 Steps to Automating Descriptive Statistics in Python**

1. **Identify the Problem**  
   In any ML pipeline, you first need a *statistical snapshot* of your data: ranges, central tendency, variability, and outlier propensity. This baseline informs preprocessing choices (normalization, imputation) and flags potential leaks.

2. **Load & Inspect Data**  
   ```python
   import pandas as pd
   df = pd.read_csv("data.csv")
   ```
   A quick `df.head()` confirms schema; missing values hint at the need for `describe`’s `na_action`.

3. **Invoke `describe()` with Custom Parameters**  
   ```python
   stats = df.describe(include='all', percentiles=[0.25, 0.5, 0.75])
   ```
   *Why it works*: Pandas internally groups columns by dtype, then calls NumPy aggregation functions (mean, std, min, max). Percentile computation uses `np.percentile`, guaranteeing O(n log n) performance.

4. **Add Derived Columns**  
   For skewness or kurtosis:
   ```python
   stats.loc['skew'] = df.skew()
   stats.loc['kurtosis'] = df.kurtosis()
   ```
   These metrics are *moment‑based* descriptors that capture tail behavior, essential for anomaly detection.

5. **Normalize the Statistics**  
   Transform raw counts into per‑feature relative frequencies:
   ```python
   stats_norm = stats / stats.iloc[0]  # divide by count (first row)
   ```
   Normalization exposes *scale invariance*—a core principle in many ML algorithms.

6. **Export & Visualize**  
   ```python
   stats.to_csv("baseline_stats.csv")
   stats.plot(kind='bar', subplots=True, layout=(4,2), figsize=(12,8))
   ```
   Visual inspection reveals outliers or multimodality that raw numbers miss.

7. **Automate via a Function**  
   ```python
   def baseline(df):
       s = df.describe(include='all')
       s.loc['skew'] = df.skew()
       s.loc['kurtosis'] = df.kurtosis()
       return s
   ```
   Re‑using this keeps the pipeline DRY and guarantees reproducibility.

**Non‑obvious Insight:**  
`df.describe()`’s *percentile* argument is a **sampling shortcut**: it uses *exact* percentiles for small data but switches to an efficient approximation (`np.percentile`) when `len(df)` exceeds a threshold. This duality keeps the function fast without sacrificing accuracy, a subtle optimization many overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
