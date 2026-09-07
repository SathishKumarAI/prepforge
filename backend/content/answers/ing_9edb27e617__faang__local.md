---
qid: ing_9edb27e617__faang__local
question: 'Explain: Forces — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 606
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:53:24-05:00'
sources: []
---

**Clarify**  
The interviewer is asking you to describe the *database‑per‑service* architectural style (also called “micro‑service database”) and why teams choose it over shared or common databases. Assume we’re dealing with a distributed micro‑services system that needs data isolation, scalability, and resilience.

---

### 1️⃣ Approach
1. **Define the pattern** – one dedicated DB per service.  
2. **List the driving forces** – data ownership, autonomy, scaling, consistency, fault isolation, deployment cadence, and technology choice.  
3. **Show trade‑offs** – duplication, cross‑service queries, operational overhead.

---

### 2️⃣ Depth
| Force | What it means | Why it matters |
|-------|---------------|----------------|
| **Data Ownership & Encapsulation** | Service owns its schema + data; no external read/write. | Prevents “schema drift” and accidental coupling—each team can evolve independently. |
| **Autonomy & Release Cadence** | DB changes only need that service’s redeploy, not a coordinated migration. | Enables continuous delivery at the service level. |
| **Scalability & Performance** | Scale storage/compute per workload; choose DB type (SQL vs NoSQL) best for that domain. | Avoids bottlenecks caused by a single “big table” shared across services. |
| **Consistency Model** | Service can pick ACID or eventual consistency based on business needs. | Tailors transaction guarantees to domain requirements without forcing all services into one model. |
| **Fault Isolation** | A DB outage affects only its service. | Limits blast radius and improves overall system resilience. |
| **Technology Heterogeneity** | Different services may use different engines (PostgreSQL, MongoDB, Redis). | Leverages the best tool for each job. |

---

### 3️⃣ Edge Cases
* **Cross‑service queries** – need to design bounded contexts or an event‑driven data sync.  
* **Transactional integrity across services** – use sagas or compensating actions.  
* **Operational overhead** – requires more DB instances, monitoring, backups.

---

### 4️⃣ Optimize & Communicate
- **Start with a clear domain model** and map it to a dedicated schema.  
- **Use events for data sharing**; keep read models in separate “query” services if needed.  
- **Automate database provisioning** (e.g., Terraform + CI/CD) to reduce manual errors.  

When explaining, I’d frame the pattern as a *“data‑ownership‑first”* principle that aligns with micro‑service autonomy, then walk through each force and its business impact, concluding with common pitfalls and mitigation tactics. This showcases structured reasoning, depth of knowledge, and practical awareness—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
