---
qid: ing_f636f1dfdb__star__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 301
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:02-05:00'
sources: []
---

**Situation**  
At my last internship I was asked to sketch a scalable architecture for a micro‑blogging platform similar to Twitter. The goal was to support millions of users, real‑time feeds, and low latency search while keeping cost under $5 M per year.

**Task**  
I needed to produce a high‑level design that balanced throughput (≥10 k tweets/second), availability (99.9% uptime), and data consistency for user timelines and follower graphs.

**Action**  
I started with a layered diagram: an API gateway feeding stateless Flask workers, a Kafka cluster for ingestion, and two data stores—Cassandra for write‑heavy tweet storage and Redis for hot follower lists. For the timeline, I implemented a fan‑out‑on‑write strategy using Bloom filters to avoid duplicate pushes. The search feature used Elasticsearch with inverted indices on hashtags and user mentions. I also added an autoscaling policy tied to CPU usage and a multi‑region deployment for disaster recovery.

**Result**  
The prototype handled 12 k TPS in load tests, kept read latency under 200 ms, and reduced operational cost by 30% through efficient caching. The exercise taught me how to trade off consistency versus speed using denormalized data models and the importance of monitoring key metrics from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
