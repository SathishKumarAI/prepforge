---
qid: ing_64edd0dce5__aws__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:06-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy data‑warehouse to Amazon Redshift for a SaaS product that handled > 5 M rows per day and served 200k concurrent users. The new architecture had to enforce *read‑only* access for most customers while still allowing privileged admins to update audit logs—an ideal scenario for **defense‑in‑depth**.

**Action**  
1. **Read‑Only Enforcement:** I used **Redshift Spectrum** with IAM policies that only allowed `SELECT` on external tables, coupled with a **KMS‑encrypted snapshot strategy** so that any accidental write would hit an immutable copy.  
2. **Row‑Level Security (RLS):** Implemented **policy tables** in Redshift, mapping user IDs to tenant IDs via the `pg_authid` catalog. Each query automatically joins the policy table, ensuring users see only their own rows.  
3. **Audit & Alerting:** Integrated with CloudWatch and GuardDuty; every failed RLS attempt triggered a Lambda that logged to an S3 bucket for forensic analysis.

**Result**  
- Reduced data breach incidents by **97 %** in the first year.  
- Maintained query latency < 2 s for 99th‑percentile workloads, while keeping monthly storage costs down by **15 %** through automated snapshot deletion after 30 days.

**Leadership Principles Highlighted**  
*Customer Obsession* – safeguarding customer data with layered controls.  
*Ownership* – architecting the end‑to‑end solution and monitoring it continuously.  

**Bar‑raiser cues**: Demonstrated *ownership*, deep dive into IAM & RLS internals, quantified impact (97 % breach reduction), and learning loop via continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
