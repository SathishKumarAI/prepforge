---
qid: vq_1c8b668257__faang__local
question: Which of the following is not correct about Cursor ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 372
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:17-05:00'
sources: []
---

**Clarify**

You’re asking which statement *about cursors* is **incorrect**.  
Assumptions:  
- “Cursor” refers to database cursor (e.g., in SQL).  
- The options are multiple‑choice statements about cursor behavior.

**Approach**

1. Enumerate the typical properties of a cursor.  
2. Map each given statement to those properties.  
3. Identify the one that violates standard semantics.

**Depth**

| Statement | Correctness | Reason |
|-----------|-------------|--------|
| A. *A cursor can be positioned on any row.* | ✅ | Cursors are movable across result sets. |
| B. *Cursors are read‑only by default.* | ❌ | Most DB engines allow updatable cursors unless declared `READ ONLY`. |
| C. *`FETCH NEXT` moves the cursor forward one row.* | ✅ | Standard fetch semantics. |
| D. *A cursor cannot be used in a transaction.* | ❌ | Cursors are fully supported inside transactions. |

Thus, **Statement B** (“Cursors are read‑only by default”) is not correct.

**Edge Cases**

- Some DBs (e.g., MySQL) disallow updateable cursors entirely; the statement would be *correct* in that narrow context.  
- If the question originates from a specific database’s documentation, verify its defaults.

**Optimize & Communicate**

Explain that while many systems default to read‑only for safety, you can explicitly declare an updatable cursor (`FOR UPDATE`). Highlight this nuance to show depth and awareness of implementation differences—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
