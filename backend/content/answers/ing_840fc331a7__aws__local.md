---
qid: ing_840fc331a7__aws__local
question: 'Explain: Asynchronism and microservices — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 469
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:36-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a fast‑growing startup, we had to ingest millions of user events per second (tweets, likes, follows) and feed them into downstream recommendation models in near real time. The existing monolith stalled under peak load, causing latency spikes that hurt **Customer Obsession** – users saw delayed timelines.

**Action**  
I re‑architected the pipeline as a set of loosely coupled microservices using an **event‑driven, asynchronous pattern**:

| Service | AWS component | Reason |
|---------|---------------|--------|
| Event Ingest | Amazon Kinesis Data Streams | Low‑latency, horizontal scaling |
| Pre‑processing | Lambda + Step Functions | Serverless, pay‑per‑execution |
| Feature Store | DynamoDB + S3 (cold tier) | Fast reads for ML models; cost‑effective archival |
| Model Serving | SageMaker Endpoint (GPU) | Dedicated inference capacity |

I introduced **Kafka‑style partitions** in Kinesis to parallelize downstream consumers and used **Lambda Destinations** for retry/back‑off, ensuring eventual consistency. The system now processes 5 M events/s with <200 ms latency, a 70% improvement over the legacy stack.

**Result**  
- **Customer Obsession:** Users reported smoother feeds; NPS rose from 65 to 78 within three months.  
- **Ownership & Dive Deep:** I owned end‑to‑end monitoring (CloudWatch + X-Ray), identified bottlenecks, and iterated on partition sizing.  
- **Bias for Action & Deliver Results:** Deployment took only two weeks, with zero downtime.

**Learnings**  
Failure in the pre‑processing Lambda triggered a silent drop of 0.5 % of events; I added dead‑letter queues and automated alerts, turning a blind spot into proactive observability. This experience reinforced that **async microservices** coupled with **serverless elasticity** deliver scalable, customer‑centric ML pipelines on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
