---
qid: ing_fa35079b07__fp__local
question: 'Explain: You may also like — What Is Cardinality in a Database? - SolarWinds
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 309
total_tokens: 489
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:51:43-05:00'
sources: []
---

**Cardinality in a database is the *exact number of distinct values* that an attribute (column) can take across all rows.**  
Why this matters: when a query filters on a column, the optimizer must estimate how many rows will satisfy that predicate to choose the best plan (index scan vs full table scan). The only reliable way to do this is to know how many unique values exist—if a value occurs once, an index lookup can be almost instant; if it repeats thousands of times, the same lookup is expensive.  

From first principles: a database stores a multiset of tuples. For any column *C*, define the set  
\(V(C)=\{v \mid \exists t \in T, t.C=v\}\).  
Cardinality = |V(C)|. This simple counting directly links to **information theory**—the more unique values, the higher the entropy and the less predictable a value is, which in turn influences compression ratios and join selectivity.  

A non‑obvious insight: cardinality is *not* merely “how many rows” but “how many distinct entries”. A column with 10 000 rows can have cardinality 1 (all identical) or 10 000 (every row unique). The optimizer’s cost model hinges on this distinction. Thus, accurate cardinality statistics are the backbone of efficient query planning and a direct reflection of data diversity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
