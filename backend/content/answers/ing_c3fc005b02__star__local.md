---
qid: ing_c3fc005b02__star__local
question: 'Explain: Data — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 340
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:56-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new recommendation engine for an e‑commerce platform, but the click‑through rate (CTR) was only 1.2 %—well below our target of 3 %. The data ingestion pipeline from the web logs was unreliable; missing timestamps and duplicate rows caused noisy features.

**Task:**  
I needed to rebuild the data job architecture so that clean, time‑aligned events were ingested into our feature store in real time, and then validate the new dataset against the old one to prove quality improvements.

**Action:**  
I rewrote the ETL using Spark Structured Streaming with Kafka as the source. Added a deterministic windowing step (5‑minute tumbling windows) to deduplicate events, and implemented schema evolution via Avro. For monitoring I set up Prometheus alerts on ingestion lag and data skew. Then I used Delta Lake to version each dataset snapshot and ran automated tests comparing key statistics (e.g., mean session length, click counts). Finally, I deployed the pipeline with CI/CD in GitHub Actions, ensuring every change triggered a unit test suite that validated schema compatibility.

**Result:**  
The new pipeline reduced data latency from 15 min to under 2 min and eliminated duplicate rows by 97 %. After retraining the model on this cleaner data, CTR jumped to 3.6 %, exceeding our target. I learned how critical deterministic windowing and versioned storage are for reliable ML feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
