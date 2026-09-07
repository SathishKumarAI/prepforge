---
qid: vq_4d0e530024__aws__local
question: WHAT ARE THE DIFFERENT TYPES OF DATABASE RELATIONSHIPS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 585
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:46-05:00'
sources: []
---

**Question:** *What are the different types of database relationships?*  

> **Leadership Principles:**  
> • **Customer Obsession** – I design schemas that make data easy for downstream services (analytics, personalization) to consume.  
> • **Dive Deep & Deliver Results** – I quantify how each relationship type impacts query cost and latency.

### STAR

- **Situation:** In a micro‑service e‑commerce platform, the product catalog service had to expose “product → reviews → users” data with minimal latency.
- **Task:** Model relationships in Amazon Aurora (MySQL) to support high read throughput while keeping write costs low.
- **Action:**  
  - Implemented **one‑to‑many** (`products` → `reviews`) via a foreign key on `review.product_id`.  
  - Added **many‑to‑many** (`users` ↔ `orders`) using a join table `user_orders`.  
  - Used **self‑referential one‑to‑many** for product categories (`categories.parent_id`).  
  - Created composite indexes and used **partitioning** on `order_date` to keep hot partitions small.  
- **Result:** Query latency dropped from 350 ms to < 50 ms (∼90 % reduction). Read throughput increased by 4× with the same RDS instance size, saving ~30 % in monthly cost.

### Technical Takeaway

| Relationship | Cardinality | Typical Design | AWS Service |
|--------------|-------------|----------------|------------|
| One‑to‑One   | 1:1         | Unique FK, shared PK | Aurora / DynamoDB (GSI) |
| One‑to‑Many  | 1:N         | FK on “many” side | RDS, DynamoDB Streams |
| Many‑to‑Many | N:M         | Join table or set attribute | Aurora, DocumentDB |
| Self‑Referential | N:1 (tree) | `parent_id` FK | Aurora, Neptune |

**Bar‑raiser note:**  
- Ownership: I own the schema lifecycle and monitor impact metrics.  
- Dive Deep: I benchmarked each join strategy and documented trade‑offs.  
- Quantified Impact: Latency & cost reductions are concrete numbers.  
- Learning from Failure: Early naive joins caused 200 ms spikes; refactoring to indexes fixed it, reinforcing the importance of performance testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
