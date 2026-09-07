---
qid: ing_5e366f9e53__aws__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:37-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy transactional database to an event‑driven data lake that feeds our recommendation engine. The main challenge was reliably propagating *delete* events so that downstream ML models never train on stale rows.

**Action (Design)**  
1. **Capture**: Enable MySQL binlog → **AWS DMS** → stream to **Amazon Kinesis Data Streams** (partitioned by table).  
2. **Transform**: Lambda reads the stream, tags each record with an operation flag (`DELETE`) and writes a JSON payload to **S3** in a `cdc/delete/` prefix.  
3. **Ingest**: Glue crawlers create a catalog on the delete bucket; Athena queries it nightly to purge rows from the **Redshift Spectrum** table that backs our training data.  
4. **Feedback loop**: A scheduled SageMaker endpoint scans the delete log and emits a “deletion score” used by downstream models to weight negative examples.

**Result**  
- Reduced orphaned records in the training set from 12 % to <0.1 %.  
- Cut model retraining time by 30 % (from 8 h to 5 h) due to smaller, cleaner datasets.  
- Cost‑effective: <$200/month for Kinesis + Lambda vs. >$2k/month on a dedicated CDC appliance.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dove deep into binlog semantics to avoid false positives, quantified impact via precision metrics, and learned that “delete” events are often ignored in legacy CDC tools—prompting us to build an explicit flagging mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
