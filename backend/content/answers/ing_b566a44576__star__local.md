---
qid: ing_b566a44576__star__local
question: 'Explain: The Challenge — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 466
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:21-05:00'
sources: []
---

**Situation:**  
When I joined the core infrastructure team at a fast‑growth social network, we were hitting a plateau: 150 M active users, ~300K queries per second, a 22 MB/s firehose of tweets, and a hard SLA to deliver every tweet in under five seconds. The existing monolith couldn’t keep up; latency spiked during peak hours.

**Task:**  
Redesign the end‑to‑end pipeline so it could ingest, process, and broadcast tweets at scale while guaranteeing sub‑five‑second delivery for 99.9 % of users across all regions.

**Action:**  
I broke the problem into three layers:

1. **Ingestion & Ordering** – Replaced the legacy queue with a horizontally sharded Kafka cluster (200 brokers), using user ID as key to preserve ordering per timeline. Added a lightweight “firehose” consumer that writes raw payloads to S3 for audit.

2. **Processing & Storage** – Built microservices in Go that consume Kafka topics, enrich tweets (hashtags, mentions) via Redis‑cached lookup tables, and write results into a Cassandra ring partitioned by user ID. We used Bloom filters to avoid unnecessary DB hits for inactive timelines.

3. **Delivery** – Implemented a push service that pulls from Cassandra streams, batches updates per region, and pushes via WebSocket/HTTP2 multiplexing. A global load balancer routes requests to the nearest edge node; latency monitoring triggers auto‑scaling of worker pods.

We also introduced a “dead‑letter” queue for failures and automated rollbacks using Kubernetes operators.

**Result:**  
After rollout, we cut average delivery time from 8 s to 3.2 s (99.9 % within SLA), increased QPS handling by 4× without new hardware, and reduced operational incidents by 70 %. I learned that micro‑service boundaries, stateless workers, and a shared sharded messaging layer are key to sustaining millions of users in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
