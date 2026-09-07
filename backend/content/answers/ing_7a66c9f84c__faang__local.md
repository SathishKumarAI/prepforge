---
qid: ing_7a66c9f84c__faang__local
question: 'Explain: Link to Bank Account — Unified Payments Interface (UPI)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 481
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:28:43-05:00'
sources: []
---

**Clarify**  
You’re asking how a bank account is linked to the UPI system so that payments can be routed instantly. I’ll assume: *the user has a bank‑linked mobile app, the bank offers an OpenAPI for UPI, and we need to describe the data flow and security*.  

**Approach**  
1. **User initiates link** – enters mobile number / UPI ID in the app.  
2. **App requests account list** – calls the bank’s “GetAccounts” API (OAuth‑2.0).  
3. **Bank returns accounts** – each with an *AccountID* and *IFSC*.  
4. **User selects account** – app stores a *binding token* (hash of AccountID + secret key).  
5. **UPI gateway registers binding** – the bank pushes this token to the UPI server via a webhook, creating a *Virtual Payment Address* (VPA) tied to that account.  

**Depth**  
- The *binding token* is signed with HMAC‑SHA256 using a shared secret known only to the bank and UPI gateway, preventing tampering.  
- All communication uses TLS 1.3; OAuth scopes are limited to “read:accounts” and “write:bindings”.  
- Once registered, every debit/credit request includes the VPA; the UPI server resolves it back to the bank via a secure REST call (`/resolveVpa`).  

**Edge Cases**  
- **Multiple accounts**: each gets its own VPA; UI must handle selection.  
- **Account closure**: bank notifies UPI via `accountClosed` webhook, revoking the binding.  
- **Security breach**: if a token leaks, it’s single‑use and short‑lived (e.g., 5 min).  

**Optimize & Communicate**  
Explain that this design keeps user data in the bank’s domain, reduces data exposure, and satisfies PCI‑DSS by never transmitting raw PAN. Highlight trade‑offs: extra round‑trip for binding but yields stronger isolation between banks and UPI, enhancing auditability. Conclude with the key benefit—instant, secure payments while preserving regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
