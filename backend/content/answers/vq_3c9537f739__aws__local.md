---
qid: vq_3c9537f739__aws__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 440
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:40-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build features that make data queries fast for our end users; *Ownership* – I own the entire indexing strategy from design to monitoring.

**Situation & Task**  
At my last company, ad‑tech reports were pulling 30 % slower after a schema change. The team asked me to explain why an index would help and how to implement it.

**Action**  
I first *dive deep* into the query plan (EXPLAIN) and discovered that the `WHERE campaign_id = ? AND created_at BETWEEN ? AND ?` filter was scanning 10 M rows each run. I proposed a **composite B‑Tree index** on `(campaign_id, created_at)`.

- **Design:**  
  - Create the index with `CREATE INDEX idx_campaign_time ON impressions (campaign_id, created_at);`
  - Use `ALTER TABLE ... ALTER COLUMN … SET STATISTICS` to keep optimizer stats fresh.  
  - Enable `ANALYZE` nightly in Amazon RDS to auto‑update statistics.
- **AWS services:** RDS PostgreSQL for managed DB; CloudWatch Alarms on `IndexUsage` metrics; Lambda to rebuild the index during off‑peak windows.
- **Scalability & Cost:** The index adds ~20 % storage but cuts query time from 12 s to <2 s, reducing CPU credits by 70 %. With RDS reserved instances, overall cost dropped $1.5k/month.

**Result**  
After deployment, report latency fell from **12 s → 1.8 s** (an 85 % improvement). User satisfaction scores rose by 15 %, and the new index was automatically maintained with no manual intervention.

**Bar‑raiser takeaway**  
I demonstrated *ownership* by diagnosing the root cause, proposing a data‑driven solution, and ensuring ongoing maintenance—showing depth (*Dive Deep*) and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
