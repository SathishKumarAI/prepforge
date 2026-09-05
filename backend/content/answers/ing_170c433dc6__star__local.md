---
qid: ing_170c433dc6__star__local
question: 'Explain: That''s why it''s really important to clean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 329
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:57-05:00'
sources: []
---

**Situation:**  
During a credit‑risk project at my previous company, the model was supposed to predict loan default rates within 5% error. The raw dataset had over 30 M rows from multiple legacy systems with missing values, inconsistent formatting, and duplicate records.

**Task:**  
I needed to ensure the data fed into the training pipeline would not degrade accuracy or introduce bias, while keeping processing time under our nightly batch window of 4 hours.

**Action:**  
First, I wrote a Spark job that deduplicated rows using a composite key (customer ID + transaction timestamp) and dropped entries with >20% missing critical fields. Next, I implemented a two‑stage imputation: mean/median for numeric columns and mode for categorical ones, then flagged imputed rows to track uncertainty. To catch outliers, I applied z‑score filtering on income variables, capping extreme values at the 99th percentile. Finally, I added a unit test suite that verified distribution similarity before and after cleaning, ensuring no drift.

**Result:**  
After cleaning, the model’s precision improved from 0.78 to 0.91, and the recall for high‑risk customers rose by 12%. The data pipeline ran in 3 hours 45 minutes, staying within schedule. I learned that systematic, reproducible cleaning not only boosts performance but also builds trust with stakeholders who can audit each transformation step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
