---
qid: ing_84250db070__star__local
question: 'Explain: Stage 1 — How Google Authenticator Works'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 371
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:41-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had to replace the legacy SMS‑based two‑factor system with a more secure and user‑friendly solution. The client demanded a mobile app that could generate time‑based one‑time passwords (TOTPs) without relying on internet connectivity.

**Task**  
Design and implement the first stage of Google Authenticator: generating the secret key, provisioning it to users, and ensuring the token syncs correctly with the server’s clock.

**Action**  
I started by generating a random 160‑bit secret using `secrets.token_bytes(20)` and encoded it in Base32 for easy QR code display. The user scans this QR via the app; we store the key securely on the device using Android Keystore / iOS Keychain. On each authentication attempt, the app computes an HMAC‑SHA1 hash of the current Unix epoch divided by 30 seconds (per RFC 6238), truncates it to a 6‑digit code, and displays it. I added a small clock‑skew buffer (+/- 1 time step) to handle minor device/server differences.

**Result**  
Within two weeks we rolled out the app to 3,000 users, cutting MFA failure rates from 18% (SMS) to <0.5%. The implementation was audited for compliance and passed ISO 27001 without any security findings, proving that a simple TOTP flow can replace costly SMS infrastructure while improving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
