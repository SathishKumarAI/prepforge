---
qid: ing_33a11e7f10__star__local
question: 'Explain: This is a very different approach with — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 299
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:58-05:00'
sources: []
---

**Situation:** At my last job I was tasked with building a new location‑based recommendation feature for our food‑delivery app. Our existing service returned the same top‑10 restaurants every day, and user engagement dropped by 15 % over three months.

**Task:** I had to design a scalable architecture that could rank restaurants in real time based on proximity, popularity, and personalized preferences, while keeping latency under 200 ms for millions of users.

**Action:** I started with a geohash‑sharded NoSQL store (Cassandra) to quickly fetch nearby venues. For scoring I built an online learning model using LightGBM that ingested click‑throughs, review scores, and time‑of‑day signals; the model was served via TensorFlow Serving behind a Redis cache to avoid full re‑computations. To handle cold starts I implemented a fallback rule engine that used weighted averages of global popularity. Finally, I added a data pipeline (Kafka → Spark) to retrain the model nightly with new interaction logs.

**Result:** The new service cut average latency from 550 ms to 140 ms and increased click‑through rates by 27 % within two weeks of rollout. I learned how to balance ML inference cost against real‑time responsiveness, and the importance of a modular pipeline that lets data scientists iterate without disrupting the user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
