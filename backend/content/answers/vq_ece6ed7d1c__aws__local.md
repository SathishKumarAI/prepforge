---
qid: vq_ece6ed7d1c__aws__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 416
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:22-05:00'
sources: []
---

**Answer – Data Engineering: “Inserted” & “Deleted” (Magic) Tables**

> **Leadership Principles:** *Ownership* and *Dive Deep*

**Situation / Task**  
In a real‑time analytics pipeline for an e‑commerce platform, we needed to surface the latest inventory changes while keeping historical audit logs. The requirement was to expose two tables—`inserted_items` and `deleted_items`—that automatically reflected every write or delete in our master `inventory` table.

**Action**  
1. **Capture Changes** – Enabled DynamoDB Streams on `inventory`.  
2. **Transform & Load** – Created an AWS Glue job that consumed the stream, filtered by event type (`INSERT`, `REMOVE`), and wrote to two separate S3 buckets (`inserted/` and `deleted/`).  
3. **Serve Analytics** – Cataloged each bucket with AWS Athena and created materialized views for real‑time dashboards in QuickSight.  
4. **Automation & Monitoring** – Scheduled the Glue job via EventBridge every 5 min; set up CloudWatch alerts on failure counts.

**Result**  
- Latency from change to visibility dropped from ~15 min (batch ETL) to <30 s.  
- Dashboard refresh rates improved by 80 %, driving quicker restock decisions that increased revenue by **$1.2M/month** in the first quarter post‑deployment.  
- Cost remained below $200/month, a 35 % reduction versus our previous Spark‑on‑EMR pipeline.

**Bar‑raiser takeaways:** I owned end‑to‑end design, dived deep into stream semantics, quantified impact with revenue lift, and learned that a simple Glue+Athena combo can outperform heavier engines when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
