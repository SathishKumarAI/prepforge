---
qid: ing_be85ddbbe3__aws__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 436
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:14-05:00'
sources: []
---

**Situation / Task**  
When I joined the “WhatsApp‑like” messaging startup, the product team needed a daily storage estimate for user media (images, videos) to plan S3 capacity and cost. The requirement: *predict per‑day storage consumption with 95 % confidence* while handling millions of users.

**Action**  
1. **Data dive & ownership** – I pulled historical logs from the ingestion pipeline (Kafka → Kinesis Data Streams). Using Python/NumPy, I calculated median file size per user segment (free vs premium) and applied a 90‑day rolling window to capture seasonality.  
2. **Design** – Built a lightweight Lambda function that runs nightly, aggregates data into an Athena table stored in S3, and writes the daily forecast to DynamoDB for downstream billing dashboards.  
   *AWS services:* Kinesis Data Streams (real‑time ingestion), Lambda (serverless compute), Athena (SQL on S3), DynamoDB (low‑latency lookup).  
3. **Scalability & cost** – The Lambda scales automatically; each run processes ~5 GB of logs, costing <$0.05/day. Athena charges only for scanned data (~$1/day).  
4. **Bias for action** – I shipped the prototype in 48 hrs and integrated it into the CI/CD pipeline, reducing manual capacity planning by 70 %.

**Result**  
Within a month, forecast accuracy hit **97 %**, and we avoided an over‑provisioning of 15 % S3 storage, saving ~$1.2k/month. The model also surfaced a trend: premium users’ video size grew 12 %/quarter, prompting a policy change that reduced average upload size by 18 %, further cutting costs.

**Learnings**  
- *Dive Deep* into raw logs revealed hidden seasonality.  
- *Ownership* drove rapid iteration and adoption across ops & finance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
