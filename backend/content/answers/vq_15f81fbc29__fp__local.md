---
qid: vq_15f81fbc29__fp__local
question: How do you integrate Azure Key Vault with ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 451
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:17-05:00'
sources: []
---

**Why the vault matters**

An ADF pipeline must read secrets (connection strings, keys) without hard‑coding them.  
The *information‑theoretic* constraint is that the secret should never appear in a
pipeline definition or in logs—only the *identity* that owns the key can access it.
Azure Key Vault supplies that identity: it’s a secure, auditable repository whose
access policies are governed by RBAC.

**How ADF reaches the vault**

1. **Linked Service → Secret Store**  
   When you create a Linked Service (e.g., SQL Server), choose *“Use Azure Key Vault”* for each credential field.  
2. **Key‑Vault Reference**  
   The linked service stores the secret’s URI (`https://<vault>.vault.azure.net/secrets/<name>`).  
3. **Managed Identity or Service Principal**  
   ADF runs under a Managed Identity (system‑assigned or user‑assigned) that must have `get` permissions on the secret.  
4. **Runtime lookup**  
   At execution time, ADF’s runtime engine resolves the URI by calling Key Vault’s REST API, receives the decrypted value, and injects it into the activity.

**Why this pattern works**

- **Least‑privilege**: only the pipeline’s identity can read the secret; no secrets are stored in the pipeline definition.  
- **Auditability**: every `get` call is logged by Key Vault.  
- **Dynamic rotation**: changing a secret in Vault instantly propagates to all pipelines that reference it.

**Non‑obvious insight**

You *don’t* need to re‑configure linked services after rotating a key—ADF automatically fetches the latest value on each run. This means you can set up a continuous deployment pipeline where secrets are rotated by an external process, and ADF remains unchanged; the only risk is ensuring that the identity’s access policy stays in sync with any vault changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
