---
qid: ing_be330e40fb__think__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 474
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:31:25-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Confirm that the user wants an explanation of *how* a browser reaches a web server after typing a URL, focusing on the TCP three‑way handshake.  
- Assume they’re familiar with HTTP basics but not the low‑level transport mechanics.  
- Keep the answer concise yet complete—no deep OS internals unless requested.

**2️⃣ Choose a mental model**  
- Think of the browser as a *client* and the web server as a *server*.  
- Visualize the network as a “telephone line” that must first be *established* before any data can travel.  
- Use the classic “handshake” analogy: “call → answer → confirm”.

**3️⃣ Step‑by‑step reasoning**  
1. **URL parsing** – Browser extracts protocol (http/https), host, port, path.  
2. **DNS lookup** – Resolve hostname to an IP address.  
3. **TCP SYN** – Client sends a segment with the SYN flag set to request connection.  
4. **Server SYN‑ACK** – Server acknowledges receipt and replies with its own SYN + ACK.  
5. **Client ACK** – Browser confirms, sending final ACK. Connection is now *established*.  
6. **HTTP request/response** – Browser sends an HTTP GET over this TCP stream; server replies with the page.  
7. **Connection teardown (optional)** – After data transfer, FIN/ACK exchange closes the socket.

**4️⃣ Common traps to avoid**  
- Mixing up the roles of SYN/SYN‑ACK/ACK—remember only the client starts with SYN.  
- Forgetting that DNS is separate from TCP; it happens *before* the handshake.  
- Assuming HTTPS adds a new handshake; in reality, TLS occurs on top of the established TCP.

**5️⃣ Sanity‑check & communicate**  
- Re‑state the sequence in one sentence: “Client → SYN → Server → SYN‑ACK → Client → ACK.”  
- Verify that each flag’s purpose is clear (SYN initiates, ACK confirms).  
- End with a brief note on why this handshake matters for reliability and flow control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
