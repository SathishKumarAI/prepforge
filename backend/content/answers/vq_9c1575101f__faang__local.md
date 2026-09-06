---
qid: vq_9c1575101f__faang__local
question: How do you manage access control in Azure Data Lake ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 549
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:49-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Question*: “How do you manage access control in **Azure Data Lake Storage Gen2 (ADLS Gen2)?”*  
Assumptions: we’re talking about an enterprise‑grade lake, multiple data owners, regulatory compliance, and a mix of Azure AD identities plus service principals.  

**2️⃣ Approach**  
1. Define *resource hierarchy*: root → folders → blobs.  
2. Use **Azure Role‑Based Access Control (RBAC)** for coarse‑grained access (read/write/delete).  
3. Layer on **Access Control Lists (ACLs)** per folder/blob for fine‑grained, path‑level permissions.  
4. Leverage **Azure AD authentication** (SAML/OAuth) and *separate* service principals for ETL jobs.  
5. Enforce **Conditional Access / MFA** for privileged roles.  

**3️⃣ Depth**  
- **RBAC**: assign built‑in roles like `Storage Blob Data Reader` or custom roles; applies to the whole storage account or a specific container. Complexity O(1) per assignment.  
- **ACLs**: stored in HDFS‑style metadata; supports POSIX‑like permissions (`rwx`) plus Azure AD identities. ACL evaluation is O(log n) for each lookup, but typically cached by clients.  
- **Integration**: When a job runs under a service principal, its token is validated against the ACLs; if denied, the operation fails before touching data.  
- **Audit**: Enable diagnostic logs and Azure Monitor to trace access attempts.  

**4️⃣ Edge Cases**  
- *Inheritance*: ensure ACL inheritance works when new folders are created (test `setfacl -R`).  
- *Over‑permission*: avoid “Everyone” or `ObjectOwner` rights; audit via `az storage fs file show`.  
- *Token expiry*: refresh tokens for long‑running pipelines to prevent silent failures.  

**5️⃣ Optimize & Communicate**  
- Use **Azure Policy** to enforce that every new container has a minimal ACL set.  
- Cache ACLs in the application layer if performance is critical, but keep them refreshed via events (`Event Grid`).  
- When explaining to stakeholders: “We first secure at the account level with RBAC, then fine‑tune at the path level with ACLs, all authenticated by Azure AD and logged for compliance.”  

This layered model balances **security**, **scalability**, and **manageability**—the key signals interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
