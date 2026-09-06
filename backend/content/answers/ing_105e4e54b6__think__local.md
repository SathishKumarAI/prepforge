---
qid: ing_105e4e54b6__think__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 482
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:46:49-05:00'
sources: []
---

**1️⃣ Clarify the question & state assumptions**  
   - Identify that the user wants a conceptual comparison of UDP and TCP in the context of system design (e.g., networking primitives).  
   - Assume they have basic networking knowledge but may not know low‑level details.

**2️⃣ Adopt a “protocol‑vs‑transport” mental model**  
   - Treat each protocol as a *layer* above IP: UDP = “simple datagram service”; TCP = “reliable, ordered stream”.  
   - Map features to system‑design concerns: latency, throughput, reliability, ordering, flow control, congestion control.

**3️⃣ Reason step‑by‑step through key attributes**  
   1. **Connection model** – UDP is connectionless; TCP establishes a three‑way handshake.  
   2. **Reliability mechanisms** – TCP uses ACKs, retransmissions, sequence numbers; UDP has none (application must handle it).  
   3. **Ordering & flow control** – TCP guarantees order and provides windowing; UDP packets may arrive out of order or be lost.  
   4. **Overhead & performance** – UDP header is smaller → lower latency, higher throughput; TCP overhead adds reliability cost.  
   5. **Use‑case mapping** – real‑time streaming, gaming → UDP; file transfer, web browsing → TCP.

**4️⃣ Avoid common traps**  
   - Don’t conflate “connectionless” with “unreliable”; UDP can be used reliably if the app implements it.  
   - Remember that TCP’s congestion control is adaptive to network conditions—important for design trade‑offs.  
   - Do not assume UDP is always faster; packet loss may require retransmission at higher layers, negating gains.

**5️⃣ Sanity‑check & articulate clearly**  
   - Cross‑reference each point with a real‑world example (e.g., VoIP uses UDP).  
   - Summarize the trade‑offs in one sentence: “UDP trades reliability for lower latency; TCP trades latency for guaranteed delivery.”  
   - Present this as a concise, bullet‑point comparison that can be reused for similar system‑design questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
