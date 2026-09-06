---
qid: vq_5a92d59e42__faang__local
question: What is a constraint and what are the seven constraints?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:47-05:00'
sources: []
---

**Clarify**  
You’re asking about *data‑modeling* constraints—rules that enforce data integrity in relational databases. The “seven constraints” refer to the canonical set of integrity rules that most RDBMS expose.

**Approach**  
1. List each constraint with a brief definition.  
2. Explain its role and typical SQL syntax.  
3. Mention how they interact (e.g., primary keys imply uniqueness + not‑null).  

**Depth**

| Constraint | Purpose | Typical Syntax |
|------------|---------|----------------|
| **Primary Key** | Uniquely identifies each row; automatically NOT NULL & UNIQUE. | `PRIMARY KEY (col1, col2)` |
| **Foreign Key** | Enforces referential integrity between tables. | `FOREIGN KEY (child_col) REFERENCES parent_tbl(parent_col)` |
| **Unique** | Guarantees all values are distinct across rows. | `UNIQUE (col)` |
| **Not‑Null** | Prevents NULL entries in a column. | `NOT NULL` |
| **Check** | Validates that data satisfies a predicate. | `CHECK (age > 0)` |
| **Default** | Supplies a value when none is provided. | `DEFAULT CURRENT_TIMESTAMP` |
| **Identity/Auto‑Increment** | Auto‑generates sequential values for surrogate keys. | `SERIAL`, `IDENTITY(1,1)` |

*Complexity*: Constraint checks run in O(1) per row on insert/update; they’re enforced at the storage engine level, so no extra code needed.  

**Edge Cases**  
- **Circular FK references** → require deferrable constraints or temporary tables.  
- **Large CHECK predicates** can slow bulk loads.  
- **NULL handling in UNIQUE**: many DBs allow multiple NULLs; some treat them as distinct.

**Optimize & Communicate**  
When designing schemas, start with primary/foreign keys to guarantee relational integrity, then add NOT‑NULL and DEFAULT for data hygiene, Unique for business rules, Check for domain logic, and Identity only when surrogate keys are needed. Communicate the trade‑off: tighter constraints reduce bugs but can slow write throughput; relax them only if performance dictates and you have compensating application logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
