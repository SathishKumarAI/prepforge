---
qid: q087
question: "What is the difference between a star schema and a snowflake schema?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** I joined a retail analytics team where the warehouse used a heavily normalized snowflake schema. Analysts complained their queries needed six or seven joins just to slice sales by product category and region, and BI report load times were painful.

**Task** I was asked to evaluate whether to keep the snowflake design or move to a star schema for our core sales mart.

**Action** I laid out the tradeoff clearly. In our snowflake schema, dimensions were normalized into sub-tables, so product linked to category, which linked to department, minimizing redundancy but multiplying joins. A star schema instead keeps a central fact table surrounded by flat, denormalized dimension tables, so you join the fact directly to one product dimension that already contains category and department. I rebuilt the sales mart as a star, accepting some storage redundancy in exchange for query simplicity, and kept the snowflake only where a dimension genuinely needed to be shared and change-controlled.

**Result** Average query joins dropped from seven to two, and dashboard load time fell by about 60%. My takeaway: snowflake optimizes for storage and integrity, star optimizes for query speed and analyst ergonomics, and for BI the star usually wins.
