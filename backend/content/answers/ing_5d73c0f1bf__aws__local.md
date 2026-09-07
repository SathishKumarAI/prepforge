---
qid: ing_5d73c0f1bf__aws__local
question: 'Explain: JSON And BSON | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 354
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:07-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a migration of a legacy analytics platform to Amazon DocumentDB (Mongo‑compatible). The team had to decide whether to store incoming event streams as **JSON** or **BSON** and how that choice would impact our cost, performance, and compliance.

**Action**  
I first “dove deep” into the data model: JSON is UTF‑8 text, easy for humans; BSON extends JSON with binary types (Date, Binary) and a compact binary representation. I benchmarked read/write latencies on 10 GB of sample logs. Using **AWS SDK + Amazon DocumentDB**, BSON reduced storage by ~30 % and lowered write throughput cost by 18 %. I also designed an ingestion pipeline with **Amazon Kinesis Data Streams** → **Lambda** (Python) that normalizes raw JSON to BSON before persisting, leveraging **Amazon S3** for cold‑layer archival. To satisfy GDPR’s “right to erasure”, I added a TTL index on the `_id` field, ensuring automatic cleanup within 90 days.

**Result**  
Post‑migration, we achieved:
- 25 % lower monthly storage bill (≈$12k savings).
- 40 % faster query response for aggregation dashboards.
- Zero data loss during rollback tests; all compliance checks passed.

I took full **ownership** of the migration, iterated on failure points (e.g., handling nested arrays), and delivered measurable results while simplifying our architecture with native AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
