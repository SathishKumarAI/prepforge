---
qid: ing_48a0a55a46__eli5__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 230
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:04-05:00'
sources: []
---

Think of a spreadsheet where each row is a person and one column tells whether they own a car (yes/no). A **bitmap index** is like a tiny sheet that keeps only the “yes” or “no” pattern in a single line of black‑and‑white squares: 1 for yes, 0 for no.  
When you want to find all people who own cars, you just look at this line and read off every 1—no need to scan every row.  
In databases, the column might be “is_active,” “country=US,” or any attribute that has few distinct values. The bitmap (a bit string) is stored once per value; queries combine these lines with simple AND/OR operations (bitwise logic).  
Because bits are tiny and operations are fast on modern CPUs, bitmap indexes give lightning‑quick lookups for sparse, low‑cardinality data—exactly the kind of quick filtering that speeds up many machine‑learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
