---
qid: vq_9c1575101f__aws__local
question: How do you manage access control in Azure Data Lake ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:42-05:00'
sources: []
---

**Situation / Task** – While leading a migration of the company’s 3 PB log‑store from on‑prem to **Azure Data Lake Storage Gen2**, I had to guarantee *least‑privilege* access for 120 data‑engineers and 40 BI analysts without breaking existing downstream pipelines.

**Action** –  
1. Adopted **RBAC + Azure AD Conditional Access**: mapped each role (e.g., “ETL Engineer”, “Analytics Analyst”) to a dedicated AAD group, then assigned *Storage Blob Data Contributor* or *Reader* roles on the exact sub‑folders needed.  
2. Implemented **Azure Purview Data Catalog** for fine‑grained classification; enabled **Data Loss Prevention (DLP)** policies that auto‑mask PII in queries.  
3. Built a **policy‑as‑code** pipeline (ARM + Terraform) to version and audit every ACL change, coupled with an Azure Function that posts any deviation to Slack.  
4. Conducted quarterly “Access Review” sessions, using the *Least Privilege* principle to revoke stale permissions.

**Result** – Reduced accidental data exposure incidents from 12/month pre‑migration to **0/month** post‑implementation; cut storage costs by 18 % through tighter tiering (Hot → Cool) after identifying unused access patterns.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Ensured analysts could query data securely and quickly.  
- **Ownership / Dive Deep**: Automated audit trail and continuous review loop.  

*Bar‑raiser takeaways*: clear ownership of policy lifecycle, depth in security tooling (Purview + DLP), quantified risk mitigation, and a learning loop that turned a one‑off migration into an ongoing governance practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
