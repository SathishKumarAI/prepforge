---
qid: ing_dd64c08acd__star__local
question: 'Explain: Storage — Uncovering Kafka\u2019s Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 361
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:00-05:00'
sources: []
---

**Situation**  
At my last role, we migrated a real‑time analytics pipeline from a monolithic batch system to Apache Kafka. The engineering team was excited but the finance department flagged that the on‑prem hardware budget had been exceeded by 30 % within the first quarter.

**Task**  
I needed to audit and quantify Kafka’s hidden storage costs—especially the overhead of replication, log compaction, and under‑utilized brokers—and propose a cost‑effective architecture without compromising data durability or latency.

**Action**  
1. Instrumented broker metrics with Prometheus and Grafana to capture segment size, retention period, and replica count per topic.  
2. Used Kafka’s `kafka-log-dirs.sh` script to map disk usage across the cluster, revealing that 18 % of space was occupied by deleted offsets still retained due to a conservative cleanup policy.  
3. Re‑configured the topics: reduced replication factor from 5 to 3 for non-critical streams, enabled log compaction where possible, and adjusted `retention.ms` based on actual consumer window analysis.  
4. Implemented automated disk reclamation via a nightly job that purged under‑utilized segments and migrated hot data to SSDs while keeping cold archives on cheaper HDDs.

**Result**  
The storage footprint dropped by 42 %, cutting hardware costs from $120k/month to $70k/month. Throughput remained within SLA (≤5 ms latency). I learned that a granular, metrics‑driven approach to Kafka’s internal storage can uncover large savings and prevent “silent” infrastructure debt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
