---
qid: ing_a7ea6a01d1__think__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 575
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:08:28-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *Confirm that the user wants a conceptual walkthrough of how “Non‑Functional Requirements (NFRs)” are treated in Airbnb’s system design case study by Neo Kim and Hayk.*  
   *Assume they have seen the interview prompt but not the deep dive into NFR categories.*

**2️⃣ Adopt a mental model**  
   *Treat each NFR as a **constraint layer** that sits on top of functional features.  Think of them in the classic “5 S” framework: Scalability, Security, Availability, Performance, and Maintainability.*  
   *Map each layer to concrete design decisions (e.g., sharding → scalability, TLS + RBAC → security).*

**3️⃣ Step‑by‑step reasoning**  

| NFR | Why it matters for Airbnb | Typical design choice | Example from the case |
|-----|---------------------------|-----------------------|----------------------|
| **Scalability** | Millions of users & listings globally | Horizontal partitioning, micro‑services | Geo‑sharded DBs + CDN |
| **Availability** | 24/7 booking service | Multi‑region replication, graceful degradation | Failover clusters, read replicas |
| **Performance** | Low latency search & checkout | Caching, async processing | Redis cache for listings, Kafka queues |
| **Security** | Sensitive user data & payments | Encryption at rest/in transit, fine‑grained auth | TLS, OAuth scopes |
| **Maintainability** | Rapid feature iteration | Modular services, CI/CD | Separate listing, booking, payment micro‑services |

Walk through each row: state the problem, why it’s critical for Airbnb’s business, and how the design addresses it. Emphasise trade‑offs (e.g., sharding vs. consistency).

**4️⃣ Avoid common traps**  
   *Don’t lump all NFRs under “performance.”*  
   *Skip over the “human” side: usability & accessibility are also non‑functional.*  
   *Assume every NFR has a single solution—often there’s a spectrum.*

**5️⃣ Sanity‑check & communicate**  
   *Recount each layer in plain language, then ask: “If we removed this constraint, what would break?”*  
   *Use analogies (e.g., “Think of availability like an airline that never cancels flights; scalability is the number of seats per flight.”)*  
   *End with a quick recap: “So Airbnb’s NFRs shape its architecture by forcing it to shard globally for scalability, replicate everywhere for availability, cache aggressively for performance, encrypt everything for security, and keep services loosely coupled for maintainability.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
