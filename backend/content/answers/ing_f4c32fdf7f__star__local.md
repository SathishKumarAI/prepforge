---
qid: ing_f4c32fdf7f__star__local
question: 'Explain: Blob Datastore — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 456
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:00-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a real‑time recommendation engine for a streaming platform that had to serve 10 M users per day. The data pipeline produced terabytes of raw click logs and user interaction blobs in Azure Blob Storage, but we needed an analytics layer that could ingest those blobs quickly, support complex queries, and scale with our model training cycles.

**Task** – I had to design a storage architecture that mapped each type of workload (batch ETL, online serving, feature store, time‑series monitoring, etc.) to the most appropriate database technology from the 15 common choices: relational, columnar, key‑value, document, graph, wide‑column, time‑series, search, in‑memory, cache, NoSQL, NewSQL, vector, object, and distributed ledger. The goal was to keep latency <200 ms for serving while keeping cost per GB under $0.02.

**Action** – I started by profiling the blob access patterns: 70% were sequential scans for training, 20% were point reads for feature lookups, and 10% were real‑time updates from user events.  
- For batch ETL I used Azure Synapse (columnar) to run fast analytical queries on the blobs.  
- For serving, I spun up a Redis cache for hot features and an Azure Cosmos DB (document) for user profiles.  
- Time‑series metrics went into InfluxDB, while vector embeddings were stored in Milvus.  
I built a lightweight orchestration layer with Azure Data Factory to move data between blob storage and the chosen stores, and added automated cost monitoring.

**Result** – The new architecture cut recommendation latency from 1.2 s to 180 ms, increased model accuracy by 3% due to richer features, and reduced infrastructure spend by 25%. I learned that a one‑size‑fits‑all database rarely works for ML pipelines; mapping workloads to the right storage type is key to performance and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
