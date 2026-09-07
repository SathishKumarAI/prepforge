---
qid: vq_e619a73a75__faang__local
question: How can you mask sensitive data in the Azure SQL Database?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:40:18-05:00'
sources: []
---

**Clarify**  
> *Problem:* We need to hide or obfuscate confidential columns (PII, credit‑card numbers) stored in an Azure SQL DB so that only authorized users can see the raw data.  
> *Assumptions to confirm:* 1️⃣ The database is hosted on Azure SQL Database/Managed Instance. 2️⃣ We have control over schema/design and can add logic or services. 3️⃣ Performance impact must be minimal for production workloads.

**Approach**  
1. Identify columns that require masking.  
2. Use **Dynamic Data Masking (DDM)** built into Azure SQL to automatically replace sensitive values with a placeholder when queried by non‑privileged users.  
3. For more granular control, implement **row‑level security (RLS)** so only specific roles can view the unmasked data.  
4. Optionally, create **encrypted columns** using Always Encrypted if we need cryptographic protection.

**Depth**  
- DDM: `ALTER TABLE dbo.Customer ADD MASKED WITH (FUNCTION = 'partial(0,"xxxx",3)') AS CreditCard;`  
  *Non‑privileged queries return “xxxx‑xxxx‑xxxx‑1234”.*  
- RLS: Create a predicate function that checks the current user’s role and apply it to the table.  
- Always Encrypted: Store data encrypted on disk; keys are stored in Azure Key Vault; only client drivers can decrypt.

**Edge Cases**  
- DDM doesn’t protect against `SELECT *` by privileged users.  
- Masking functions may not support all data types (e.g., binary).  
- Performance overhead is negligible for DDM but RLS predicates add a small cost.  

**Optimize & Communicate**  
Explain trade‑offs: DDM is quick to deploy and requires no code changes, but offers only basic masking. RLS adds fine‑grained access control at the query level, while Always Encrypted provides cryptographic security. In production, combine them: use DDM for most columns, RLS for role‑specific visibility, and Always Encrypted for highly sensitive data that must never be exposed even to DB admins. This layered strategy satisfies compliance, performance, and maintainability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
