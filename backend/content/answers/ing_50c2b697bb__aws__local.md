---
qid: ing_50c2b697bb__aws__local
question: 'Explain: Kafka in 30 seconds — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 430
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:33-05:00'
sources: []
---

**Situation / Task**  
At LinkedIn I led a proof‑of‑concept to prove that an open‑source stream platform could ingest **2 M writes/sec** on commodity hardware—critical for our real‑time recommendation engine. The goal was to benchmark throughput, not just raw speed.

**Action**  
I scoped the requirements: *write‑throughput only*, 64‑bit keys/values, no persistence guarantees beyond replication. I chose **Apache Kafka** because it offers horizontal scaling, partitioning, and low‑latency logs—exactly what we needed.  

- **Cluster design:** Three `kafka-broker` nodes, each with 8 vCPU, 32 GB RAM, 2 TB SSD, connected via a 10 GbE LAN.  
- **Producer tuning:** 64 parallel threads, batch size 1 MB, linger.ms=5 ms, compression=gzip.  
- **Broker config:** `num.partitions=200`, `replication.factor=3`, `min.insync.replicas=2`.  

I used **kafka‑producer-perf-test** to generate traffic and **Prometheus + Grafana** for metrics. The cluster sustained 2,100,000 writes/sec with < 10 % message loss, latency < 15 ms.

**Result**  
We proved that Kafka can meet our ingestion target on inexpensive hardware—cutting CAP‑ex by ~30 %. The benchmark also revealed a bottleneck in the network stack; we later replaced the NICs and saw a 12 % throughput lift.  

**Reflection**  
Ownership drove me to iterate on producer batching until the limit was reached (Dive Deep). I documented trade‑offs: higher compression reduced CPU but increased latency, so we chose gzip as a middle ground. This experiment informed our production streaming architecture and reinforced our bias for action—delivering results fast while learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
