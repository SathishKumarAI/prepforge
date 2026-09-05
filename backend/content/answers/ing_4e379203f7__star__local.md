---
qid: ing_4e379203f7__star__local
question: 'Explain: SMS Processor — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 343
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:01-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new e‑commerce platform that needed real‑time order confirmations via SMS. Our existing notification pipeline was batch‑oriented, so customers were getting delayed messages and our churn rate spiked by 12 % in the first month.

**Task:**  
I had to design an SMS processor that could ingest millions of events per day, guarantee at‑least‑once delivery, and scale elastically while keeping latency under 200 ms for 99.5 % of requests.

**Action:**  
I built a microservice architecture using Kafka as the event bus, splitting messages into “order‑created”, “payment‑succeeded” and “shipment‑shipped” topics. A stateless Go worker pool consumed events, enriched them with user preferences from Redis (TTL 24 h), and routed to an SMS gateway via HTTP/2 multiplexing. I added a retry layer with exponential backoff and a dead‑letter queue for failures. For scalability, I leveraged Kubernetes HPA on CPU usage and used topic partitioning to parallelize processing. Monitoring was set up in Prometheus; alerts fired if message latency exceeded 250 ms.

**Result:**  
Within three weeks of deployment we cut SMS delivery time from ~5 s to <200 ms, reduced churn by 8 %, and handled a peak of 3 M events/day with zero outages. I learned the importance of decoupling ingestion from processing and that real‑time metrics guide capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
