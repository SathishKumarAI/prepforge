---
qid: ing_497e0d74d7__faang__local
question: 'Explain: Replacing Blank Strings and Placeholders'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 467
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:47-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how to handle “blank strings” (empty or null values) and “place‑holder tokens” (e.g., `<UNK>`, `?`) when preprocessing data for an ML pipeline. I’ll assume we’re dealing with tabular/text data, using common libraries like pandas/Numpy, and that the goal is to preserve model performance while keeping memory/time reasonable.

**Approach**  
1. Detect blanks/NaNs per column.  
2. For numeric columns: impute mean/median or use a special flag value (e.g., `-9999`).  
3. For categorical/text columns: replace with a dedicated “missing” token (`<MISSING>`) and, if needed, a separate binary indicator feature.  
4. For placeholders in text: either map them to the same `<UNK>` token or treat them as separate features depending on domain importance.

**Depth**  
- **Detection**: `df.isna()` for NaNs; regex for placeholder patterns.  
- **Imputation**: `SimpleImputer(strategy='median')` (numeric) and `strategy='most_frequent'` (categorical).  
- **Encoding**: One‑hot or target encoding after imputation; ensure the “missing” category is encoded separately so models can learn its predictive value.  
- **Complexity**: O(n * d) for scanning, negligible overhead for small placeholder sets.

**Edge Cases**  
- Mixed data types in a column → cast to string before replacing.  
- Placeholders that are also valid tokens (e.g., “?” as a question mark) → use context‑aware regex or manual whitelist.  
- Imputed values leaking target info in supervised tasks → perform imputation within cross‑validation folds.

**Optimize & Communicate**  
Explain trade‑offs: using a special flag preserves signal but may introduce bias; one‑hot encoding increases dimensionality but is model‑agnostic. I’d present results from ablation studies (impute vs. drop) to justify the chosen strategy, emphasizing that consistent preprocessing is key for reproducibility in production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
