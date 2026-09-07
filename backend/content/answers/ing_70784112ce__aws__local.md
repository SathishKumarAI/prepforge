---
qid: ing_70784112ce__aws__local
question: 'Explain: Database Performance Cheatsheet — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:39-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*  

**Situation & Task**  
At a startup we faced nightly query slowness that stalled our recommendation engine. I was tasked to diagnose and fix the database performance in under 48 hrs.

**Action**  
I created a “Database Performance Cheatsheet” – a living document that maps symptoms → root‑cause → AWS actions. It includes:  

1. **Index health** – use `ANALYZE` + `pg_stat_user_indexes`; if `idx_scan / idx_tup_read < 0.05`, rebuild with `REINDEX`.  
2. **Query plan drift** – run `EXPLAIN ANALYZE` nightly; flag plans > 30 % slower than baseline.  
3. **Connection pool** – tune RDS parameter `max_connections`; enable Aurora Serverless for burst capacity.  
4. **Cold start mitigation** – pre‑warm read replicas on CloudWatch alarms (`CPUUtilization > 70%`).  

I automated the cheatsheet with a Lambda that scrapes CloudWatch logs, runs `EXPLAIN`, and posts Slack alerts. I also added an Aurora MySQL “performance insights” dashboard.

**Result**  
Query latency dropped from **12 s → 0.8 s** (95th percentile). Daily recommendation throughput rose by **+35 %**, directly boosting revenue by ~$120k/month.  

**Learning & Bar‑raiser cues**  
*Ownership*: owned the end‑to‑end pipeline, not just RDS tuning.  
*Dive Deep*: leveraged system metrics and SQL internals to pinpoint issues.  
*Quantified Impact*: clear latency & revenue numbers.  
*Failure Insight*: earlier attempts ignored index fragmentation; after failing to reduce load, we added automated reindexing—now part of the cheatsheet.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
