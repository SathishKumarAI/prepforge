---
qid: ing_3d47d10537__faang__local
question: 'Explain: Recap: consider these characteristics — Do you have too many microservices?
  - Five Design Attributes that can\u00a0Help - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 466
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:25-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to assess if a system has *too many* micro‑services and which design attributes help maintain **high scalability**. I’d confirm they’re interested in architectural trade‑offs (latency, operational cost) rather than pure code.

**Approach**  
1. Define “too many” via service cardinality, inter‑service latency, and team ownership.  
2. List five micro‑service design attributes that promote scalability.  
3. Explain how each attribute mitigates the risks of over‑fragmentation.

**Depth**  

| Attribute | Why it Scales | Typical Implementation |
|-----------|---------------|------------------------|
| **Bounded Context & Domain Decomposition** | Keeps services focused, reducing cross‑cutting dependencies. | Use domain‑driven design to group related entities. |
| **API Gateway + Request Routing** | Centralizes throttling and caching, shielding downstream services from traffic spikes. | Kong/NGINX with rate‑limit plugins. |
| **Event‑Driven Decoupling** | Enables asynchronous scaling; consumers can process at their own pace. | Kafka or Pulsar topics per domain event. |
| **Stateless Service Design** | Allows horizontal scaling without session affinity. | Store state in distributed caches (Redis) or databases. |
| **Observability & Circuit Breakers** | Detects and isolates failures, preventing cascading outages. | Hystrix/Resilience4j with Prometheus metrics. |

**Edge Cases**  
- Too many services can inflate latency due to inter‑service calls; monitor end‑to‑end RTT.  
- Over‑use of events may lead to data storms—apply backpressure and topic partitioning.  
- Statelessness breaks for long‑running transactions; consider sagas or compensating actions.

**Optimize & Communicate**  
I’d emphasize that *scalability* is a balance: too few services hurt agility, too many hurt performance. I’d suggest periodic **service health reviews** (e.g., every sprint) and automated metrics dashboards to keep the system within acceptable thresholds. This demonstrates structured thinking, clear communication, and depth—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
