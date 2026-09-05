---
qid: ing_406b8ec8d7__star__local
question: 'Explain: AP - availability and partition tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:08-05:00'
sources: []
---

**Situation**  
At my previous job I was leading the redesign of a real‑time analytics platform that fed into our fraud detection engine. The data stream hit us at 3 k events per second from multiple microservices spread across three availability zones.

**Task**  
We needed to guarantee that the system stayed up for analysts even if one zone went offline, while still ensuring new transaction records were visible immediately to all nodes – essentially an AP configuration of the CAP theorem.

**Action**  
I chose a multi‑master Cassandra cluster with hinted handoff and read repair enabled. We tuned the consistency level to `LOCAL_QUORUM` on writes so that a write would be accepted by at least one node in each zone, and set reads to `ONE` for low latency dashboards. To handle partition events I implemented a lightweight transaction (LWT) fallback for critical updates and used Apache Kafka as an event bus to replay missed writes after recovery. Monitoring with Prometheus tracked the “write‑latency” SLA at 95th percentile < 200 ms, even during zone failures.

**Result**  
After deployment we saw 99.9% uptime during a full AZ outage, while read latency stayed below 180 ms and write throughput remained > 2.5 k events/s. The team learned that tuning consistency per operation type can satisfy both availability and partition tolerance without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
