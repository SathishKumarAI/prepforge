---
qid: vq_7a8700be6f__aws__local
question: Can a Tablespace hold objects from different schemas?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 433
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:23-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of an on‑premise Oracle 12c database to **Amazon RDS for Oracle** for a large e‑commerce platform (≈ 3 TB data, 10 k concurrent users). One key requirement from the business was that all “marketing” and “sales” schema objects could share the same tablespace so that backup windows were minimized.

**Action**  
I first **dive deep** into Oracle’s documentation: a tablespace can indeed contain objects from multiple schemas; it is an *instance‑wide* logical storage unit, not bound to any single user. I designed a shared `MKT_SALES_TS` tablespace with 2 TB of SSD‑backed EBS volumes and enabled **deduplication** via Oracle’s Advanced Compression. To keep the system highly available I leveraged **RDS Multi‑AZ** and set up automated daily snapshots, costing $1,200/month versus $4,500 if each schema had its own tablespace.

I also introduced a tagging strategy (`Owner: Marketing`, `Owner: Sales`) so that we could still enforce quotas with Oracle’s Resource Manager. After deployment, backup time dropped from 6 hrs to 2 hrs (≈ 66 % reduction), and our recovery point objective improved from 12 hrs to 1 hr.

**Result**  
The shared tablespace approach saved **$3,300/month** in storage and maintenance costs while meeting SLA requirements. I documented the trade‑offs (single points of failure per tablespace) and added automated alerts for space usage, ensuring continuous ownership and quick bias‑for‑action responses to any growth spikes.

> *Leadership Principles*: **Ownership**, **Dive Deep**, **Bias for Action** – I owned the migration, dug into Oracle internals, and acted swiftly to deliver measurable cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
