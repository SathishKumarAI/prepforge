---
qid: ing_62118a1810__fp__local
question: How do WebSockets work? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 416
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:04-05:00'
sources: []
---

**What are WebSockets?**  
A WebSocket is a *bidirectional, full‑duplex* channel that lives over a single TCP connection. Think of it as an “open pipe” between client and server: once the initial HTTP upgrade handshake succeeds, both sides can push arbitrary payloads at any time without re‑establishing the socket.

**Why are they used?**  
1. **Low latency & throughput:** Traditional HTTP is *request/response*; each round trip requires a new TCP hand‑shake (unless keep‑alive) and a new HTTP header set. A WebSocket keeps the connection alive, eliminating those per‑message costs.  
2. **Stateful communication:** Many applications (chat, gaming, real‑time dashboards) need to *push* data instantly. HTTP forces polling or long‑polling; WebSockets provide true push with minimal overhead.  
3. **Protocol‑agnostic payloads:** Once the handshake is done, the channel can carry binary or text frames, enabling efficient transfer of structured data (e.g., JSON, protobuf).

**Deeper principle – information efficiency:**  
TCP guarantees ordered delivery but offers no notion of “message boundaries.” HTTP adds framing via headers and a body delimiter. WebSocket solves this by defining its own frame format (opcode, length, masking). This eliminates the *header‑bloat* problem: each message carries only 2–14 bytes of protocol overhead regardless of payload size, making high‑frequency updates feasible.

**Non‑obvious insight:**  
The “upgrade” handshake is *not* a security feature; it’s purely an agreement to switch protocols. Because WebSockets reuse the same port (80/443), they bypass many corporate firewalls that allow only HTTP(S). Thus, the protocol’s design choice—leveraging existing infrastructure—has been pivotal for real‑time web applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
