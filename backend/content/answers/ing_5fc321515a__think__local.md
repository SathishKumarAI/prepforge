---
qid: ing_5fc321515a__think__local
question: 'Explain: Choose UDP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 441
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:21:46-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   * Confirm that we’re comparing **UDP** and **TCP** in a system‑design context (e.g., networking services).  
   * Assume the reader knows basic socket APIs but may not grasp performance trade‑offs.

**2️⃣ Adopt a “trade‑off matrix” mental model**  
   - List criteria: reliability, ordering, latency, overhead, flow control, use‑case.  
   - Map each protocol to these axes; think of them as *features* vs *costs*.

**3️⃣ Step‑by‑step reasoning**  
   1. **Reliability & Ordering** – TCP guarantees delivery and in‑order bytes; UDP does not.  
   2. **Latency & Overhead** – TCP’s handshakes, ACKs, congestion control add delay; UDP is lightweight.  
   3. **Use‑case mapping** – real‑time audio/video, gaming, DNS → low latency tolerates loss → UDP.  
   4. **Application‑level protocols** – if you need reliability, wrap UDP (e.g., QUIC) or use TCP directly.  
   5. **Scalability & MTU** – large payloads may fragment in UDP; TCP handles reassembly automatically.

**4️⃣ Avoid common traps**  
   - Don’t assume “UDP is always faster”; context matters (handshake overhead, retransmission).  
   - Don’t ignore that many protocols (e.g., HTTP/2) now use QUIC over UDP.  
   - Remember that OS kernel buffering can hide some TCP latency.

**5️⃣ Sanity‑check & verbalize**  
   *Ask*: “If I need guaranteed ordering and the cost of retransmission is acceptable, pick TCP; if I can tolerate loss for minimal delay, choose UDP.”  
   Conclude by summarizing: use **UDP** when low latency outweighs reliability, otherwise default to **TCP** or a protocol built on top of it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
