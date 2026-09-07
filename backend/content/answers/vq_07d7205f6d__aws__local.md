---
qid: vq_07d7205f6d__aws__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 627
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:37:28-05:00'
sources: []
---

**Answer – Amazon / AWS Interview Style**

> **Leadership Principles:** *Ownership* & *Dive Deep*

---

### 1️⃣ Situation (S)

In my last role I led a migration of the company’s on‑prem data warehouse to an AWS Redshift cluster. The business needed a unified dimensional model that could support both real‑time reporting and historical trend analysis.

### 2️⃣ Task (T)

I had to design the dimension tables, ensuring they were scalable, cost‑efficient, and aligned with the new cloud architecture while keeping data latency under 5 minutes for operational dashboards.

### 3️⃣ Action (A)

| **Dimension Table Type** | **Purpose & Key Characteristics** |
|--------------------------|-----------------------------------|
| **Attribute Dimension** | Stores descriptive attributes (e.g., product name, SKU). Simple 1‑to‑many to fact tables. |
| **Time Dimension** | Normalized calendar table; supports date ranges and fiscal periods. |
| **Hierarchical Dimension** | Encodes multi‑level hierarchies (region → country → city) for drill‑down analysis. |
| **Surrogate Key Dimension** | Uses surrogate keys for fast joins, decoupling from source system changes. |
| **Slowly Changing Dimension (SCD)** | Handles evolving attributes; implemented SCD Type 2 with effective dates to preserve history. |
| **Factless Fact (used as a dimension)** | Captures events without numeric measures (e.g., user logins) and can be joined via surrogate keys. |

**AWS Services & Design Choices**

- **Amazon Redshift Spectrum** for querying raw S3 data, reducing load on the cluster.  
- **AWS Glue** to orchestrate ETL, generate schema catalog, and manage incremental loads.  
- **Redshift Concurrency Scaling** ensures 99th‑percentile latency < 5 s even during peak BI usage.  
- **Cost Control:** Partitioned tables by date; use `VACUUM` nightly to reclaim space.

### 4️⃣ Result (R)

- Reduced query latency from ~30 s to under **3 s** for complex roll‑ups.  
- Cut storage costs by **35%** through partitioning and spectrum querying.  
- Delivered a robust, maintainable dimensional model that supported 15 new dashboards with zero data quality incidents.

---

**What the Bar‑raiser Looks For**

1. **Ownership:** Took end‑to‑end responsibility for migration and ongoing maintenance.  
2. **Dive Deep:** Detailed understanding of each dimension type and its trade‑offs.  
3. **Quantified Impact:** Clear metrics on performance, cost, and business value.  
4. **Learning from Failure:** Iterated on the SCD design after a pilot that caused duplicate records; switched to Type 2 with conflict resolution logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
