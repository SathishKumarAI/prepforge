---
qid: vq_9abd25f7a2__star__local
question: What are the three degrees of normalization and how is normalization done
  in each degree?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 397
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:16-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning our customer‑purchase data warehouse for a retail client. The raw staging tables were full of duplicate records, nulls and inconsistent product hierarchies that made reporting unreliable and slowed ETL by 40 %.  

**Task** – I needed to normalize the schema to three normal forms (1NF, 2NF, 3NF) so that we could eliminate redundancy, enforce referential integrity and reduce storage costs while keeping query performance acceptable.  

**Action** – First I applied **1NF**: I removed multi‑valued attributes by splitting the “purchase_items” column into a separate line‑item table, ensured each field held atomic values and added surrogate keys. Next, for **2NF**, I identified partial dependencies on the composite key (customer_id + order_id). I split the order header into two tables—`orders` (order metadata) and `customers` (customer details)—so that non‑key attributes depended on the whole key. Finally, to reach **3NF**, I eliminated transitive dependencies by creating a dedicated `products` table for product data and linking it via a foreign key from the line‑item table; this removed redundant pricing and category information from orders.  

**Result** – The normalized schema cut duplicate rows by 70 %, reduced storage from 12 GB to 4 GB, and improved query latency on sales reports from 18 s to 3 s. I learned that thoughtful decomposition balances normalization with performance, especially when downstream analytics require denormalized views for speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
