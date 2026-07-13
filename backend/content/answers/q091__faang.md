---
qid: q091
question: "What is database normalization and what problem does it solve?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we want the concept, the anomalies it prevents, and the normal forms up to 3NF, with the denormalization trade-off noted.

**Approach** — Define normalization by its goal, name the anomalies it fixes, walk the normal forms, then flag when to deliberately break them.

**Depth** — Normalization organizes columns and tables to reduce redundancy so each fact is stored once. It prevents three anomalies: **update** (changing a customer's address in many order rows, risking inconsistency), **insertion** (can't add a product without an order), and **deletion** (removing the last order erases the customer). **1NF**: atomic values, no repeating groups. **2NF**: no partial dependency on part of a composite key. **3NF**: no transitive dependency — non-key columns depend only on the key. The result is more, smaller tables linked by keys.

**Edge cases** — Over-normalization forces many joins that hurt read performance; derived/aggregated values may be cached; NoSQL and analytical warehouses intentionally denormalize; BCNF handles rarer key anomalies.

**Optimize & communicate** — The rule of thumb: normalize for OLTP integrity, denormalize deliberately for OLAP read speed. Stating that normalization is a tool with a cost, and that the workload decides how far to go, demonstrates the engineering judgment interviewers reward over reciting form definitions.
