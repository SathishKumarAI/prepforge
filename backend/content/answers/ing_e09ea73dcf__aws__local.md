---
qid: ing_e09ea73dcf__aws__local
question: What Is Cardinality in Data Modeling? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 439
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:22-05:00'
sources: []
---

**Cardinality is the “relationship count” between tables – how many rows in one table can be linked to rows in another.**  
In a typical e‑commerce model, a **Customer** may have *zero or many* **Orders** (1:N), while an **Order** belongs to *exactly one* Customer (N:1). A **Product** and **Category** might share a *many‑to‑many* link via a junction table (M:N).

---

### STAR – Implementing Cardinality in AWS for a high‑traffic catalog

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our legacy on‑prem database suffered 30 % latency during peak sales. | Re‑design the schema to expose cardinality explicitly and migrate to DynamoDB. | • Created a **Customer** table (PK: `customer_id`).<br>• Added a **Orders** GSI (`customer_id → order_id`) for fast lookups.<br>• Used an **OrderItems** table with composite PK (`order_id#item_seq`).<br>• Leveraged *DAX* for in‑memory caching. | • 90 % reduction in query latency (0.6 s → 0.06 s).<br>• Cost fell from $12k/month to $3.5k.<br>• Maintained 99.99 % availability via Multi‑AZ deployment. |

**Leadership Principles Anchored:**  
- **Customer Obsession** – Deliver sub‑100 ms responses during flash sales.  
- **Ownership** – Own the full migration, monitor performance post‑cutover, and iterate on table design.

**Bar‑raiser notes:**  
- Depth: Detailed understanding of PK/GSI vs. composite keys.  
- Quantified impact: Explicit latency & cost metrics.  
- Learning: Early use of DAX prevented a potential SLA breach during Black Friday.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
