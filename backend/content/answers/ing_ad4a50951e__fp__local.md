---
qid: ing_ad4a50951e__fp__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 370
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:13:05-05:00'
sources: []
---

**WebSockets** solve the fundamental problem of *low‑latency, bidirectional communication* over a single TCP connection in the web stack.

1. **The problem**  
   HTTP is request/response: a client must initiate every message and the server can only reply once. For real‑time apps (chat, gaming, trading) this incurs per‑message round trips, header overhead, and server‑side keep‑alive complexity.

2. **The solution**  
   WebSockets upgrade an existing HTTP handshake to a persistent TCP channel. After the initial 1 KB HTTP exchange, both sides send framed frames with only a few bytes of protocol metadata, so subsequent messages are *streamed* in near real time.

3. **Why it works**  
   • **Optimization** – Eliminates per‑request headers and TCP handshakes (O(1) per message).  
   • **Information theory** – Treats the channel as a continuous stream of bits, allowing adaptive compression/encoding.  
   • **Geometry** – The connection can be viewed as a 2‑way edge in a graph; WebSockets keep that edge open, avoiding repeated re‑construction.

4. **Non‑obvious insight**  
   WebSockets are *not* just “persistent HTTP.” Their framing allows the server to send unsolicited data without violating HTTP/1.x semantics, enabling true publish–subscribe patterns on the web with minimal infrastructure. This subtle decoupling of transport and application logic is why many modern real‑time services layer their logic over raw sockets rather than relying solely on higher‑level protocols like WebRTC or SSE.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
