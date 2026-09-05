---
qid: ing_aadc8855b5__star__local
question: 'Explain: Cells, AZs, and replication — Kora: The Cloud Native Engine for
  Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 345
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:46-05:00'
sources: []
---

**Situation**  
When I joined the data platform team at FinTechX, our Kafka cluster was growing fast—over 400 partitions across three regions—but we were seeing high latency spikes during peak load and occasional data loss after a node failure.

**Task**  
I needed to redesign the deployment so it could handle sudden traffic bursts, remain highly available across Availability Zones (AZs), and guarantee zero‑loss replication without sacrificing throughput.

**Action**  
I introduced Kora’s “cells” concept: each cell is an isolated Kafka cluster that runs on a separate set of EC2 instances in a single AZ. Using Terraform I provisioned three cells per region, one for production traffic, one for testing, and one for disaster‑recovery. Then I leveraged Kora’s replication engine to wire the cells together with cross‑AZ mirroring—each partition leader replicated to two followers in different AZs with asynchronous replication lag capped at 200 ms. To keep throughput high, I tuned `min.insync.replicas` to 2 and enabled Kafka’s compacted topics for audit logs. Finally, I set up Prometheus alerts on the replication lag metric.

**Result**  
After rollout, peak latency dropped from 350 ms to under 80 ms, and we logged zero data loss during a simulated AZ outage. Throughput stayed above 12 kmsg/s per cell. The exercise taught me how Kora’s cell abstraction simplifies multi‑AZ resilience while keeping the replication logic transparent and configurable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
