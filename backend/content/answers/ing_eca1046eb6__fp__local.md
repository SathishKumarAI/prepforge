---
qid: ing_eca1046eb6__fp__local
question: 'Q: Your agent''s memory store has 50M memories across 10K tenants. How
  do you guarantee cross-tenant isolation and what''s your blast radius if isolation
  fails?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 547
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:22:48-05:00'
sources: []
---

**Why isolation is mandatory**

A memory store that holds *50 M* records for *10 K* tenants behaves like a multi‑tenant database where each tenant’s data must be indistinguishable from random noise to an outsider. The fundamental problem is **information leakage**: if a malicious process can read another tenant’s rows, it gains access to private vectors, model weights, or user behavior that may violate privacy laws (GDPR, CCPA).  

**Deriving the isolation mechanism**

1. **Namespace partitioning** – Each tenant gets its own logical shard (`tenant_id` prefix) so that a simple key‑value lookup never crosses boundaries.  
2. **Encryption at rest** – Every shard is encrypted with a tenant‑specific symmetric key derived from a master KMS key via HKDF. This guarantees that even if the storage layer is compromised, raw data remains unintelligible.  
3. **Access‑control enforcement** – All API calls are authenticated against an IAM policy that binds `tenant_id` to the caller’s role. The runtime performs a *two‑phase check*: (a) verify the token’s tenant claim; (b) ensure the requested key begins with that claim.  

These layers together satisfy **confidentiality** by construction: no single component can read data it shouldn’t see.

**Blast radius calculation**

If isolation fails at the *namespace level* (e.g., a bug allows cross‑tenant reads), the worst‑case exposure is all rows belonging to a single tenant, i.e.  
\( \frac{50\,\text{M}}{10\,000} = 5\,000 \) memories.  

If the failure occurs deeper—encryption keys leaked—the blast radius expands to *all* 50 M memories, but only those that are *unencrypted*. Since we encrypt every shard, a key leak still requires the attacker to possess the master KMS secret, which is guarded by hardware security modules and multi‑factor rotation.  

**Non‑obvious insight**

Treat each tenant’s memory vectors as points in a high‑dimensional space. By encrypting them *per tenant*, you implicitly enforce a **geometric separation**: no adversary can compute cross‑tenant distances, preventing model‑stealing attacks that rely on similarity metrics. This side‑effect is often overlooked but provides an extra layer of privacy beyond pure access control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
