---
qid: ing_61deeffee9__star__local
question: 'Explain: Multi-Step Aggregation: Where Schema Grounding Matters Most'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 337
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:49-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we built an AI assistant that answered user queries about their portfolio by aggregating data from our relational database and external market feeds. One day, the client reported incorrect totals for “total unrealized gains” after a quarterly review.

**Task:**  
I had to diagnose why the aggregation was wrong, fix it, and prevent future mis‑calculations across all multi‑step queries that combined internal tables with third‑party APIs.

**Action:**  
First, I mapped every field used in the query chain to its schema definition—column types, units, and source system. I discovered a hidden “currency” column in the external feed that was being treated as a string during joins. Using a data‑pipeline step, I added an explicit type cast (`CAST(currency_amount AS DECIMAL(12,2))`) and enforced unit conversion at the schema level with a JSON‑based metadata registry. Then I rewrote the aggregation pipeline to reference this grounded schema instead of raw column names, adding runtime validation that each step matched the declared types. Finally, I automated a schema‑grounding test suite that runs nightly against sample queries.

**Result:**  
The corrected totals now match the official audit figures within ±0.01%, and the new tests catch 95 % of potential type mismatches before deployment. I learned that rigorous schema grounding is essential when chaining multiple data sources; it turns ambiguous joins into deterministic, auditable operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
