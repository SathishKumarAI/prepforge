---
qid: ing_6d62838959__faang__local
question: 'Explain: What TCP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 548
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:52-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *what TCP provides* compared to UDP in the context of system design—i.e., why a designer would choose one protocol over the other and what guarantees each offers.

---

### 1️⃣ Approach  
- Identify core TCP guarantees (reliability, ordering, congestion control).  
- Contrast with UDP’s lightweight, unordered delivery.  
- Illustrate typical use‑cases (e.g., video streaming vs file transfer).  
- Discuss impact on system design decisions (buffering, error handling, scalability).

---

### 2️⃣ Depth  

| Feature | TCP | UDP |
|---------|-----|-----|
| **Reliability** | Retransmits lost packets via ACK/NACK; ensures every byte arrives. | No retransmission; packets may be dropped silently. |
| **Ordering** | Sequenced numbers guarantee in‑order delivery. | Out‑of‑order arrival possible. |
| **Flow & Congestion Control** | Slow‑start, congestion avoidance, flow control (windowing). | None – sender pushes at its own rate. |
| **Connection‑oriented** | Three‑way handshake establishes a session; stateful on both ends. | Stateless datagram packets. |
| **Overhead** | More headers, ACKs, state tables → higher latency. | Minimal header (8 bytes) → lower latency. |

**Design Implications**

- *TCP* is ideal for **state‑critical services**: file transfer, database replication, web pages where missing data breaks the client.
- *UDP* suits **real‑time media or telemetry** where occasional packet loss is tolerable and low latency trumps perfect reliability (e.g., VoIP, gaming, live video).

---

### 3️⃣ Edge Cases  

- High packet loss → TCP’s retransmissions cause jitter; may need *TCP variants* (QUIC) or *application‑level forward error correction*.  
- Large data bursts → UDP can overflow buffers; requires careful sizing of socket receive windows.  
- Security: TCP’s handshake is a target for SYN floods; mitigated with SYN cookies.

---

### 4️⃣ Optimize & Communicate  

When presenting, start with the **big picture** (“What problem are we solving?”), then drill into guarantees, trade‑offs, and concrete design choices. Use a short table to surface differences quickly, and finish with a recommendation: “Choose TCP for correctness; choose UDP when latency dominates.” This structure satisfies FAANG interviewers’ emphasis on clarity, depth, and pragmatic reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
