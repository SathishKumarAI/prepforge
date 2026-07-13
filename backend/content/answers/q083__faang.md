---
qid: q083
question: "What is the difference between a primary key and a foreign key?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we're discussing relational schema design and that a small example (orders referencing customers) will make the contrast concrete.

**Approach** — Define each key by the constraint it enforces, then show how together they model relationships and protect integrity.

**Depth** — A primary key uniquely identifies each row in a table. It must be unique and non-null, and there is exactly one per table (possibly composite across columns). It's typically backed by a clustered/unique index. A foreign key is a column (or set) in one table that references the primary key of another, enforcing referential integrity: you cannot insert an order for a customer_id that doesn't exist, and deletes can be restricted or cascaded. So the primary key is about *identity within* a table; the foreign key is about *linkage between* tables.

**Edge cases** — Composite keys, self-referencing FKs (employee → manager), orphaned rows if FKs aren't enforced, null FKs for optional relationships, and cascade rules that can trigger unintended mass deletes.

**Optimize & communicate** — I'd add that surrogate keys (auto-increment/UUID) are often preferred over natural keys for stability, and that indexing FK columns speeds joins. Explaining the *why* (integrity, join performance) rather than reciting definitions is the depth signal interviewers reward.
