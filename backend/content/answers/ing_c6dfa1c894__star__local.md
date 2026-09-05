---
qid: ing_c6dfa1c894__star__local
question: 'Explain: 25 Must-Do System Design Problems for Tech Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:39-05:00'
sources: []
---

**Situation**  
During my senior design project at university we were asked to build a recommendation engine for an online bookstore. The dataset had 1 M users, 500 K books, and each user had rated only about 20 items on average. Our professor warned that the interviewers would probe how I’d scale such a system beyond the lab.

**Task**  
I needed to architect a production‑ready recommendation pipeline: ingest user interactions in real time, maintain per‑user feature vectors, generate top‑10 book suggestions within 200 ms, and keep the model up‑to‑date without downtime.

**Action**  
1. **Data ingestion** – I set up Kafka topics for clickstream events and used Spark Structured Streaming to aggregate into a ClickHouse columnar store, enabling fast roll‑up queries.  
2. **Feature engineering** – Implemented a lightweight user embedding using LightFM in a separate microservice; embeddings were updated nightly via an incremental training job that only re‑trained on new interactions, saving GPU time.  
3. **Serving layer** – Deployed the model behind a Redis cache with per‑user pre‑computed top‑10 lists refreshed every 30 minutes. The API gateway used gRPC to reduce latency to <50 ms for the lookup.  
4. **Scalability & fault tolerance** – Employed Kubernetes autoscaling, horizontal pod replicas for the inference service, and a Circuit Breaker pattern so that if Redis hiccupped we fell back to a slower but reliable SQL join.

**Result**  
The prototype served recommendations with 98 % hit‑rate at <200 ms latency under peak load (10k concurrent users). The system was deployed on a cloud testbed, and after a month of live traffic the daily active users grew by 15 %. I learned that a successful interview answer must blend concrete tools (Kafka, Spark, Redis) with clear trade‑offs—batch vs. streaming, pre‑compute vs. on‑demand—and show how each choice impacts latency, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
