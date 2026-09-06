---
qid: vq_c366ff29f5__think__local
question: What are the types of Measures?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 383
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:19:38-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- *Measure* here means a numeric metric used in analytics or BI (e.g., sales, revenue).  
- Assume we’re talking about common categories found in data‑warehouse / BI literature rather than every possible custom metric.

**2. Adopt a classification framework**  
Use the three classic “measure types” that align with aggregation logic:  
  * **Aggregatable (summable)** – can be summed across dimensions.  
  * **Non‑aggregatable (non‑summable)** – cannot be simply summed; requires special handling.  
  * **Derived / calculated** – computed from other measures or facts.

**3. Walk through each type step by step**  

- *Aggregatable*: totals, counts, sums, averages of raw numeric columns (e.g., `OrderAmount`, `UnitsSold`).  
- *Non‑aggregatable*: ratios, percentages, rates that need base values to compute (e.g., conversion rate = conversions / visitors).  
- *Derived*: formulas combining other measures or dimensions (e.g., profit = revenue – cost).

**4. Avoid common pitfalls**  
- Don’t lump all “ratio” metrics together; some are truly non‑summable, others can be treated as aggregatable if stored pre‑aggregated.  
- Remember that “average” is a derived measure even though it may look like an aggregatable one.

**5. Validate & communicate**  
- Check that each example fits the definition (e.g., sum of percentages doesn’t make sense).  
- Explain the practical impact: choosing the right type informs how you model the fact table and write queries.  

By following this 5‑step mental map, you can quickly classify any measure in a data‑engineering context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
