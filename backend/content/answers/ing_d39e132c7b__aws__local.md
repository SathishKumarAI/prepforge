---
qid: ing_d39e132c7b__aws__local
question: 'Explain: An eval pipeline you own suddenly reports a 6-point drop for a
  customer''s model between Tuesday and Wednesday. The model didn''t change. Debug
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 387
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:01-05:00'
sources: []
---

**Situation & Task**  
I was the owner of an end‑to‑end evaluation pipeline that feeds weekly performance scores to our ML customers. On Tuesday the pipeline ran, giving Model X a 94/100 score; Wednesday it dropped to 88/100—no model changes had occurred. I needed to pinpoint the root cause quickly and restore confidence.

**Action (Dive Deep + Bias for Action)**  
1. **Snapshot & Compare** – Collected all raw metrics from both runs, including feature distributions, inference latency, and data source timestamps.  
2. **Pipeline Logs & CloudWatch** – Enabled detailed logging on every Lambda step; found that the nightly ingestion job was scheduled at 03:00 UTC but a daylight‑saving shift caused it to run at 02:00 UTC on Wednesday, pulling stale data from an S3 prefix that had been overwritten by a previous day’s batch.  
3. **Feature Store Check** – Queried DynamoDB for the feature table used in evaluation; discovered a TTL expiration error that truncated half of the rows, reducing the sample size by 30%.  
4. **Re‑run & Validate** – Re‑executed the pipeline with corrected ingestion schedule and restored feature set. Score returned to 94/100.

**Result (Deliver Results)**  
- Resolved the drop within 2 hours, preventing a customer SLA breach.  
- Implemented automated Canary checks on S3 prefixes and TTL health metrics in CloudWatch dashboards, reducing future drift risk by **>90%**.  
- Updated documentation and added a new “data‑freshness” alerting rule to the pipeline’s CI/CD.

**Learning** – Ownership means not only fixing bugs but proactively hardening pipelines against environmental changes; we now monitor clock shifts and TTL expirations as first‑line safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
