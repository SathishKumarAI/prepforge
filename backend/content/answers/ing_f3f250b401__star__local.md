---
qid: ing_f3f250b401__star__local
question: 'Explain: lead to bigger ETS say for example — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 387
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:30-05:00'
sources: []
---

**Situation:**  
In my last role at a ride‑hailing startup, we were hitting a bottleneck during surge periods: the monolithic order service couldn’t keep up with the 15k concurrent trip requests in our busiest city. Our SLA was slipping from 2 s to over 5 s.

**Task:**  
I needed to redesign the request flow into an event‑driven architecture that could scale horizontally, reduce latency, and improve fault tolerance—all while keeping data consistency for driver–passenger matching.

**Action:**  
I introduced a Kafka‑based message bus. Each trip request was published as a “RideRequest” event; consumer groups (matching service, payment gateway, ETA engine) processed the events independently. I added schema evolution with Avro and used Kafka Streams to aggregate real‑time driver availability. To guarantee at‑least‑once delivery, I implemented idempotent consumers and leveraged Kafka’s exactly‑once semantics for critical updates. For monitoring, I set up Prometheus exporters on each microservice and a Grafana dashboard that visualized lag, throughput, and error rates.

**Result:**  
The new ETS cut average trip‑matching latency from 5 s to 1.8 s (a 64% improvement) during peak hours. Throughput increased from 3k to 12k requests per second without additional hardware. The system also became more resilient: a consumer failure now only caused a 0.2 s retry delay instead of a cascade outage. I learned that decoupling services via events not only boosts scalability but also forces clear contracts and observability, which are essential for large‑scale ride‑hailing platforms like Uber or OLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
