---
qid: ing_b0b7a9b713__star__local
question: 'Explain: Availability — CAP Theorem: One of the Most Misunderstood Terms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:12-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time fraud detection service that processed every transaction in the payment gateway. The system had to be online 24/7 because even a single outage would mean missed revenue and unhappy merchants.

**Task:**  
I was tasked with designing the data layer so we could keep the service highly available without sacrificing consistency or performance, especially during peak holiday traffic when write load spiked by 300 %.

**Action:**  
I chose a dual‑replica architecture using Cassandra for its tunable consistency. I set QUORUM reads and ONE writes to keep latency low while still ensuring that at least one replica had the most recent data. To avoid “split brain,” I implemented a lightweight transaction log with Raft consensus on a small cluster of coordinators, so any node could elect a leader quickly if the network partitioned. I also added a fallback cache in Redis for read‑heavy periods, which kept the service responsive even when Cassandra replicas were temporarily unreachable.

**Result:**  
The system achieved 99.999% uptime during the holiday surge, with average query latency staying under 12 ms and write throughput exceeding 10k TPS. The trade‑off of slightly stale reads (max 200 ms divergence) was acceptable for fraud scoring, and I learned that “availability” in CAP is about balancing consistency guarantees with real‑world performance constraints rather than a single static setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
