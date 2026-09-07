---
qid: ing_c69ba018ac__faang__local
question: 'Explain: Design age assurance for a platform where the under-18 experience
  is fundamentally different.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 474
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:22:39-05:00'
sources: []
---

**Clarify**  
We need an *age‑assurance* system that guarantees any user < 18 sees a distinct “under‑18” experience (different UI, content, permissions). Key assumptions:  

1. Users can be identified via email/phone or social login.  
2. The platform must comply with COPPA/GDPR‑Art. 8.  
3. We have no physical ID verification; we rely on self‑declared age and optional secondary checks.

**Approach**  
1. **Self‑declaration flow** – prompt for birthdate at signup, store securely.  
2. **Risk scoring** – flag accounts with inconsistent data (e.g., email domain suggests adult).  
3. **Secondary verification** – optional upload of a government ID or use of age‑verification APIs (e.g., AgeChecked).  
4. **Real‑time enforcement** – middleware that routes requests to the appropriate experience based on stored age flag.  
5. **Audit & monitoring** – log all access attempts and flag anomalies for review.

**Depth**  
- Store birthdate in an encrypted column, indexed for quick lookup.  
- Use a deterministic hash of email + birthdate for cache keys.  
- Middleware runs in O(1) per request; overall latency < 5 ms.  
- If risk score > threshold, block access until verification completes.  
- GDPR: provide user with “age‑reset” option and delete data on request.

**Edge Cases**  
- Users entering future dates or ambiguous inputs → validate range 1900–current year.  
- Users switching email/phone after age check → re‑evaluate risk score.  
- False positives from proxy IPs → allow override by human moderator.  

**Optimize & Communicate**  
- Batch verify accounts during off‑peak hours to reduce load.  
- Offer a “trusted adult” opt‑in that bypasses secondary checks for verified guardians.  
- Present the architecture diagram in the interview: signup ➜ age check ➜ risk scoring ➜ middleware ➜ content delivery. This demonstrates clear reasoning, scalability, and compliance focus—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
