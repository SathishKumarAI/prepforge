---
qid: vq_0531416db5__faang__local
question: How can I discover what tables, columns, etc are there?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 566
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:42-05:00'
sources: []
---

**Clarify**  
You want a programmatic way to introspect a relational database—discover its schemas, tables, columns, data types, constraints, indexes, etc. I’ll assume an SQL‑compliant DB (PostgreSQL/MySQL/Oracle), you have JDBC/ODBC access, and no special vendor extensions.

**Approach**  
1. Use the database’s *information schema* or system catalog (`INFORMATION_SCHEMA` in ANSI SQL).  
2. Query `TABLES`, `COLUMNS`, `CONSTRAINTS`, `KEY_COLUMN_USAGE`, `INDEXES`.  
3. For each table, join to its columns and constraints to build a metadata model.  

**Depth**  
```sql
-- Example for PostgreSQL / MySQL (ANSI)
SELECT t.table_schema,
       t.table_name,
       c.column_name,
       c.data_type,
       c.is_nullable,
       k.constraint_name,
       k.constraint_type
FROM information_schema.tables t
JOIN information_schema.columns c
  ON t.table_schema = c.table_schema
 AND t.table_name   = c.table_name
LEFT JOIN (
    SELECT tc.table_schema, tc.table_name, 
           tc.constraint_name, tc.constraint_type,
           kcu.column_name
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu
      ON tc.constraint_name = kcu.constraint_name
     AND tc.table_schema = kcu.table_schema
) k
  ON t.table_schema = k.table_schema
 AND t.table_name   = k.table_name
 AND c.column_name  = k.column_name
WHERE t.table_type='BASE TABLE'
ORDER BY t.table_schema, t.table_name, c.ordinal_position;
```
- **Complexity**: O(#tables + #columns).  
- **Trade‑offs**: ANSI queries work across engines; vendor‑specific catalogs give richer info (e.g., Oracle’s `ALL_TAB_COLUMNS`).  

**Edge Cases**  
- Views vs. tables (`TABLE_TYPE` = ‘VIEW’).  
- Privilege restrictions may hide objects.  
- Very large schemas can return millions of rows—paginate or filter by schema.

**Optimize & Communicate**  
For performance, cache the result in memory or a lightweight metadata store if introspection is frequent. Expose a REST endpoint that returns JSON for UI consumption. In an interview, I’d sketch this flow, mention handling of user permissions, and discuss how to extend it to support partitioned tables or NoSQL systems. This shows clear problem framing, a systematic solution, depth in SQL, awareness of edge cases, and scalability concerns—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
