---
qid: ing_81fcdab5ff__think__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 489
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:34:04-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify that the user wants a conceptual explanation of *SSTable compaction* as used in ScyllaDB.  
- Assume familiarity with key‑value stores, but not deep knowledge of Scylla’s internals.  
- Decide to focus on what SSTables are, why they need compaction, and how different strategies (e.g., size‑tiered, leveled) differ.

**2️⃣ Choose a mental model**  
- Think of the database as a write‑once log: every mutation is appended to an immutable SSTable.  
- Visualize compaction as “garbage collection” that merges these logs into fewer, larger files while discarding obsolete data.  
- Map each strategy onto this model: size‑tiered → merging random small tables; leveled → structured levels with bounded sizes.

**3️⃣ Step‑by‑step reasoning**  
1. Explain SSTable creation and immutability.  
2. Show the problem: many tiny SSTables → read amplification, disk space waste.  
3. Introduce compaction as a background process that reads multiple SSTables, merges them, writes new ones, and deletes old files.  
4. Detail strategy differences: trigger conditions, size bounds, merge fan‑out, impact on read/write latency.  
5. Highlight how ScyllaDB’s implementation optimizes for parallelism and minimal pause times.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate compaction with garbage collection in programming languages.  
- Resist oversimplifying by saying “compaction just deletes old data”; it also reorganises to improve read locality.  
- Beware of mixing up *SSTable* (the on‑disk format) with *table* (logical schema).

**5️⃣ Sanity‑check & articulate**  
- Re‑frame the explanation in a single sentence: “Compaction is ScyllaDB’s way of turning many immutable SSTables into fewer, larger ones to keep reads fast and storage efficient.”  
- Verify that each strategy’s trade‑offs (latency vs. space) are clear.  
- End with an example or analogy (e.g., merging piles of sorted books).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
