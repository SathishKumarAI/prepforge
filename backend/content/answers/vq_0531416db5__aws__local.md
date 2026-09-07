---
qid: vq_0531416db5__aws__local
question: How can I discover what tables, columns, etc are there?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:53-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of a legacy 5‑year‑old on‑prem relational database (PostgreSQL) into Amazon Aurora Serverless for an e‑commerce analytics platform. The first step was to discover every table, column, and data type across ~120 schemas so we could build a unified Data Catalog before moving workloads.

**Action**  
1. **Automated discovery** – I wrote a Python script that used the PostgreSQL `information_schema` views to pull metadata for all tables/columns, then stored it in an S3 bucket as CSV.  
2. **Glue integration** – The CSV files were ingested into AWS Glue Data Catalog (using a Crawler). This gave us a searchable schema registry that could be queried via Athena or QuickSight.  
3. **Validation & enrichment** – I added a validation step that cross‑checked foreign key relationships and nullability against business rules, flagging 34 tables with missing constraints.  
4. **Cost & scalability** – The entire pipeline ran in under 10 minutes, cost <$0.50, and could be re‑executed nightly to capture schema drift.

**Result**  
- Reduced discovery time from *weeks* (manual review) to *under 15 minutes*.  
- Identified 34 data quality issues that were resolved before migration, cutting downstream ETL errors by **42%**.  
- The Glue catalog now serves as the single source of truth for all analytics teams, improving query performance in Athena by **25%** due to partition pruning.

---

### Leadership Principles Highlighted
* **Ownership** – I owned the end‑to‑end discovery process and ensured zero downtime.  
* **Dive Deep** – By interrogating system tables and validating relationships, I uncovered hidden data quality problems that would have cost us in production.  

This demonstrates my ability to blend deep technical knowledge with measurable business impact—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
