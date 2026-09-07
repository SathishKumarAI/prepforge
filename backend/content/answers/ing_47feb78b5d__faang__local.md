---
qid: ing_47feb78b5d__faang__local
question: How do you respect access controls for client data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 478
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:15-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we enforce *access controls* when handling client data—i.e., who can read/write what and under what conditions. I’ll assume:  
1. Multi‑tenant SaaS with isolated customer databases.  
2. Role‑based permissions (admin, user, audit).  
3. Regulatory requirements (GDPR, HIPAA) that mandate least‑privilege and auditability.

**Approach**  
1. *Define a fine‑grained policy model* (RBAC + attribute checks).  
2. *Store policies in a central, tamper‑evident store*.  
3. *Enforce at every data access point*—app layer, API gateway, DB engine.  
4. *Audit all reads/writes* with immutable logs.  

**Depth**  
- **Policy Engine**: Use JSON‑based rules (e.g., “user.role == ‘doctor’ && patient.id in user.assignedPatients”). Evaluate at request time; cache decisions for 5 s to avoid DB hits.  
- **Data Isolation**: Separate schemas per tenant, or use row‑level security (RLS) if supported. RLS lets the database enforce policies itself, reducing app logic.  
- **Encryption & Key Management**: Encrypt data at rest with KMS; keys are per‑tenant and only available to services with appropriate roles.  
- **Audit Trail**: Write immutable entries to a WORM log (e.g., Cloud Logging + write‑once storage). Include user ID, action, timestamp, resource hash.

**Edge Cases**  
- *Privilege escalation*: Ensure policy engine runs in a sandbox; never trust client‑supplied role data.  
- *Performance*: RLS can be slow on large tables; use indexes or materialized views for common queries.  
- *Compliance drift*: Periodic automated scans of policies vs. actual DB permissions.

**Optimize & Communicate**  
Explain trade‑offs: central policy store simplifies updates but becomes a bottleneck; caching mitigates that. Highlight how RLS offloads enforcement to the DB, improving security posture. Conclude by stressing continuous monitoring and regular penetration tests to validate controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
