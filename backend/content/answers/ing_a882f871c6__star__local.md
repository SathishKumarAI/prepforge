---
qid: ing_a882f871c6__star__local
question: 'Explain: Let’s summarize what we know so far — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 318
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:10-05:00'
sources: []
---

**Situation:** In my internship at a fintech startup, our data science team was tasked with building a location‑based recommendation engine for a new food‑delivery app that needed to surface the top restaurants within a 5 km radius of users in real time.

**Task:** I had to design a scalable system that ingests restaurant metadata (cuisine, ratings, opening hours), handles user location queries at millions of requests per day, and returns personalized suggestions with sub‑second latency while keeping cost under $200/month on AWS.

**Action:** I chose a microservice architecture: an API gateway (API Gateway + Lambda) for query routing; a DynamoDB table partitioned by city and sorted by geohash to enable fast range scans. For real‑time scoring, I used a Redis cache for the top 1 k restaurants per geohash bucket, refreshed nightly via a scheduled Glue job that aggregates user reviews and applies a Bayesian average. I implemented rate limiting with API Gateway throttling and added CloudWatch alarms to auto‑scale Lambda concurrency. The system was containerized in ECS Fargate for cost control.

**Result:** We achieved 95 % of queries served in <120 ms, reduced AWS spend from $1,200/month to $180/month, and increased user engagement by 18 %. I learned how to balance latency, consistency, and cost in a geospatial context, and the importance of caching hot data for high‑volume services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
