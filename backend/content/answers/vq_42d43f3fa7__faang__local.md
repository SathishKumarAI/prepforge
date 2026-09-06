---
qid: vq_42d43f3fa7__faang__local
question: Normalization vs Denormalization?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 497
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:28-05:00'
sources: []
---

**Clarify**  
The interview asks for the trade‑offs between *normalization* (splitting data into many related tables) and *denormalization* (storing duplicated or pre‑joined data). I’ll assume we’re designing a relational warehouse that serves both OLTP reads/writes and analytical queries, and that performance & storage cost are key concerns.

**Approach**  
1. List benefits of each style.  
2. Map those to typical workloads: transactional consistency vs analytic speed.  
3. Summarize decision factors (size, update frequency, query patterns).  
4. Provide a concise recommendation framework.

**Depth**  

| Aspect | Normalization | Denormalization |
|--------|---------------|-----------------|
| **Schema design** | Many small tables; enforce integrity via FK constraints. | Fewer wide tables; duplicate data to avoid joins. |
| **Write cost** | Higher (multiple inserts/updates). | Lower (single row write). |
| **Read cost** | More joins → CPU & I/O overhead. | Faster reads, especially for aggregations and ad‑hoc analytics. |
| **Storage** | Less redundant data → smaller footprint. | More storage due to duplication. |
| **Consistency** | Strong ACID guarantees; easier to enforce business rules. | Risk of stale data; requires refresh logic (e.g., materialized views). |
| **Maintenance** | Schema changes propagate through FK constraints. | Schema changes may require bulk re‑writes of denormalized tables. |

**Edge Cases**  
- *High write volume, low read* → stay normalized.  
- *Batch ETL for analytics* → denormalize into star/snowflake schemas.  
- *Real‑time dashboards* → consider hybrid: keep core facts denormalized but reference dimension tables.

**Optimize & Communicate**  
Start with a fully normalized model to capture all relationships cleanly. Then, during performance tuning, identify hot query paths; materialize those joins into a denormalized view or table. Use incremental refreshes (change‑data capture) to keep the denorm up‑to‑date while preserving ACID semantics on the source. This hybrid strategy balances maintainability with query speed and aligns with FAANG best practices of iterative optimization and clear communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
