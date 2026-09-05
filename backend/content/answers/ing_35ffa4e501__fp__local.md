---
qid: ing_35ffa4e501__fp__local
question: 'Explain: Webhook Security — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 466
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:59:13-05:00'
sources: []
---

### Why webhooks need protection

A webhook is a *push* mechanism: Service A calls an URL on Service B whenever an event occurs.  
From the standpoint of **information flow** this is a one‑way channel that carries
potentially sensitive data. If the receiver blindly accepts every request, an attacker can:

1. **Spoof events** – trigger unwanted actions (e.g., fraudulent orders).
2. **Replay attacks** – resend captured payloads to abuse stateful APIs.
3. **Denial of service** – flood the endpoint with bogus requests.

Thus the security problem is *authenticating the source* and *ensuring integrity* while keeping latency low.

### Fundamental solution: a shared secret + HMAC

1. **Shared secret** (pre‑agreed key).  
2. Compute an **HMAC** over the payload (or canonical request) with that key.  
3. Include the MAC in a header (`X-Signature`).  
4. Receiver recomputes and compares.

Why does this work?  
- HMAC is a *cryptographic hash* keyed by a secret; only parties knowing the key can produce a valid tag.  
- The comparison is constant‑time, preventing timing leaks.  
- Replay protection comes from including a nonce or timestamp in the payload and rejecting duplicates or stale values.

### Deeper principle

This is an instance of **message authentication codes (MACs)**, a form of *information-theoretic* security that guarantees authenticity without needing public‑key infrastructure—ideal for low‑latency webhooks.

### Non‑obvious insight

Many implementations treat the signature as “extra data”; they still parse the JSON before verifying.  
If parsing is expensive or can trigger side‑effects (e.g., database writes), an attacker could exploit **parse‑before‑verify** to cause a DoS.  
The correct pattern is: **verify the MAC first, then parse the payload only if it authenticates**. This tiny ordering change turns a potential denial‑of‑service vector into a hardened design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
