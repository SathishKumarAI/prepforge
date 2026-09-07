---
qid: vq_15f81fbc29__aws__local
question: How do you integrate Azure Key Vault with ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 429
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:28-05:00'
sources: []
---

**Situation / Task**  
While building a GDPR‑compliant data lake on Azure, my team needed to inject secrets (service principal credentials, API keys) into Azure Data Factory (ADF) pipelines without hard‑coding them in the JSON definitions. The goal was to keep secrets rotation automated and audit‑ready.

**Action**  
1. **Design** – I chose *Azure Key Vault* as the central secret store, linked it to ADF via a *Managed Identity*.  
2. **Implementation** – Created a Key Vault policy granting `get` access to the Managed Identity. In ADF, I defined a *Linked Service* that references the Key Vault URI and uses `@Microsoft.KeyVault(secretName='my‑secret')` expressions in pipeline parameters.  
3. **Automation** – Set up Azure DevOps pipelines to rotate secrets in Key Vault every 90 days and trigger an ADF re‑publish using the REST API, ensuring zero downtime.  
4. **Governance** – Added diagnostic logs from Key Vault and ADF to Azure Monitor; alerts fire if a secret is accessed outside business hours.

**Result**  
- Reduced secret exposure risk by 100 % (no plaintext in code).  
- Cut manual rotation effort from 5 hrs/month to < 10 min.  
- Achieved 99.99 % pipeline uptime during the migration, with cost impact < $0.02 per run.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured data compliance and security for end users.  
- **Ownership & Dive Deep** – Took full ownership of the integration, debugged latency spikes, and tuned Key Vault throughput to keep pipeline latency under 2 s.

*Bar‑raiser takeaway:* Demonstrated deep technical grasp (Key Vault policies, Managed Identity), quantified impact, and proactive learning from a failed manual rotation that caused a data breach scare.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
