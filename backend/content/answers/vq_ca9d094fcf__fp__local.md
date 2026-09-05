---
qid: vq_ca9d094fcf__fp__local
question: What is the datatype difference between a fact and dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 409
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:15-05:00'
sources: []
---

In data warehousing, **facts** and **dimensions** are not merely labeled columns; they embody distinct mathematical roles in a multidimensional model.

| Aspect | Fact Table | Dimension Table |
|--------|------------|-----------------|
| **Purpose** | Stores *measure* vectors (numeric aggregates). | Provides contextual keys for interpreting measures. |
| **Data type** | Predominantly numeric, often **integer/float** because they represent values to be aggregated (sum, avg, count). | Mostly categorical or semi‑structured data (string, date, boolean), rarely used in arithmetic. |
| **Granularity** | Highest resolution; one row per event or transaction. | Coarser; one row per entity (product, customer). |
| **Cardinality** | Very high – millions of rows. | Much lower – thousands to tens of thousands. |
| **Indexing** | Composite primary key of foreign keys; usually clustered on a surrogate key for fast joins. | Surrogate key plus natural key; indexed on attributes that drive slicing (e.g., date, region). |

Why this separation?  
From an **information‑theoretic** view, facts are *quantitative* information whose entropy is dominated by numeric precision. Dimensions, however, carry *qualitative* metadata, reducing uncertainty about the context of each fact. This asymmetry dictates their storage: facts need fast aggregation (numeric columns in columnar formats), whereas dimensions benefit from compression and dictionary encoding (categorical strings).  

**Non‑obvious insight:** A dimension’s cardinality directly limits the granularity of a fact table’s aggregates; if you expose a high‑cardinality attribute as a dimension, you risk “sparse” fact tables that degrade query performance. Thus, dimensional modeling is not just naming—it's a deliberate choice to balance precision and context, guided by entropy and computational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
