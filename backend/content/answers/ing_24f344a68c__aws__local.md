---
qid: ing_24f344a68c__aws__local
question: 'Explain: Streaming — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 522
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:58-05:00'
sources: []
---

**Situation & Task**  
In a prior role I led the migration of our recommendation engine from batch‑to‑real‑time scoring. The pipeline needed to ingest user interaction events (clicks, views, purchases) at 10 k/s and feed them into an online inference service with <200 ms latency. We had two options: a single RabbitMQ broker or multiple brokers per event type.

**Action**  
I scoped the requirements:  
- **Throughput:** 12 k events/s, peak 30 k.  
- **Reliability:** at least 99.9% delivery guarantees.  
- **Latency:** producer‑to‑consumer ≤250 ms.  
- **Cost & Ops:** minimal operational overhead.

I evaluated a *single broker* design: one node with 4 vCPU, 32 GiB RAM, using RabbitMQ’s clustering for high availability. I modeled the queue depth and confirmed that with publisher confirms and prefetch limits of 50 per consumer, latency stayed below 200 ms even at peak load. The single‑broker setup reduced operational cost by ~30% versus a multi‑broker cluster (which would require additional management nodes and inter‑broker traffic).  

I implemented the design using **AWS MQ for RabbitMQ** with a 2‑node HA cluster, TLS encryption, and IAM authentication. I added monitoring via CloudWatch metrics (`rabbitmq_queue_messages_ready`, `consumer_utilization`) and set up an Auto Scaling policy that spun up a third node during sustained >25 k/s traffic.

**Result**  
- Throughput: handled 35 k events/s without backpressure.  
- Latency: producer‑to‑consumer <180 ms (average).  
- Availability: achieved 99.97% uptime over 6 months.  
- Cost: $0.12 per GB of transferred data vs $0.18 with multi‑broker.  

**Reflection**  
I learned that a *single, well‑provisioned broker* can outperform multiple brokers when the workload is evenly distributed and the queue depth manageable. I documented this trade‑off in our architecture guide, which now serves as a reference for future data‑streaming projects.

---

> **Leadership Principles:** *Ownership*, *Dive Deep*.  
> **Bar‑raiser focus:** Demonstrated ownership by choosing the simplest yet most efficient solution, dived deep into performance modeling, quantified impact with real metrics, and captured lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
