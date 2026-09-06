---
qid: vq_5f368cbbae__faang__local
question: How will you handle missing values in your data analysis?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 440
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:28-05:00'
sources: []
---

**Clarify**  
We’re asked how to treat missing entries when building an AI model (e.g., tabular regression/classification). I’ll assume the data is a mix of numeric and categorical columns, with some non‑randomly missing values, and that we have access to training/validation splits.  

**Approach**  
1. Identify missingness patterns (MCAR, MAR, MNAR).  
2. Encode categories (one‑hot or target‑encoded) while adding a “missing” flag.  
3. For numeric fields:  
   * If many rows are missing → drop the feature.  
   * Otherwise impute with median (robust to outliers) or use model‑based methods (kNN, iterative imputer).  
4. Propagate uncertainty by treating imputations as additional features or using probabilistic models.  

**Depth**  
- **Median imputation**: \(O(n)\) per feature; preserves distribution shape.  
- **Iterative (MICE)**: runs EM‑style iterations; complexity \(O(k \cdot n \cdot p)\), where \(k\) is iterations, \(p\) features.  
- **Model‑based** (e.g., LightGBM handles missing as a separate category).  
Trade‑off: simple imputations are fast but bias estimates; sophisticated methods reduce bias at higher compute cost.  

**Edge Cases**  
- Entire column missing → drop.  
- High missing rate (>70%) → consider collecting more data or using models robust to sparsity (e.g., tree ensembles).  
- MNAR scenarios may require domain‑specific modeling (e.g., adding a “missing” indicator and training jointly).  

**Optimize & Communicate**  
I’d benchmark imputation strategies on validation AUC/MAE, pick the one with best trade‑off, and document assumptions. In an interview I’d emphasize transparency: report missing rates, chosen method, and sensitivity analysis to show robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
