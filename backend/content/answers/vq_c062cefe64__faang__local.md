---
qid: vq_c062cefe64__faang__local
question: Which of the following is not correct about the “TABLE” datatype ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 394
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:27-05:00'
sources: []
---

**Clarify**  
The interview asks which statement *about the SQL `TABLE` data type* is **incorrect**.  
Assumptions: we’re dealing with ANSI‑SQL `TABLE` types used in stored procedures (e.g., `DECLARE @t TABLE(...)`). The options likely compare features such as scope, persistence, indexing, etc.

---

### Approach
1. List typical properties of a `TABLE` type.  
2. Compare each given statement against those facts.  
3. Mark the one that violates any property.  

---

### Depth

| Property | True for `TABLE` type |
|----------|-----------------------|
| **Local to scope** | Yes – lives only in the procedure/function. |
| **Persisted permanently** | No – disappears when execution ends. |
| **Can have indexes** | Yes, primary key or unique constraints are allowed. |
| **Supports NULLs by default** | Yes, unless constrained otherwise. |
| **Can be used as a table variable** | Yes, `DECLARE @t TABLE(...)`. |

If an option states something like *“It is permanently stored in the database and can be queried after the procedure ends”*, that contradicts property 2.

---

### Edge Cases
- A `TABLE` type inside a function cannot be modified; only used for output.  
- Using it as an OUTPUT parameter requires special syntax (`OUTPUT`).  
- Indexes defined are not persisted across sessions.

Testing would involve creating each variant and attempting to query after the procedure completes.

---

### Optimize & Communicate
I’d explain that `TABLE` types are **temporary, scoped** objects—unlike permanent tables. The incorrect statement is the one claiming persistence or global visibility. This concise reasoning demonstrates structured problem‑solving and clear communication expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
