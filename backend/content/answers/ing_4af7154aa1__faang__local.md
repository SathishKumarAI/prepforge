---
qid: ing_4af7154aa1__faang__local
question: 'Explain: DNS — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 545
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:38:53-05:00'
sources: []
---

**DNS – TCP vs UDP (System‑Design View)**  

| | UDP | TCP |
|---|-----|-----|
| **Transport** | Connectionless, no flow control | Reliable, ordered stream |
| **Typical use** | Standard DNS queries (<512 B) | Zone transfers, large responses, EDNS0 |
| **Latency** | One‑round trip (no handshakes) | Two‑round trips + retransmissions |
| **Reliability** | No guarantee – packets may drop/duplicate | Guarantees delivery, sequence numbers |
| **Security** | Susceptible to spoofing; mitigated by DNSSEC & TSIG | Same as UDP but less common for queries |
| **Scalability** | Low overhead → high query throughput | Higher overhead → fewer concurrent sessions |

### Design Considerations
1. **Assumptions to confirm**
   - Typical response size (<512 B) vs large zone transfers.
   - Network reliability (ISP, ISP‑internal).
   - Need for confidentiality or integrity.

2. **Approach**
   - Use UDP for ordinary lookups; fallback to TCP if truncated (`TC` flag) or EDNS0 > 512 B.
   - Implement retry logic: 3 attempts over UDP → one over TCP.
   - Cache responses and use `AXFR/IXFR` via TCP for zone sync.

3. **Depth**
   - UDP query → DNS server checks cache, replies; if response >512 B or flagged truncated, client sends TCP request.
   - TCP handshake (SYN‑ACK‑SYN) adds ~1 RTT; thus 2–3× slower but guarantees data integrity.
   - Use `EDNS0` to extend UDP payload while still avoiding TCP for most traffic.

4. **Edge Cases**
   - Packet loss on UDP → missing answers → fallback to TCP.
   - Malicious flooding (UDP amplification) → rate‑limit per client IP.
   - DNSSEC validation may require additional data; use TCP if signatures exceed UDP limit.

5. **Optimization & Communication**
   - Adopt “truncated‑then‑TCP” pattern for efficiency.
   - Leverage connection pooling for frequent queries to the same authoritative server.
   - Document fallback logic clearly in architecture diagrams and code comments so future engineers understand latency trade‑offs.

**Takeaway:** UDP is preferred for speed and scalability; TCP guarantees correctness when size or reliability constraints demand it. Balancing both yields a robust, high‑performance DNS subsystem suitable for any large‑scale service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
