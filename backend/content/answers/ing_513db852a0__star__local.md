---
qid: ing_513db852a0__star__local
question: 'Explain: Job Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:55-05:00'
sources: []
---

**Situation**  
At my previous company we ran nightly batch jobs across three data centers. A single point of failure in the central scheduler caused 30 % of our jobs to miss their SLA, and the log files were scattered across multiple queues, making troubleshooting painful.

**Task**  
I was tasked with building a fault‑tolerant, horizontally scalable job scheduler that could schedule, retry, and balance jobs across regions while providing real‑time visibility into queue depth and job health.

**Action**  
I chose a micro‑service architecture: a stateless API gateway, a central “Job Manager” service, and worker nodes per region. Jobs were stored in a sharded Kafka topic; each partition represented a region. The Job Manager used an in‑memory priority queue (C++ std::priority_queue) backed by Redis for persistence. Workers subscribed to their region’s partition via Kafka Streams, pulling jobs with a visibility timeout. For fault tolerance I added a “dead‑letter” queue and implemented exponential backoff retries. Metrics were pushed to Prometheus; Grafana dashboards showed per‑region latency, retry counts, and SLA compliance. We also introduced a lightweight lease mechanism using etcd to avoid duplicate execution.

**Result**  
The new scheduler reduced job failure rates from 30 % to <5 %, cut average completion time by 18 %, and eliminated the single point of failure. I learned that coupling Kafka’s partitioning with a lightweight in‑memory queue provides both scalability and low latency, while externalized state (Redis/etcd) keeps the system resilient without overcomplicating the core logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
