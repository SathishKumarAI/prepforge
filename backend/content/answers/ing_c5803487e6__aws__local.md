---
qid: ing_c5803487e6__aws__local
question: 'Explain: RBAC (Role-based Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:31-05:00'
sources: []
---

**Situation & Task**  
In my last role as a Solutions Architect for a fintech SaaS platform, we needed to replace an ad‑hoc permission matrix that caused frequent compliance breaches. The goal was to build a **Role‑Based Access Control (RBAC)** system that could scale to 50 000 users, support multi‑tenant isolation, and reduce audit time by 70 %.  

**Action**  
*Customer Obsession & Ownership*: I mapped every user action to an *operation* (e.g., `READ_ACCOUNT`, `CREATE_INVOICE`) and defined **roles** (`AccountHolder`, `FinanceAdmin`, `Auditor`).  
*Technical Design*:  
- **Identity**: Cognito User Pools + SAML federation for corporate login.  
- **Policy Store**: DynamoDB tables (`Roles`, `RolePermissions`, `UserRoles`) with global secondary indexes for quick lookups.  
- **Authorization Engine**: Lambda@Edge functions that intercept API Gateway requests, fetch the user’s roles from Cognito IdToken, query DynamoDB, and short‑circuit denial if no permission exists.  
- **Audit Trail**: CloudTrail + Athena queries on S3 logs to produce compliance reports in under 5 min.  

*Dive Deep & Bias for Action*: I performed a CAP analysis—Eventual consistency was acceptable because permission changes are rare; read latency < 10 ms due to DynamoDB provisioned throughput (1 M RU/s).  

**Result**  
- Reduced audit preparation time from **3 days → 8 hours**.  
- Cut unauthorized access incidents by **92 %** in the first quarter post‑deployment.  
- Cost: <$2k/month vs $12k/year previously spent on manual compliance tools.

**Bar‑Raiser Takeaway**  
I owned the end‑to‑end design, dove deep into DynamoDB trade‑offs, quantified impact with real metrics, and iterated based on a single failure (a missed permission update) that led to a new “role versioning” feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
