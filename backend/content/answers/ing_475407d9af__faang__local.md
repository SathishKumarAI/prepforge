---
qid: ing_475407d9af__faang__local
question: 'Explain: pass@k — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 472
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:57-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* In recommendation or search, we want to know if the system returns a relevant item early enough. *pass@k* measures whether at least one “good” result appears in the top‑k list.  
Assumptions: (a) relevance is binary (pass/fail). (b) k is fixed per query. (c) We have ground‑truth labels for evaluation.

**2️⃣ Approach**  
1. For each query, generate a ranked list of N candidates.  
2. Check the first k items; if any item has label = 1 → pass; else fail.  
3. Compute the fraction of queries that pass:  

\[
\text{pass@k}=\frac{\#\text{queries with at least one relevant in top‑k}}{\#\text{total queries}}
\]

This is a simple accuracy metric.

**3️⃣ Depth**  
- *Complexity:* O(Q·k) where Q = #queries.  
- *Observability:* Because it’s a binary indicator per query, we can log the index of the first relevant hit (e.g., 1‑based rank). Aggregating this across time gives a latency‑to‑relevance curve.  
- *Trade‑offs:* pass@k ignores how many relevant items appear after k or their ordering beyond the first hit; it’s insensitive to ranking quality once a hit is found.

**4️⃣ Edge Cases**  
- No ground truth → cannot compute.  
- All queries have no relevant items → pass@k = 0, but may still be useful for diagnosing data sparsity.  
- Very small k (e.g., k=1) leads to high variance; need enough queries to stabilize.

**5️⃣ Optimize & Communicate**  
- *Improvement:* Use cumulative metrics like *recall@k* or *mean reciprocal rank* to capture richer ranking quality.  
- *Narration:* “pass@k gives us a quick sanity check that the model is surfacing something useful early. By logging the exact hit position, we can see how quickly relevance improves over time and spot drift.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
