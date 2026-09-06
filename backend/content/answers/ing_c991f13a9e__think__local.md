---
qid: ing_c991f13a9e__think__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 500
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:14:49-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
* *What is “replay” in this context?* – An attacker resends a previously captured webhook payload to trick the system into re‑executing an action (e.g., duplicate payment).  
* *Assume we control both sender and receiver, but the network can be compromised.*  
* *Goal:* design defenses that let legitimate webhooks pass while rejecting duplicates.

**2️⃣ Mental model / framework**  
Use a **stateful idempotency pattern**: each webhook carries a unique identifier (e.g., UUID or hash of payload+timestamp). The receiver maintains a bounded store (cache, DB) of recently seen IDs. Combine with cryptographic signing to guarantee authenticity and integrity.

**3️⃣ Step‑by‑step reasoning**  
1. **Add a `Request-ID` header** (or field in body) that is unique per webhook instance.  
2. **Sign the payload + ID** using HMAC or asymmetric keys so the receiver can verify origin.  
3. On receipt, **verify signature first**; if invalid → reject.  
4. **Check the ID against a sliding window cache** (e.g., last 24 h). If present → treat as replay and ignore/return 409 Conflict.  
5. If new, **process normally** and record the ID with an expiration timestamp.  

This ensures:  
* Only signed requests are processed.  
* Replayed messages hit the cache and are discarded.  
* The system stays stateless after a short window, keeping memory usage bounded.

**4️⃣ Common traps to avoid**  
* Relying solely on timestamps (clock drift).  
* Storing IDs without expiration → memory blow‑up.  
* Using weak signatures that can be forged.  
* Returning 200 OK for replays; instead return idempotent status codes (e.g., 409).

**5️⃣ Sanity check & verbal communication**  
*Ask:* “If an attacker resends a valid signed webhook, will our system still accept it?” → No, because the ID is already in cache.  
*Explain to stakeholders:* “We’ll see every legitimate request exactly once; duplicates are automatically ignored thanks to the unique ID and signature.”  

By following this checklist you can design a robust replay‑prevention mechanism for webhooks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
