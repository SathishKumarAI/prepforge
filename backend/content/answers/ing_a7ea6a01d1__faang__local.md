---
qid: ing_a7ea6a01d1__faang__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 621
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:10-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate the *non‑functional* (NFR) constraints that a large‑scale Airbnb‑style platform must satisfy, as presented by Neo Kim & Hayk. These are the “quality” attributes—availability, performance, scalability, security, etc.—that underpin the functional features (search, booking, payments). I’d confirm whether the focus is on *cloud‑native* NFRs, data‑consistency models, or regional compliance.

**Approach**  
1. List core NFR categories.  
2. For each, state concrete metrics used in Airbnb’s design (latency budgets, SLA targets, throughput).  
3. Briefly note the architectural patterns that satisfy them (event sourcing, CQRS, multi‑region replication).  

**Depth**  
| Category | Metric / Goal | Architectural Enabler |
|----------|---------------|-----------------------|
| **Availability** | 99.999% uptime (five nines) for core services; 99.95% for non‑critical APIs | Multi‑AZ deployment, health‑check auto‑scaling, graceful degradation |
| **Performance** | < 200 ms end‑to‑end response for search; < 1 s for booking confirmation | CDN + edge caching, read‑replicas, query sharding |
| **Scalability** | 10× traffic spikes during peak seasons; > 10⁶ concurrent users | Auto‑scaling compute, stateless services, Kubernetes clusters |
| **Consistency** | Eventual consistency for listings; strong consistency for payments | CQRS + event sourcing for domain events; ACID transactions on payment microservice |
| **Latency** | 50th percentile < 100 ms globally | Geo‑location routing, local caches (Redis), low‑latency storage (SSD) |
| **Security** | GDPR / CCPA compliance; MFA for hosts/guests | Token‑based auth (JWT + OAuth2), encryption at rest/in transit, audit logs |
| **Observability** | 99% request tracing coverage; real‑time alerts on SLA breaches | Distributed tracing (Jaeger), metrics via Prometheus, log aggregation |

**Edge Cases**  
- Sudden regional outages → fallback to secondary region.  
- Payment fraud spikes → throttling & manual review queue.  
- Data residency laws in EU vs US → separate data stores with consistent schema.

**Optimize & Communicate**  
I’d emphasize trade‑offs: e.g., choosing eventual consistency for listings trades off strict correctness for higher throughput, acceptable because hosts tolerate minor stale reads. I’d also note that monitoring the SLA metrics feeds back into capacity planning—auto‑scaling decisions are triggered when latency exceeds thresholds. Finally, I'd present this as a living NFR document updated with each major release, ensuring alignment between engineering and product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
