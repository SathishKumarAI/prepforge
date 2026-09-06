---
qid: vq_3dd58ca14a__faang__local
question: What is a Fact Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:46-05:00'
sources: []
---

**Clarify**  
A *Fact Table* is the central table in a dimensional data model (star/snowflake schema). It stores quantitative business metrics—sales, revenue, units sold, etc.—and references dimension tables via surrogate keys. I’ll assume we’re talking about OLAP warehouses, not transactional OLTP.

**Approach**  
1. Define what constitutes a fact (measurable, numeric).  
2. Explain its relationships to dimensions.  
3. Highlight key design choices: grain, type (consolidated vs. transaction), and indexing.

**Depth**  
- **Grain:** The smallest unit of analysis; e.g., one row per sales transaction or per day‑store‑product combination.  
- **Types:**  
  - *Consolidated* facts aggregate data (daily revenue).  
  - *Transactional* facts capture each event (individual sale).  
- **Columns:** Surrogate keys to dimensions + fact columns (measures) + optional timestamps for slowly changing dimensions.  
- **Denormalization & indexing:** Fact tables are wide; use bitmap or clustered indexes on foreign keys and time columns to speed aggregations.

**Edge Cases**  
- Missing dimension rows → surrogate key nulls or “unknown” surrogate.  
- Slowly changing dimensions require proper surrogate handling (SCD1/2).  
- High cardinality dimensions can cause sparse joins, affecting performance.

**Optimize & Communicate**  
- Partition fact tables by time to improve query locality and enable truncation of old partitions.  
- Use columnar storage (e.g., Parquet) for better compression and scan speed in analytical engines like Snowflake or BigQuery.  
- Explain trade‑offs: denormalized facts yield faster reads but higher write costs; normalized dimensions keep consistency but add join overhead.

This structure showcases clear problem understanding, systematic design thinking, and depth of knowledge—all key to a strong FAANG interview response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
