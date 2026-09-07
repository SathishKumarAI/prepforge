---
qid: ing_20a407347b__faang__local
question: 'Explain: Microservice Monolith Architecture — Prime Video Microservices
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 510
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:32-05:00'
sources: []
---

**Clarify**

The interviewer asks you to explain the *Microservice‑Monolith* architecture used for Prime Video’s micro‑services (as described by Neo Kim).  
Assumptions I’d confirm:  

1. “Microservice‑Monolith” refers to a hybrid where many services share a common runtime/DB layer but retain service boundaries.  
2. The focus is on deployment, data access, and communication patterns rather than pure monolithic vs. micro‑service debate.

**Approach**

Outline the key components: shared persistence layer, containerized services, API gateway, and event bus. Then walk through how they interact in Prime Video’s pipeline (ingestion → processing → playback).

**Depth**

Prime Video runs ~200 lightweight services inside a single Kubernetes cluster.  
* **Shared DB** – All services read/write to a sharded PostgreSQL cluster; transactions are kept short, and service‑specific schemas isolate data.  
* **Container runtime** – Each microservice is packaged as a Docker image and deployed via Helm charts; rolling updates keep uptime > 99.9%.  
* **API Gateway (NGINX/Envoy)** – Exposes a unified REST/GraphQL endpoint to clients, handling auth, rate‑limiting, and routing to the right service based on path or request header.  
* **Event bus (Kafka)** – Services publish domain events; others subscribe asynchronously for eventual consistency (e.g., “EpisodeWatched” triggers recommendation update).  
* **Observability** – Prometheus + Grafana for metrics, ELK stack for logs, and Jaeger for distributed tracing.

**Edge Cases**

* Hot‑spot DB partitions → throttle writes or introduce read replicas.  
* Service failure during a transaction → use idempotent event handling to avoid duplicate side‑effects.  
* Network partition between gateway and service → circuit breaker pattern (Hystrix) to degrade gracefully.

**Optimize & Communicate**

To scale, move frequently accessed data to Redis cache per tenant; adopt serverless functions for bursty workloads. I’d explain this by highlighting trade‑offs: tighter coupling gives lower latency but risks cascading failures; loose coupling via events improves resilience but adds eventual consistency lag. This structure demonstrates clear problem framing, technical depth, and a focus on real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
