---
qid: ing_7aede1628c__faang__local
question: 'Explain: But it should never happen that amount — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 492
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:11-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how to avoid a “never‑happening” situation where the **amount** (e.g., total inventory, balance) becomes inconsistent across tables or shards during a system design interview. Confirm:  
- Is this a single‑tenant or multi‑tenant system?  
- What consistency level do we need (strong vs eventual)?  
- Are updates distributed or centralized?

**2️⃣ Approach**  
1. Use **single source of truth** per entity (e.g., one `inventory` row).  
2. Enforce **ACID** via transactions when possible.  
3. For scale, apply **optimistic locking / versioning** to detect conflicts.  
4. If sharding, maintain a **global counter** or use a *partition‑aware* aggregation service.

**3️⃣ Depth**  
- **Transactional DB (PostgreSQL/MySQL)**: Wrap inventory updates in a single `BEGIN…COMMIT`. Use `SELECT … FOR UPDATE` to lock rows. Complexity O(1) per op, constant latency.  
- **NoSQL (Cassandra/Redis)**: Use *lightweight transactions* (`LWT`) or *compare‑and‑set* on counters; trade off consistency for higher throughput.  
- **Event‑Sourcing**: Append events to a log and rebuild the amount via projection; guarantees eventual consistency, O(n) replay cost but linear scalability.

**4️⃣ Edge Cases**  
- Network partitions → fallback to compensating transactions or *retry with backoff*.  
- Bulk imports → batch update + snapshot isolation.  
- Clock skew in distributed counters → use Lamport timestamps or vector clocks.

**5️⃣ Optimize & Communicate**  
Explain that the chosen strategy balances **latency**, **throughput**, and **consistency** based on business needs. Show a diagram of data flow, highlight where failures could corrupt totals, and describe monitoring (e.g., Prometheus alerts for counter drift). Conclude by noting that in an interview you’d iterate: prototype the simplest solution, surface bottlenecks, then layer in sharding or eventual consistency as required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
