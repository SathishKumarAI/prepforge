---
qid: vq_ca9d094fcf__aws__local
question: What is the datatype difference between a fact and dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my senior data‑engineering role at **X Corp**, I led the redesign of our analytics platform that served ~2 M daily users. The interview question on fact vs. dimension tables is a classic one, so I framed it in terms of *Customer Obsession* and *Dive Deep*.

**Situation / Task**  
Our legacy warehouse mixed transactional facts with descriptive metadata, causing query latency to climb from 2 s to >30 s for ad‑hoc BI reports. I needed a clear schema separation to restore performance while keeping the team’s learning curve low.

**Action**  
I defined:

| Table Type | Purpose | Key Data Types | Cardinality |
|------------|---------|-----------------|-------------|
| **Fact** | Quantitative, event‑level measures (sales amount, clicks) | `DECIMAL(18,2)`, `INTEGER`, `TIMESTAMP` | Very high (billions of rows) |
| **Dimension** | Qualitative context (product, customer, time) | `VARCHAR`, `DATE`, `BOOLEAN` | Low to medium (thousands–hundreds‑of‑thousands) |

I then:

1. Created a Snowflake schema in Redshift, partitioning fact tables by `event_date` and compressing columns with `Zstandard`.  
2. Loaded dimensions into S3, catalogued via Athena for quick lookup.  
3. Implemented **materialized views** to pre‑join low‑cardinality dimensions, reducing query time from 30 s → 4 s (≈87% speedup).  

**Result**  
- Query latency dropped by **85 %**, enabling real‑time dashboards.  
- Storage costs fell 15 % due to columnar compression and reduced duplication.  
- The team adopted the new pattern in two subsequent projects, cutting onboarding time from weeks to days.

**Reflection**  
I learned that *ownership* means owning both data quality and performance metrics; *dive deep* requires understanding cardinality and type choices to design for scale. This experience keeps me alert to trade‑offs between compute cost (Redshift vs Athena) and latency, a key bar‑raiser consideration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
