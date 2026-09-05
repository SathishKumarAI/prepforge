---
qid: vq_c3b0f54c00__fp__local
question: How do you handle data encryption in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 417
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:15-05:00'
sources: []
---

### Why ADLS encrypts data the way it does

At its core, a storage service must **protect confidentiality while allowing fast random reads**.  
The fundamental problem is that a block of bytes on disk can be read by any tenant who knows its offset; we need to ensure those bytes are unreadable without a key.

ADLS solves this with *client‑side encryption* using **AES‑256 in GCM mode**:

1. **Symmetric keys per blob** – each file gets its own 256‑bit key, so compromise of one file does not affect others (principle of isolation).
2. **Key wrapping** – the symmetric key is encrypted with a *key vault* key (RSA‑OAEP or HSM‑based) and stored alongside the data.  
   This guarantees that even if an attacker obtains the ciphertext, they cannot derive the AES key without access to the key vault.
3. **Deterministic IVs** – ADLS derives the initialization vector from the blob’s unique identifier (hash of URI + version).  
   Determinism is essential for deduplication and consistent read‑only access patterns while still providing semantic security because GCM uses an authenticated mode.

### Non‑obvious insight

Most people overlook that **the IV must never repeat**. ADLS’s deterministic scheme guarantees uniqueness *per blob* but also relies on the storage system to enforce a single version per URI. If a tenant accidentally writes two blobs with the same name in different containers, the same IV is reused across containers, breaking security. Thus, container‑level namespace isolation is not just organizational—it is a cryptographic invariant.

In practice, always enable *Azure Key Vault* integration and never store unwrapped keys locally; let ADLS manage the key lifecycle automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
