---
qid: ing_aea78e89b7__faang__local
question: 'Explain: Choose QUIC or HTTP/3 When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 637
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:43-05:00'
sources: []
---

**Clarify**

The interview asks *“When should you choose QUIC (over HTTP/3) versus plain HTTP over TCP?”*  
Assumptions to confirm:  

- Traffic is web‑browser or API‑driven, latency‑sensitive.  
- The network path may be lossy or high‑RTT.  
- You control both client and server stacks.

**Approach**

1. Evaluate the transport protocol’s strengths (TCP vs UDP).  
2. Map those to use‑case requirements: connection establishment, congestion control, security, multiplexing, middle‑box compatibility.  
3. Decide per scenario: low‑latency real‑time traffic → QUIC; legacy or highly controlled environments → HTTP/1.1 over TCP.

**Depth**

| Feature | TCP (HTTP/1.1/2) | QUIC (HTTP/3) |
|---------|------------------|---------------|
| **Handshake** | 1 RTT TLS + 1 RTT HTTP | 0‑RTT/1 RTT TLS (0‑RTT if session resumption) |
| **Head‑of‑Line blocking** | Blocked per connection | Multiplexed streams, no HOL blocking |
| **Congestion control** | TCP’s algorithm (CUBIC, BBR) | QUIC implements same but can be tuned per stream |
| **Security** | TLS 1.3 in separate handshake | TLS 1.3 integrated; key material reused across connections |
| **Middle‑box friendliness** | Widely supported, NAT/Firewall friendly | UDP may be blocked or rate‑limited on some networks |
| **Server load** | One socket per connection | Single UDP port, fewer sockets, easier scaling |

*Use QUIC when*:  
- You need sub‑second latency (e.g., video streaming, gaming).  
- The network is lossy or mobile; 0‑RTT reduces recovery time.  
- You can tolerate UDP being less mature in firewalls.

*Stick to TCP when*:  
- Compatibility with legacy infrastructure is critical.  
- Regulatory environments mandate strict control over UDP traffic.  

**Edge Cases**

- **Strict firewall policies**: QUIC may be dropped → fallback to HTTP/1.1.  
- **High packet loss but low RTT**: QUIC’s aggressive congestion control can backfire; consider TCP with BBR.  
- **Server capacity limits**: QUIC reduces per‑connection state, but UDP sockets need careful scaling.

**Optimize & Communicate**

Explain that the decision hinges on *latency vs compatibility*. Highlight that QUIC’s 0‑RTT handshake and multiplexing give a measurable win for interactive apps, while TCP remains safer in controlled or legacy networks. Emphasize that a hybrid approach—trying QUIC first, then falling back to HTTP/1.1—is often the most robust strategy. This structured reasoning demonstrates clear problem framing, technical depth, and practical trade‑offs expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
