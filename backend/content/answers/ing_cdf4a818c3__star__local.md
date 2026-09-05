---
qid: ing_cdf4a818c3__star__local
question: 'Explain: Study map — Backend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 344
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:07-05:00'
sources: []
---

**Situation:**  
In my last role at a language‑learning startup, our product team wanted to launch a “study map” feature that visualized learners’ progress across modules and suggested next steps. The current API returned raw lesson data; we had no way to aggregate or rank content dynamically.

**Task:**  
I was tasked with designing a scalable backend service that could generate personalized study maps for 300,000 active users in real time, while keeping latency under 200 ms and supporting A/B testing of recommendation algorithms.

**Action:**  
First, I modeled the user progress as a directed acyclic graph (DAG) stored in PostgreSQL with adjacency lists. To accelerate queries, I built an aggregated materialized view indexed by user ID and skill level, refreshed every hour via Airflow. For real‑time personalization, I added a Redis cache layer that cached the top 50 nodes per user, using Lua scripts to update the graph when users completed lessons. I also exposed a RESTful endpoint (`/study-map`) built with FastAPI, returning JSON in the required format. Finally, I wrote unit tests and used Prometheus + Grafana to monitor response times.

**Result:**  
The new service delivered study maps in 120 ms on average, reduced database load by 40%, and increased user engagement by 18% (measured via time‑to‑next lesson). I learned how graph theory can be operationalized at scale and the importance of caching for latency‑critical features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
