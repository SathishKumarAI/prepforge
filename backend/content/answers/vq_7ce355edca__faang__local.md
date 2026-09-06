---
qid: vq_7ce355edca__faang__local
question: Which of the following is not an advantage of a client/server model ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 468
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:57-05:00'
sources: []
---

**Answer:** *Fault tolerance* is **not** an advantage of a client/server model.

---

### 1️⃣ Clarify  
- We’re asked which property *does not* benefit the client/server architecture.  
- Assume typical options: scalability, centralised control, modularity, fault‑tolerance.

### 2️⃣ Approach  
- List each property and state whether it’s an advantage or disadvantage for client/server.  
- Justify with a one‑sentence technical rationale.

### 3️⃣ Depth  

| Property | Advantage? | Why |
|----------|------------|-----|
| **Scalability** | ✔️ | Clients can be added without touching the server; load balancers distribute traffic. |
| **Centralised control** | ✔️ | Server manages configuration, security policies, and data consistency in one place. |
| **Modularity / separation of concerns** | ✔️ | Client logic stays thin; server encapsulates business rules. |
| **Fault tolerance** | ❌ | A single server failure brings down all clients; redundancy is required to mitigate this. |

### 4️⃣ Edge Cases  
- *High‑availability setups* (multiple redundant servers) improve fault tolerance, but the base model still has a single point of failure.  
- In microservices, “server” becomes distributed, yet each service still faces its own downtime risk.

### 5️⃣ Optimize & Communicate  
- Highlight that while client/server is powerful for many use‑cases, it must be paired with clustering or replication to address fault tolerance.  
- Emphasise the trade‑off: centralised control vs. single point of failure; design decisions depend on reliability requirements.

**Bottom line:** Fault tolerance isn’t inherent to the classic client/server model—it’s a challenge that requires additional architectural patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
