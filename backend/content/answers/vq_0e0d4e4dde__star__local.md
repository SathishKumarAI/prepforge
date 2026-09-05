---
qid: vq_0e0d4e4dde__star__local
question: What are the types of views?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 387
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:46-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup last year, our analytics team was struggling with lagging dashboards that refreshed every 12 hours. The data warehouse held millions of daily transactions, but the BI tool could only query simple SELECTs, so analysts complained about stale metrics and long wait times.

**Task:**  
I needed to design a view strategy that would give near‑real‑time insights while keeping query performance acceptable for ad‑hoc exploration. The goal was to reduce dashboard load time from 12 hours to under 5 minutes without compromising accuracy.

**Action:**  
First, I created **inline (non‑materialized) views** in Snowflake for quick ad‑hoc joins—these kept the logic reusable and avoided duplication. Next, I built **materialized views** on top of the most frequently used aggregates (e.g., daily revenue per region). I scheduled them to refresh every 10 minutes during peak hours and every hour overnight. To handle incremental updates, I enabled Snowflake’s auto‑refresh feature with a watermark column so only new rows were re‑computed. Finally, I documented view dependencies in dbt, added tests for consistency, and exposed the materialized views via a read‑only schema to prevent accidental writes.

**Result:**  
Dashboard latency dropped from 12 hours to under 4 minutes during business hours, with a 95% reduction in ad‑hoc query queue times. The team now reports real‑time revenue figures without waiting for nightly loads. I learned that combining inline and materialized views—tuned refresh schedules and proper dependency management—provides both agility and performance in a data‑driven environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
