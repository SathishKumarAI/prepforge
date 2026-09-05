---
qid: ing_e9926d0fb3__star__local
question: 'Explain: Transport Layer — Top Network Security Cheatsheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 381
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:21-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with securing a fleet of 15 Go‑based microservices that exchanged sensitive data over internal load balancers. The existing setup used plain HTTP, so we were vulnerable to MITM attacks and had no audit trail for connections.

**Task**  
I needed to migrate all services to TLS 1.3, enforce mutual authentication with short‑lived client certificates, and keep latency below 30 ms per request while maintaining observability for certificate rotations.

**Action**  
First I built a lightweight Go library that wrapped the standard `crypto/tls` package, exposing a single configuration struct (cipher suites, min/max versions, root CAs). I integrated it into each service’s HTTP server and client using a shared `TransportFactory`. For mutual auth I leveraged HashiCorp Vault to issue short‑lived X.509 certificates via the PKI secrets engine; a sidecar process watches for certificate renewal and reloads them without restarting the main service. I also added OpenTelemetry interceptors that capture TLS handshake metrics (handshake time, cipher used) and export them to Grafana Loki for real‑time alerting.

**Result**  
After deployment, all traffic was encrypted with TLS 1.3, reducing potential attack surface by >95 %. Latency increased only 8 ms on average, well within our SLA. The automated cert rotation cut manual ops effort from hours per week to minutes, and the observability layer surfaced handshake failures in real time, allowing us to fix a rogue load balancer configuration before it caused any downtime. I learned how to balance security hardening with performance constraints while keeping operations manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
