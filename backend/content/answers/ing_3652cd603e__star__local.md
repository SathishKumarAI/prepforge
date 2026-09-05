---
qid: ing_3652cd603e__star__local
question: 'Explain: Now if you want to extend it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 417
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:55-05:00'
sources: []
---

**Situation:**  
At my previous company we built a location‑based recommendation engine that fed into a mobile app. The feature was great at suggesting nearby restaurants, but user engagement dropped when the city’s data grew beyond our initial 50 k POIs—latency spiked to 350 ms and the recommendation quality fell because we couldn’t refresh the index fast enough.

**Task:**  
I had to redesign the system so it could scale to millions of points of interest while keeping query latency under 100 ms, support real‑time updates, and still deliver personalized recommendations in a cost‑effective way.

**Action:**  
1. **Sharded Geo‑index** – I replaced our single PostgreSQL table with a geohash‑sharded ElasticSearch cluster; each shard handled ~200 k POIs, enabling sub‑50 ms lookups.  
2. **Incremental refresh pipeline** – Implemented Kafka streams to push delta changes from the data lake into ES in real time, avoiding full re‑indexing.  
3. **Hybrid ranking** – Combined a lightweight neural relevance model (TensorFlow Lite) running on the edge for quick filtering with a heavier offline learning‑to‑rank step that ran nightly on Spark, feeding back weights to the live model.  
4. **Cost optimization** – Used spot instances for Spark jobs and autoscaled ES nodes based on query load.

**Result:**  
Latency dropped from 350 ms to 70 ms; recommendation CTR increased by 18% within two weeks of rollout. The system now supports 5× more POIs with <30 % higher infrastructure cost, proving that sharding + real‑time streaming can keep a map‑based service both fast and fresh. I learned the importance of aligning data architecture with business KPIs and the value of hybrid ML pipelines for live systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
