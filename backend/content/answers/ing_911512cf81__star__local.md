---
qid: ing_911512cf81__star__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:01-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were launching an automated credit‑score model. The engineering team was pulling customer data from three legacy databases, each with slightly different schemas and stale timestamps. Analysts kept flagging “data drift” because the model’s predictions didn’t match the manual review scores.

**Task:**  
I had to build a single source of truth (SSOT) for all credit‑risk attributes so the ML pipeline could rely on consistent, up‑to‑date inputs, and reduce the noise that was causing false positives in the scoring algorithm.

**Action:**  
I designed an ETL layer using Apache Airflow to orchestrate nightly jobs. First, I wrote a schema‑agnostic ingestion script in Python that merged the three sources into a unified data lake on S3, normalizing fields with Pandas and enforcing a canonical timestamp. Then I created a Delta Lake table as the SSOT, adding ACID transactions and time‑travel for auditability. Finally, I exposed this table via a read‑only API to both the feature store (using Feast) and the model training pipeline in SageMaker, ensuring all downstream services consumed the same snapshot.

**Result:**  
After deploying the SSOT, we cut data‑drift incidents by 92 % and improved the model’s precision from 78 % to 88 %. The unified view also reduced feature engineering time by 3 days per iteration. I learned that investing in a robust, versioned data layer is often cheaper than debugging downstream ML issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
