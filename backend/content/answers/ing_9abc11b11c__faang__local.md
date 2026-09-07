---
qid: ing_9abc11b11c__faang__local
question: 'Q: How do you manage API keys for an LLM service?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:08-05:00'
sources: []
---

**Clarify**  
We need a secure, scalable strategy for storing and rotating API keys that access an LLM provider (e.g., OpenAI). Key assumptions: multiple services/teams use the key, we want zero‑downtime rotation, and auditability is required.

**Approach**  
1. Centralize secrets in a vault (AWS Secrets Manager, GCP Secret Manager, Azure Key Vault).  
2. Grant fine‑grained IAM roles to microservices; each service retrieves only its own key at runtime.  
3. Enable automatic rotation with an inline Lambda/Cloud Function that updates the secret every 90 days.  
4. Log all access via CloudTrail or equivalent.  
5. Use environment variables or sidecar containers for local dev, but never hard‑code keys.

**Depth**  
- **Storage**: Vault encrypts at rest and in transit; only principals with `GetSecretValue` can read it.  
- **Rotation**: The rotation Lambda calls the LLM provider’s key‑management API to create a new key, updates the vault entry, and triggers an SSM Parameter Store update so downstream services pick up the change automatically. Complexity is O(1) per rotation; cost ~\$0.01/rotation.  
- **Access patterns**: Services cache the secret in memory with a TTL slightly longer than the rotation window to avoid repeated calls.  

**Edge Cases**  
- Key compromise → revoke immediately, trigger rotation, audit logs.  
- Service downtime during rotation → use dual‑write: keep old key active until new key is verified.  
- Network partition → fallback to cached secret; ensure expiry handling.

**Optimize & Communicate**  
We can further reduce latency by storing the key in an encrypted environment variable via a sidecar, and we’ll present this flow with a diagram: Vault ↔ IAM role ↔ Service ↔ LLM API. This shows clear responsibilities, minimal attack surface, and auditability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
