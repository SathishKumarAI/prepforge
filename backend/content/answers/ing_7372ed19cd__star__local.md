---
qid: ing_7372ed19cd__star__local
question: How Does the Live Comment Work? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 373
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:37-05:00'
sources: []
---

**Situation:**  
When I joined my previous company’s streaming division, the live‑comment feature on our video platform was crashing during peak events—up to 50k concurrent viewers per stream—and latency spiked beyond 2 seconds.

**Task:**  
I had to redesign the comment subsystem so it could handle millions of messages per minute with sub‑second end‑to‑end latency, while keeping data consistency and supporting real‑time ranking (like “most liked”).

**Action:**  
I broke the problem into three layers. First, I moved ingestion to a Kafka cluster, using partition keys derived from stream IDs so related comments stayed in order. Second, I built a stateless microservice that consumed Kafka, applied rate limiting via Redis Lua scripts, and pushed messages to an in‑memory Pub/Sub (Redis Streams) for downstream consumers. Third, I used a sharded Cassandra table for persistence with a time‑to‑live of 48 h, and a separate materialized view in Elasticsearch to enable fast search and “hot” comment ranking. For the UI, I implemented long‑polling with websockets fallback, ensuring clients receive updates within 300 ms.

**Result:**  
The new architecture handled 3 M messages per minute during our biggest event, reduced end‑to‑end latency from 2.1 s to 350 ms, and increased comment throughput by 250%. I learned that decoupling ingestion from processing with a proper stream broker is key for scaling real‑time features, and that careful partitioning of both data stores and message streams prevents hotspots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
