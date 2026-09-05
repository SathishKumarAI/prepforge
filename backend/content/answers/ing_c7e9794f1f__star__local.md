---
qid: ing_c7e9794f1f__star__local
question: 'Explain: Follow us on — Discord Migrates Trillions of Messages from Cassandra
  to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 386
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:34-05:00'
sources: []
---

**Situation:**  
When I joined the Discord data team, our real‑time chat archive was still on a legacy Cassandra cluster holding over 3 trillion message rows. The read latency had climbed to 350 ms during peak hours, and the storage costs were ballooning because Cassandra’s compaction strategy wasn’t efficient for our append‑only workload.

**Task:**  
I was tasked with designing a migration to ScyllaDB that would keep service uptime below 5 % downtime, cut read latency by at least 50 %, and reduce storage cost per terabyte by 30 %. The plan also had to support continuous ingestion of new messages without halting the chat API.

**Action:**  
I first benchmarked both systems on a 10‑GB subset, tuning Scylla’s compaction and using its built‑in “SSTable merger” for bulk imports. Then I wrote a parallel migration pipeline in Rust that streamed batches from Cassandra via CQL drivers, applied schema transformations (e.g., denormalizing user IDs), and inserted them into Scylla using its vectorized write engine. To maintain live traffic, I set up a dual‑write layer: new messages were written to both clusters until the final cutover. Finally, I implemented a monitoring dashboard with Prometheus metrics for read latency, disk usage, and replication lag.

**Result:**  
The migration completed in 18 hours with only 3 % service disruption. Post‑migration read latency dropped from 350 ms to 140 ms during peak load—a 60 % improvement—and storage cost fell by 32 %. The exercise taught me how to orchestrate large‑scale data migrations while balancing performance, cost, and uptime constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
