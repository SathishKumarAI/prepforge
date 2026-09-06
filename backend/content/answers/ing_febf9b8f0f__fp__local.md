---
qid: ing_febf9b8f0f__fp__local
question: 'Explain: UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 501
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:30-05:00'
sources: []
---

### UDP vs. TCP – a design‑first view

At the core of any distributed system is *data delivery*: “send X, receive Y”.  
The protocol that sits between two sockets decides **how** this guarantee is achieved.

| Property | TCP | UDP |
|----------|-----|-----|
| **Ordering** | Guarantees in‑order bytes via sequence numbers. | No ordering; packets are independent. |
| **Reliability** | Retransmits lost segments, uses ACKs and timeouts. | Loses packets silently. |
| **Flow control / congestion** | Dynamic window sizing (TCP Reno, Cubic). | No flow control – the sender can overwhelm the network. |
| **Connection state** | Three‑way handshake → half‑open states; keeps connection metadata. | Stateless datagrams; no handshake. |

#### Why the differences arise

1. **Guarantee vs. latency**  
   - *Reliability* is an **optimization problem**: we must minimize expected loss while respecting bandwidth. TCP solves this with a feedback loop (ACKs → retransmissions).  
   - UDP trades that optimization for *zero overhead*: no ACKs, no timers, so the *expected delay* of a single packet is minimal.

2. **State vs. statelessness**  
   - Maintaining per‑connection state lets TCP enforce flow control and congestion avoidance—this is a *resource allocation* problem on shared links.  
   - Stateless UDP reduces memory footprint and simplifies scaling to millions of clients (e.g., DNS, VoIP).

3. **Application semantics**  
   - If the application can tolerate missing data but requires low latency (streaming, gaming), UDP’s *best‑effort* service is preferable.  
   - For transactional or file transfer workloads where every byte matters, TCP’s *guaranteed ordering and delivery* is essential.

#### Non‑obvious insight

Because UDP has no flow control, it can **expose the underlying network’s congestion state** to applications that implement their own pacing (e.g., QUIC). This “application‑level congestion control” lets designers move optimization from protocol stack to application logic, often achieving higher throughput on modern datacenters while still using a simple UDP transport.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
