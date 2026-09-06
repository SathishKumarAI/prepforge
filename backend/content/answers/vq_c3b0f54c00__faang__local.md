---
qid: vq_c3b0f54c00__faang__local
question: How do you handle data encryption in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 593
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:18-05:00'
sources: []
---

**Clarify**  
> “How do you handle data encryption in Azure Data Lake Storage (ADLS)?”  
Assumptions: *Which ADLS version?* (Gen1 vs Gen2), *What workloads are involved?* (batch, real‑time), *Compliance requirements?* (GDPR, HIPAA). I’ll focus on **ADLS Gen2** since it’s the current product.

---

### Approach
1. **At rest** – enable Azure Storage Service Encryption (SSE) with Microsoft‑managed keys or bring‑your‑own keys via Azure Key Vault (BYOK).
2. **In transit** – enforce HTTPS/TLS 1.2+ and consider private endpoints to avoid public internet.
3. **Access control** – use Azure RBAC + ADLS ACLs; optionally integrate with Azure Purview for cataloging.
4. **Data‑level encryption** – for highly sensitive data, encrypt files before upload (client‑side) using a symmetric key stored in Key Vault.
5. **Key rotation & auditing** – schedule automated rotation and enable Azure Monitor logs.

---

### Depth
- **SSE‑M**: automatic AES‑256; no client overhead; key management is trivial but offers less control.
- **BYOK (SSE‑K)**: upload a wrapped key per blob or per file system. Rotation requires re‑wrapping; Key Vault integration gives audit logs and access policies.
- **Client‑side encryption**: use Azure SDK’s `Encryptor` to wrap data locally, then store the encrypted payload in ADLS. This adds latency but satisfies strict regulatory needs.
- **Performance**: SSE is transparent; client‑side adds ~2–3× CPU overhead but negligible I/O impact.

---

### Edge Cases
| Scenario | Issue | Test |
|----------|-------|------|
| Large blobs (> 1 GB) | Key wrap size limits | Upload > 5 GB with BYOK, verify integrity |
| Multi‑tenant workloads | ACL leakage | Cross‑check RBAC vs ACLs on shared filesystem |
| Key Vault outage | Decryption failure | Simulate key vault downtime, ensure graceful errors |

---

### Optimize & Communicate
- **Hybrid model**: use SSE‑M for bulk data; BYOK + client‑side for audit‑required datasets.
- **Automation**: Terraform modules to provision ADLS with encryption settings and Key Vault integration; CI/CD pipeline to rotate keys every 90 days.
- **Narrative**: “We first secure everything at rest, then layer in transport security, finally add granular data‑level protection where regulations demand it. Automation keeps the process repeatable and auditable.”

This plan balances compliance, performance, and operational overhead—exactly what a FAANG interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
