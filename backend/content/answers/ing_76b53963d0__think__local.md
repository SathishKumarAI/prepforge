---
qid: ing_76b53963d0__think__local
question: 'Explain: Sort mode option — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 490
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:50:38-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
   - The user asks about a *“Sort mode option”* in *Elasticsearch*, specifically how it affects search results.  
   - Assume they’re familiar with basic Elasticsearch concepts (index, query, scoring) but need an explanation of the `sort_mode` parameter and its practical impact.

**2. Adopt a mental model / framework**  
   - Treat sorting as two stages: **scoring** (how relevant each document is) and **ordering** (the final list).  
   - View `sort_mode` as a *policy* that tells Elasticsearch how to combine multiple values per field into a single score or sort key.

**3. Step‑by‑step reasoning**  
   1. Identify fields with multi‑value docs (e.g., tags, dates).  
   2. Explain each `sort_mode`: `min`, `max`, `sum`, `avg`, `median`.  
   3. Illustrate how the chosen mode aggregates those values into a single numeric key.  
   4. Show how that key is used to order results, overriding or complementing the default relevance score.  
   5. Mention default behavior (`min` for ascending, `max` for descending) and why it matters.

**4. Common traps & wrong turns**  
   - Forgetting that `sort_mode` only applies to *multi‑valued* fields.  
   - Assuming it changes the relevance score itself; it actually creates a separate sort key.  
   - Mixing up ascending/descending defaults (`min` vs `max`).  
   - Ignoring performance implications of aggregating many values.

**5. Sanity‑check & verbalize**  
   - Rephrase the explanation in plain terms: “It tells Elasticsearch which value to use when a field has several numbers, so you can decide whether the smallest or largest (or average, etc.) drives the order.”  
   - Verify with a quick mental example (e.g., documents with prices 10 & 15, sorting ascending → `min` gives 10).  

By following this structured approach, you’ll deliver a clear, accurate answer that highlights purpose, usage, and pitfalls of the `sort_mode` option.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
