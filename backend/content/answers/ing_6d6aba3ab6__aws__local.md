---
qid: ing_6d6aba3ab6__aws__local
question: 'Explain: How Change Data Capture Works — Change Data Capture: Key to Leverage
  Real-time Data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 372
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my time at **XYZ Corp**, I led a project to replace the legacy batch ETL with a real‑time data pipeline for our customer‑segmentation engine. The goal was to deliver fresh ML features within 5 minutes of any change in the source database, improving campaign targeting accuracy by 12 %.  

**Situation:** Our nightly jobs produced a lag that caused stale model inputs and mis‑aligned offers.  
**Task:** Design a scalable Change Data Capture (CDC) system that feeds our feature store with minimal latency.  
**Action:** I scoped the requirements: capture inserts/updates/deletes from PostgreSQL, transform them into JSON, and stream to an Amazon Kinesis Data Stream. From there, AWS Lambda functions perform schema‑aware enrichment and write to DynamoDB (the feature store). To guarantee durability, we enable PostgreSQL logical replication with WAL archiving; for high availability, the stream is partitioned across three shards.  
**Result:** We cut data latency from 24 h to <5 min, increased model hit‑rate by 12 %, and reduced batch compute costs by 35 % (Lambda + DynamoDB pay‑as‑you‑go).  

*Leadership Principles:* **Customer Obsession** – delivering fresher insights directly improved user experience. **Dive Deep** – I dissected WAL logs to validate change ordering and built a retry policy for idempotent writes. *Bar‑raiser cues:* ownership of end‑to‑end flow, quantified impact (12 % lift), and lessons learned: early monitoring on stream lag prevented data loss during peak load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
