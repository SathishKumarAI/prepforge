---
qid: ing_8d4ba08a7f__star__local
question: 'Explain: Let’s take a quick look at each — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 345
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:20-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a scalable location‑based recommendation engine for a travel app that served millions of users across the U.S. The existing system could only handle a few thousand concurrent queries and had a 30 % latency spike during peak hours.

**Task:**  
Design an end‑to‑end service that ingests real‑time user locations, stores POIs (restaurants, hotels, attractions), supports fast nearest‑neighbor lookups, and delivers personalized recommendations with sub‑200 ms response times for 1 M daily active users.

**Action:**  
I chose a sharded geohash partitioning scheme: each region of the city map was split into 12‑bit geohashes and stored in Redis clusters for low‑latency reads. For write traffic, I used Kafka to stream location updates to an Apache Flink job that updated a PostGIS database. Recommendations were generated on demand using a lightweight Spark batch pipeline that pre‑computed similarity scores between POIs and user profiles. To handle cold starts, I added a fallback layer of static K‑means clusters cached in Memcached.

**Result:**  
The new architecture cut average query latency from 350 ms to 120 ms and increased throughput by 5×, keeping CPU utilization below 60 %. User engagement rose 18 % as the recommendation relevance improved. I learned that careful partitioning of spatial data combined with a hybrid cache‑streaming pipeline is key for high‑scale location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
