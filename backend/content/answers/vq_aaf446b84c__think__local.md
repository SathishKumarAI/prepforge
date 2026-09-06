---
qid: vq_aaf446b84c__think__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 462
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:11:16-05:00'
sources: []
---

**1. Clarify the question and set assumptions**  
   - Identify that “index scan” and “index seek” refer to SQL Server execution‑plan operators (or similar RDBMS terms).  
   - Assume the user wants a conceptual distinction rather than implementation details.  
   - Note any ambiguity: some DBs use “seek” for both; clarify by focusing on the intent of each operator.

**2. Adopt a mental model**  
   - Think of an index as a sorted list (like a phone book).  
   - *Seek* = jumping directly to the exact page(s) that contain the target key(s).  
   - *Scan* = reading through every entry in the index (or large portions) because the query can’t pinpoint a small subset.

**3. Step‑by‑step reasoning toward an answer**  
   1. Explain what an “index seek” does: uses search predicates to locate specific rows, resulting in few I/O operations.  
   2. Describe an “index scan”: no usable predicate or the predicate is too broad (e.g., `WHERE status = 'A'` on a non‑unique column), so the engine reads all index pages sequentially.  
   3. Highlight that a scan can still be cheaper than a full table scan if the index covers all required columns (covering index).  
   4. Mention that sometimes a “clustered index seek” is essentially a single read because the data resides in order.

**4. Common traps to avoid**  
   - Don’t conflate *scan* with *full table scan*.  
   - Avoid assuming every scan is bad; context matters (e.g., small tables).  
   - Don’t forget about “index scans” that are actually covering and may be optimal.

**5. Sanity‑check & verbalize the answer**  
   - Re‑phrase: “Seek = jump to a few rows, Scan = read many rows.”  
   - Use an analogy (phone book) to confirm clarity.  
   - Verify word count (~180 words) before delivering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
