---
qid: vq_5d78ad680c__think__local
question: What is a CTE and when should you use it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 437
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:39:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether the question refers to *SQL* (Common Table Expressions) or *Python/C#* (Common Type Expressions).  
   - Assume the interviewer means SQL CTEs, the most common interview topic.  
   - Note that “when should you use it?” implies a discussion of trade‑offs.

**2️⃣ Adopt the “CTE = temporary named result set” mental model**  
   - Remember: `WITH name AS (query)` creates a reusable sub‑query.  
   - Key properties: readability, recursion support, and single‑execution cost in many engines.

**3️⃣ Step‑by‑step reasoning**  
   1. *Identify use‑cases*: complex joins, self‑joins, recursive hierarchies, or repeated sub‑queries.  
   2. *Evaluate alternatives*: inline views, temp tables, derived tables.  
   3. *Match the trade‑offs*: CTEs improve clarity; recursion is unique to CTEs; some engines materialize vs. inline substitute.  
   4. *Formulate a concise answer*: “Use a CTE when you need a readable, reusable sub‑query—especially for recursive logic or when the same result set is referenced multiple times.”

**4️⃣ Common traps to avoid**  
   - Mixing up CTEs with temporary tables; they behave differently in terms of persistence.  
   - Assuming all engines materialize CTEs (some optimize away).  
   - Over‑using CTEs for trivial one‑off sub‑queries where a derived table is clearer.

**5️⃣ Sanity‑check & verbalise**  
   - Re‑state the core: “A CTE names a query that can be referenced in the main statement; use it when you want cleaner syntax, recursion, or to avoid duplicating logic.”  
   - Confirm the answer covers readability, recursion, and performance nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
