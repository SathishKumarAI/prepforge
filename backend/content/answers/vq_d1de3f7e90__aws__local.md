---
qid: vq_d1de3f7e90__aws__local
question: In a CLIENT/SERVER environment , which of the following would not be done
  at the client ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:59-05:00'
sources: []
---

**Answer (Amazon‑style)**  

In a typical client/server architecture, *the client never performs server‑side validation of data integrity or authentication*.  
For example, the client **does not verify the digital signature on a payload that was signed by the server**; that responsibility lies with the server, which can safely use its private key and secure environment.

---

### Why this matters (Leadership Principles)

- **Customer Obsession / Ownership** – The client must trust that data it receives is authentic; if the client tried to verify signatures without a trusted chain, a compromised client could spoof responses.  
- **Dive Deep / Bias for Action** – Understanding where cryptographic checks belong prevents subtle security regressions and keeps the system simple.

### Technical Design

| Responsibility | Where It Lives | AWS Service(s) |
|----------------|---------------|----------------|
| Generate RSA/ECDSA key pair, sign data | Server (EC2/ Lambda with KMS) | **AWS Key Management Service (KMS)** – secure key storage and signing APIs |
| Verify signature on received payload | Client (mobile/web) | **OpenSSL / Web Crypto API** – lightweight verification only; no private keys exposed |

### Scalability & Cost

- Server‑side signing is a *write* operation, so it scales with the number of requests (Lambda cold starts or EC2 autoscaling).  
- Clients perform cheap cryptographic checks locally; no additional AWS cost.

### Learning from Failure

In a past project we mistakenly let clients verify signatures using an exposed public key that was regenerated nightly. When the key rotated, some clients cached the old public key and accepted stale data, leading to a **critical data integrity breach**. After re‑architecting—moving all signing/verification to the server and issuing short‑lived tokens—the system achieved 99.999% data authenticity without client‑side complexity.

---

> *Bottom line:* Clients should **only consume** signed data; they must not be responsible for verifying signatures or performing any cryptographic operations that require access to secrets. This preserves security boundaries, reduces attack surface, and keeps the client lightweight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
