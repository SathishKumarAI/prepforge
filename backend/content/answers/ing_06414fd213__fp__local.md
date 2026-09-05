---
qid: ing_06414fd213__fp__local
question: Where is my data hosted and processed? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 441
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:57-05:00'
sources: []
---

## Why the location of your data matters

The *fundamental problem* is that a legal‑tech system must keep highly confidential client material invisible to any party other than the authorized user and the law firm’s own infrastructure.  
If we model confidentiality as an information‑theoretic secrecy constraint, the only way to satisfy it is to ensure that all *states* of the data (storage, transmission, computation) are confined to a trusted domain.  

### 1. **Trusted Execution Environments (TEEs)**  
Harvey’s solution places every inference request inside a hardened enclave on the firm’s own servers. The TEE guarantees that only the enclave’s code can see plaintext data; all other processes—including the host OS and hypervisor—see only encrypted blobs. This satisfies the *privacy‑preserving* principle: the adversary cannot read the data even if they control the underlying hardware.

### 2. **On‑premises, no outbound traffic**  
All models run locally; there is no outbound network call to a cloud provider. Thus the *data residency* constraint (often required by regulations such as GDPR or CCPA) is automatically met: the legal entity retains sovereign control over the data.

### 3. **Zero‑trust audit trail**  
Every access is logged inside the enclave, cryptographically signed and tamper‑evident. This satisfies both *integrity* and *accountability*, turning the system into a provable compliance engine rather than an opaque black box.

---

#### Non‑obvious insight
Many vendors claim “private” by simply encrypting data at rest. Harvey goes further: it encrypts *in use* by running all computations inside a TEE, so even if a privileged insider gains access to the server, they cannot read the data without breaking the enclave’s isolation—an event that would be instantly detected by the audit trail. This dual‑layer protection is what makes Harvey uniquely secure for “the most sensitive matters.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
