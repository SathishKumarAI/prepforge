---
qid: ing_6be644d080__faang__local
question: 'Explain: Layer 4: Transport — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:27-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Transport layer (Layer 4)* of the OSI model and how it fits into a system‑design context—e.g., building a scalable networked service. Clarify that we’ll focus on TCP/UDP, reliability, flow control, and the role in end‑to‑end communication.

**Approach**  
1. Define Layer 4 responsibilities.  
2. Compare TCP vs UDP primitives.  
3. Map these to system‑design patterns (e.g., stateless HTTP over TCP).  
4. Discuss performance knobs (window size, congestion control).  
5. Touch on security (TLS termination).

**Depth**  
- **Transport layer** sits between Session (Layer 5) and Network (Layer 3), providing *end‑to‑end* segmentation, sequencing, error detection, flow & congestion control.  
- **TCP** guarantees ordered, reliable byte streams via ACKs, retransmissions, 3‑way handshake, and window scaling; complexity ≈ O(1) per packet but latency grows with RTT + retransmit delays.  
- **UDP** is connectionless, no sequencing or retransmission—ideal for real‑time audio/video or microservices where speed > reliability.  
- In system design, we expose a *logical* port (e.g., HTTP on 80/443) that sits on TCP; the application layer abstracts sockets into request/response APIs.  
- TLS/TLS‑termination at load balancers offloads cryptographic work from services, preserving Layer 4 throughput.

**Edge Cases**  
- High packet loss → TCP throughput falls to ~1/(RTT·√p).  
- Large window scaling needed for high‑bandwidth WANs; misconfigured windows cause head‑of‑line blocking.  
- UDP misuse can lead to DoS via spoofed packets—requires rate limiting.

**Optimize & Communicate**  
- Use *TCP keepalive* and *window scaling* to maintain connections efficiently in microservice meshes.  
- Prefer *UDP + application‑level ACKs* for latency‑critical flows (e.g., gaming).  
- Narrate: “Layer 4 is the reliability engine; we choose TCP when correctness matters, UDP when speed does.”  

This concise, structured explanation aligns with FAANG interview expectations—clear framing, technical depth, edge‑case awareness, and actionable design guidance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
