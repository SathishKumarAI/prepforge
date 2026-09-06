---
qid: ing_b4e948a9e9__fp__local
question: 'Explain: Common Types of Locks — Database Locks Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 533
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:28:59-05:00'
sources: []
---

### Why a database needs locks

When several processes touch the same data concurrently, their interleaved actions can leave the store in an inconsistent state (think of two people updating a bank balance at once). The fundamental problem is **serializability**: we want every concurrent execution to look as if some serial order of transactions had occurred. Locks are the minimal, local device that enforces this property.

### Core lock primitives

| Lock type | Purpose | When it is granted |
|-----------|---------|--------------------|
| **Shared (read) lock** | Allows multiple readers but blocks writers. | Granted to any transaction that only reads a resource. |
| **Exclusive (write) lock** | Grants sole access for modification. | Granted when a transaction intends to write; blocks all others. |

These two form the basis of *pessimistic* locking: a transaction asks before it proceeds, guaranteeing no conflict will arise later.

### Optimistic vs. pessimistic

- **Pessimistic** locks are held from read‑to‑write until commit (or rollback). They prevent conflicts at the cost of blocking.
- **Optimistic** locks defer conflict detection to the end: a transaction records its reads and writes, then validates that none changed in the meantime. If validation fails it aborts.

### Granularity

| Level | Typical use |
|-------|-------------|
| **Row/record lock** | Fine‑grained; high concurrency for large tables. |
| **Table lock** | Coarse; simpler but can serialize many operations. |

Choosing granularity is a trade‑off between overhead (more locks = more bookkeeping) and contention.

### A non‑obvious insight

Locking isn’t just about preventing dirty reads; it also enforces **causality constraints** that enable *predictable* performance. Because each lock’s acquisition order defines a partial order on operations, the database can use this to bound the number of possible interleavings. In practice, this means that even under high load, the system can guarantee bounded transaction latency—something most people overlook when they think locks merely “block”.

In short, locks are engineered to enforce serializability while balancing throughput and latency; understanding their types and trade‑offs is essential for designing robust concurrent systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
