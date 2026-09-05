---
qid: ing_8c3afcc75c__star__local
question: 'Explain: System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:19-05:00'
sources: []
---

**Situation** – While working at a mid‑size startup, we had to launch a new feature that predicted the optimal delivery window for each order in real time. The existing system delivered a generic ETA, causing frequent customer complaints and driver inefficiencies.

**Task** – Build an end‑to‑end ML pipeline that ingests live traffic, weather, restaurant prep times, and historical order data to output a 5‑minute ETA per order, while keeping latency under 200 ms and scaling to 10k orders per minute.

**Action** – I first defined the feature set: GPS coordinates, time of day, cuisine type, current driver load, and dynamic traffic indices from Google Maps API. Using Apache Kafka for ingestion, I engineered a streaming pipeline in Spark Structured Streaming that aggregated data every second. For modeling, I trained a Gradient Boosted Trees ensemble (XGBoost) on 3 million labeled orders, then distilled it into a lightweight LightGBM model deployed via TensorRT on our GPU‑enabled edge nodes. To meet latency, I added a caching layer with Redis for recent predictions and implemented an A/B test controller in Go to roll out changes gradually.

**Result** – The new ETA accuracy improved by 22 % (average error dropped from 8 min to 6 min), driver idle time fell by 15%, and customer satisfaction scores rose 3.4 points on the NPS scale within two months. I learned that combining real‑time streaming, edge inference, and continuous A/B testing is key for scalable ML in high‑velocity domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
