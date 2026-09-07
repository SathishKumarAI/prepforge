---
qid: ing_cb14a924ed__faang__local
question: 'Explain: Cardinality in Database Example — What Is Cardinality in a Database?
  - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 512
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:40-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *cardinality* as used in relational databases, citing the SolarWinds blog example. Assume the audience knows SQL basics but may not know why cardinality matters for query performance.

**Approach**  
1. Define cardinality formally (distinct value count).  
2. Explain high vs low cardinality and its impact on indexes/joins.  
3. Walk through the SolarWinds scenario (e.g., a table of device logs with columns like `Severity`, `DeviceID`).  
4. Tie it to optimizer decisions: statistics, histogram, cost estimates.  
5. Mention tools (EXPLAIN, DBMS_STATS) and when cardinality misestimation hurts.

**Depth**  
Cardinality = number of distinct values in a column or combination of columns.  
- **High cardinality** → many unique values (e.g., primary key). Indexes are highly selective; scans are costly but lookups fast.  
- **Low cardinality** → few distinct values (e.g., boolean flags). Indexes may be less useful; full-table scans can be cheaper.  

In the SolarWinds example, `Severity` has only 4 levels (`INFO`, `WARN`, `ERROR`, `CRITICAL`). Its low cardinality means a bitmap index is efficient; a B‑tree would waste space. Conversely, `DeviceID` is unique per log entry (high cardinality); a regular B‑tree index dramatically speeds up joins to the devices table.

The query optimizer uses histogram statistics to estimate cardinality for predicates. If misestimated, it may choose suboptimal join order or avoid using an index, leading to slower plans.

**Edge Cases**  
- NULL values: counted separately; can inflate cardinality if many.  
- Skewed data: one value dominates (e.g., `Severity = 'INFO'` 90%). Histograms mitigate this.  
- Dynamic workloads: statistics stale → re‑collect with `ANALYZE`.

**Optimize & Communicate**  
Explain that maintaining accurate statistics and choosing the right index type based on cardinality can cut query latency by orders of magnitude. Convey this by showing before/after plan costs, highlighting how SolarWinds adjusted their indexing strategy to match column cardinalities. This demonstrates clear, data‑driven optimization—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
