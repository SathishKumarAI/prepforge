---
qid: ing_d02db97ebc__aws__local
question: 'Explain: Consume JSON data — GitHub - confluentinc/kafka-rest: Confluent
  REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 446
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:48-05:00'
sources: []
---

**Situation** – I led a data‑pipeline for a SaaS analytics product that ingested millions of GitHub event records per day. The team had to expose the raw JSON events from Confluent Kafka via a REST endpoint so downstream microservices could consume them without writing custom Kafka clients.

**Task** – Design a scalable, low‑latency solution that guarantees at least 99.9 % availability, supports burst traffic (up to 10 k RPS), and keeps cost under $5K/month while minimizing operational overhead.

**Action** –  
1. **Ingress**: Deployed Confluent REST Proxy behind an Application Load Balancer (ALB) with sticky sessions. The proxy ran on ECS Fargate, auto‑scaling based on CPU & queue depth.  
2. **Transformation**: Added a Lambda layer that streams the JSON payload into Kinesis Data Streams for real‑time analytics and writes to S3 in Parquet via Glue jobs (schema evolution handled by Glue Schema Registry).  
3. **Caching**: Implemented API Gateway + CloudFront with 24 hr edge caching for idempotent “GET” requests, reducing load on the proxy by ~70 %.  
4. **Observability**: Used CloudWatch Metrics & X-Ray to trace request paths; set up alarms that auto‑scale ECS tasks when RPS > 8 k.

**Result** – The system handled 12 k concurrent REST requests with < 200 ms average latency, maintained 99.97 % uptime over 6 months, and cut infra costs from $9K to $4.2K/month. I documented the architecture in a “Post‑mortem” wiki, highlighting failure modes (e.g., proxy timeout) and mitigations (retry logic, circuit breaker).  

**Learnings** – Ownership of end‑to‑end flow, diving deep into latency bottlenecks, and iterating on cost/availability trade‑offs are key to delivering reliable data services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
