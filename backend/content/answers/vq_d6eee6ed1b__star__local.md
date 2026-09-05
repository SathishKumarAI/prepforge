---
qid: vq_d6eee6ed1b__star__local
question: What is a Surrogate Key ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 304
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:56-05:00'
sources: []
---

**Situation:** In a recent data warehouse project for an e‑commerce client, the sales fact table was linked to a slowly changing dimension (product catalog) that used the product’s natural SKU as its primary key. The SKUs were occasionally updated due to rebranding, causing duplicate rows and orphaned fact records.

**Task:** I had to design a robust solution so that the fact table could reliably reference products without breaking when SKUs changed, while keeping query performance high for reporting dashboards.

**Action:** I introduced a surrogate key—a system‑generated, immutable integer—for the product dimension. Using SQL Server’s `SEQUENCE` object, I assigned each new product row a unique surrogate ID and stored the current SKU as an alternate key. In the ETL pipeline (Azure Data Factory), I added a lookup step that matched incoming SKUs to existing surrogate IDs; if none existed, a new surrogate was generated and inserted. The fact table’s foreign key now pointed to this surrogate, decoupling it from volatile business keys.

**Result:** After deployment, data integrity issues dropped to zero, and report latency decreased by 18% because the surrogate key is compact and clustered. I learned that while natural keys are intuitive, surrogate keys provide resilience against schema changes and simplify ETL logic in a high‑volume environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
