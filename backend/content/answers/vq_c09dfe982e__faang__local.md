---
qid: vq_c09dfe982e__faang__local
question: WHAT IS AN UNPIVOT OPERATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 513
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:29-05:00'
sources: []
---

**Clarify**  
> *What is an “unpivot” operation in SQL and when would you use it?*  
Assumptions: We’re working with a relational DB (e.g., Oracle, SQL Server, PostgreSQL), the data is in wide format (one row per entity, many columns for attributes), and we need to convert it into long‑format rows.

**Approach**  
1. Explain the concept of pivot vs. unpivot.  
2. Show a concrete example: transform sales by month from columns to rows.  
3. Highlight native syntax (`UNPIVOT` clause) and alternatives (CROSS JOIN + UNION ALL, VALUES).  
4. Discuss performance considerations.

**Depth**  
- **Definition**: Unpivot turns columns into row values, producing two columns—one for the former column name (“attribute”) and one for its value.  
- **Syntax example (SQL Server)**:
  ```sql
  SELECT CustomerID, MonthName, Sales
  FROM   SalesWide
  UNPIVOT (
      Sales FOR MonthName IN ([Jan], [Feb], [Mar])
  ) AS u;
  ```
- **Alternative for DBs lacking `UNPIVOT`**:  
  ```sql
  SELECT CustomerID, 'Jan'  AS MonthName, Jan  AS Sales FROM SalesWide
  UNION ALL
  SELECT CustomerID, 'Feb', Feb  FROM SalesWide
  ...
  ```
- **Performance**: Native `UNPIVOT` is usually faster because the optimizer can push predicates early; however, for very wide tables a row‑generating CTE with `VALUES` may be more readable.

**Edge Cases**  
- NULL values in source columns become missing rows unless handled explicitly.  
- Data type mismatches across columns must be cast to a common type.  
- Very large numbers of columns can lead to query plan explosion; consider dynamic SQL.

**Optimize & Communicate**  
- For production, generate the `IN` list dynamically if column names change.  
- Explain that unpivot is useful for reporting tools (e.g., pivot tables), ETL transformations, or when a graph database expects key/value pairs.  
- Conclude with a quick recap: “Unpivot reshapes wide data into long rows; use it to simplify aggregation, visualization, and downstream analytics.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
