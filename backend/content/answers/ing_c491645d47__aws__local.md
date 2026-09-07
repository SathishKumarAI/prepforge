---
qid: ing_c491645d47__aws__local
question: 'Explain: Quality Filtering and Enrichment — Data Engineering For Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 381
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:28-05:00'
sources: []
---

**Situation & Task**  
At a previous fintech, we built an AI‑driven fraud detector that relied on transactional logs from millions of users. The raw data was noisy—missing fields, duplicate records, and unstructured text. My goal: build a **Quality Filtering & Enrichment pipeline** so the model could train on clean, enriched features within 24 hrs.

**Action (Design)**  
* **Ingestion:** Kinesis Data Streams fed into Lambda for real‑time deduplication (hash + TTL).  
* **Filtering:** AWS Glue jobs ran nightly to drop records with null critical fields and flag outliers using statistical thresholds.  
* **Enrichment:** A SageMaker processing job joined the stream with a DynamoDB lookup table (geolocation, device fingerprints) and added derived features (time‑since‑last‑transaction).  
* **Storage & Cataloging:** Cleaned data landed in S3 partitioned by date; Glue Data Catalog fed Athena for quick ad‑hoc queries.  

**Result**  
- *Accuracy:* Model precision rose from 82 % to 94 %.  
- *Latency:* Training cycle cut from 48 hrs to <24 hrs (10× faster).  
- *Cost:* Leveraged spot instances for Glue, reducing spend by 35 %.

**Learnings & Ownership**  
I iterated on the deduplication logic after a production spike revealed duplicate bursts; adding a DynamoDB “seen‑hash” table prevented reprocessing. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—key Amazon principles that keep data pipelines robust and results measurable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
