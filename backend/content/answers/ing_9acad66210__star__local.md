---
qid: ing_9acad66210__star__local
question: 'Explain: Queries → Fetch Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 305
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:54-05:00'
sources: []
---

**Situation:**  
While leading the data ingestion layer for a recommendation engine at my previous company, we noticed that our nightly ETL job was pulling over 1.5 GB of user‑activity logs from an external analytics service. The REST endpoint returned every page view record even though our model only needed click‑through and time‑on‑page metrics.

**Task:**  
Reduce data transfer overhead and accelerate the pipeline, so we could refresh recommendations twice as often without exceeding bandwidth quotas.

**Action:**  
I evaluated both REST and GraphQL options. With REST I had to fetch all fields then filter in Spark, which doubled memory usage. Switching to GraphQL, I designed a query that requested only `clicks`, `sessionDuration`, and `userId`. I added server‑side field resolution caching and pagination with cursor-based cursors. The client used Apollo Client’s caching layer to deduplicate repeated requests during the nightly run.

**Result:**  
Data volume dropped from 1.5 GB to 350 MB (≈75% reduction). ETL runtime shrank from 45 minutes to 20 minutes, enabling a twice‑daily refresh schedule. I learned that thoughtful API design—choosing GraphQL when selective fields are critical—can yield significant performance and cost savings in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
