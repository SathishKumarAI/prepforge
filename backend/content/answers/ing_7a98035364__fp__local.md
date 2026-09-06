---
qid: ing_7a98035364__fp__local
question: Is the QR Code Dynamic or Static? — 4 Ways of QR Code Payment
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 584
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:32-05:00'
sources: []
---

**Dynamic or Static? The answer comes from the security‑efficiency trade‑off that payment systems must solve.**

A **static QR** embeds a fixed identifier (merchant ID, account number). When scanned it simply tells the reader “send money to this account.” The problem is replay: an attacker can copy the image and reuse it. To mitigate, merchants rely on external authentication (PIN, OTP) or limit transaction amounts. Static codes are cheap—generated once, printed everywhere—and work well for low‑risk, high‑volume scenarios.

A **dynamic QR** contains a short‑lived token that is tied to a single payment session. The merchant’s back‑end generates a nonce, signs it with its private key and optionally encrypts the payload. When the customer scans, the reader sends this token to the issuer, which verifies signature, checks expiration and authorises the amount. Replay becomes impossible because each code can be used only once.

**Why must dynamic codes work this way?**  
The payment problem is: *prove that a user intends to pay a specific amount to a specific merchant without giving away permanent credentials.*  
- **Uniqueness (nonce)** guarantees one‑use per transaction.  
- **Signature (public‑key cryptography)** ensures authenticity and non‑repudiation.  
- **Time bound** protects against delayed or intercepted scans.

**Four common QR payment flows**

| Flow | Who generates the QR | How it is validated | Typical use |
|------|---------------------|---------------------|-------------|
| 1️⃣ **Static merchant code** | Merchant (once) | Reader sends ID → issuer checks balance | Small retail, vending |
| 2️⃣ **Dynamic session token** | Merchant (per transaction) | Reader forwards signed token to issuer | Mobile wallets, e‑commerce |
| 3️⃣ **Customer‑generated QR** | Customer device | Issuer verifies customer signature | Peer‑to‑peer, split bills |
| 4️⃣ **Hybrid** | Merchant + customer | Merchant’s static ID + customer’s OTP in QR | High‑value or regulated payments |

**Non‑obvious insight:**  
Even with a dynamic QR, the *issuer* can enforce additional security by embedding a hash of the customer’s device fingerprint. This ties the payment to a specific device, giving the merchant an extra layer of fraud detection without any user friction.

In short: static codes trade off security for simplicity; dynamic codes embed cryptographic guarantees that map directly to the core payment requirement—unique, authenticated intent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
