---
qid: ing_bf773bf127__think__local
question: 'Explain: Benchmarking Apache Kafka - 2 Million Writes Per Second (On Three
  Cheap Machines)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 586
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:36:30-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**

- *What is being benchmarked?*  
  We’re measuring write throughput of Apache Kafka, not read or latency.  
- *Hardware constraints:* “three cheap machines” – assume commodity x86 servers (e.g., 4‑core CPUs, 8–16 GB RAM, SATA SSDs).  
- *Workload specifics:* 2 M writes/sec implies a producer sending tiny messages (≤ 1 kB) with minimal batching.  

**2️⃣ Mental model & framework**

- **Kafka architecture:** brokers → partitions → log segments.  
- **Throughput drivers:** CPU (serialization, compression), disk I/O (write‑ahead log), network bandwidth.  
- **Benchmarking tool:** `kafka-producer-perf-test.sh` or a custom producer that measures produced records per second.  

**3️⃣ Step‑by‑step reasoning**

1. **Set up 3 broker nodes** with identical config: same JVM, same heap (e.g., 4 GB), enable GZIP compression off to avoid CPU bottleneck.  
2. **Create a topic** with enough partitions (≥ number of producer threads × cores) – e.g., 48 partitions for 16‑core machines.  
3. **Launch producers** on each machine, using the same number of threads as partitions, sending records of ~200 B payload.  
4. **Measure write throughput** per broker and aggregate to ~2 M/sec.  
5. **Adjust `linger.ms`/`batch.size`** to balance latency vs throughput; keep them low for pure writes.  
6. **Profile CPU/disk/network**: ensure disk isn’t saturated (use SSDs) and network stays below 1 Gbps per node.

**4️⃣ Common traps**

- *Under‑partitioning:* too few partitions → thread contention, lower throughput.  
- *Disk bottleneck:* spinning disks can’t keep up; use SSD or NVMe.  
- *JVM GC pauses:* large heap causes long pauses; tune GC (G1) or use smaller heap.  
- *Network saturation:* 3 Gbps total might be insufficient if each broker receives > 0.7 Gbps.

**5️⃣ Sanity‑check & communicate**

- Verify that the aggregate write latency stays low (< 10 ms).  
- Cross‑check producer metrics (records sent, failures) against broker logs.  
- Summarize: *“By configuring 48 partitions per topic, disabling compression, and using SSD-backed brokers with tuned JVM settings, three commodity servers can sustain ~2 M writes/sec.”* This concise statement confirms the benchmark’s feasibility and key levers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
