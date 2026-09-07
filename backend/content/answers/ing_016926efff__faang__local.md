---
qid: ing_016926efff__faang__local
question: What Is Cardinality in a Database? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 498
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:17-05:00'
sources: []
---

**1️⃣ Clarify**

> *What is cardinality in a database?*  
> I’ll explain it as the number of distinct values that an attribute (column) can take, and how that influences query optimization.  
> Assumptions to confirm:  
> – We’re talking about relational databases, not NoSQL key‑value stores.  
> – The context is SQL query planning and index selection.

**2️⃣ Approach**

1. Define cardinality formally.  
2. Show its role in statistics & cost‑based optimizers.  
3. Illustrate with examples (high vs low cardinality).  
4. Discuss measurement, indexing, and impact on joins/filters.

**3️⃣ Depth**

Cardinality = *distinct value count* for a column.  
- **High cardinality**: many unique values (e.g., GUIDs, timestamps).  
  → Indexes help; scans become expensive if predicates are selective.  
- **Low cardinality**: few distinct values (e.g., gender, status).  
  → Bitmap indexes or partitioning can be efficient; full table scans may be cheaper.

Cost‑based optimizers use histogram statistics to estimate row counts for predicates like `WHERE column = value`. Accurate cardinality leads to better join order, index usage, and buffer pool decisions. Misestimation causes suboptimal plans (e.g., unnecessary nested loops).

**4️⃣ Edge Cases**

- **NULL values**: counted separately; can skew estimates.  
- **Sparse columns / compressed data**: statistics may be misleading if not refreshed.  
- **Dynamic schemas**: cardinality changes frequently—requires regular `ANALYZE`.  
- **Data skew**: a few values dominate; histograms must capture this.

**5️⃣ Optimize & Communicate**

To keep the optimizer happy:  
1. Run `ANALYZE` or equivalent after bulk loads.  
2. Use extended statistics for correlated columns.  
3. For low‑cardinality columns, consider bitmap indexes.  
4. If cardinality is extremely high, evaluate partial indexes or materialized views.

When explaining to stakeholders: “Cardinality tells the engine how selective a filter will be; better stats mean faster queries.”  

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
