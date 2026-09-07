---
qid: vq_dd2a9c02fc__faang__local
question: HOW DOES A CLUSTERED INDEX DIFFER FROM A NON-CLUSTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 477
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:30-05:00'
sources: []
---

**Clarify**  
You’re asking how a *clustered* index differs from a *non‑clustered* index in relational databases. I’ll assume we’re talking about SQL Server/MySQL/Oracle‑style B‑tree indexes on a single table, and that the question is conceptual rather than code‑centric.

**Approach**  
1. Explain storage layout for each type.  
2. Highlight key performance implications (lookup speed, maintenance overhead).  
3. Summarize trade‑offs in typical use cases.

**Depth**  

| Feature | Clustered Index | Non‑Clustered Index |
|---------|-----------------|---------------------|
| **Data placement** | Table rows are physically sorted on the index key; one per table. | Separate structure: leaf nodes hold pointers to data pages; table remains unsorted. |
| **Number allowed** | Only one per table (primary key or unique constraint). | Unlimited; each can have its own key columns. |
| **Size & I/O** | Smaller because no pointer indirection; range scans are fast. | Larger due to pointer overhead; range scans require extra lookups. |
| **Maintenance** | DML operations (INSERT/UPDATE) may need page splits to keep order, incurring more writes. | Less impact on data pages, but index updates still required. |
| **Use‑case** | Primary key or frequently queried ranges (e.g., date ranges). | Secondary lookups, foreign keys, composite queries where the table isn’t naturally ordered. |

**Edge Cases**  
- Updating a clustered key forces physical row movement; can be expensive on large tables.  
- Non‑clustered indexes become fragmented if their referenced columns change often.  
- Composite non‑clustered indexes may still need covering columns to avoid lookups.

**Optimize & Communicate**  
In practice, choose a clustered index on the most selective key that benefits range queries (often the primary key). Add non‑clustered indexes for other query predicates, balancing cardinality and update frequency. I’d explain this trade‑off to stakeholders: “Clustered gives you one efficient physical order; non‑clustered lets us add many logical views without reshuffling data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
