---
qid: ing_cbe43a5b24__faang__local
question: 'Explain: Security — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 508
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:20-05:00'
sources: []
---

**Clarify**  
You’re asking how a system designer chooses between **TCP** and **UDP** when building a security‑related service (e.g., authentication, intrusion detection). Key assumptions: we need to protect data integrity, confidentiality, and availability; latency constraints vary; the threat model includes spoofing, replay, and denial‑of‑service attacks.

**Approach**  
1. List requirements (reliable delivery, ordering, low jitter, security guarantees).  
2. Map each requirement to TCP/UDP capabilities.  
3. Evaluate trade‑offs in the context of security protocols (TLS, DTLS, IPsec).

**Depth**  
- **TCP**: built‑in congestion control, retransmission, ordered stream → protects against packet loss and reordering. Supports TLS for encryption/authentication; its three‑way handshake can be a target for SYN floods, mitigated with SYN cookies or rate limiting.  
- **UDP**: stateless, minimal overhead, no retransmission → lower latency but vulnerable to spoofing/replay. Security is added via DTLS (TLS over UDP) or by running IPsec; however, you must implement sequence numbers and anti‑replay yourself if not using DTLS.  
- **IPsec**: can protect either transport mode (TCP/UDP) or tunnel mode; it encrypts the payload regardless of protocol but adds processing overhead.

Complexity: TCP O(1) per packet; UDP O(1) but requires custom security layer. Trade‑off: higher reliability vs lower latency.

**Edge Cases**  
- High loss networks → UDP may drop packets, breaking authentication flows.  
- Attackers spoof UDP ports → need strict port filtering or use DTLS with certificate validation.  
- SYN flood on TCP → require mitigation layers (firewalls, rate limiting).  

**Optimize & Communicate**  
Recommend **TCP + TLS** for most security services where reliability is paramount; fallback to **UDP + DTLS** when latency is critical and loss can be tolerated or compensated by application logic. Explain that IPsec can be layered on top if end‑to‑end encryption is required across heterogeneous networks. Summarize: choose the protocol that best aligns with the service’s SLAs while applying appropriate security hardening at each layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
