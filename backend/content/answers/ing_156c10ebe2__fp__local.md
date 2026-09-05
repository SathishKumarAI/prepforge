---
qid: ing_156c10ebe2__fp__local
question: 'Explain: Data Model — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 435
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:43-05:00'
sources: []
---

**Why a Data Model Matters in a System‑Design Interview**

The core problem any distributed service solves is *state management*: where do we store the facts that drive decisions, and how can we retrieve them fast enough?  
A data model is simply an abstraction of that state into entities, relationships, and constraints. In an interview it becomes the “blueprint” that ties together storage choice, consistency guarantees, scaling strategy, and fault‑tolerance.

1. **Start from the business rule** – e.g., *“a user can follow up to 10 k accounts.”*  
   This gives a cardinality constraint that immediately influences partitioning (hash by user ID) and sharding (no cross‑user joins).

2. **Choose the right abstraction for access patterns** – read‑heavy → denormalized, write‑heavy → normalized.  
   Think of it as an *information‑theoretic* compression: you trade redundancy for speed.

3. **Map to physical storage** – relational ↔ ACID, NoSQL ↔ eventual consistency.  
   The “why” is the CAP theorem: you cannot have all Consistency, Availability, Partition tolerance; pick the two that matter most.

4. **Validate against scalability metrics** – latency budget, throughput, and data volume.  
   This is an optimization problem: minimize `L = f(partition size, replication factor)` subject to constraints.

---

### One Non‑Obvious Insight

Most interviewees focus on *where* data lives (shards, replicas) but forget that the **schema itself must be versioned**. In a live system you cannot afford to alter table columns or collection fields in production; instead, design with *append‑only* evolution: add new attributes as separate fields and keep old ones for backward compatibility. This allows zero‑downtime migrations and aligns with the “immutable data” principle that underpins many modern event‑driven architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
