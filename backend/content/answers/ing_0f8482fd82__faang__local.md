---
qid: ing_0f8482fd82__faang__local
question: 'Explain: HTTP Versions — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 494
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:19:33-05:00'
sources: []
---

## Clarify  
We need to explain the differences between **HTTP** and **HTTPS**, why HTTPS is preferred, and how these protocols fit into a system‑design context (e.g., service endpoints, load balancers, API gateways).  
Assumptions:  
- Audience knows basic networking concepts.  
- Focus on practical design trade‑offs rather than low‑level TLS internals.

## Approach  
1. Contrast protocol layers (HTTP vs HTTPS).  
2. Highlight security implications for services and clients.  
3. Show how to architect a system that exposes both protocols.  

## Depth  

| Layer | HTTP | HTTPS |
|-------|------|-------|
| Transport | Plain TCP, port 80 | TLS over TCP, port 443 |
| Security | No encryption; susceptible to eavesdropping & MITM | End‑to‑end encryption + server authentication via X.509 certs |
| Performance | One handshake per request | TLS handshake (handshake+record layer) → mitigated with session resumption or HTTP/2 multiplexing |
| Compliance | Often violates PCI, GDPR, HIPAA | Meets regulatory mandates |

**System design implications**  
- **API Gateway / Load Balancer**: Terminate TLS at the gateway to offload crypto. Forward plain HTTP to internal services over a secure VPC.  
- **Service‑to‑service**: Use mTLS for mutual authentication if confidentiality is required between microservices.  
- **Caching & CDNs**: HTTPS requires separate cache keys; HTTP/2 multiplexing reduces overhead.

## Edge Cases  
- Self‑signed certs → client trust issues.  
- Legacy clients only support HTTP 1.0 → fallback or upgrade via HSTS.  
- Performance hit on low‑power devices → use TLS session tickets or QUIC (HTTP/3).

## Optimize & Communicate  
To reduce latency, enable **TLS session resumption** and **ALPN** for HTTP/2. Use a **content delivery network** to terminate TLS close to users, then forward to origin over internal secure channel. Explain trade‑offs: more infrastructure vs. compliance and user trust. Conclude by emphasizing that HTTPS is the de‑facto standard; HTTP should only be used in isolated, non‑public contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
