---
qid: ing_f48117efd5__star__local
question: 'Explain: Message Queue Antipattern — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 379
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:30-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce launch, our checkout service was built around a single RabbitMQ queue that handled everything: inventory checks, payment authorization, fraud detection, and order fulfillment. A sudden spike in traffic during the holiday sale pushed the queue backlog to over 30 000 messages, causing latency to climb from 200 ms to 3 s and a 12 % drop in completed orders.

**Task**  
I had to redesign the messaging layer so that each micro‑service could scale independently, eliminate bottlenecks, and recover quickly from failures without compromising data consistency or user experience.

**Action**  
1. **Decouple responsibilities** – split the monolithic queue into three dedicated topics: `inventory`, `payment`, and `fulfillment`.  
2. **Implement fan‑out patterns** where needed (e.g., a single order message was broadcast to both payment and inventory).  
3. **Add per‑service dead‑letter queues** with exponential back‑off retry policies, preventing one failing service from clogging the entire pipeline.  
4. Used Kafka instead of RabbitMQ for high-throughput topics; it offered better partitioning and offset management.  
5. Instrumented each consumer with Prometheus metrics to monitor lag and latency in real time.

**Result**  
Latency dropped to under 300 ms during peak load, order completion rates improved by 18 %, and the system could now handle a 4× traffic surge without queue buildup. I learned that over‑aggregating messages into one queue is a classic antipattern; proper topic segmentation, retries, and observability are essential for resilient ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
