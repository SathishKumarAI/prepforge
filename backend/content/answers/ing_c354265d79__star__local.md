---
qid: ing_c354265d79__star__local
question: 'Explain: Message Throughput — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:36-05:00'
sources: []
---

**Situation** – I was tasked with redesigning the messaging backbone for a new instant‑messaging platform that aimed to support 2 billion daily active users, each sending an average of 20 messages per day, while keeping latency under 100 ms.

**Task** – Build a scalable architecture that guarantees high message throughput, delivers messages in order, and handles spikes during events (e.g., live concerts) without dropping traffic.

**Action** – I broke the system into three layers: an ingress API gateway using gRPC with load‑balancing across 200 edge servers; a publish/subscribe queue built on Apache Kafka with topic partitioning per user cluster to parallelize writes; and a stateless message store in a distributed NoSQL DB (Cassandra) for persistence. To keep ordering, I used per‑user key‑based partitions and a lightweight “sequence number” header. For burst handling, I added auto‑scaling on the consumer side and a short‑lived Redis cache to buffer messages when Kafka lag exceeded 50 ms. I also introduced a rate‑limit service that throttles clients exceeding 1 msg/s per IP.

**Result** – The new design handled 250 k concurrent connections with 99.9% throughput, reduced average end‑to‑end latency from 350 ms to 85 ms, and survived a live event spike of 10× normal traffic without message loss. I learned that combining fine‑grained partitioning with smart caching is key to scaling real‑time messaging at billions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
