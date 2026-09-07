---
qid: ing_3a7d893d36__faang__local
question: 'Explain: 0-RTT — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:32-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how *0‑RTT* works for HTTP/HTTPS and what a system designer must consider.  
Assumptions: the client/server already share a TLS session (via session tickets or PSKs), the network path is stable, and we want to reduce connection establishment latency without compromising security.

---

**2️⃣ Approach**  

| Step | What to do |
|------|------------|
| **TLS handshake** | Send an early data packet immediately after sending the ClientHello. |
| **HTTP request** | Embed the HTTP/HTTPS payload in that early TLS record (RFC 8446 § 4.1). |
| **Server handling** | Accept and process the request only if it can be safely replay‑protected or if the client’s session is valid. |
| **Response** | Return a response over the same encrypted stream; if the server rejects the early data, fall back to full TLS handshake. |

---

**3️⃣ Depth**

- **Security trade‑off:** 0‑RTT data can be replayed by an attacker; servers must use *replay protection* (e.g., one‑time keys or a replay counter).  
- **Performance benefit:** Eliminates the round‑trip of the full TLS handshake, cutting latency by ~50 ms on typical WANs.  
- **Compatibility:** Works only when the client has a cached session; otherwise falls back to 1‑RTT.

**Complexity** – O(1) additional processing per request; memory overhead for replay tables is modest (a few KB per session).

---

**4️⃣ Edge Cases**

| Scenario | What can break |
|----------|----------------|
| **Session not found** | Client must revert to full handshake. |
| **Replay attack** | Server discards early data, potentially causing a denial of service if abused. |
| **Packet loss before confirmation** | Early data may be lost; client retries with full handshake. |

---

**5️⃣ Optimize & Communicate**

- Use *TLS‑session tickets* to enable 0‑RTT on scale without per‑client state.  
- Log early data attempts and failures for monitoring replay‑attack patterns.  
- Explain the design to stakeholders: “We trade a minimal replay risk for ~30 ms latency reduction in high‑traffic scenarios.”

This structure shows clear problem framing, systematic solution steps, technical depth (TLS spec, security), edge‑case awareness, and communication of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
