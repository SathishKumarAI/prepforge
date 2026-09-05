---
qid: ing_e48e411711__star__local
question: 'Explain: Requirements — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 364
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:53-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an internal analytics portal for the risk team. Their analysts had to pull data from our PostgreSQL warehouse, but they struggled with SQL syntax and often made errors that delayed reviews. The business wanted a way for them to ask natural‑language questions and get accurate query results in real time.

**Task** – I was tasked with designing a text‑to‑SQL agent that could translate user queries into safe, efficient PostgreSQL statements, enforce column permissions, and return the data within two seconds so analysts could iterate quickly.

**Action** – First, I built a lightweight intent classification layer using spaCy to detect question type (aggregation, filtering, join). Next, I fine‑tuned an open‑source encoder–decoder model (T5) on our own schema and a curated dataset of 8,000 hand‑crafted examples. To guard against SQL injection and schema drift, I wrapped the generated query in a sandbox that only allowed SELECTs against whitelisted tables and columns, and added a cost estimator that rejected queries whose estimated rows exceeded 10 k. For latency, I deployed the model on an AWS Lambda function behind an API Gateway, caching frequent queries with Redis.

**Result** – The agent handled 85 % of analyst requests with correct SQL on first try, cutting manual query time from ~15 minutes to under 30 seconds per user. Adoption grew to 120 daily users within a month, and we reduced the number of query‑related support tickets by 40 %. I learned that combining NLP with strict sandboxing and caching is key to reliable production text‑to‑SQL systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
