---
qid: ing_d0791d00f7__aws__local
question: 'Explain: Key components for configuring Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 450
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:13-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a migration of a 2‑TB transactional workload from MySQL to Amazon Keyspaces (CQL). The goal was 99.9 % latency under peak load while keeping costs < $12k/month.

**Action – Technical Design**  
1. **Data Model & Partitioning** – Chose wide rows with composite keys (`user_id|timestamp`) to avoid hot partitions; tested cardinality in a staging cluster (avg 10,000 rows/partition).  
2. **Replication & Consistency** – Set RF = 3 and used `QUORUM` for reads/writes, giving 99.9 % availability per CAP while keeping latency < 20 ms.  
3. **Compaction Strategy** – Switched to *SizeTiered* with a 1‑hour TTL on audit logs; reduced disk usage by 35 %.  
4. **GC & Memory Tuning** – Disabled server‑side compaction on hot tables, allocated 8 GiB JVM heap, and set `gc_grace_seconds` = 0 to avoid tombstone accumulation.  
5. **Monitoring & Auto‑Scaling** – Employed CloudWatch alarms (latency > 30 ms) to trigger an EventBridge rule that scales the Keyspaces capacity by 25 % on demand.

**Result**  
Latency dropped from 120 ms to 18 ms under peak, throughput rose 4×, and monthly spend fell 27 %. The migration also cut mean‑time‑to‑repair for schema changes from days to hours.  

**Learning & Ownership**  
I documented the “Cassandra‑in‑Keyspaces Playbook” and ran a knowledge‑share workshop, ensuring the team could independently tune future clusters—showing true ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
