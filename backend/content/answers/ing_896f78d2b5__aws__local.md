---
qid: ing_896f78d2b5__aws__local
question: 'Explain: Internal database — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:04-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that had a legacy PostgreSQL database for storing transaction metadata and an informal “doc‑collaboration” stack (Dropbox + Google Docs) for policy drafts. The product team needed real‑time visibility into compliance rules while the legal squad required versioned, searchable docs—all in one place.

**Action**  
1. **Ownership & Bias for Action** – I scoped a migration to a single AWS data platform that would satisfy both use cases.  
2. **Dive Deep & Invent & Simplify** – I designed a hybrid solution:  
   * **Amazon Aurora Serverless v2 (PostgreSQL‑compatible)** for transactional metadata, giving automatic scaling and 99.999% availability.  
   * **AWS Glue + Lake Formation** to ingest the existing CSV/JSON exports into an S3 data lake, enabling Athena queries on compliance logic.  
   * **Amazon WorkDocs** as a replacement for Dropbox/Google Docs; it natively integrates with IAM, provides audit logs, and supports versioning.  
3. **Cost & Scalability Trade‑offs** – Aurora Serverless keeps costs low during off‑peak hours while scaling to 10 k RCU/WCU spikes in minutes. WorkDocs uses S3 under the hood, so storage cost is ~30% lower than Dropbox for the same usage.

**Result**  
- Reduced data latency from 12 h to <2 s for compliance queries (95 % faster).  
- Cut doc‑storage costs by 38 % and eliminated manual sync errors.  
- Enabled a single‑sign‑on workflow that cut policy approval time by 42 %.  

**Learnings & Bar‑raiser cues**  
I took full ownership of the migration, documented every design decision, and performed a post‑mortem on a failed Glue job to refine error handling—demonstrating *Ownership* and *Dive Deep*. The measurable uplift in speed and cost aligns with Amazon’s *Deliver Results* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
