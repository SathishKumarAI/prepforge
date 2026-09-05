---
qid: ing_06bd89ab41__fp__local
question: 'Explain: Basic payment flow — How do Apple Pay and Google Pay work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 508
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:03-05:00'
sources: []
---

### From “What the user does” to “Money moves”

1. **User initiates**  
   The app sends a *payment intent* (amount, merchant ID) to the device’s payment API.

2. **Device authenticates**  
   The phone unlocks with Face/Touch ID or PIN and proves possession of the *device‑specific token*.  
   - Token = a random key stored in a secure enclave; it never leaves the chip.

3. **Tokenization & transaction signing**  
   The device asks its payment processor to create an encrypted “payment token” that embeds:
   - Merchant ID
   - Expiry timestamp
   - One‑time cryptographic signature (HMAC or ECDSA) generated from a private key never exposed outside the enclave.

4. **NFC/QR → Reader**  
   The device emits this token via NFC (Apple Pay) or scans a QR code (Google Pay).  
   The reader forwards it to the *payment network* (Visa/Mastercard).

5. **Network‑level validation**  
   The issuer checks the signature, expiration, and whether the card is active.  
   If valid, the issuer authorizes the amount and returns an “authorization” token.

6. **Settlement**  
   The authorization moves through the payment network to the merchant’s acquirer; the issuer debits the user’s account, and the merchant receives funds.

---

#### Why it must work this way

- **Zero‑knowledge of card number**: Tokenization ensures the device never exposes the actual PAN (Primary Account Number).  
- **Forward secrecy**: Each transaction uses a fresh signature, so compromising one token does not reveal others.  
- **Hardware isolation**: The secure enclave guarantees that even malware cannot read private keys.

---

#### Non‑obvious insight

*The payment flow is essentially a distributed “commit‑reveal” protocol.*  
The device commits to a signed token (commit), the reader reveals it to the network, and the network’s issuer finally reveals the authorization.  
This mirrors cryptographic commitment schemes: the user’s device locks in an intent that can’t be altered later, yet remains invisible to intermediaries until the moment of transfer—providing both privacy and auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
