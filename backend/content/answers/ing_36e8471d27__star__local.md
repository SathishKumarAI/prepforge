---
qid: ing_36e8471d27__star__local
question: 'Explain: Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 330
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:03-05:00'
sources: []
---

**Situation:**  
When our product team rolled out a real‑time fraud detection feature, the incoming transaction stream hit 15k events per second during peak hours. The ML inference service was struggling; latency spiked and some requests timed out, hurting user experience.

**Task:**  
I had to design a decoupled architecture that could ingest, buffer, and process transactions at scale while keeping end‑to‑end latency under 200 ms and ensuring no data loss.

**Action:**  
I introduced Kafka as the backbone. Each microservice produced messages (transaction payload + metadata) to a topic with topic partitioning based on account ID, guaranteeing ordered processing per user. The inference service consumed from the topic using consumer groups; I set `max.poll.records` to 500 and leveraged batch deserialization to hit our throughput target. To protect against spikes, I added a back‑pressure layer: if the broker lag exceeded 1 s, the producer switched to an in‑memory queue with a retry policy. I also enabled Kafka’s exactly‑once semantics via idempotent producers and transactional writes to ensure no duplicate predictions.

**Result:**  
Latency dropped from 350 ms to 120 ms during peak load, and throughput increased to 25k events/s with zero data loss in production tests. The system now scales horizontally by adding more consumer instances without code changes. I learned the importance of tuning partition counts, consumer batch sizes, and back‑pressure strategies when integrating ML inference into a high‑volume pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
