---
qid: ing_cca0aa8509__faang__local
question: 'Explain: Choosing Between TCP, UDP, and QUIC — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 648
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:08-05:00'
sources: []
---

**Clarify**  
You’re asked to decide whether a ML‑inference service should use **TCP**, **UDP**, or **QUIC** for its transport layer.  
Assumptions I’d confirm:  

1. Is the traffic latency‑sensitive (e.g., real‑time inference) or throughput‑heavy?  
2. Do we need ordered, reliable delivery of every packet?  
3. What is the network environment (Wi‑Fi, cellular, data center)?  
4. Are we allowed to run a full TLS handshake on each request?

---

**Approach**  
1. List trade‑offs for each protocol.  
2. Map those to ML inference needs (latency vs reliability).  
3. Pick the best fit and justify.

---

**Depth**

| Protocol | Reliability | Ordering | Congestion Control | Overhead | Typical ML use |
|----------|-------------|----------|--------------------|----------|----------------|
| **TCP**  | Guaranteed delivery, retransmission | Yes | Aggressive (Reno/Cubic) | Connection‑establish (3‑way handshake), TLS per request | Batch inference over data center links; heavy workloads |
| **UDP**  | No guarantees | No | None (no flow control) | Minimal header, no handshakes | Streaming inference or loss‑tolerant models (e.g., edge devices) |
| **QUIC** | Reliable & ordered (over UDP), built‑in congestion control | Yes | QUIC’s own algorithm (similar to TCP but per‑connection, multiplexed streams) | TLS handshake in first packet, header compression | Low‑latency inference on mobile/edge; when we need TLS + speed |

- **Latency**: UDP ≈ 0.1 ms overhead; QUIC ≈ 2–3 ms (TLS+header compress). TCP ≈ 5–10 ms due to handshake & congestion control.
- **Reliability**: If every inference must succeed, use TCP or QUIC.  
- **Loss tolerance**: If the model can accept occasional missing frames (e.g., video analytics), UDP is fine.

---

**Edge Cases**

1. **Packet loss in Wi‑Fi** → UDP fails; QUIC’s retransmission mitigates it.  
2. **High throughput batch jobs** → TCP’s congestion control prevents overload.  
3. **Strict TLS requirement on mobile** → QUIC eliminates separate TLS handshake, reducing jitter.

---

**Optimize & Communicate**

- For **real‑time inference on edge devices**, recommend **QUIC**: low latency, built‑in TLS, multiplexed streams to handle multiple concurrent requests.
- For **batch inference in data centers**, stick with **TCP**: proven congestion control and lower per‑packet overhead when many packets are sent.
- If the model can tolerate loss (e.g., streaming video classification), **UDP** keeps jitter minimal.

Explain this trade‑off hierarchy to interviewers, showing you weigh latency, reliability, security, and environment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
