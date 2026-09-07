---
qid: ing_48a0a55a46__aws__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 460
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:35-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑engineering team at my previous company, we had to migrate the analytics platform from on‑premise PostgreSQL to Amazon Redshift for a new marketing dashboard. The report generation time dropped from **15 min** to **2 min**—yet the query planner still chose full table scans for highly selective filters (e.g., `country = 'US'`). I had to implement an efficient bitmap index strategy that would keep the cost low while delivering sub‑second latency for top‑10 queries.

**Action**  
1. **Dive Deep** – profiled 200+ query patterns and identified 12 columns with > 90 % selective predicates.  
2. Designed a *bitmap index* table in Redshift, storing bit vectors per distinct value (e.g., `country_US_bitmap`).  
3. Leveraged **Amazon S3 + Glue** to stage raw logs → **Redshift Spectrum** for initial ingestion; then used **Redshift COPY** to load the bitmap tables.  
4. Wrote a scheduled Lambda that runs nightly, re‑generates bitmaps using Redshift’s `APPEND` mode (cost ~0.02 $ per run).  
5. Updated the BI layer to push predicates into the bitmap join path; added a small caching layer in **ElastiCache** for the most frequent bitmaps.

**Result**  
- Query latency on 95th‑percentile analytics queries fell from **2 s** to **0.3 s** (≈ 83 % reduction).  
- Redshift compute usage dropped by **25 %**, saving ~\$1,200/month.  
- The system now scales linearly: each new column adds only a few MB of bitmap data.

**Leadership Principles Highlighted**  
- **Ownership** – took full responsibility for end‑to‑end performance and cost.  
- **Dive Deep & Deliver Results** – analyzed query logs, engineered a scalable solution, and quantified the impact in concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
