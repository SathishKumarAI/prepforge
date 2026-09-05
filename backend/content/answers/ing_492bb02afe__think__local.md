---
qid: ing_492bb02afe__think__local
question: 'Explain: Track scores — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 444
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:16:27-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - Identify what “track scores” means in the context of *Elasticsearch* (i.e., keeping score values when sorting or aggregating).  
   - Assume the user wants a conceptual explanation, not raw code.  
   - Note that Elasticsearch’s `track_scores` flag can be toggled in queries involving scoring vs. non‑scoring contexts.

**2. Adopt a mental model**  
   - Think of a search query as two stages: *filtering* (binary yes/no) and *scoring* (continuous relevance).  
   - `track_scores` determines whether the engine keeps the score for every hit when it’s not needed for the final result set.

**3. Step‑by‑step reasoning**  
   1. Explain how sorting normally uses document fields, but can also use `_score`.  
   2. Show that when you sort by a field, Elasticsearch can skip computing scores entirely—unless `track_scores:true` is specified.  
   3. Describe the trade‑off: keeping scores costs CPU/memory; dropping them speeds up large result sets.  
   4. Illustrate with an example query that uses both sorting and aggregations, highlighting where `track_scores` comes into play.

**4. Common pitfalls to avoid**  
   - Don’t conflate “score” with “rank”; the score is a numeric value used for ordering but not the final rank in all cases.  
   - Remember that `track_scores:true` only matters when the query would otherwise discard scores (e.g., pure filters).  
   - Avoid assuming all sorting requires scores; field‑based sorting can bypass them.

**5. Sanity‑check & verbalize**  
   - Re‑read the explanation, ensuring you’ve covered: definition, purpose, usage scenarios, trade‑offs.  
   - Summarize in one sentence: “`track_scores` tells Elasticsearch whether to keep per‑document relevance scores when they’re not needed for filtering or sorting, trading performance for potential downstream use.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
