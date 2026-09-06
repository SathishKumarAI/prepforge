---
qid: ing_57109faba2__think__local
question: 'Explain: Script based sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 451
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:45:28-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Understand how a “script‑based sort” works in Elasticsearch and why you’d use it.  
- *Assumptions*: The reader knows basic ES concepts (index, query, hit) but not scripting or sorting nuances.

**2️⃣ Mental model / framework**  
1. **Sorting pipeline** – query → filter → score → sort → pagination.  
2. **Sort types** – field‑based (lexicographic/num), custom scripts, `_score`, function scores.  
3. **Scripting engine** – Painless is default; other engines exist.  
4. **Execution context** – script runs per document during the sort phase.

**3️⃣ Step‑by‑step reasoning**  
- Explain the *syntax* (`"sort": [{ "_script": { "type":"number", ... } }]`).  
- Break down the components: `type`, `script`, `params`, `order`.  
- Show how the script receives a document (`doc['field'].value`) and returns a numeric/lexical value.  
- Discuss *performance*: sorting is expensive; scripts run in RAM, not on disk.  
- Provide an example: boosting docs by age or custom field.  
- Mention caching of compiled scripts and pitfalls (e.g., `params` usage).

**4️⃣ Common traps & wrong turns**  
- Mixing up `_score` vs script sort.  
- Forgetting to set `"type":"number"` for numeric results.  
- Using expensive operations in the script (like regex or external calls).  
- Assuming scripts are always fast—highlight CPU cost.

**5️⃣ Sanity‑check & communicate**  
- Verify that the example actually sorts as intended by running a small query.  
- Summarize: “Script sort lets you compute a per‑doc value on the fly; use sparingly, cache compiled scripts, and prefer field sorts for performance.”  

This structure keeps the explanation focused, covers pitfalls, and gives actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
