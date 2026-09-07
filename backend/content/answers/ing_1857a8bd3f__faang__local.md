---
qid: ing_1857a8bd3f__faang__local
question: 'Explain: HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 428
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:06-05:00'
sources: []
---

**Clarify**  
The interview asks how HTTP and HTTPS fit into a machine‑learning system’s architecture—i.e., the communication layer between clients (web/mobile), ML services, and data stores. I’ll assume we’re building an online inference service exposed via REST/GraphQL over HTTPS, with optional gRPC for internal calls.

**Approach**  
1. **Transport Layer:** Use TLS‑encrypted HTTP(S) to guarantee confidentiality/authentication.  
2. **API Gateway / Load Balancer:** Terminate TLS, route requests to stateless inference workers.  
3. **Service Mesh (e.g., Istio):** Handles mTLS between microservices, observability, and retries.  
4. **Model Serving Layer:** Containers/knative pods expose an HTTPS endpoint; use async queues for heavy jobs.  
5. **Data Access:** Secure APIs to feature stores or databases; employ role‑based access control.

**Depth**  
- *Security*: TLS 1.3 with short session tickets, HSTS, certificate pinning.  
- *Performance*: HTTP/2 multiplexing reduces latency; keep‑alive connections for batch inference.  
- *Scalability*: Autoscale based on request rate or GPU utilization; use CDN caching for static assets.  
- *Observability*: OpenTelemetry traces across HTTPS calls; metrics on TLS handshake failures.

**Edge Cases**  
- Client with outdated TLS versions → fallback to HTTP/1.1 with de‑factored fallback.  
- Zero‑downtime model updates → canary deployments behind the gateway.  
- Burst traffic → circuit breakers in the service mesh prevent overload.

**Optimize & Communicate**  
I’d iterate by measuring end‑to‑end latency, then tighten TLS handshake (session resumption), and finally consider QUIC if latency becomes critical. In a FAANG interview I would articulate each trade‑off—security vs. overhead, statelessness vs. caching—and show how the design supports continuous ML delivery at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
