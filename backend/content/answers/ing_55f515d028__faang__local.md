---
qid: ing_55f515d028__faang__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 564
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:03:46-05:00'
sources: []
---

**Clarify**  
The question asks about *related patterns* for the “Database‑per‑Service” pattern in microservices. We’ll assume it’s about architectural patterns that complement or build on this approach, and we’re to explain them concisely.

**Approach**  
1. Identify key complementary patterns (e.g., API Gateway, Saga, CQRS, Event Sourcing).  
2. For each, describe its purpose, how it interacts with the per‑service database, and a typical use case.  
3. Summarize trade‑offs and when to combine them.

**Depth**  

| Pattern | Why it pairs well | Interaction with DB‑per‑Service | Typical Scenario |
|---------|------------------|---------------------------------|-------------------|
| **API Gateway** | Centralizes routing, auth, and aggregation. | Services expose their own DB; gateway forwards requests or aggregates data from multiple services. | Exposing a unified REST/GraphQL endpoint to clients. |
| **Saga (or Choreography)** | Coordinates distributed transactions across services that each owns its DB. | Each step updates its local DB; compensating actions roll back previous steps if needed. | Order placement spanning inventory, payment, and shipping services. |
| **CQRS** | Separates read/write concerns; reads can be denormalized or cached. | Write side writes to the service’s own DB; read side may expose a shared query store. | High‑write workloads with complex reporting needs. |
| **Event Sourcing** | Persists state changes as events, enabling replay and audit. | Events are stored in a log (often separate from the write DB) but still tied to the service boundary. | Domain‑driven design where every state change must be auditable. |

**Edge Cases**  
- *Data duplication*: CQRS or Event Sourcing can lead to redundant storage; need cleanup policies.  
- *Consistency*: Sagas may leave services in inconsistent states if compensations fail—monitoring is essential.  
- *Latency*: API Gateway aggregation can become a bottleneck; consider caching.

**Optimize & Communicate**  
Explain that these patterns are not mutually exclusive but layered: start with DB‑per‑Service for isolation, add an API Gateway for client simplicity, use Sagas for transactional safety, and optionally CQRS/Event Sourcing for scalability or auditability. Highlight how each layer adds a trade‑off (complexity vs. resilience) and how to measure success via latency, error rates, and data consistency metrics. This structured narrative demonstrates clear problem framing, technical depth, and awareness of real‑world constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
