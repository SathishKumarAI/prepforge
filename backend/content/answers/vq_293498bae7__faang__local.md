---
qid: vq_293498bae7__faang__local
question: What are the four different types of searching information in a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 534
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:14-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for the *four primary search patterns* you can apply when querying a relational table (or any tabular dataset). I’ll assume we’re working with SQL‑style engines, indexes are available, and we care about performance.

**2️⃣ Approach**  
List each pattern, describe its use case, typical index or planner support, and the trade‑offs. Keep the explanation tight but complete.

**3️⃣ Depth**

| Search Type | What it looks for | Typical Index/Mechanism | Complexity / Notes |
|-------------|-------------------|------------------------|--------------------|
| **Exact match** (equality) | `WHERE key = value` | B‑Tree or hash index on the column | O(log n) with B‑Tree; constant time if hash index. Best for primary keys, foreign keys. |
| **Range query** | `WHERE col BETWEEN a AND b` or `<, >, <=, >=` | Same B‑Tree as exact match (supports ordered traversal) | O(log n + k), where *k* is rows in range. Essential for timestamps, numeric ranges. |
| **Prefix / pattern search** | `WHERE col LIKE 'abc%'` | B‑Tree if pattern has leading constant; otherwise full scan or trigram index | O(log n) if prefix match; otherwise O(n). Use when searching by string prefixes. |
| **Full‑text / fuzzy search** | `WHERE MATCH(col) AGAINST('query')` or regex | Specialized inverted/full‑text indexes, or bloom filters for approximate matches | Near‑constant time on index size, but higher memory and build cost; suitable for natural language fields. |

**4️⃣ Edge Cases**

* Equality on NULLs → must use `IS NULL`.  
* Range queries crossing partition boundaries need careful planning.  
* Prefix searches with leading wildcard (`%abc`) force scans.  
* Full‑text engines may miss stopwords or require stemming.

**5️⃣ Optimize & Communicate**

- **Index selection:** Choose B‑Tree for equality/range; use trigram or inverted indexes for LIKE and full‑text.  
- **Query hints / partitioning** can reduce scan scope.  
- **Explain plan**: always verify planner chooses the intended index.  

When presenting, walk through each pattern with a concrete example, highlight when each is preferable, and finish by stressing that choosing the right search type directly drives query latency and resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
