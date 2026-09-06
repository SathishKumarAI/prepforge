---
qid: vq_271238e287__think__local
question: What is granularity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 433
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:18:41-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *Granularity* can mean “level of detail” in data or “size of units” in a system.  
   - Assume the question refers to **data granularity** (how fine‑grained your facts are) rather than storage‑level granularity.

**2️⃣ Mental model: “Detail vs. Aggregation”**  
   - Think of a hierarchy: raw event → record → dimension → fact table.  
   - Granularity is the point in that chain where you stop splitting or aggregating.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the *entity* (e.g., sales).  
   2. Decide what attributes matter: timestamp, product ID, customer ID, quantity, price, etc.  
   3. If you keep all those fields per transaction → **fine granularity** (row‑level).  
   4. If you roll up to daily totals per product → **coarser granularity** (daily aggregates).  
   5. The choice depends on query needs, storage cost, and update frequency.

**4️⃣ Common traps**  
   - Confusing *data volume* with *granularity*. More rows ≠ finer granularity.  
   - Assuming a “one‑size‑fits‑all” level; different business questions need different granularities.  
   - Over‑aggregating and losing the ability to drill down later.

**5️⃣ Sanity check & communicate**  
   - Ask: *What answer must queries provide?* If you need per‑order details, keep fine granularity.  
   - Explain with an example: “If we store sales at the order line level (product, quantity, price), that’s row‑level granularity; if we only store daily totals per product, that’s daily‑granular.”  

This structured approach lets you decide and articulate granularity confidently in any data engineering context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
