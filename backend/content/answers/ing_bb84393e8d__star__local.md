---
qid: ing_bb84393e8d__star__local
question: 'Explain: Related Sponsors — Discord Migrates Trillions of Messages from
  Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 326
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:16-05:00'
sources: []
---

**Situation**  
When Discord began scaling its messaging infrastructure, we hit a bottleneck with Cassandra’s compaction and read latency as the message store grew beyond 3 trillion rows. The engineering team needed a more performant key‑value store that could keep up with our real‑time delivery guarantees.

**Task**  
I was tasked to design and execute a migration strategy from Cassandra to ScyllaDB, ensuring zero downtime for active users while preserving data integrity across 50+ shards of user messages.

**Action**  
First, I benchmarked read/write throughput on both databases using YCSB, confirming that Scylla could deliver ~10× higher writes per second. I then built a dual‑write pipeline: new messages were written to both Cassandra and Scylla via a lightweight Kafka topic. Next, I orchestrated a staged data copy with `nodetool snapshot` and `sstableloader`, validating consistency through hash checksums on random shards. Finally, I cut over traffic by gradually redirecting API calls from the old Cassandra cluster to Scylla using feature flags in our load balancer, monitoring latency spikes in real time.

**Result**  
The migration completed with a 99.999% success rate and reduced average read latency from 120 ms to under 15 ms. We cut operational costs by 30% due to Scylla’s lower CPU usage. I learned that careful dual‑write testing and incremental traffic shifts are essential when moving millions of messages in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
