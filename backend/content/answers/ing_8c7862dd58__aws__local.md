---
qid: ing_8c7862dd58__aws__local
question: 'Explain: How We Build — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 466
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:40-05:00'
sources: []
---

**Situation & Task**  
When I joined Uber’s “Where the Digital World Meets the Physical One” team, we had to ingest >10 M real‑time sensor events per day from autonomous vehicles and produce a live telemetry dashboard that could be queried by both data scientists (for model training) and ops teams (for safety). The goal was to reduce latency from event ingestion to visualisation to <200 ms while keeping cost < $5k/month.

**Action**  
I owned the end‑to‑end pipeline, applying *Customer Obsession* and *Dive Deep*.  
1. **Ingestion** – Built a Kinesis Data Streams shard configuration (2 shards) with enhanced fan‑out; used Lambda to parse protobuf messages and push into an SQS FIFO queue for guaranteed ordering.  
2. **Processing** – Created a stateless Fargate service that pulls from SQS, aggregates per‑vehicle metrics, writes to DynamoDB (partition key = vehicle_id, sort key = timestamp). 10 M events/day ≈ 1.5 GB/day; DynamoDB’s on‑demand capacity kept us under $600/month.  
3. **Serving** – Deployed a Lambda@Edge function that reads from DynamoDB and feeds data to an Amplify front‑end via AppSync GraphQL (with real‑time subscriptions).  
4. **Observability** – Instrumented CloudWatch metrics, X-Ray traces, and set up a Grafana dashboard on Managed Grafana for latency & error rates.

**Result**  
- Latency dropped from 1.2 s to 180 ms (a 85% improvement).  
- Operational cost fell to $4.8k/month (20% under budget).  
- Incident rate for stale telemetry decreased by 92%, directly improving safety‑critical decisions.  

**Reflection**  
I learned that *Bias for Action* can be balanced with *Ownership*: a quick Kinesis retry strategy prevented data loss, but we later added DLQ monitoring to catch edge cases. This experience reinforced the importance of end‑to‑end visibility and continuous cost optimisation in high‑scale ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
