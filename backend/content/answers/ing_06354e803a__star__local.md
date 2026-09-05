---
qid: ing_06354e803a__star__local
question: 'Explain: Zone-Failure-Resilient OpenSearch at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 321
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:19-05:00'
sources: []
---

**Situation:** At Uber I was on the Search Reliability team when a multi‑region deployment of OpenSearch began showing intermittent data loss during an unexpected zone outage in one of our US East clusters.

**Task:** My goal was to design and implement a zone‑failure‑resilient architecture that guaranteed at least 99.9% query availability and zero data loss, while keeping latency under 120 ms for real‑time ride matching.

**Action:** I started by mapping the existing shard distribution and identified single‑zone replicas as the weak point. I introduced cross‑zone replication with a “zone‑aware” routing plugin that automatically shifted read/write traffic to healthy zones. Then I added a lightweight “failover queue” backed by Kafka to buffer write requests during outages, ensuring they were replayed once the zone was back online. To keep performance high, I tuned the OpenSearch refresh interval and used shard prefetching for hot queries, balancing throughput against consistency.

**Result:** After rollout, we saw query availability rise from 96% to 99.95% during a simulated zone failure, with zero lost documents and latency staying below 110 ms. The project also reduced our incident response time by 40%. I learned that combining cross‑zone replication with a lightweight buffering layer can turn an inherently fragile search stack into a robust, low‑latency service at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
