---
qid: ing_017bd6182e__star__local
question: 'Explain: Read Workflow — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 314
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:19-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the recommendation pipeline for a music streaming service that handled over 20 million active users daily. The existing batch‑oriented workflow was causing data staleness and latency issues during peak hours.

**Task** – I needed to architect an end‑to‑end “Read Workflow” that ingested real‑time listening events, updated user embeddings, and served personalized recommendations with sub‑second latency while keeping the system cost‑effective.

**Action** – I started by implementing a Kafka stream for event ingestion, then used Apache Flink for stateful aggregation to maintain per‑user listening statistics in a distributed cache (Redis). For feature computation I deployed a lightweight Spark job that ran every 5 minutes, updating embeddings stored in HDFS and publishing them to an ML model served via TensorFlow Serving. Finally, I built a microservice layer with gRPC that queried the cache and served predictions directly to the front‑end.

**Result** – The new read workflow cut recommendation latency from 1.2 s to 150 ms, reduced data freshness lag by 95%, and lowered operational costs by 18% through better resource utilization. I learned how to balance streaming versus batch processing, and that a hybrid approach often delivers the best trade‑off between speed and accuracy in large‑scale recommendation systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
