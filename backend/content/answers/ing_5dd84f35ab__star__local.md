---
qid: ing_5dd84f35ab__star__local
question: 'Explain: Physical data models — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:51-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the analytics layer for our e‑commerce platform, which had grown from 5 TB of structured logs to over 30 TB of semi‑structured clickstream data. The existing architecture was a flat lake that made it hard to enforce governance or run ML models efficiently.

**Task** – I needed to build a physical data model that could support rapid feature extraction for our recommendation engine, enforce lineage and security, and keep query latency under 200 ms for production workloads.

**Action** – First, I mapped out the logical schema: user profiles, product catalog, session events, and purchase history. Then I translated this into a columnar storage layout using Parquet on AWS S3, partitioned by date and region to reduce scan times. For the physical model I created a Hive‑based data mart with star‑schema fact tables (e.g., `session_fact`) linked to dimension tables (`user_dim`, `product_dim`). I applied ACID compliance via Glue ETL jobs that performed incremental CDC loads, using AWS Lake Formation for fine‑grained IAM policies. Finally, I added a caching layer in Amazon Redshift Spectrum and set up automated data quality checks with Great Expectations.

**Result** – Query performance improved by 5× (from ~1 s to <200 ms), the recommendation pipeline could now pull features in under 30 seconds, and our data team cut manual reporting effort by 70%. I learned that a well‑designed physical model is the foundation for any scalable ML system; it turns raw data into a reliable, query‑ready asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
