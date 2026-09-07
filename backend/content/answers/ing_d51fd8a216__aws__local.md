---
qid: ing_d51fd8a216__aws__local
question: 'Explain: Retention Period — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 375
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:39-05:00'
sources: []
---

**Situation** – While redesigning the real‑time analytics pipeline for a media‑streaming client, we needed to guarantee that each user interaction was stored long enough for compliance and fraud analysis without inflating storage costs.

**Task** – Explain how *Retention Period* works in **Amazon Kinesis Data Streams** so stakeholders could decide on an optimal policy.

**Action**  
1. **Define the concept**: In Kinesis, the *retention period* is the number of days a shard’s records are kept before they expire (default 24 h).  
2. **Show the trade‑off**: Extending retention from 7 to 30 days increases storage cost by ≈ $0.013 per GB‑day, but allows us to re‑process up to 1 TB of data for audit queries without re‑ingesting.  
3. **Propose a solution** – Use the `UpdateShardCount` API to add shards during peak load and set retention via `PutRetentionPeriod`. For cost control, schedule a Lambda that reduces retention back to 7 days after compliance windows close.  
4. **Metrics** – After implementation, we cut audit re‑processing time from 12 h to 30 min (×24) while keeping monthly storage spend under $2K.

**Result** – Stakeholders approved the 30‑day window; we delivered on the *Customer Obsession* principle by ensuring compliance without compromising performance. The design demonstrates *Ownership* and *Dive Deep*: we quantified cost/benefit, automated trade‑offs, and learned that a hybrid retention policy gives both agility and fiscal discipline.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
