---
qid: ing_5c34f271f8__star__local
question: 'Explain: Step 6 — How Password Managers Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 379
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:48-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with revamping the company’s single‑sign‑on (SSO) system. The existing solution stored credentials in plain text, and we needed a secure, user‑friendly replacement that could integrate with our internal apps.

**Task**  
I had to design a password manager component that would securely generate, store, and retrieve passwords on behalf of users, ensuring zero knowledge for the server while keeping latency under 200 ms per request.

**Action**  
I chose a local master‑key scheme: each user’s browser generated a random 256‑bit key using Web Crypto. The key was never sent to the server; instead, it was wrapped with an AES‑GCM envelope encrypted by a key derived from the user’s login password via Argon2id (salted per account). For storage I used IndexedDB and stored only the encrypted password blobs along with IVs and authentication tags. When a user needed a credential, the client first validated the master key locally, then decrypted the blob on‑the‑fly, caching it in memory for 30 seconds before auto‑clearing. We also implemented a fallback sync to a secure vault using end‑to‑end encryption, keyed by the same master key.

**Result**  
The new system reduced password‑related support tickets by 78 % and achieved an average retrieval time of 140 ms across our user base. It passed penetration tests with no data leakage findings. I learned that balancing client‑side security with usability often means leveraging modern web APIs (Web Crypto, IndexedDB) and robust key‑derivation functions like Argon2id to protect against both brute force and side‑channel attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
