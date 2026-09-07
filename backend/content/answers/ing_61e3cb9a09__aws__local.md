---
qid: ing_61e3cb9a09__aws__local
question: 'Explain: Flexible schema — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 414
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:49-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a recommendation‑engine team tasked with reducing churn for a streaming service. The product had an ever‑growing catalog (movies, shows, user‑generated playlists) and needed to adapt in real time to new content and evolving viewer tastes.  

**Action** – *Dive Deep & Ownership*  
I chose a **graph database** (Amazon Neptune) because it natively supports flexible schemas: each node could be a “Movie”, “Show”, or even an abstract “Genre” with arbitrary properties, while edges (“likes”, “watch‑later”) captured evolving relationships. I designed the model so new attributes (e.g., director, release year) could be added without schema migration, and I implemented a **materialized view** in Amazon Athena that refreshed every 30 s to feed our real‑time recommendation API.  

I leveraged **Amazon SageMaker** for training a graph‑based embedding model, then deployed it via **AWS Lambda** behind an **API Gateway** endpoint. The system scaled automatically: Neptune’s read replicas handled burst traffic; the Lambda concurrency was auto‑scaled by CloudWatch alarms on error rates.

**Result** – *Deliver Results*  
Within 3 months the recommendation precision (MAP@10) rose from 0.42 to **0.58**, and churn dropped 12% for users served by the new engine. Cost per recommendation stayed under $0.0004, keeping the spend below budget while supporting 5× traffic growth.  

**Reflection** – *Bias for Action & Learn*  
I initially underestimated Neptune’s cold‑start latency; after profiling I added a caching layer in Amazon ElastiCache (Redis) to shave 200 ms per request, proving rapid iteration and continuous learning are key to high impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
