---
qid: ing_3387650b48__faang__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 541
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:28-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design an online banking system with a **client‑server** architecture.  
Assumptions:  
* Clients = web/mobile apps; Server = stateless micro‑services behind load balancer.  
* Core features: authentication, account CRUD, fund transfer, transaction history, notifications.  
* High availability and strong consistency for money transfers.

---

**2️⃣ Approach**  

| Layer | Responsibility |
|-------|----------------|
| **Client (UI)** | Stateless REST/GraphQL calls; JWT auth tokens. |
| **API Gateway** | TLS termination, rate‑limit, request routing. |
| **Auth Service** | OAuth2/JWT, MFA, account linking. |
| **Account Service** | CRUD on accounts; read‑through cache (Redis). |
| **Transfer Service** | ACID via distributed transaction (two‑phase commit) or Saga pattern; optimistic locking. |
| **Transaction Service** | Immutable event store (Kafka), append‑only logs for audit. |
| **Notification Service** | Pub/Sub, push/email. |
| **Database** | PostgreSQL + PostGIS? For accounts/transactions; use read replicas. |

---

**3️⃣ Depth**

* **Security** – TLS everywhere, HSM for key storage, PCI‑DSS compliance.  
* **Consistency** – Use *sagas* to avoid distributed locks; eventual consistency acceptable for read‑only history.  
* **Scalability** – Stateless services behind a load balancer; cache hot data; auto‑scale per metric.  
* **Observability** – Distributed tracing (OpenTelemetry), metrics (Prometheus), logs (ELK).  

Complexity: O(1) for CRUD, O(log n) for transaction lookup; transfer is O(1) but involves coordination.

---

**4️⃣ Edge Cases**

* Simultaneous transfers causing double‑spend → optimistic locking + idempotent request IDs.  
* Network partition → read‑only mode with “offline” flag; eventual reconciliation.  
* Account closure while a transfer pending – cancel via saga compensation.  

Testing: unit, integration, chaos (simulate latency), security penetration tests.

---

**5️⃣ Optimize & Communicate**

Explain trade‑offs: *Sagas* reduce lock contention vs two‑phase commit’s higher latency. Highlight that the design keeps services decoupled, eases CI/CD, and satisfies regulatory audit trails. Conclude with a quick “next steps” roadmap (MVP → full compliance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
