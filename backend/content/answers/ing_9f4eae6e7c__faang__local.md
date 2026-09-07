---
qid: ing_9f4eae6e7c__faang__local
question: 'How to validate a password? — Storing Passwords Safely: A Comprehensive
  Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 405
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:21-05:00'
sources: []
---

**Clarify**  
We’re asked how to *validate* (i.e., authenticate) a password while ensuring it’s stored safely. I’d confirm: do we need to support legacy hashes, what threat model (offline brute‑force), and is the system distributed?  

**Approach**  
1. Store only salted, adaptive hashes (`argon2id` or `scrypt`).  
2. When a user logs in, hash the supplied password with the same salt & parameters, compare in constant time.  
3. Add rate limiting / account‑lockout and optional MFA for extra security.  

**Depth**  
- **Salting**: unique per‑user 128‑bit random value prevents rainbow‑table reuse.  
- **Key‑Derivation Function (KDF)**: `argon2id` with ≥ 32 MiB memory, 3 iterations, 1 thread – tuned to current GPU capabilities.  
- **Verification**: use a constant‑time comparison (`memcmp_s`) to avoid timing leaks.  
- **Complexity**: hashing is O(cost) per attempt; verification adds negligible overhead.  

**Edge Cases**  
- Password reuse across services → store hash with service prefix.  
- Migration path from unsalted SHA‑256 → rehash on next successful login.  
- Brute‑force protection: exponential backoff or CAPTCHA after N failures.  

**Optimize & Communicate**  
Explain that we choose Argon2id for its memory hardness, discuss trade‑offs (CPU vs GPU cost). Emphasize the importance of never storing plain text and of using a constant‑time comparison to eliminate side‑channel leaks. This narrative shows clear problem understanding, systematic solution design, depth in security details, and awareness of real‑world edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
