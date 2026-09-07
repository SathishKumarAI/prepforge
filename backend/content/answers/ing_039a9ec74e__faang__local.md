---
qid: ing_039a9ec74e__faang__local
question: 'Explain: The Transport Layer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 564
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:35-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain how the transport layer differs between **TCP** and **UDP**, framing it as a system‑design discussion. I’ll assume the audience is familiar with OSI layers but needs concrete trade‑offs for choosing one protocol over the other in real services (e.g., video streaming vs. DNS).

---

**2️⃣ Approach**  
- List core responsibilities of each protocol.  
- Compare key attributes: reliability, ordering, flow control, congestion control, header size, and overhead.  
- Map those attributes to typical use‑cases.  
- Conclude with a quick decision matrix.

---

**3️⃣ Depth (Core Answer)**  

| Feature | TCP | UDP |
|---------|-----|-----|
| **Connection model** | Stateful, three‑way handshake → ensures both sides are ready. | Stateless; packets sent without prior sync. |
| **Reliability** | Automatic retransmission of lost segments + ACKs. | No retransmission; sender cannot detect loss. |
| **Ordering** | Guarantees in‑order delivery via sequence numbers. | Out‑of‑order packets may arrive; application must reorder if needed. |
| **Flow & Congestion Control** | Sliding window + TCP Reno/Cubic to adapt bandwidth. | None; sends at application rate, risking congestion collapse. |
| **Header size** | 20 bytes (min) → higher overhead per byte. | 8 bytes → lightweight. |
| **Latency** | Extra handshake & retransmissions add delay (~10–30 ms). | Near‑zero latency; ideal for real‑time traffic. |

**Use‑case mapping**

- *Reliable streaming, file transfer, HTTP*: **TCP** – we need correctness over speed.
- *VoIP, live gaming, DNS queries, telemetry*: **UDP** – occasional loss acceptable; low jitter critical.

---

**4️⃣ Edge Cases**  
- **Packet loss in UDP**: must be handled by application (e.g., forward error correction).  
- **TCP slow start in bursty traffic**: may underutilize bandwidth initially.  
- **NAT traversal**: both protocols need port‑forwarding; UDP often simpler due to statelessness.

---

**5️⃣ Optimize & Communicate**  
If I were designing a hybrid service, I’d expose a *dual‑stack* API: use TCP for control channels (e.g., authentication) and UDP for media payloads. I’d narrate this by first outlining the problem space, then walking through the trade‑off table, and finally presenting the decision matrix—exactly the structure interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
