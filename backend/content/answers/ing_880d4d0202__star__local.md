---
qid: ing_880d4d0202__star__local
question: 'Explain: Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:44-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time analytics dashboard for IoT devices. The backend pulled sensor data from thousands of edge nodes, processed it with Spark, and pushed results to the dashboard via WebSockets. When traffic spiked during a product launch, we hit 40 % latency increases and occasional timeouts.

**Task:**  
I had to redesign the ingestion layer so that the system could handle millions of events per minute while keeping end‑to‑end latency under 200 ms and ensuring no data loss.

**Action:**  
I introduced Kafka as a decoupled message queue between edge devices and the processing cluster. Each device published JSON payloads to a topic partitioned by region, guaranteeing horizontal scalability. I configured a producer batch size of 1 MB and linger.ms=5 ms to balance throughput and latency. On the consumer side, we spun up multiple Spark Structured Streaming jobs that read from Kafka in micro‑batches of 2 seconds, enabling near‑real‑time processing. To guard against backpressure, I set a maximum retention of 24 h and enabled compaction on control topics. Finally, I added Prometheus metrics to monitor consumer lag and message throughput.

**Result:**  
The new pipeline handled 1.5 M events per minute with average latency dropping from 450 ms to 120 ms. No data loss was observed during a 24‑hour peak period. The experience taught me that proper partitioning, backpressure handling, and observability are key when integrating message queues into large‑scale ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
