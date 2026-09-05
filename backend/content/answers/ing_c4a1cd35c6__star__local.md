---
qid: ing_c4a1cd35c6__star__local
question: 'Explain: Archives — AI Research Engineer Interview Guide: OpenAI, Anthropic,
  DeepMind (2026) - Sundeep Teki'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 394
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:12-05:00'
sources: []
---

**Situation:**  
In my last role at a mid‑size fintech, we were building an internal knowledge base that stored every experiment run, model checkpoint, and dataset version. The team had been using a simple S3 bucket with ad‑hoc tagging; after the first two months of growth, query latency shot up to 8 s for a single retrieval, and we started seeing duplicate runs because metadata was inconsistent.

**Task:**  
I was tasked with designing an archival system that could (1) keep all experiment artifacts searchable in under 2 s, (2) enforce immutable versioning so nothing could be overwritten, and (3) provide audit logs for compliance with GDPR.

**Action:**  
First, I mapped out the data lifecycle: raw datasets → preprocessing pipelines → model training → evaluation metrics. I then built a schema on top of PostgreSQL with GIN indexes on JSONB columns to store metadata (hyperparameters, timestamps, experimenter). For storage, I switched from plain S3 to Amazon Glacier Deep Archive for older checkpoints and used AWS Lake Formation to enforce fine‑grained access control. To enable fast search, I set up a dedicated OpenSearch cluster that ingests the PostgreSQL JSONB via Logstash, creating full‑text indices on experiment names and tags. Finally, I wrote an Airflow DAG that automatically archived completed runs after 30 days, updating the metadata store and generating signed URLs for read‑only access.

**Result:**  
Query latency dropped from 8 s to under 1.2 s, and we eliminated duplicate experiments by 92 %. The immutable archive reduced data recovery time from hours to minutes during a compliance audit. I learned that a well‑designed metadata layer coupled with tiered storage is key for scaling AI research at enterprise scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
