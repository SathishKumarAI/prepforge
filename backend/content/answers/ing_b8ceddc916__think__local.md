---
qid: ing_b8ceddc916__think__local
question: Why are WebSockets used? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 429
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:09:30-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
- Identify that “WebSocket” refers to the protocol defined in RFC 6455, not just a library.  
- Assume the audience knows basic HTTP but may not know real‑time web tech.  
- Focus on *why* developers choose WebSockets over alternatives (HTTP polling, Server‑Sent Events).

**2. Adopt a mental model**  
Use the “request–response vs. duplex communication” framework:  
- **HTTP** = stateless, one‑way request/response.  
- **WebSocket** = stateful, bidirectional, low‑overhead tunnel.

**3. Step‑by‑step reasoning**  
1. Explain the handshake: HTTP upgrade → persistent TCP socket.  
2. Highlight the benefits that stem from that handshaking:  
   - *Low latency*: data flows immediately after connection is open.  
   - *Reduced overhead*: no repeated HTTP headers or TLS renegotiation per message.  
   - *Bidirectionality*: server can push updates without client polls.  
3. Compare to polling & SSE: show how WebSockets eliminate the “poll‑and‑wait” pattern and avoid the 2‑way restriction of SSE.  
4. Mention real‑world use cases (chat, gaming, live dashboards) that demand frequent small messages.

**4. Common traps to avoid**  
- Don’t conflate WebSocket with just any long‑lived connection; emphasize the protocol’s specific framing and control frames.  
- Avoid claiming “WebSockets are always better”; note scenarios where HTTP/2 multiplexing or SSE may suffice.  

**5. Sanity‑check & communicate**  
- Re‑state the core advantage: persistent, low‑latency, bidirectional channel after a single handshake.  
- Use an analogy (e.g., “like switching from mail to a phone line”) to make the concept concrete.  
- End with a concise summary that ties benefits back to developer needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
