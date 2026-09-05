---
qid: ing_edaca5c367__star__local
question: 'Explain: Sliding Window — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 322
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:00-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a real‑time anomaly detection service for IoT sensor streams. The incoming data rate was ~10 k events per second and our latency budget had to stay under 100 ms.

**Task:**  
I needed to design a sliding‑window aggregation layer that could compute rolling statistics (mean, variance) over the last 5 minutes of data for each device while keeping memory usage bounded and supporting horizontal scaling.

**Action:**  
I chose a time‑based ring buffer per device. Each incoming event was timestamped and pushed into its device’s buffer; old events older than 5 min were popped lazily during reads. To avoid O(n) scans, I maintained incremental aggregates: each push updated running sum and count, while each pop subtracted the expired value. For sharding, we hashed device IDs to Kafka partitions so that each consumer handled disjoint sets of devices, ensuring no cross‑partition state needed. We used Redis Streams for fault tolerance, persisting buffers in a compact binary format.

**Result:**  
The system processed 10 k events/s with <80 ms latency and consumed <200 MB RAM per node. Accuracy drift stayed below 0.2% compared to a batch baseline. I learned that careful data‑structure choice—ring buffer plus incremental aggregates—lets you meet strict real‑time constraints while keeping the architecture simple and horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
