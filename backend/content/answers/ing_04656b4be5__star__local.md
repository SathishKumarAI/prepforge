---
qid: ing_04656b4be5__star__local
question: 'Explain: Normalization vs Denormalization — 10 System Design Tradeoffs
  You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 351
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:28-05:00'
sources: []
---

**Situation**  
During a recent churn‑prediction project for a telecom client, our data lake stored customer usage metrics in a highly normalized schema: separate tables for user profiles, call logs, and billing details. The ML pipeline was pulling hundreds of columns from joins, which made feature engineering slow and the training job ran out of memory on our GPU cluster.

**Task**  
I needed to redesign the data flow so that feature extraction could happen in under 5 minutes while keeping model accuracy above 85% AUC, all within the same infrastructure budget.

**Action**  
First, I performed a cost‑benefit analysis: normalized tables saved storage (~30 GB) but required costly distributed joins; denormalized views would consume ~80 GB but enable columnar reads. I introduced a hybrid approach—pre‑aggregated denormalized fact tables for the most frequent features (call duration, plan type) and kept rarely used dimensions in separate tables. I also implemented schema evolution with Apache Iceberg to handle changes without breaking pipelines. Finally, I tuned Spark partitions to match the new layout and added caching layers on hot data.

**Result**  
Feature extraction time dropped from 45 minutes to 3 minutes, GPU memory usage fell by 40%, and the churn model’s AUC improved from 82% to 86%. The trade‑off of higher storage cost was offset by reduced compute spend, proving that selective denormalization can deliver measurable performance gains in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
