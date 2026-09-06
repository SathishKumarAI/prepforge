---
qid: ing_48a0a55a46__think__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 437
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:08:05-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Assumptions**  
   - Ask whether the focus is on relational databases or Big‑Data systems (e.g., Hive/HBase).  
   - Assume we’re dealing with a column that has a low cardinality (few distinct values) and that queries are read‑heavy.  

**2️⃣ Adopt the “Index → Query Plan → Performance” Framework**  
   - Think of a bitmap index as a compressed bitset per distinct value.  
   - Map how the database engine would use it during query evaluation: filter, join, aggregation.  

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Construction** – for each distinct value create a bit vector aligned to rows.  
   2. **Compression** – run‑length or dictionary encode to save space.  
   3. **Query Execution** – retrieve relevant bitmaps, perform logical ops (AND/OR/XOR) to get final row set.  
   4. **Cost Estimation** – compare memory footprint and CPU cycles against B‑Tree indexes for the same column.  

**4️⃣ Avoid Common Traps**  
   - Don’t conflate bitmap indexes with bitmaps used in Bloom filters; they’re different concepts.  
   - Remember that updates can be expensive: rebuilding or patching many bitmaps is costly.  
   - Beware of “bitmap explosion” when cardinality grows (e.g., a user ID column).  

**5️⃣ Sanity‑Check & Communicate**  
   - Verify the cardinality assumption: if > ≈ 1000 distinct values, a bitmap may be wasteful.  
   - Summarize key take‑aways in plain language: “Bitmap indexes are great for low‑cardinality columns where reads dominate; they give sub‑millisecond filter times but can bloat on writes.”  

Follow this mental checklist whenever you’re asked to explain or evaluate an index type in system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
