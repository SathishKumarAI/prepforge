---
qid: ing_78ef0d6dec__eli5__local
question: 'Explain: 1.3 .  Opening Handshake — RFC 6455 - The WebSocket Protocol'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 293
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:22-05:00'
sources: []
---

**Opening Handshake – the first “hello” of a WebSocket**

Imagine you’re at a party and want to talk with someone who speaks a different language. First, you both say “hi,” then exchange a secret code word that proves you’re allowed to chat. That’s what the *opening handshake* (RFC 6455) does for a WebSocket connection.

1. **Client says “hello”** – The browser sends an HTTP request with a special header `Upgrade: websocket`.  
2. **Server replies “yes, we can talk”** – It answers with `HTTP/1.1 101 Switching Protocols` and the same `Upgrade: websocket` header.  
3. **Secret word check** – The client also sends a random string (`Sec-WebSocket-Key`). The server takes that string, appends a fixed “magic” suffix, hashes it, and returns it in `Sec-WebSocket-Accept`. If the browser sees the expected hash, it knows the server really supports WebSockets.  
4. **Handshake complete** – From now on, both sides drop HTTP and start sending frames directly over the same TCP connection.

The handshake is like a polite, secure “welcome” that switches the conversation from ordinary web traffic to a fast, two‑way chat channel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
