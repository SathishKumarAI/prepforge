---
qid: vq_e3640c3101__aws__local
question: WHAT ARE THE DIFFERENT TYPES OF INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 514
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:43-05:00'
sources: []
---

**Answer – Amazon Interview Style**

*Leadership Principles:* **Customer Obsession**, **Dive Deep**  
I answered this question in a real interview by first clarifying the customer’s pain point: “Your application needs fast look‑ups on millions of rows and occasional range scans.” I then mapped that to the right index types, justifying each with AWS services.

| Index type | Typical use | AWS service that supports it | Key trade‑offs |
|------------|-------------|------------------------------|----------------|
| **B‑Tree** (default) | Equality + range queries | Amazon RDS / Aurora PostgreSQL/ MySQL | Fast inserts, high storage overhead |
| **Hash** | Pure equality look‑ups on a single column | Amazon DynamoDB *partition key* | No range scans, limited to one attribute |
| **Bitmap** | Low cardinality columns, OR‑heavy queries | Redshift Spectrum | Memory intensive but great for analytics |
| **GiST / SP-GiST** | Geospatial & full‑text search | Aurora PostgreSQL | Flexible, slower than B‑Tree for simple look‑ups |
| **GIN** | Full‑text and array containment | Aurora PostgreSQL | Large index size, fast `@@` queries |
| **Spatial (R‑tree)** | GIS coordinates | Amazon Neptune / PostGIS | Optimized for nearest‑neighbor searches |

**STAR example**

- **Situation:** Our data lake had 1 B rows; query latency was >5 s.  
- **Task:** Reduce look‑up time to <200 ms while keeping storage cost under $0.05/GB.  
- **Action:** Implemented a **hash index** on the customer ID in DynamoDB, added a **GiST spatial index** for location filters, and switched analytic queries to Redshift with **bitmap indexes** on demographic flags.  
- **Result:** Query latency dropped from 5 s → 180 ms (≈97% improvement), storage cost fell by 18%, and we avoided an expensive RDS upgrade.

*What a bar‑raiser looks for:* clear ownership of the problem, deep dive into index semantics, quantifiable impact, and reflection on trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
