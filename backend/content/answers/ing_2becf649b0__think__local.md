---
qid: ing_2becf649b0__think__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 589
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:34:27-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *Audience*: Engineers familiar with networking but new to QUIC/HTTP‑3.  
   - *Goal*: Explain why HTTP‑3 moves from TCP to UDP, and how QUIC handles congestion control, multiplexing, security, and connection migration.  
   - *Assumptions*: You know basic TCP concepts (handshake, flow‑control) and that HTTP/2 introduced stream‑level multiplexing over a single TCP connection.

**2️⃣ Adopt a mental model: “Layered protocol stack + performance constraints”**  
   - Map each layer (Transport, Application) to its responsibilities.  
   - Contrast *TCP’s* “one‑to‑one reliable stream” with QUIC’s “multiplexed streams over UDP”.  
   - Use the “latency vs throughput” trade‑off diagram as a visual aid.

**3️⃣ Step‑by‑step reasoning**  
   1. **Why UDP?** – TCP’s head‑of‑line blocking and slow start make it ill‑suited for low‑latency web traffic.  
   2. **What QUIC adds** – TLS‑1.3 handshake in the same packet, built‑in congestion control, stream prioritization, and zero‑round‑trip (0‑RTT) resumption.  
   3. **Connection migration** – QUIC uses connection IDs so the transport can switch IP addresses without tearing down the session.  
   4. **HTTP/3 over QUIC** – HTTP request/response framing stays the same, but now runs on top of QUIC’s stream layer, inheriting all its performance benefits.

**4️⃣ Common traps to avoid**  
   - *Mixing up “TCP vs UDP” with “HTTP‑2 vs HTTP‑3”*: emphasize that the change is at the transport layer, not the application layer.  
   - *Assuming QUIC is “just UDP + TLS”*: highlight its own congestion‑control algorithm and stream multiplexing logic.  
   - *Underestimating deployment hurdles*: mention firewall/ACL issues with UDP and the need for IETF standardization.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “If a user’s network drops, will their HTTP session survive?” → QUIC + connection IDs answer yes.  
   - Check latency: 0‑RTT handshake reduces round trips from 2 (TCP) to 1 (QUIC).  
   - Communicate clearly: start with the pain point (head‑of‑line blocking), then show how each QUIC feature solves it, finishing with a comparison table of TCP vs QUIC attributes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
