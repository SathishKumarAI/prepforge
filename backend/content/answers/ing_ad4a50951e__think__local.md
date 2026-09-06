---
qid: ing_ad4a50951e__think__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 436
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:25:22-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Understand that the audience is familiar with web tech but not necessarily deep into networking.  
- Assume they know HTTP basics and are curious about real‑time communication patterns.

**2️⃣ Adopt a layered mental model**  
- **Transport layer**: TCP sockets → WebSocket protocol sits on top of this.  
- **Application layer**: HTTP handshake → upgrade to WebSocket → persistent bi‑directional channel.  
- **Use‑case layer**: real‑time updates, low latency, reduced overhead.

**3️⃣ Step‑by‑step reasoning**  

1. *What is a WebSocket?* – A protocol that upgrades an HTTP connection to a full‑duplex TCP stream.  
2. *Why the upgrade?* – Keeps initial compatibility with web servers and firewalls while gaining persistent connectivity.  
3. *How does it work?* – Client sends `Upgrade: websocket` header → server responds with 101 Switching Protocols → both sides send frames (text/binary).  
4. *Benefits over polling/long‑polling* – One connection, no repeated handshakes, lower latency, lower bandwidth, event‑driven communication.  

**4️⃣ Common traps to avoid**  

- Confusing “WebSocket” with the low‑level TCP socket; emphasize the upgrade handshake.  
- Overlooking security: remember `wss://` (TLS) is required for production.  
- Assuming WebSockets replace all HTTP traffic—clarify they coexist.

**5️⃣ Sanity‑check & verbalize**  

- Ask yourself: *Does this answer explain both “what” and “why” clearly?*  
- Rephrase in a sentence: “WebSockets are a protocol that turns an HTTP request into a persistent, bi‑directional TCP connection, letting browsers send and receive real‑time data with minimal overhead.”  
- Confirm the explanation covers transport mechanics, upgrade process, and key advantages (low latency, efficient bandwidth).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
