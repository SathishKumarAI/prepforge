---
qid: ing_78ef0d6dec__fp__local
question: 'Explain: 1.3 .  Opening Handshake — RFC 6455 - The WebSocket Protocol'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 490
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:57-05:00'
sources: []
---

### 1.3 Opening Handshake – RFC 6455 (The WebSocket Protocol)

The handshake is the protocol’s *bridge* between a stateless HTTP request and a persistent, bidirectional socket.  
**Why it must exist**: HTTP/1.1 cannot carry an open channel; every request ends with a response. A “handshake” upgrades the connection to a full‑duplex stream while preserving compatibility with existing infrastructure (proxies, firewalls).

#### The mechanics
| Step | What happens | Why |
|------|--------------|-----|
| **Client → Server** | `GET /chat HTTP/1.1` plus `Upgrade: websocket`, `Connection: Upgrade`, and a random `Sec-WebSocket-Key`. | Signals intent to upgrade; the key is 16 bytes base64‑encoded, ensuring uniqueness per connection. |
| **Server → Client** | Mirrors headers, adds `Sec-WebSocket-Accept = base64( SHA1(key + GUID) )`. | The GUID (`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`) is a *constant* defined by the spec; its purpose is to prove that the server processed the key. The 20‑byte SHA‑1 digest, base64‑encoded, guarantees a one‑to‑one mapping between client key and server accept value, preventing man‑in‑the‑middle upgrades. |
| **Result** | Both sides now have a clean TCP socket ready for WebSocket frames. | HTTP headers are consumed; the underlying transport is unchanged, so intermediaries that only inspect HTTP can still forward traffic. |

#### Deeper principle
The handshake is an *authentication by challenge* (cryptographic nonce). It ensures that only a server aware of the RFC’s GUID can respond correctly, thereby preventing accidental or malicious upgrades to arbitrary protocols.

#### Non‑obvious insight
The server does **not** need to store any state about the key; it computes the accept value on the fly. This statelessness is critical for scalability: load balancers and reverse proxies can forward connections without maintaining per‑client context, which is why WebSockets work seamlessly behind traditional HTTP infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
