---
qid: ing_2dc04e308e__star__local
question: 'Explain: Failover Mechanisms — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 378
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:51-05:00'
sources: []
---

**Situation** – At my previous job I was tasked with redesigning the photo‑upload pipeline for a social app that served over 50 million daily active users. The existing monolithic service had a single point of failure; any outage would freeze uploads and cause a cascade of time‑outs across the feed.

**Task** – My goal was to build a highly available, horizontally scalable architecture that guaranteed at least 99.95% uptime for uploads while keeping latency under 200 ms during traffic spikes.

**Action** – I broke the service into micro‑components: an S3‑based object store, a Redis queue for job metadata, and a stateless “uploader” worker pool behind a load balancer. For failover I added active‑active regional replicas with Amazon Route 53 latency‑based routing and automatic health checks. Each region maintained its own PostgreSQL cluster; we used logical replication to keep user data in sync. Workers were monitored by Prometheus, and when a queue node failed we had a secondary “shadow” worker that automatically picked up orphaned jobs from the Redis stream. I also introduced a circuit‑breaker pattern in the client SDK so that if a region was down, requests would be retried against the nearest healthy endpoint.

**Result** – After deployment, upload availability rose to 99.98% and average latency dropped from 350 ms to 180 ms during peak hours. The system handled a sudden 4× traffic spike in February without any manual intervention. I learned that combining geo‑redundancy with lightweight state replication and smart client retries is key to building resilient, low‑latency services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
