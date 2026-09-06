---
qid: vq_ca9d094fcf__faang__local
question: What is the datatype difference between a fact and dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 532
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:44-05:00'
sources: []
---

**Clarify**  
> *What exactly do you mean by “datatype difference” between a fact and a dimension table?*  
I’ll assume you’re asking: *Do facts store different data types than dimensions, and if so why?* I’d also confirm whether we’re talking about relational (SQL) schemas or columnar storage in a lakehouse.

**Approach**  
1. Outline typical star‑schema roles.  
2. Map common datatypes to each role.  
3. Explain the rationale behind those choices.  

**Depth**  
| Table | Typical Data Types | Why |
|-------|--------------------|-----|
| **Fact** | • `INT`/`BIGINT` for surrogate keys<br>• `DECIMAL` or `NUMERIC` for measures (revenue, quantity)<br>• `TIMESTAMP` / `DATE` for fact time stamps | Facts record *quantitative* events; precision matters. Surrogate keys avoid FK cardinality blow‑up. |
| **Dimension** | • `INT`/`BIGINT` surrogate key<br>• `VARCHAR`, `CHAR`, `TEXT` for descriptive attributes (product name, category)<br>• `DATE` or `INTERVAL` for effective dates | Dimensions are *categorical*; string/text fields dominate. Dates support slowly changing dimensions. |

In columnar stores (Parquet, ORC), the same mapping holds but we often use **dictionary encoding** on VARCHARs to save space and accelerate scans.

**Edge Cases**  
- Fact tables with **time‑series** metrics may need `FLOAT`/`DOUBLE`.  
- Dimensions that store *measure* attributes (e.g., product price) could mix numeric types.  
- Legacy systems might use legacy datatypes (`NUMERIC(18,2)` vs `DECIMAL`).  

Test for: nullability constraints, precision loss on large numbers, and join cardinality impact.

**Optimize & Communicate**  
- Keep surrogate keys small (`INT`) unless > 2B rows → `BIGINT`.  
- Use `DECIMAL` with minimal scale to avoid storage bloat.  
- In Snowflake/BigQuery, consider `NUMERIC` vs `FLOAT64` based on required accuracy.  

Explain that the datatype strategy is driven by *usage patterns*: facts need exact, high‑precision measures; dimensions prioritize descriptive text and efficient joins. This keeps ETL simple, query fast, and storage cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
