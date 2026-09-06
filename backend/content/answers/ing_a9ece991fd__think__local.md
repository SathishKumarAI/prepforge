---
qid: ing_a9ece991fd__think__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 464
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:15:33-05:00'
sources: []
---

**Metacognitive Road‑Map for Explaining Composite Indexes in ML Systems**

1. **Clarify the scope & assumptions**  
   - Ask: “Do we mean database indexes (e.g., SQL) or feature‑engineering composites?”  
   - Assume a relational context: tables, columns, query patterns, and typical ML pipeline stages.

2. **Choose a mental model**  
   - Map an index to a *lookup table* that speeds up *selection* (`WHERE`) and *ordering* (`ORDER BY`).  
   - Think of a composite as a *multi‑dimensional key*: each column is a dimension, the index stores tuples sorted lexicographically.

3. **Step‑by‑step reasoning**  
   - 1️⃣ Explain single‑column indexes: B‑tree structure, O(log n) lookup.  
   - 2️⃣ Introduce composite: same tree but keys are concatenated (`(a,b,c)`), enabling efficient range scans on the first columns and exact matches on later ones.  
   - 3️⃣ Illustrate use cases in ML: filtering training data by label & timestamp, or joining feature tables on multiple IDs.  
   - 4️⃣ Discuss coverage vs. cardinality: why high‑cardinality first column matters.

4. **Common traps to avoid**  
   - Mixing up *index order* with *query predicates*: the leftmost columns are most powerful.  
   - Over‑indexing: each extra index adds write overhead; in ML pipelines writes (insert training data) can dominate.  
   - Forgetting that composite indexes don’t replace full scans for highly selective queries on non‑leading columns.

5. **Sanity‑check & verbalize**  
   - Test with a toy table: “If we query `WHERE user_id=5 AND event_type='click'`, the index `(user_id, event_type)` will jump straight to all clicks by that user.”  
   - Summarize benefits (speed, reduced I/O) and costs (storage, maintenance), tying back to ML pipeline performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
