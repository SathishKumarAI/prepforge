---
qid: vq_1e2be9f23a__faang__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 418
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:35-05:00'
sources: []
---

**Clarify**  
You’re asking how a *table scan* differs from a *seek* in database access.  
Assumptions I’d confirm: we’re talking about relational engines that use indexes (e.g., MySQL, PostgreSQL, SQL Server), and the goal is to explain performance implications.

**Approach**  
1. Define each operation.  
2. Explain how they’re chosen by a query planner.  
3. Contrast cost, I/O patterns, and typical use cases.  

**Depth**  
- **Table Scan**: The engine reads every row in the table (or relevant partition). It ignores indexes, so all pages are fetched sequentially or randomly depending on storage layout. Cost ≈ #rows × page size; CPU spends time filtering rows that satisfy predicates.  
- **Seek**: Uses an index to jump directly to matching keys. The engine reads only the index pages plus the leaf‑level data (clustered index) or the referenced table rows (non‑clustered). Cost is logarithmic in the number of indexed entries, often O(log n), and I/O is minimal.

- **Planner Decision**: Estimates row counts from statistics; if expected matches are < ~10% of rows, it prefers a seek; otherwise a scan may be cheaper because reading the entire table sequentially can be faster than many random seeks.

**Edge Cases**  
- Full‑text or expression indexes may still trigger scans.  
- Small tables: scans can beat index lookups due to index overhead.  
- Outdated statistics can mislead the planner into choosing a scan when a seek would be better (and vice versa).

**Optimize & Communicate**  
Explain that tuning involves keeping statistics fresh, ensuring appropriate indexing, and sometimes forcing a hint. When presenting, I’d illustrate with a simple query diagram showing index traversal vs table traversal, highlighting I/O counts and CPU cycles, to make the trade‑off crystal clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
