---
qid: ing_5bafcd214b__star__local
question: 'Explain: Tagging Service — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:49-05:00'
sources: []
---

**Situation** – At my previous startup we launched a photo‑sharing app that suddenly hit 12 M active users. The growth curve slowed because the search engine couldn’t surface niche images; our tags were sparse and inconsistent, leading to a 35% drop in click‑through on image recommendations.

**Task** – I was tasked with building an end‑to‑end tagging service that could ingest millions of photos daily, automatically generate high‑precision tags, and serve them with <50 ms latency for real‑time recommendation pipelines.

**Action** – First, I designed a microservice architecture: a Kafka ingestion queue fed a TensorFlow inference cluster (GPU‑enabled) that ran an EfficientNet backbone + BiLSTM tag classifier. The output fed into a Redis cache keyed by image ID and a write‑through PostgreSQL table for audit logs. To handle scale, I partitioned the Kafka topic by user region and used vector‑search in Milvus to store embeddings for similarity‑based tag suggestions. For consistency, I added an online learning loop that retrained every 24 h on newly flagged mis‑tags.

**Result** – The tagging service processed 4 M images per day with a 92% precision/recall score. Search relevance improved by 28%, lifting recommendation CTR from 0.8% to 1.2%. I learned that balancing ML inference latency with real‑time API performance often means coupling batch retraining with lightweight online updates, and that a clear data pipeline (Kafka → GPU cluster → Redis/Postgres) is key for scaling ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
