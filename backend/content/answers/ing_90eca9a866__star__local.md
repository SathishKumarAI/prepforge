---
qid: ing_90eca9a866__star__local
question: 'Explain: Write-optimized temporary index table (called buffer index)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:40-05:00'
sources: []
---

**Situation**  
During a fraud‑detection project at my previous employer, the nightly batch that fed our XGBoost models was ingesting over 12 million transaction records. The training pipeline stalled because every epoch required scanning a large temporary table to join feature flags and user demographics.

**Task**  
I had to reduce the read latency of this join step by an order of magnitude so the model could be retrained within the 4‑hour window, without changing the existing schema or adding expensive storage.

**Action**  
I designed a write‑optimized buffer index: a lightweight, in‑memory hash table that captures only the columns needed for the join (user_id, country_code, risk_score). Each day’s batch writes into this buffer using a bulk insert with minimal logging. I then materialized the buffer as a temporary indexed view in PostgreSQL, enabling constant‑time lookups during the training loop. I also added a simple eviction policy that kept only the last 24 hours of data to avoid memory bloat.

**Result**  
The join latency dropped from ~35 seconds per epoch to <3 seconds, cutting total pipeline time from 4 hours 12 minutes down to 2 hours 45 minutes. Accuracy improved slightly (AUC ↑ 0.02) because the model could now incorporate fresh data each night. I learned that a focused, write‑optimized buffer can outperform complex index strategies when only a subset of columns is needed for high‑frequency reads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
