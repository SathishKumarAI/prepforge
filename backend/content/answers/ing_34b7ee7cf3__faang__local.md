---
qid: ing_34b7ee7cf3__faang__local
question: 'Explain: Step 8: Logging & Monitoring — What is an API Gateway? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 449
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:58-05:00'
sources: []
---

**Clarify**  
The interviewer asks about “Step 8: Logging & Monitoring – What is an API Gateway?” The goal is to explain the concept of an API gateway in a distributed micro‑service architecture and why it matters for observability.

**Approach**  
1. Define what an API gateway does (request routing, aggregation).  
2. Highlight its role in logging/monitoring (central point, metrics, tracing).  
3. Mention common tools (Kong, AWS API Gateway, NGINX).  
4. Touch on trade‑offs and best‑practice patterns.

**Depth**  
An **API gateway** is a reverse proxy that sits between clients and micro‑services. It receives all inbound requests, performs **routing**, authentication, rate limiting, request/response transformation, and aggregates responses from multiple services into one payload. Because every external call funnels through the gateway, it becomes the natural place to collect **logs (request IDs, headers)**, **metrics (latency, error rates)**, and **tracing context** for distributed tracing systems (e.g., OpenTelemetry). This centralization reduces instrumentation overhead on individual services and gives a single view of traffic patterns, enabling anomaly detection and capacity planning.  
Typical implementations: Kong/OpenResty, AWS API Gateway, Azure APIM, or custom NGINX/Envoy front‑ends.

**Edge Cases**  
- *High latency*: the gateway can become a bottleneck if not scaled; use horizontal scaling or async routing.  
- *Security misconfiguration*: improper auth handling can expose services.  
- *Versioning conflicts*: stale routes may break downstream services.

**Optimize & Communicate**  
Explain that while an API gateway simplifies observability, it introduces a single point of failure and extra network hops. Mitigate with health checks, graceful degradation, and circuit breakers. Conclude by noting that in FAANG‑scale systems we often combine a lightweight gateway (e.g., Envoy) with sidecar proxies to balance load and maintain fine‑grained control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
