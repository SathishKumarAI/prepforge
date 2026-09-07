---
qid: ing_80bb3492a1__faang__local
question: 'Explain: Verify Before Parsing Business Data — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 445
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:16-05:00'
sources: []
---

**Verify Before Parsing Business Data – Webhooks (System Design)**  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Problem:* A service receives webhook payloads from external partners. We must ensure only valid, authenticated requests are processed before any heavy parsing or business logic runs.  | Prevent waste of resources and security breaches. |
| **Approach** | 1️⃣ Validate HTTP signature (HMAC, JWT, or shared secret). <br>2️⃣ Enforce TLS and IP whitelisting. <br>3️⃣ Perform minimal header checks (content‑type, timestamp). <br>4️⃣ Use a lightweight “gateway” microservice that returns 401/403 before delegating to the main parser. | Keeps heavy logic isolated and protects downstream services. |
| **Depth** | *Signature check* runs in O(1) time; hashing is CPU‑bound but trivial compared to JSON deserialization. IP checks use a Bloom filter for O(1) lookups. The gateway can be stateless, horizontally scalable, and can log failures for audit. Complexity: O(n) per request where n = size of header set (constant). |
| **Edge Cases** | • Replay attacks – verify timestamp + nonce.<br>• Missing or malformed signatures – drop early.<br>• Large payloads that exceed size limits – return 413 before parsing.<br>• Unsupported content‑type – 415. | Test with forged headers, delayed packets, and oversized bodies. |
| **Optimize & Communicate** | • Cache shared secrets to avoid DB hits.<br>• Use async I/O for signature verification so the gateway stays responsive.<br>• Provide clear logs (request ID, failure reason) for ops. Explain that early rejection conserves compute, reduces attack surface, and improves observability. |

*Result:* A fast, secure pre‑parse layer that guarantees only authenticated, well‑formed requests reach business logic, aligning with FAANG expectations of clean, scalable, and defensible design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
