---
qid: vq_d47c020cec__faang__local
question: what are the operation of dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 562
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:28-05:00'
sources: []
---

**1️⃣ Clarify**  
> *“What are the operations you can perform on a pandas‑style DataFrame?”*  
Assumptions:  
- Working with tabular data in memory (pandas, PySpark, or similar).  
- Operations include transformations, aggregations, filtering, joins, and I/O.

---

**2️⃣ Approach**  
Outline major categories → list representative verbs → explain each briefly.  

---

**3️⃣ Depth**

| Category | Typical Ops | What it does |
|----------|-------------|--------------|
| **Inspection** | `head()`, `tail()`, `info()`, `describe()` | Quick schema & stats |
| **Selection / Filtering** | `.loc[]`, `.iloc[]`, boolean masks, `query()` | Pick rows/cols by label or position |
| **Transformation** | `assign()`, `apply()`, vectorized ops (`df['c'] = df['a'] + df['b']`) | Create/modify columns |
| **Aggregation / Grouping** | `groupby().agg()`, `pivot_table()` | Summarize by keys |
| **Sorting & Ranking** | `sort_values()`, `rank()` | Order data |
| **Joining / Merging** | `merge()`, `concat()`, `join()` | Combine tables |
| **Reshaping** | `melt()`, `pivot()`, `stack()/unstack()` | Change dimensionality |
| **Missing‑Data Handling** | `fillna()`, `dropna()`, interpolation | Clean gaps |
| **Window Functions** | `rolling()`, `expanding()`, `ewm()` | Moving statistics |
| **Set Operations** | `union()`, `intersection()`, `difference()` | Relational algebra |
| **I/O** | `read_csv()/to_csv()`, `read_sql()`, `to_parquet()` | Persist / load |

---

**4️⃣ Edge Cases**

- Large‑scale data → switch to Spark DataFrame; operations map but memory limits differ.  
- Mixed types in a column → vectorized ops may fail; cast first.  
- Duplicate indices → `groupby` or `merge` can produce unexpected Cartesian products.

---

**5️⃣ Optimize & Communicate**

> *“I’d benchmark the heavy group‑by on a sample, switch to `categorical` dtypes for low‑cardinality columns, and consider using Dask or Spark when size exceeds RAM. I’ll explain trade‑offs: faster in‑memory ops vs. scalability.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
