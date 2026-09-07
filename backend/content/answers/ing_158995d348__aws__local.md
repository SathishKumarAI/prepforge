---
qid: ing_158995d348__aws__local
question: 'Explain: Understanding full vs. partial data replication'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 419
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:57-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy data warehouse (≈ 10 TB) to Redshift on AWS for a fintech client. The business required real‑time reporting but also had compliance rules that forbade exposing raw customer data outside its region. My goal was to design a replication strategy that satisfied both performance and regulatory constraints.

**Action – Technical Design**  
I compared **full vs. partial replication**:

| Replication | Pros | Cons |
|-------------|------|------|
|Full (S3 → Redshift) | Simpler, guarantees consistency | 1 TB of data per day → high egress cost ($0.023/GB), longer refresh windows |
|Partial (Selective columns + CDC via Kinesis Data Streams) | Only audit‑necessary fields, lower bandwidth | Requires schema evolution handling |

I chose **partial replication** using *AWS DMS* to stream change events into *Kinesis Data Streams*, then *Lambda* transforms and loads only the audited columns into Redshift. Unmodified columns stay in an encrypted S3 bucket accessed via *Redshift Spectrum*.  

This cut daily data movement from 1 TB to ~200 GB, saving **$4,800/month** on transfer fees, while keeping query latency < 2 s for key dashboards.

**Result**  
The new pipeline delivered near‑real‑time reports with a 40% reduction in storage costs and full compliance. I documented the trade‑offs and created a playbook that other teams adopted, proving my **Ownership** and **Customer Obsession**.  

**Bar‑raiser cues** – I highlighted measurable cost savings, deep dive into AWS services (DMS, Kinesis, Lambda), and how partial replication met regulatory needs, demonstrating ownership of both business impact and technical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
