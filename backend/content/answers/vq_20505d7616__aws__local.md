---
qid: vq_20505d7616__aws__local
question: Can one resize tablespaces and data files?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 364
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:07-05:00'
sources: []
---

**Situation / Task**

I was leading the migration of a legacy Oracle database to Amazon RDS for Oracle in our 3‑region e‑commerce platform. The on‑prem tablespaces were tightly packed, and the DBA team worried that adding new feature tables would exceed the allocated space, potentially throttling transaction throughput.

**Action**

1. **Dive Deep into RDS limits** – I reviewed AWS docs to confirm that RDS supports *online* resizing of tablespaces via `ALTER TABLESPACE` with a larger data file size, but the underlying storage is managed by Amazon EBS.  
2. **Design a scalable solution** – I proposed using **Amazon Aurora (Oracle‑compatible)** instead of RDS for its auto‑scaling storage feature: it automatically grows up to 128 TB as demand rises.  
3. **Cost & Availability trade‑offs** – Aurora’s pay‑as‑you‑go model reduced the upfront CAPEX by ~30 % versus provisioning a fixed 200 GB EBS volume for RDS, while offering 99.999 % availability with synchronous replication across three AZs.  
4. **Implementation** – I scripted `ALTER TABLESPACE` commands to increase file size by 20 % during low‑traffic windows and set up CloudWatch alarms on disk usage.  

**Result**

The tablespaces were resized without downtime; the new tables received a 40 % faster write throughput within two days. Migration to Aurora cut storage costs from $2,400/month (RDS) to $1,350/month while maintaining SLA compliance. The project demonstrated ownership, rapid problem solving, and a data‑driven approach—key Amazon leadership principles in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
