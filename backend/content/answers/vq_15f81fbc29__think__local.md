---
qid: vq_15f81fbc29__think__local
question: How do you integrate Azure Key Vault with ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 505
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:12:23-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - *Goal:* Securely fetch secrets (connection strings, passwords, etc.) from Azure Key Vault for use in ADF activities.  
   - *Assumptions:* You already have an Azure Key Vault, an ADF instance, and appropriate RBAC permissions (Reader on Key Vault, Managed Identity enabled on the pipeline).

**2. Choose a mental model: “Secure‑by‑design data flow”**  
   - Treat secrets as first‑class objects that must never be hard‑coded or exposed in JSON/ARM templates.  
   - Map the ADF–KeyVault interaction to a two‑step process: *authenticate* (managed identity) → *retrieve secret*.

**3. Step‑by‑step reasoning**  
   1. **Enable Managed Identity on the pipeline** (ADF’s “Managed Identity” tab).  
   2. **Grant Key Vault access**: In Key Vault, add an Access Policy that gives this identity `get` permission for secrets.  
   3. **Create a Linked Service in ADF** pointing to your target (e.g., SQL Server) and choose “Use Azure Key Vault” as the authentication method.  
   4. In the linked service’s JSON, reference the secret by name (`@Microsoft.KeyVault(SecretUri='https://<vault>.vault.azure.net/secrets/<secret-name>')`).  
   5. **Reference the linked service in your pipeline**; ADF will automatically resolve the secret at runtime.

**4. Common traps to avoid**  
   - Forgetting to enable Managed Identity on *both* the pipeline and the integration runtime if you use self‑hosted IR.  
   - Granting overly broad permissions (e.g., “Full Access” instead of `get`).  
   - Mixing secret URIs with secret names; Key Vault expects the full URI in the JSON.

**5. Sanity‑check & verbalize**  
   - Verify that the pipeline runs without error and that the linked service’s connection string appears redacted in the UI.  
   - Explain: “ADF uses its managed identity to call Key Vault’s REST API, fetches the secret value securely, and injects it into the activity at runtime—no plaintext leaks.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
