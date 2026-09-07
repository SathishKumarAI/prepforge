---
qid: ing_5266a4d6ef__faang__local
question: 'Explain: No models selected — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 399
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:00-05:00'
sources: []
---

**Clarify**  
The question asks why the *SWE‑Bench* leaderboard shows “No models selected”. In SWE‑Bench (a benchmark for software‑engineering NLP tasks) the leaderboard is filtered by user‑selected model families or specific configurations. If none match the current filters, the UI displays that message. Key assumptions: the user has applied some filter, and no available model satisfies it.

**Approach**  
1. Identify which filter(s) are active (model type, language, domain).  
2. Query the internal registry for models matching those criteria.  
3. If the result set is empty, display “No models selected”.  
4. Provide guidance to relax filters or upload a new model.

**Depth**  
- The backend stores metadata in a relational table (`models(id, name, type, language, domain, metrics)`).  
- Filtering executes a SQL `SELECT * FROM models WHERE type = ? AND language = ? …`.  
- If the count is zero, the API returns `{status: “empty”}`.  
- Complexity is O(1) for simple index lookups; if multiple filters exist, it becomes O(k log n).  
- Trade‑off: strict filtering improves relevance but can hide results.

**Edge Cases**  
- Filters misspelled → no match.  
- New models not yet indexed → stale data.  
- Users with no permission to view any model → empty set by design.  
Test scenarios: single filter, multiple filters, wildcard searches, and permission variations.

**Optimize & Communicate**  
Improve UX by suggesting the nearest matching filters or auto‑expanding a relaxed search. In an interview I’d explain that this pattern balances precision with discoverability, using indexed queries for speed and clear error messages to guide users—exactly what FAANG leaders expect in scalable ML product design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
