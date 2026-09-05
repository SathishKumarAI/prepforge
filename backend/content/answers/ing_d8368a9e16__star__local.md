---
qid: ing_d8368a9e16__star__local
question: 'Explain: Databases — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:27-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with building a recommendation engine for an e‑commerce platform that had over 12 million product listings and 3 million daily active users. The training data came from a mix of relational logs, clickstreams in PostgreSQL, and user behavior stored in a NoSQL cluster (Cassandra).  

**Task:**  
I needed to design a unified data pipeline that could ingest, transform, and serve the features required by our XGBoost model while keeping latency under 50 ms for real‑time inference.  

**Action:**  
I first mapped out the data schema in PostgreSQL, normalizing user profiles and product metadata into star‑schema tables. For high‑velocity clickstreams I set up a Kafka stream that fed into a Spark Structured Streaming job; the job performed windowed aggregations (e.g., 5‑minute dwell time) and stored results back to Cassandra for fast read access. Feature engineering was automated with MLflow tracking, storing feature vectors in Parquet on S3 for batch training. I used vectorized joins in Spark SQL to avoid materializing large intermediate tables, and finally deployed the trained model behind a FastAPI service that pulled features from both databases via a unified cache layer (Redis).  

**Result:**  
The end‑to‑end pipeline reduced feature retrieval time by 70 % and increased recommendation click‑through rate from 3.2 % to 4.7 %, a 46 % lift. I learned that careful schema design, real‑time streaming, and caching together are essential for ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
