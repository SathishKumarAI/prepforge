---
qid: ing_2a48a40f5c__star__local
question: 'Explain: Requirements and Goals of the System — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 366
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:49-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time trend detection platform that ingested ~2 M tweets per minute from the public stream. The product team wanted to surface “hot topics” in under two seconds so their analytics dashboards could show live sentiment shifts during events like sports finals or political debates.

**Task:**  
I had to define the system’s requirements: (1) ingest & index tweets with minimal latency, (2) rank topic relevance using a supervised model, and (3) expose an API that returns the top 10 trending hashtags in < 2 s under peak load. The goal was to keep the mean query response below 500 ms while supporting 5k concurrent users.

**Action:**  
I architected a pipeline with Kafka for buffering, Spark Structured Streaming for feature extraction (TF‑IDF + user‑engagement scores), and an XGBoost model trained on labeled “trend” vs. “noise” tweets. For indexing I used Elasticsearch with time‑shard rotation to keep query latency low. I also implemented horizontal scaling of the inference microservice behind a load balancer, using Docker containers orchestrated by Kubernetes. To meet SLAs I added a circuit breaker that fell back to a cached ranking during spikes.

**Result:**  
The system achieved an average query latency of 320 ms and handled 7k concurrent requests without degradation. Trending topics were identified with 92% precision versus manual labeling, and the product saw a 35% increase in user engagement on their dashboards. I learned that balancing ML accuracy with engineering constraints often requires iterative profiling and infrastructure tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
