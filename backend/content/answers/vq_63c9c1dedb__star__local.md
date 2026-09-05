---
qid: vq_63c9c1dedb__star__local
question: are asked to choose three cards one at a time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 368
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:44-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with redesigning the “Featured Deals” carousel on an e‑commerce site that served millions of users daily. The current algorithm pulled random cards from a pool, leading to low click‑through rates (CTR dropped from 4.2% to 3.1%).

**Task** – I needed to implement a deterministic yet dynamic system that would present the top three deals each day based on real‑time sales velocity and inventory levels, ensuring freshness while maximizing revenue.

**Action** – I built an ETL pipeline in Airflow that pulled hourly metrics from our data warehouse (PostgreSQL) into a Redis cache. Using Python’s Pandas I calculated a weighted score: `score = 0.6 * sales_velocity + 0.4 * inventory_turnover`. I then applied a greedy selection algorithm that picked the top three cards, but added a constraint to avoid showing duplicate categories within a single session. The final step was a lightweight Flask microservice that served the three card IDs to the front‑end via a REST endpoint, with cache invalidation every 15 minutes.

**Result** – After A/B testing over two weeks, the new carousel increased CTR by 22% (from 3.1% to 3.8%) and boosted revenue per visitor by $0.45. I also learned how to balance real‑time data freshness with computational efficiency, and the importance of adding business constraints (like category diversity) into algorithmic decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
