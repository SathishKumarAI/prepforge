---
qid: ing_8dd6504b20__aws__local
question: 'Explain: Verify on Both Write and Read — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:34-05:00'
sources: []
---

**Situation** – I was tasked to build a highly‑available data lake that ingests millions of sensor records daily while guaranteeing zero corruption for downstream analytics.  
**Task** – Design a write‑and‑read checksum verification system that scales with data volume, costs less than $0.02 per GB, and still delivers sub‑second read latency.

**Action** – I leveraged **Amazon S3** as immutable storage and **AWS Glue** + **Lake Formation** for cataloging.  
*Write path*: each record is appended to an S3 object with a **SHA‑256** checksum stored in DynamoDB (partition key = object key). An AWS Lambda, triggered by the S3 *ObjectCreated* event, recomputes the hash and updates DynamoDB; if mismatched it writes a failure flag to CloudWatch and triggers an SNS alert.  
*Read path*: Athena queries first hit the Glue catalog; before returning rows, a **Glue ETL job** pulls the corresponding checksum from DynamoDB and validates data integrity on‑the‑fly. If a mismatch is detected, the job aborts and writes the offending record to an S3 “corrupt” bucket for later triage.

I added **S3 Object Lock** (Governance mode) to protect against accidental deletes and used **S3 Intelligent Tiering** to keep hot data in Standard while cold archives move to IA at 0.01 $ per GB, keeping overall cost < $0.02/GB.

**Result** – Within two weeks of deployment, we reduced downstream query failures by **99.8%**, cut manual data‑corruption investigations from hours to minutes, and saved $12k annually on storage by eliminating redundant checksum files.

---

### Leadership Principles

- **Ownership** – Took end‑to‑end responsibility for data quality across the pipeline.  
- **Dive Deep** – Validated every hash against DynamoDB in real time; quantified 99.8% error reduction.  

Bar‑raiser focus: depth of design, quantifiable impact, and clear learning loop (automatic alerts → proactive remediation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
