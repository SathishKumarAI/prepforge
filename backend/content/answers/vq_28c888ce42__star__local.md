---
qid: vq_28c888ce42__star__local
question: How do you manage data lifecycle policies in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 368
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:45-05:00'
sources: []
---

**Situation:** In my previous role at a fintech startup we migrated our on‑prem data lake to Azure Data Lake Storage Gen2 (ADLS). By Q3 the volume had ballooned to 45 TB, and we were hitting storage cost ceilings while still needing regulatory compliance for 7‑year retention of transaction logs.

**Task:** I was tasked with designing a data lifecycle policy that would automatically tier cold data, delete obsolete records, and ensure auditability—all within ADLS and Azure Purview governance.

**Action:** First, I mapped the data hierarchy (raw, curated, analytics) and defined retention windows. Using Azure Data Factory pipelines, I scripted daily roll‑ups of raw logs into Parquet, added an “ingest_timestamp” column, and moved them to a dedicated tiered container. Then I leveraged ADLS Gen2 Access Control Lists (ACLs) to grant read/write only to the analytics team while setting “Delete” rights for the archival group. For lifecycle management I created Azure Storage Lifecycle Rules: after 90 days data moved from Hot to Cool, and after 365 days it was automatically archived to Azure Blob Archive tier and finally deleted after 7 years. Parallelly, I set up Purview cataloging so every file change emitted a lineage event.

**Result:** Within two months the storage cost dropped by 32 %, from $18k/month to $12k/month. Compliance audits passed with zero manual intervention, and our data engineers could focus on value‑added transformations instead of manual cleanup. I learned that combining ADLS ACLs with lifecycle rules and Purview metadata yields a robust, auditable, and cost‑effective data lake strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
