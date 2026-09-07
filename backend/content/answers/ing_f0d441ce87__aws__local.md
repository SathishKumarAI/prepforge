---
qid: ing_f0d441ce87__aws__local
question: 'Explain: Network Protocols — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 437
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:39-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a real‑time recommendation engine that ingested user events from mobile apps and served predictions in <50 ms. The legacy monolith used raw HTTP sockets; latency spiked during peak hours (up to 200 % over SLA). My goal was to re‑architect the data pipeline with scalable network protocols, while keeping cost <15 % of the current spend.

**Action**  
- **Ownership & Bias for Action:** I scoped a new architecture using *gRPC* for intra‑service communication and *Kafka* for event ingestion.  
- **Dive Deep:** I benchmarked HTTP/2, gRPC, and Apache Pulsar; gRPC gave 3× lower serialization overhead.  
- **AWS Services:** Deployed **Amazon MSK** (managed Kafka) as the pub/sub backbone, **ECS‑Fargate** for stateless inference containers, and **Elastic Load Balancing** with *gRPC‑enabled* listeners.  
- Implemented a *service mesh* (App Mesh) to enforce mutual TLS and observability.  
- Added *Kinesis Data Streams* as a fallback during MSK outages, ensuring 99.9 % availability.

**Result**  
- Latency dropped from 120 ms to **32 ms** (75 % reduction).  
- Throughput scaled to 1M events/sec with zero single‑point failures.  
- Operational cost fell by **12 %** after the first year, and incident tickets reduced by 60 %.  

**Learning** – Early in the project we underestimated the impact of protocol choice on serialization overhead; a quick proof‑of‑concept saved months of rework. This experience reinforced that *Customer Obsession* drives us to measure what truly matters—end‑user latency—and *Ownership* compels us to iterate relentlessly until metrics align with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
