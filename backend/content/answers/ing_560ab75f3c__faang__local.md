---
qid: ing_560ab75f3c__faang__local
question: 'Explain: Things NOT to do — Storing Passwords Safely: A Comprehensive Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 559
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:01-05:00'
sources: []
---

## Clarify  
The interview asks for a **“comprehensive guide”** on *what not to do* when storing passwords, i.e., the anti‑patterns that jeopardize security. I’ll assume we’re focusing on typical web‑app storage (databases) and that the audience knows basic cryptographic primitives.

## Approach  
1. List the common pitfalls.  
2. For each, explain why it fails (risk).  
3. Mention a quick fix or alternative best practice to give context.

## Depth  

| Bad Practice | Why It Breaks | Quick Remedy |
|--------------|---------------|--------------|
| **Plain‑text storage** | Anyone who reads the DB can log in. | Hash + salt. |
| **Single static salt per user** | Reused salts enable rainbow‑table attacks across users. | Generate a unique, random salt per password. |
| **Weak hashing (MD5/SHA1)** | Collision and fast‑to‑compute → brute force. | Use slow KDFs: Argon2id, bcrypt, scrypt. |
| **Fixed iteration count** | As hardware speeds up, cost drops over time. | Periodically increase iterations or switch algorithms. |
| **Storing the hash in plaintext columns without encryption** | DB compromise leaks hashes; if attacker also has backup, they get everything. | Encrypt the column (e.g., AES‑256) with a key managed by KMS. |
| **Re‑using password salts across accounts** | Cross‑account correlation attacks. | Unique salt per account. |
| **Storing salt and hash together in one string without clear separation** | Easy to mix up fields, risk of accidental exposure. | Store separately or use a structured format (e.g., `algorithm$salt$hash`). |
| **Hard‑coding KDF parameters in source code** | Leaks secrets if repo is public; hard to rotate. | Externalize config (env vars, secure vault). |

## Edge Cases  
- Users with extremely long passwords may exceed buffer limits → test max length handling.  
- Legacy systems that already store weak hashes need migration scripts—verify zero‑downtime transition.  

## Optimize & Communicate  
I’d finish by stressing **continuous monitoring**: audit logs for repeated hash queries, enforce rate limiting, and schedule periodic penetration tests. In an interview I’d narrate this as “first, avoid the obvious; second, layer defenses (hash + salt + encryption); third, keep parameters fresh.” This shows structured thinking, depth in cryptographic choices, and awareness of operational realities—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
