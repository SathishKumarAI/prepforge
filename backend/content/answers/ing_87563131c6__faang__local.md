---
qid: ing_87563131c6__faang__local
question: 'Explain: 5.5 Security — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 477
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:58:43-05:00'
sources: []
---

**Clarify**

You’re asked to design a *Notification Service* that must be secure (5.5‑level).  
Assumptions:  
- Notifications are pushed to mobile/web clients via push APIs or WebSockets.  
- Users may belong to multiple organizations, each with its own access policies.  
- Data confidentiality, integrity, and availability are paramount; we need audit trails, encryption at rest/transport, and fine‑grained RBAC.

**Approach**

1. **Data model & storage** – encrypted columns in a relational DB (PostgreSQL) for metadata; an event store (Kafka) for real‑time delivery.  
2. **Auth & authorization** – OAuth 2.0 + JSON Web Tokens, enriched with scopes per org. Use attribute‑based access control (ABAC).  
3. **Transport security** – TLS everywhere, mutual TLS for service‑to‑service calls.  
4. **Audit & monitoring** – immutable logs in a separate append‑only store; integrate with SIEM.  
5. **Resilience** – partitioned Kafka topics, retry back‑off, dead‑letter queues, and circuit breakers.

**Depth**

- *Encryption*: AES‑256 GCM for payloads; keys rotated via AWS KMS/HashiCorp Vault.  
- *Message signing*: HMAC to prevent tampering before encryption.  
- *Rate limiting & throttling*: per‑user quotas to avoid abuse.  
- *Scalability*: stateless API servers behind a load balancer, auto‑scaling; Kafka partitions for horizontal throughput.

**Edge Cases**

- Token revocation: implement short TTL + blacklist store.  
- Offline clients: queue messages until the device reconnects (push notifications).  
- Cross‑org data leaks: enforce tenant isolation in queries and key scoping.

**Optimize & Communicate**

We can reduce latency by caching user preferences in Redis, but this introduces consistency challenges—use a “read‑through” cache with TTL. For audit, we might shift to a dedicated immutable ledger (e.g., WORM storage) for compliance. I’d present the diagram, highlight trade‑offs, and explain how each security requirement maps to design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
