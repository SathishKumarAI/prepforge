---
qid: ing_1857a8bd3f__star__local
question: 'Explain: HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 358
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:27-05:00'
sources: []
---

**Situation:**  
I was leading the redesign of our customer‑facing analytics portal for a fintech client that had to handle 50k concurrent users during peak trading hours. The existing monolith used plain HTTP and suffered from frequent man‑in‑the‑middle attacks, causing regulatory compliance failures.

**Task:**  
My goal was to migrate the entire stack to HTTPS, ensure end‑to‑end encryption without degrading performance, and document how this protocol fits into the overall system design so that future teams could maintain it.

**Action:**  
I started by selecting Let's Encrypt for automated TLS certificates, integrated them with Nginx as a reverse proxy, and enabled HTTP/2 to reduce round trips. I configured HSTS headers and used OCSP stapling to mitigate certificate revocation delays. On the backend, I refactored the microservices to expose only HTTPS endpoints, updated the load balancer to terminate TLS, and added mutual TLS for inter‑service communication. Performance tests showed a 12% latency increase initially; I tuned cipher suites (ECDHE‑RSA‑AES128-GCM) and increased thread pool sizes to bring average response time back below 200 ms.

**Result:**  
The portal now delivers secure connections to all users, passing the PCI‑DSS audit with zero vulnerabilities. Traffic throughput improved by 18% due to HTTP/2, and we cut support tickets related to security incidents by 90%. I documented the design in a living wiki, which reduced onboarding time for new engineers from weeks to days.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
