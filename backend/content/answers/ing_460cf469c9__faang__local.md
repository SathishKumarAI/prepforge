---
qid: ing_460cf469c9__faang__local
question: 'Explain: Dynamic suppression list — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 540
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:52-05:00'
sources: []
---

**Dynamic Suppression List – “Resend · Email” Feature (Developer‑Facing)**  

---

### 1️⃣ Clarify  
*Problem*: Developers need to re‑send an email to a recipient that has previously bounced or opted out, but the system must avoid violating spam laws and preserve deliverability.  
*Assumptions*:  
- The suppression list is maintained per domain/user.  
- “Resend · Email” is a UI action in the developer console.  
- Legal compliance (CAN‑SPAM, GDPR) requires explicit opt‑in before re‑sending.

---

### 2️⃣ Approach  
1. **Validate State** – Check if the address is on the suppression list and why (hard bounce, unsubscribe, complaint).  
2. **Eligibility Decision** – Only allow resend if:  
   - The suppression reason is *temporary* (e.g., a soft bounce) or  
   - The user has re‑opted in via a confirmed link.  
3. **Audit Trail** – Log the attempt with timestamp, action type, and justification for future compliance checks.  
4. **Trigger Send** – If eligible, queue the email; otherwise block and surface an error.

---

### 3️⃣ Depth  
- *Data Model*: `suppression_list` table (email, reason, added_at, opt_in_timestamp).  
- *API Flow*: `/resend_email?to=…` → auth → DB lookup → policy check → enqueue or reject.  
- *Complexity*: O(1) DB read; queue insertion is amortized O(1).  
- *Trade‑offs*: Tightening the rule reduces spam but may lower deliverability for legitimate resends.

---

### 4️⃣ Edge Cases  
- **Expired Opt‑In**: If `opt_in_timestamp` > X days, block.  
- **Multiple Suppressions**: Prioritize hard bounce over unsubscribe.  
- **Rate Limits**: Prevent mass resend from a single user in short time.

---

### 5️⃣ Optimize & Communicate  
*Improvements*: Cache suppression status in Redis to cut DB hits; use event sourcing for audit logs.  
*Communication*: “We’ve checked the suppression list—this address is eligible for a resend because the prior bounce was soft and you re‑opted in. The email will be queued now.”  

This structure demonstrates clear problem framing, systematic decision logic, efficient implementation details, robustness to edge cases, and thoughtful optimization—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
