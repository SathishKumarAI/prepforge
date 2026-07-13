---
qid: q083
question: "What is the difference between a primary key and a foreign key?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** No real ambiguity, but signal you understand these are relational-integrity concepts. Assume a standard RDBMS.
2. **Mental model.** A primary key *identifies* a row within its own table; a foreign key *references* a primary key in another table to link the two. One is about identity, the other about relationships.
3. **Reason step by step.** Primary key: unique, non-null, one per table, guarantees each row is addressable (e.g., `customer_id` in `customers`). Foreign key: a column that points to another table's primary key (e.g., `customer_id` in `orders`), enforcing referential integrity so you can't insert an order for a customer that doesn't exist. Note foreign keys *can* be null (optional relationship) and can repeat (one customer, many orders — the many side).
4. **Traps to avoid.** Saying a foreign key must be unique (it usually isn't). Saying primary keys can be null (they can't). Confusing a composite key with a foreign key. Forgetting that a foreign key can reference the same table (self-reference, e.g., `manager_id`).
5. **Sanity-check and deliver.** Test with the orders example — it cleanly shows identity vs link and the one-to-many shape. Deliver the identity-vs-reference contrast first, then the null/uniqueness rules.
