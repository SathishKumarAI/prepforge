---
qid: ing_a186a2c217__think__local
question: 'Explain: Transport Layer — How does SSH work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 445
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:46:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Focus on *Transport Layer* concepts (TCP) and how SSH operates over it.  
- Assume the reader knows basic networking but not SSH internals.  

**2️⃣ Mental model / framework**  
- Treat SSH as a client‑server protocol that sits atop TCP, using encryption, integrity checks, and authentication.  
- Map each SSH phase to its corresponding transport-layer action (handshake → connection establishment, key exchange → session key creation).  

**3️⃣ Step‑by‑step reasoning**  
1. **TCP connection**: Client initiates a SYN; server replies with SYN‑ACK, completing the three‑way handshake.  
2. **SSH handshake**: Over this TCP channel, both sides negotiate protocol version and cipher suites.  
3. **Key exchange (KEX)**: Use Diffie–Hellman or Elliptic‑Curve DH to agree on a shared secret without sending it over the wire.  
4. **Authentication**: Client proves identity via public‑key auth or passwords; server validates against stored keys/credentials.  
5. **Session establishment**: Once authenticated, all SSH traffic is encrypted with the negotiated session key, and integrity checks (MACs) guard each packet.  

**4️⃣ Common traps to avoid**  
- Mixing up *SSH* (application layer) with *TLS*; remember SSH uses its own crypto suite.  
- Forgetting that TCP guarantees order/acknowledgment—SSH relies on this for reliable channeling.  
- Assuming encryption happens at the transport layer itself; it actually occurs in the SSH protocol payload.  

**5️⃣ Sanity‑check & verbalize**  
- Verify each step matches RFC 4253: “Transport Layer Protocol.”  
- Explain how dropping a TCP packet forces a retransmission before any SSH data is lost, preserving confidentiality and integrity.  
- Conclude by summarizing that SSH builds a secure, authenticated tunnel on top of the reliable transport offered by TCP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
