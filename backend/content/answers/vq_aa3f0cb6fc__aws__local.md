---
qid: vq_aa3f0cb6fc__aws__local
question: WHAT IS A SELF JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 559
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:10-05:00'
sources: []
---

**Self‑join** is a relational operation where a table is joined to itself—essentially treating the same data set as two separate logical tables. It’s used when you need to compare rows within the same entity, such as finding employees who report to each other or linking a product to its parent category.

---

## Behavioral (STAR)

**Situation:** In 2024 I led the redesign of our e‑commerce catalog service at Amazon.  
**Task:** We needed to surface “related products” for every item without duplicating millions of rows in DynamoDB.  
**Action:** I proposed a self‑join on an RDS MySQL instance, creating a `product_relations` view that joined `products p1` with `products p2` on the `parent_category_id`. I added a composite index `(category_id, product_id)` to keep lookups <5 ms.  
**Result:** The new recommendation engine served 12M requests per day with 99.9% latency <10 ms, cutting our DynamoDB read costs by **30% ($120k/yr)** and improving conversion rate by **4.2%**.

---

## Technical/System

| Requirement | Design Choice | AWS Services |
|-------------|---------------|--------------|
| Fast intra‑table lookups | Self‑join on RDS MySQL with materialized view | Amazon RDS (MySQL) |
| High availability | Multi‑AZ deployment, read replicas for 5× traffic | RDS Multi‑AZ, Read Replica |
| Cost control | Indexing + query optimization; avoid cross‑region scans | AWS Cost Explorer |
| Scalability | Partitioned tables by category; automatic scaling via Aurora Serverless v2 if spikes | Amazon Aurora Serverless |

**Trade‑offs:**  
- **Pros:** Simple SQL semantics, single source of truth.  
- **Cons:** Requires careful indexing to prevent full table scans; higher CPU usage on large tables.

---

### Bar‑raiser cues

- **Ownership:** I took end‑to‑end responsibility for the catalog redesign.  
- **Dive Deep:** I profiled queries, identified bottlenecks, and iterated on indexes.  
- **Quantified Impact:** 30% cost savings + 4.2% lift in conversion.  
- **Learning from Failure:** Initial naïve self‑join caused 200 ms latency; after adding composite index, performance met SLA.

*Leadership Principles:* Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
