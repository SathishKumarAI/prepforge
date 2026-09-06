---
qid: ing_be330e40fb__fp__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 360
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:03-05:00'
sources: []
---

When you hit **Enter**, your browser must establish a *reliable, ordered* channel with the web server before any HTTP request can travel.  
The only transport protocol that guarantees this is TCP, and it solves the fundamental problem: “how do two hosts agree on a clean start, synchronize sequence numbers, and ensure no data is lost or duplicated?”  

1. **SYN** – Your client sends a segment with the *Synchronize* flag set and a random initial sequence number (ISN).  
2. **SYN‑ACK** – The server replies acknowledging your ISN+1 and supplies its own ISN.  
3. **ACK** – Your client acknowledges the server’s ISN+1.

This three‑step exchange is essentially a *handshake protocol* that performs mutual authentication of sequence space, protects against replay attacks (by random ISNs), and reserves bandwidth for data flow. It embodies the principle of *stateful agreement*: each side must commit to a shared state before exchanging payloads.  

**Non‑obvious insight:** The handshake’s *three‑way* nature is not about speed but safety. A single‑step “SYN‑ACK” would leave the server vulnerable to SYN flooding—an attacker could send countless half‑open connections, exhausting server resources before any ACK arrives. By requiring a final ACK from the client, the server ensures that only legitimate, responsive hosts consume its connection slots.

Once the handshake succeeds, the browser issues an HTTP GET over this TCP socket; the data then flows reliably, ordered, and error‑checked until the session ends.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
