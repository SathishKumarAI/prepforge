---
qid: ing_6e7d908539__aws__local
question: 'Explain: Indexing New Content — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 474
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:54-05:00'
sources: []
---

**Situation (S)** – While leading the ML infra team at a social‑media startup, we had to design an *indexing pipeline* that ingests ~10 M new posts per day and surfaces them in Instagram’s Explore feed within 2 seconds of upload.

**Task (T)** – Build a scalable, low‑latency system that tags images with millions of concepts, stores vectors, and supports real‑time recommendation queries.

**Action (A)** –  
1. **Capture & Pre‑process**: Use *Amazon Kinesis Data Streams* to buffer uploads; *AWS Lambda* triggers invoke the inference container on *Amazon SageMaker Edge*.  
2. **Feature Extraction**: A distributed PyTorch model runs on *ECS Fargate* (auto‑scales 100–1 000 tasks). The embeddings are written to *DynamoDB Global Tables* for cross‑region consistency.  
3. **Indexing** – We shard the vector space into 256 partitions and store them in *Amazon OpenSearch Service* with a custom ANN plugin; this gives sub‑50 ms query latency.  
4. **Serving** – The Explore API sits behind an *ALB* and uses *AWS AppConfig* to roll out new ranking weights without downtime.

**Result (R)** – After launch, indexing time dropped from 8 s to <1 s, query latency hit 30 ms, and the recommendation precision‑recall improved by **12%**, driving a 4.7% lift in daily active users within three months.  

**Leadership Principles Highlighted:**  
- *Ownership* – I owned the end‑to‑end pipeline, from data ingestion to serving.  
- *Dive Deep* – We profiled each microservice, discovered bottlenecks in GPU utilization, and refactored the embedding model to reduce inference cost by 35%.  

**Bar‑raiser cues:** clear ownership narrative, quantitative impact, deep technical choices (Kinesis vs. SQS, OpenSearch ANN), and learning from a failed first attempt that used pure RDS, which couldn’t scale horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
