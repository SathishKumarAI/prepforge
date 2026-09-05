---
qid: ing_3a7d893d36__fp__local
question: 'Explain: 0-RTT — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 472
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:18-05:00'
sources: []
---

**Why 0‑RTT is necessary**

Every TLS handshake incurs *round trips* (RTTs). In a web setting the latency of each RTT dominates page load time because users expect instant responses. The fundamental problem is: **we need to exchange cryptographic material before any application data can be sent, yet we want no extra round trip**.

**Derivation from first principles**

1. *Key agreement* (e.g., Diffie‑Hellman) must produce a shared secret \(K\).  
2. The client can compute the same \(K\) **if it remembers a previously established public value** \((g^a)\) and the server’s current public value \((g^b)\).  
3. By re‑using \(g^a\) from a prior session, the client can send its *pre‑shared* data in the very first packet of a new connection.

Thus 0‑RTT is simply “re‑use the long‑term key material already known to both parties so that the handshake’s cryptographic handshake completes in zero RTTs.”

**System‑design glue**

- The client stores **session tickets** (or PSKs) from past connections.  
- Upon a new connection, it includes the ticket and its own *client‑hello* fragment in the first packet.  
- The server validates the ticket, derives \(K\), and immediately accepts application data.

This preserves confidentiality because the derived key is still fresh; only the handshake’s *authentication* step is shortcut.

**Non‑obvious insight**

0‑RTT does **not** mean “no encryption at all.” The first packet is encrypted with a key derived from the ticket, so even if an attacker replays the packet, it can’t learn new secrets. The only real risk is *replay* of application data, which protocols mitigate by using per‑session nonces or sequence numbers. Thus 0‑RTT is a clever exploitation of **key continuity** rather than a shortcut to encryption itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
