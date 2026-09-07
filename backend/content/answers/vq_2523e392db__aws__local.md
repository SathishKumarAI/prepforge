---
qid: vq_2523e392db__aws__local
question: WHAT ARE THE DIFFERENT TYPES OF SQL STATEMENTS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 428
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:43:14-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined a fintech startup, the data‑engineering team had no clear taxonomy of SQL statements. The lack of documentation caused duplicated work and slowed query performance reviews. My task was to document all major SQL statement types, explain their use cases, and embed them in our onboarding process.

**Action (A)**  
I mapped every statement to a single‑page cheat sheet and built an interactive Jupyter notebook that executed sample queries against an Amazon Athena data lake on S3. I used the **Customer Obsession** principle to keep the examples real‑world: transactional `INSERT`, analytical `SELECT` with window functions, and data‑engineering `CREATE TABLE AS SELECT (CTAS)` for materialized views. To demonstrate scalability, I ran each query on a 10 TB dataset and measured execution time, cost (Athena’s $5 per TB scanned), and concurrency limits.

I also added a “Query‑Health” view that aggregates `glue_catalog` metrics via Amazon CloudWatch Logs, giving visibility into slow queries. This leveraged **Dive Deep**—I parsed query plans, identified missing partitions, and suggested partitioning on date+region to cut scan time from 12 min to 30 sec (a 96% reduction).

**Result (R)**  
After deployment:
- New hires reduced onboarding time by **40%**.
- We decreased Athena query costs by **35%** through better partitioning and statement‑level cost awareness.
- The query‑health dashboard cut mean time to resolve performance issues from 3 days to under 6 hours.

**Learning & Bar‑raiser cues**  
I took ownership of the entire documentation cycle, iterated based on user feedback, and measured impact with concrete metrics. I also documented failure modes (e.g., mis‑partitioned tables) and how we mitigated them—showing the bar‑raiser’s emphasis on learning from mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
