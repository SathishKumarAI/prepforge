---
qid: ing_6b99fe71e3__star__local
question: 'Explain: Message Queue Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:33-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine that ingested user click streams from our mobile app. The raw event rate spiked to over 2 M events per minute during peak hours, but our ML inference service was only handling ~200 K requests per minute due to processing bottlenecks.

**Task:**  
I had to design a message‑queue tier that could buffer the incoming events, scale elastically with traffic spikes, and feed downstream services (feature extraction, model scoring) without data loss or backpressure.

**Action:**  
I chose Kafka for its horizontal scalability and built a partitioned topic per user segment. Each producer wrote to the appropriate partition using a round‑robin hash of the user ID. I set up a consumer group with 12 workers that each ran a lightweight Go service, pulling batches of 1 k messages, applying schema validation via Avro, and pushing them into a Redis cache for feature aggregation. To avoid outliers causing delays, I implemented a dynamic scaling policy: when the consumer lag exceeded 30 % of the topic’s log size, an autoscaler spun up two more workers; when lag dropped below 5 %, it terminated idle instances. We also added a dead‑letter queue for malformed records.

**Result:**  
After deployment, throughput increased from 200 K to 1.8 M requests per minute, with consumer lag staying under 10 % even during flash crowds. Latency from ingestion to inference dropped from 3.5 s to 0.9 s. The key takeaway was that fine‑grained partitioning combined with automated worker scaling turns a monolithic bottleneck into an elastic pipeline, keeping the ML stack responsive and cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
