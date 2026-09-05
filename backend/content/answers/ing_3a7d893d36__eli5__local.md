---
qid: ing_3a7d893d36__eli5__local
question: 'Explain: 0-RTT — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 266
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:58-05:00'
sources: []
---

Imagine you’re ordering coffee at a café that has a secret shortcut: if you’ve already been there, you can start the order before the barista even says “What will it be?” In networking, that shortcut is called **0‑RTT (zero round‑trip time)**.  

When a browser first visits an HTTPS site, it goes through a handshake—like handing over a ticket and waiting for the barista to confirm you’re allowed in. That handshake takes one round‑trip: the browser sends a request, the server replies, then they exchange keys so future traffic can be encrypted.  

With 0‑RTT, the browser remembers that key from its first visit and reuses it immediately on a new connection. It can send data right away, without waiting for the server’s reply. The trade‑off is that if the server has changed or an attacker tampers with the initial handshake, the early data might be replayed or misdirected—just as someone could intercept your shortcut coffee order and change it before you realize.  

So 0‑RTT speeds up repeated visits, but requires careful checks to keep the shortcut safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
