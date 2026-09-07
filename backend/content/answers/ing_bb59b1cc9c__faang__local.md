---
qid: ing_bb59b1cc9c__faang__local
question: 'Explain: Timeouts and Retries — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 477
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:32-05:00'
sources: []
---

**Clarify**  
You’re asking how time‑outs & retries differ for reliable *TCP* versus unreliable *UDP*, and what that implies when designing a system that must balance speed, reliability, and scalability. I’ll assume we need to support large data streams (e.g., video or telemetry) where latency matters.

**Approach**  
1. Contrast the transport semantics.  
2. Map each to timeout/retry patterns.  
3. Show a high‑level design that uses both protocols for different layers.  
4. Highlight complexity and trade‑offs.

**Depth**  
| Layer | Protocol | Timeout/Retry Behavior | Complexity |
|-------|----------|------------------------|------------|
| Transport | **TCP** | Built‑in retransmission, congestion control; application only sees `RST` or `FIN`. Retries happen automatically; timeouts are adaptive (RTO). | Low at app level; high in kernel stack. |
| Transport | **UDP** | Stateless; no built‑in retry. App must implement ACKs and timers. Exponential backoff, max attempts, sequence numbers. | Higher logic burden but lower overhead per packet. |

In a system design, use TCP for control planes (e.g., configuration, handshakes) where ordering matters. Use UDP with custom reliability (Selective Acknowledgement + retry) for bulk data or real‑time streams, optionally layering application‑level *forward error correction* to reduce retries.

**Edge Cases**  
- Congestion collapse if UDP retries are aggressive.  
- Packet reordering may break simple ACK schemes.  
- Firewalls blocking non‑standard ports can drop UDP traffic.

**Optimize & Communicate**  
1. **Adaptive Retries:** Backoff based on RTT and packet loss.  
2. **Hybrid Approach:** Fallback to TCP when UDP reliability thresholds are exceeded.  
3. **Monitoring:** Expose per‑protocol metrics (RTO, retransmit count).  

Narratively: “We’ll leverage TCP’s robust congestion control for critical signaling while building a lightweight, application‑level retry mechanism over UDP for high‑throughput streams, ensuring we keep latency low yet fall back to reliability when packet loss spikes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
