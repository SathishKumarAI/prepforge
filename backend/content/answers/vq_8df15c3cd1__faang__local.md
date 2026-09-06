---
qid: vq_8df15c3cd1__faang__local
question: How many no of columns can a RECORD GROUP have ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 527
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:09-05:00'
sources: []
---

**Question:** *How many columns can a RECORD GROUP have?*  

---

### 1️⃣ Clarify  
We’re talking about **IBM DB2 for i (formerly AS/400) record groups**—the storage object that bundles one or more tables into a single physical file.  
Assumptions to confirm:  
- The question refers to the *maximum number of columns* allowed in a single record group, not per table.  
- It’s about the **table definition** (i.e., how many column definitions can be stored), not the runtime data size.

### 2️⃣ Approach  
1. Recall the system limits documented for DB2 for i.  
2. Identify the specific limit that applies to *record group* objects.  
3. Verify with a quick reference or knowledge base entry if needed.

### 3️⃣ Depth – Core Answer  
- A **record group** can contain up to **16,000 columns** across all tables it holds.  
- This is a hard system limit; attempts to create more columns will raise an error (`SQLCODE -104`).  
- The limit applies regardless of data type (fixed‑length, variable, or large objects).  

### 4️⃣ Edge Cases  
| Scenario | What breaks? | How to test? |
|----------|--------------|-------------|
| Adding a 16,001st column | Creation fails with `SQLCODE -104` | Attempt `CREATE TABLE ...` with 16,001 columns in the same record group. |
| Splitting into multiple tables | Each table must respect the 16k total across all tables; sum >16k fails | Create two tables with 8k each → success; 9k + 8k → failure. |

### 5️⃣ Optimize & Communicate  
- **Why 16,000?** It balances flexibility for complex schemas while keeping metadata manageable.  
- In practice, design should aim for far fewer columns (hundreds) to avoid performance hits and maintainability issues.  
- When explaining this limit in an interview, emphasize the *system constraint* and its practical implications on schema design.

> **Key takeaway:** A DB2 record group tops out at 16,000 columns across all contained tables; exceeding this triggers a compile‑time error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
