---
qid: vq_07d7205f6d__faang__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 648
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:17-05:00'
sources: []
---

**Clarify**

You’re asking about *dimension table* classifications used in data warehousing and analytics.  
Assumptions:  
1. We’re working with a star/snowflake schema, not a pure OLTP system.  
2. The focus is on how dimensions are modeled (e.g., hierarchy, grain) rather than physical storage details.

**Approach**

I’ll first define what a dimension table is, then list the common types: *concrete*, *degenerate*, *surrogate‑key*, *hierarchical*, and *slowly changing*. I’ll explain each with its purpose and typical use case, then note trade‑offs and when you might blend them.

**Depth**

| Type | Definition | Typical Use | Trade‑offs |
|------|------------|-------------|------------|
| **Concrete (Fact‑Derived)** | A dimension that stores all attributes directly in the fact table. | Simple metrics where dimensionality is low. | Reduces join cost but duplicates data; harder to maintain. |
| **Degenerate** | No physical columns except a surrogate key derived from the fact table (e.g., order number). | Keeps referential integrity while avoiding an extra row. | Limited descriptive power; often used only for tracking. |
| **Surrogate‑Key** | Uses internal, non‑business keys to link facts and dimensions. | Enables efficient joins, avoids slowly changing business keys. | Requires key management; adds a lookup layer. |
| **Hierarchical (Nested Set / Path Enumeration)** | Stores parent–child relationships within the dimension. | Enables drill‑down/up on time or geography. | Query complexity increases; maintenance of hierarchy costly. |
| **Slowly Changing Dimension (SCD)** | Handles attribute changes over time. Types: Type 1 (overwrite), Type 2 (new row with surrogate key), Type 3 (add new column). | Captures historical context for reporting. | More storage for Type 2; query logic must handle versioning. |

**Edge Cases**

- Mixing degenerate and surrogate keys can cause ambiguity in joins.  
- Hierarchical dimensions with deep trees may degrade performance unless pre‑aggregated or cached.  
- SCD type 3 can become unwieldy if many columns change frequently.

**Optimize & Communicate**

When designing a warehouse, start with a *concrete* dimension for low‑change data to keep things simple. Add *surrogate keys* early to decouple from business changes. If you need historical fidelity, implement *SCD Type 2*; otherwise use Type 1 or 3 for quick updates. For reporting hierarchies, prefer pre‑computed paths or materialized views to mitigate runtime cost.

In interviews, I’d finish by summarizing: “Concrete → Surrogate → SCD → Hierarchical → Degenerate,” noting that the choice depends on business needs, query patterns, and maintenance overhead. This structure shows clear reasoning, depth of knowledge, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
