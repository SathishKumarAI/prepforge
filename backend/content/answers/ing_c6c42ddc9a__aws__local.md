---
qid: ing_c6c42ddc9a__aws__local
question: 'Explain: Pre-processing: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:07-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role at a fintech startup, I led a data‑engineering team that had to decide whether to pre‑process customer transaction logs in batch or stream mode for fraud‑detection models. **Situation:** The model required near‑real‑time alerts, but we also needed comprehensive historical features for training.  
**Task:** Design a pipeline that balances latency and throughput while staying cost‑effective.  
**Action:** I chose a hybrid approach:  
- **Batch processing** with **AWS Glue / EMR** to run nightly jobs on the full dataset (≈ 5 TB) and refresh feature tables in **Amazon Redshift**; this ensures high‑quality, aggregated features for model training.  
- **Stream processing** with **Kinesis Data Streams + Lambda** to ingest 10 k events/second, enrich them via a lightweight Spark Streaming job on **EMR Serverless**, and push the enriched records into **S3** and **DynamoDB** for real‑time inference.  
I introduced metrics (latency < 2 s, cost $0.12 per GB processed) and set up CloudWatch alarms to auto‑scale Kinesis shards.  

**Result:** The hybrid pipeline cut fraud‑alert latency from 15 min to under 3 s while reducing monthly data‑processing spend by **30%** (from $4k to $2.8k).  

**Leadership Principles:**  
- **Customer Obsession** – delivered instant alerts, improving user trust.  
- **Ownership & Dive Deep** – I owned the end‑to‑end design and delved into cost/latency trade‑offs.  

Bar‑raisers look for clear ownership, depth of analysis (batch vs stream trade‑offs), quantifiable impact, and a learning loop: we iterated on shard counts after the first month’s spike, preventing over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
