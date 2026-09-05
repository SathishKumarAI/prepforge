---
qid: ing_3a3f80e9a6__fp__local
question: 'Explain: HTTP/2 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 403
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:08:36-05:00'
sources: []
---

**Why HTTP 2 is a “system‑design” choice**

At its core HTTP is a *request/response* protocol that maps application data onto the unreliable transport of TCP/IP.  
The classical HTTP/1.x design was built on the idea that one request at a time per connection is simple and stateless.  However, in practice it forced two fundamental inefficiencies:

| Problem | Consequence |
|---------|-------------|
| **Head‑of‑Line blocking** – a slow response stalls all others | Poor latency for pages with many assets |
| **Connection limits (≈6)** – browsers open many sockets to parallelise downloads | Network congestion, higher TLS handshakes |

HTTP 2 re‑solves this by treating the *stream* as the unit of concurrency:

1. **Multiplexing** – multiple independent streams share a single TCP connection; each stream carries its own priority and flow control.
2. **Header compression (HPACK)** – reduces per‑message overhead, turning repetitive headers into small tokens.
3. **Server push** – pre‑emptively sending resources the client will need.

These features stem from *information‑theoretic* principles: compressing redundancy (entropy reduction) and decoupling logical traffic from physical links (maximising bandwidth utilisation).  

A non‑obvious insight is that HTTP 2’s design is **agnostic to TLS**.  It can run over plain TCP, but browsers now require HTTPS because the multiplexed streams would otherwise be vulnerable to eavesdropping and injection attacks. Thus, while the protocol itself does not mandate encryption, system designers must enforce it for security—making HTTPS a de‑facto requirement rather than an optional layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
