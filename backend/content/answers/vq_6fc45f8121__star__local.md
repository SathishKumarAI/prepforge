---
qid: vq_6fc45f8121__star__local
question: What are Role Based Access Control permissions ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 311
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:49-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were migrating our data lake from on‑prem Hadoop to Snowflake, and the compliance team flagged that our current user model was too permissive for sensitive PII tables.  
**Task** – I had to design a Role Based Access Control (RBAC) scheme that would restrict read/write privileges by job function while still allowing analysts to query aggregated metrics.  
**Action** – First, I mapped out the data domains and identified five key roles: Data Engineer, Data Analyst, Compliance Officer, BI Developer, and Guest Viewer. Using Snowflake’s role hierarchy, I created a parent “DataOps” role with minimal privileges and then spawned child roles for each function. For example, the “Analyst_ReadOnly” role received `SELECT` on all fact tables but no `INSERT/UPDATE`. I leveraged column‑level masking policies to hide PII columns from analysts and set up dynamic data masking for compliance reviewers. Finally, I automated the role assignments via Terraform scripts so that new hires automatically inherit the correct permissions.  
**Result** – After rollout, audit logs showed a 0% policy violation rate over six months, and query performance improved by 12% due to reduced row‑level filtering overhead. The team also reported higher confidence in data governance, and I learned how fine‑grained RBAC can balance security with usability when scaling cloud data platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
