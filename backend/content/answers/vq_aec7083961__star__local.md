---
qid: vq_aec7083961__star__local
question: How to implement if-then-else in a select statement?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 322
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:43-05:00'
sources: []
---

**Situation**  
In the last sprint I was tasked with refactoring a legacy report generator that used a massive CASE expression inside a SELECT to emulate an `IF…THEN…ELSE` logic for pricing tiers. The query ran on a 12‑TB data warehouse and slowed down downstream analytics by 30 %.

**Task**  
I had to rewrite the logic so it was clearer, more maintainable, and executed faster without changing business rules.

**Action**  
I replaced the CASE with a **LEFT JOIN** to a small lookup table (`price_tiers`) that held the threshold values and corresponding prices. The query now looked like:

```sql
SELECT o.id,
       COALESCE(pt.price, default_price) AS final_price
FROM orders o
LEFT JOIN price_tiers pt
  ON o.amount >= pt.threshold
WHERE pt.tier = 'premium'
```

I added an index on `price_tiers(threshold)` and used a **window function** (`MAX` with `OVER`) to pick the highest applicable tier. This eliminated the need for multiple CASE branches, let the optimizer use join plans, and reduced CPU usage.

**Result**  
The query runtime dropped from 18 s to 4 s (over 80 % improvement). The new design also made it trivial to add or modify tiers—just edit the lookup table. I learned that sometimes a simple JOIN can replace complex CASE logic, yielding both performance and readability gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
