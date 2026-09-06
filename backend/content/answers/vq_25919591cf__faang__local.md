---
qid: vq_25919591cf__faang__local
question: How can I restore passwords ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 452
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:02:24-05:00'
sources: []
---

**Clarify**

> “Restore passwords” usually means helping a user recover access when they’ve forgotten their login credentials.  
>  *Assumptions to confirm:*  
>  - We’re dealing with a web or mobile app, not an offline system.  
>  - Users have verified contact info (email/phone).  
>  - The service uses standard hashing (e.g., Argon2) and does **not** store plaintext passwords.

**Approach**

1. Verify user identity (multi‑factor, email/OTP).  
2. Generate a single‑use, time‑bound reset token.  
3. Store the token securely (hash + expiry).  
4. Email or SMS the link to the user.  
5. On click, validate token → allow new password entry.  
6. Hash & store the new password; invalidate all active sessions.

**Depth**

- **Token generation:** `token = HMAC_SHA256(secret, uuid + timestamp)`.  
- **Storage:** Save `hash(token)` and `expires_at` in a dedicated table.  
- **Validation:** Reject if token expired or hash mismatch.  
- **Complexity:** O(1) DB ops per request; hashing is constant time.  
- **Security trade‑offs:** Use HTTPS everywhere, rate‑limit reset requests, log attempts.

**Edge Cases**

- Token reuse → detect via flag or single‑use hash deletion.  
- Brute force token guessing → enforce strong entropy and short expiry (e.g., 15 min).  
- User changes email/phone after request → send new link to updated contact.  
- Simultaneous requests → keep the latest valid, invalidate older ones.

**Optimize & Communicate**

- Cache recent tokens in Redis for faster lookup.  
- Notify admins of suspicious patterns (many failed attempts).  
- Explain reasoning: “We balance user convenience with security by using hashed, expiring tokens and limiting exposure to network attacks.”  

*Result:* A robust, scalable password‑reset flow that meets FAANG security standards while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
