---
qid: ing_8886ee9f31__faang__local
question: 'Explain: Summary — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:01:44-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise explanation of how HTTP/HTTPS work and how you would design a system that uses them (e.g., a web‑service). Key assumptions: the system is stateless, needs high availability, and must handle TLS termination securely.

**Approach**  
1. Explain the request–response cycle of HTTP.  
2. Add HTTPS details: TLS handshake, certificate validation, cipher suites.  
3. Sketch an architecture: load balancer → TLS terminator → microservice cluster → database.  
4. Highlight caching, rate‑limiting, and monitoring.

**Depth**  
*HTTP*: stateless, verbs (GET/POST/PUT/DELETE), headers, status codes, content negotiation.  
*HTTPS*: TLS 1.3 handshake – client hello, server hello, key exchange via Diffie–Hellman Ephemeral, certificate chain validation, session resumption. Use forward‑secrecy and avoid weak ciphers.  
*System Design*:  
- **Ingress**: Application Load Balancer (ALB) with SSL termination; HSTS header injection.  
- **Service layer**: Containerized services behind a service mesh (Istio/Linkerd) for mTLS between pods.  
- **Data**: Read‑replica RDS for scaling reads, write to primary with eventual consistency.  
- **Observability**: Distributed tracing (OpenTelemetry), metrics (Prometheus), logs (ELK).  
Complexity: request latency O(1) per hop; cost dominated by TLS handshake (~10–20 µs). Trade‑offs: terminating TLS at LB simplifies scaling but requires secure storage of certs; end‑to‑end mTLS adds overhead but protects inter‑service traffic.

**Edge Cases**  
- Client with outdated TLS versions → fallback or block.  
- Certificate revocation → use OCSP stapling.  
- DoS via malformed headers → WAF rules.  
Test: fuzzing HTTP/HTTPS inputs, load testing under 10k RPS, failover of LB and DB replicas.

**Optimize & Communicate**  
Explain that we can reduce TLS overhead by session resumption and using QUIC for multiplexed connections. Communicate trade‑offs clearly: security vs. latency, cost vs. resilience. This shows structured thinking, deep technical grasp, and pragmatic system design—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
