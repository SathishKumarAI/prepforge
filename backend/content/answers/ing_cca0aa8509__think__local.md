---
qid: ing_cca0aa8509__think__local
question: 'Explain: Choosing Between TCP, UDP, and QUIC — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 449
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:28:55-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   * What problem are we solving? (e.g., low‑latency streaming vs reliable bulk transfer)  
   * Assume a typical network stack: IP layer exists; application has control over transport selection; latency, throughput, packet loss tolerance vary by use case.  

**2️⃣ Adopt the “Transport trade‑off” mental model**  
   * Reliability ↔ Latency ↔ Complexity.  
   * Map TCP → full reliability & congestion control, UDP → minimal overhead, QUIC → modern blend (TLS + multiplexing).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Latency‑critical** → prefer UDP or QUIC (no slow start, zero‑RTT handshake).  
   2. **Data integrity & ordering needed** → TCP or QUIC’s built‑in sequencing.  
   3. **Multiplexing many streams** → QUIC outperforms TCP (head‑of‑line blocking).  
   4. **Firewall/NAT traversal** → UDP/QUIC often easier than raw TCP.  
   5. **Security requirement** → QUIC (built‑in TLS); otherwise consider TLS over TCP or DTLS over UDP.  

**4️⃣ Common pitfalls to avoid**  
   * Assuming “UDP is always faster” – neglects packet loss handling.  
   * Forgetting that QUIC runs over UDP, so you still need UDP support in the network.  
   * Over‑engineering: adding reliability layers on top of UDP when TCP suffices.  

**5️⃣ Sanity‑check & verbalize**  
   * Re‑state the trade‑off summary aloud: “If I need zero latency and can handle loss, pick QUIC; if I need guaranteed delivery with minimal code, stick to TCP.”  
   * Double‑check that firewall/NAT rules align with chosen transport.  

This structured approach lets you systematically evaluate TCP, UDP, and QUIC for any system design scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
