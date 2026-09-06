---
qid: vq_32ebb5517f__think__local
question: What are the types of Calculated columns available ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 470
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:23:27-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *“Calculated columns”* usually refers to SQL Server/Power BI features, but similar concepts exist in other DBMSs (e.g., computed columns in MySQL).  
   - Assume we’re talking about relational databases that support user‑defined expressions stored as part of a table’s schema.

**2️⃣ Identify the mental model / taxonomy**  
   - Think of calculated columns as *derived attributes* grouped by **how they are defined**:
     1. **Expression‑based (deterministic)** – pure formulas using other columns and constants.
     2. **Computed with functions** – involve built‑in or user‑defined functions.
     3. **Persisted vs. non‑persisted** – stored on disk or recomputed each query.
     4. **Virtual / generated** – not physically stored (e.g., MySQL `GENERATED ALWAYS AS`).
   - Also note *indexability* and *updatability* constraints.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. List all categories that exist in popular systems.  
   2. For each, give a concise definition and typical syntax snippet.  
   3. Highlight any system‑specific nuances (e.g., `PERSISTED` keyword in SQL Server vs. `STORED` in MySQL).  

**4️⃣ Common traps to avoid**  
   - Mixing up *computed columns* with *virtual columns* or *generated columns*.  
   - Forgetting that some DBMSs don’t allow updates on computed columns unless marked as `PERSISTED`.  
   - Assuming all calculated columns are indexed automatically; indexes must be added explicitly.

**5️⃣ Sanity‑check & communicate**  
   - Verify against the documentation of at least two major DBMSs (SQL Server, MySQL, PostgreSQL).  
   - Summarize in a table: *Type*, *Syntax*, *Storage behavior*, *Indexability*.  
   - End with a quick example that ties all types together for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
