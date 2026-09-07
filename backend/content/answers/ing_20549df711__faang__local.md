---
qid: ing_20549df711__faang__local
question: 'Explain: Verify Signatures — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a service that receives *webhook* events from external systems (e.g., Stripe, GitHub). The goal is to **verify each payload’s authenticity** before processing it. Assumptions:  
- Each provider sends an HMAC‑SHA256 signature in the `X-Signature` header.  
- The secret key is rotated periodically but available to our service.  
- Latency < 50 ms, throughput ≈10k events/s.  

**2️⃣ Approach**  
1. **Receive request → Extract body and header.**  
2. **Compute HMAC(SHA256) of the raw payload using the current secret.**  
3. **Constant‑time compare with header value.**  
4. If valid, enqueue for downstream processing; else reject (400).  

For rotation: keep a *secret ring* (current + previous keys) and try all until match.

**3️⃣ Depth**  
- Use `crypto/hmac` from the language’s stdlib; compute in O(n) time.  
- Constant‑time comparison prevents timing attacks (`hmac.Equal`).  
- Store secrets in a secure KV store (e.g., AWS KMS, Vault).  
- Rate‑limit per IP/endpoint to mitigate DoS.  

Complexity: O(payload size) per request; memory O(1).  
Trade‑off: keeping multiple keys increases verification overhead but protects against rotation gaps.

**4️⃣ Edge Cases**  
- Empty body → signature must be empty string.  
- Large payloads (>10 MB) – stream the hash instead of loading entirely.  
- Clock skew if timestamps are used (not in this design).  
- Secret key compromise: trigger immediate revocation and audit logs.

**5️⃣ Optimize & Communicate**  
- Cache recent secrets to avoid KV lookup latency.  
- Parallelize verification for bursts using worker threads.  
- Log failures with request ID, timestamp, and IP for forensic analysis.  

Explain this flow clearly to interviewers, highlighting security‑first design, scalability, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
