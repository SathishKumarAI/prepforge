---
qid: ing_6dcb4720e0__fp__local
question: 'Explain: Step 2 — How Password Managers Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 390
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:57:54-05:00'
sources: []
---

**Step 2 – Secure storage and retrieval (the “vault”)**

After a user creates a *master* credential in Step 1, the manager must keep all other passwords safe while still letting the browser or app fetch them on demand.  
The key insight is that **you never want to expose raw secrets**; instead you encrypt each entry with a key derived from the master password and store only ciphertexts (and non‑secret metadata) locally.

1. **Key derivation** – The master password feeds a PBKDF2/Argon2 function together with a per‑user random salt, producing a *vault key* that is computationally hard to reverse yet reproducible whenever the user logs in again.  
2. **Encryption** – Each site’s login blob (URL, username, password) is wrapped in an authenticated cipher (AES‑GCM or ChaCha20‑Poly1305). The nonce/IV is unique per entry, preventing replay attacks.  
3. **Indexing** – A deterministic hash of the target URL (e.g., HMAC‑SHA256 with the vault key) gives a lookup token that lets the manager quickly locate the correct ciphertext without revealing the site’s identity to the storage medium.

When the browser auto‑fills, the manager decrypts only the needed entry in memory, never exposing the master key or raw password.  
*Non‑obvious insight:* The deterministic URL hash acts as an **implicit access control**—only someone who knows the master key can reverse‑lookup a site’s record, so even if the vault file is stolen, it remains unreadable without that key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
