---
qid: vq_89036bdf7f__think__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 364
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:59:41-05:00'
sources: []
---

We must follow developer instructions: provide numbered thought-process, not answer itself. 150-220 words. Use markdown allowed. Provide five points.**1. Clarify the question & set assumptions**  
   - Assume the user knows what a subquery is but not its two flavours.  
   - Define “regular” (non‑correlated) vs. “correlated” in plain terms.  

**2. Adopt a mental model / framework**  
   - Think of a subquery as a function call: it can be independent or dependent on the outer query.  
   - Visualize two layers: *outer* and *inner*, with data flow arrows.

**3. Step‑by‑step reasoning**  
   1. **Regular (non‑correlated)** – executed once, produces a result set that the outer query uses.  
   2. **Correlated** – inner query references columns from the outer query; it runs repeatedly—once per row of the outer result.  
   3. Note the execution order: regular → single run; correlated → nested loops.

**4. Common traps to avoid**  
   - Mixing up “subquery” with “derived table.”  
   - Forgetting that correlated subqueries can be costly because they re‑execute.  
   - Assuming all subqueries are correlated when only the inner reference matters.

**5. Sanity‑check & communicate**  
   - Test mentally: pick a simple `SELECT` and add a subquery; see if it uses an outer column.  
   - Explain to the user with a concise example, then ask if they’d like deeper dive into performance implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
