---
qid: vq_21f3bc1bbf__think__local
question: What is Table Variable? Explain its advantages and disadvantages.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 424
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:15:55-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Assumptions**  
First, ask whether “Table Variable” refers to SQL Server’s `@tablevar` syntax or a more generic concept (e.g., in-memory tables). Assume the context is relational DBs—especially T‑SQL—since that’s where table variables are most common.  

**2️⃣ Adopt a Structured Framework**  
Use the *definition → mechanics → pros/cons → best‑practice* flow:  
- Define what a table variable is (a typed, scoped in‑memory table).  
- Explain how it’s declared (`DECLARE @tbl TABLE (…)`).  
- Contrast with temp tables (`CREATE TABLE #tmp …`).  

**3️⃣ Step‑by‑Step Reasoning**  
1. **Syntax & Scope** – local to batch/proc; auto‑deletes on exit.  
2. **Metadata & Statistics** – minimal stats, no query plan caching.  
3. **Concurrency & Locking** – simpler locking (no locks for inserts).  
4. **Performance Factors** – size limit, optimizer assumptions.  

Map each point to an advantage or disadvantage.  

**4️⃣ Avoid Common Pitfalls**  
- Don’t conflate table variables with temp tables; their behavior differs markedly.  
- Beware of over‑generalizing performance claims—small tables are fine, large ones may suffer.  
- Remember that certain operations (e.g., `DROP TABLE` inside a cursor) aren’t allowed on table vars.  

**5️⃣ Sanity‑Check & Communicate Clearly**  
Re‑read the answer to ensure each advantage/disadvantage is directly tied back to the mechanics. Summarize in bullet form so the listener can quickly see the trade‑offs, and suggest when to choose one over the other (e.g., “use a table variable for ≤ 10k rows where isolation isn’t critical”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
