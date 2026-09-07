---
qid: ing_78ef0d6dec__faang__local
question: 'Explain: 1.3 .  Opening Handshake — RFC 6455 - The WebSocket Protocol'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 472
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the “Opening Handshake” in **RFC 6455 (WebSocket protocol)**—the initial HTTP‑style exchange that upgrades a plain TCP connection to a bidirectional WebSocket. I’ll assume they’re interested in the request/response fields, security checks, and how the upgrade is negotiated.

**Approach**  
1. Outline the handshake’s purpose and flow.  
2. Enumerate the key headers on client → server (Upgrade, Connection, Sec‑WebSocket-Key).  
3. Show how the server validates and responds (Sec‑WebSocket-Accept).  
4. Touch on protocol versioning and security.

**Depth**  
The client initiates an HTTP/1.1 `GET` request with:
- `Upgrade: websocket`
- `Connection: Upgrade`
- `Sec-WebSocket-Key`: a 16‑byte random value base64‑encoded
- Optional `Sec-WebSocket-Protocol`, `Sec-WebSocket-Version`.

The server validates the key, appends “258EAFA5-E914-47DA-95CA-C5AB0DC85B11”, SHA‑1 hashes it, then base64 encodes the result to form `Sec-WebSocket-Accept`. A 101 Switching Protocols response with matching headers signals success. If any header is missing or malformed, the server must close the connection. The handshake also negotiates subprotocols and extensions.

**Edge Cases**  
- Missing/incorrect `Upgrade` or `Connection` headers → reject.  
- Invalid `Sec-WebSocket-Key` length → reject.  
- Unsupported `Sec-WebSocket-Version` → send 426 Upgrade Required.  
- Malformed request line or HTTP/2 usage → close without response.

**Optimize & Communicate**  
Explain that the handshake is lightweight (O(1) time, O(1) memory) and stateless beyond the key hash; it’s designed for high throughput. Clarify that once established, framing overhead is minimal (just 2‑byte headers per message). Conclude by noting how this design keeps WebSocket compatible with existing HTTP infrastructure while enabling full duplex communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
