---
qid: vq_9abd25f7a2__aws__local
question: What are the three degrees of normalization and how is normalization done
  in each degree?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 420
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:17-05:00'
sources: []
---

**Situation / Task**  
While revamping a customer‑behavior data lake for an e‑commerce platform, I was asked to explain how we would normalize the transactional tables before moving them into Amazon Redshift.

**Action**  
I broke normalization into its three canonical degrees:

| Degree | Goal | Typical AWS Implementation |
|--------|------|----------------------------|
| **1NF** | Ensure atomicity: every column holds a single value and rows are unique. | Use `INSERT` with `DISTINCT` in Redshift, or clean raw S3 data via Glue ETL before loading. |
| **2NF** | Remove partial dependencies on composite keys. | Split a sales table into `orders(order_id)` and `order_items(item_id, order_id)`. Store each in separate Redshift schemas; use foreign‑key constraints in the ETL logic (Glue). |
| **3NF** | Eliminate transitive dependencies; every non‑key column depends only on the key. | Decompose `customers` into `customer_profile(customer_id)` and `customer_contact(customer_id, phone)`. Load each into separate Redshift tables and join via `JOIN` in Athena for ad‑hoc queries. |

I then applied **AWS Glue** to automate the transformation pipeline, stored intermediate results in S3 (cost‑effective), and finally loaded normalized tables into **Amazon Redshift Spectrum** so analysts could query without moving data.

**Result**  
The refactor cut query times by **35 %** on average and reduced storage costs by **22 %**. The team gained confidence that schema changes would not ripple downstream, exemplifying *Ownership* and *Dive Deep*.  

**Bar‑raiser notes:** Look for clear ownership of the data model, depth in explaining each degree’s purpose, measurable impact, and evidence of learning (e.g., why we chose Glue over raw SQL).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
