---
qid: ing_6e4665166d__faang__local
question: 'Explain: The Setup — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 524
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:10-05:00'
sources: []
---

**Clarify**

You’re asked to explain how LinkedIn’s engineers benchmarked Apache Kafka with **2 M writes/sec** on *three* inexpensive servers.  
Key assumptions to confirm:  
1) “cheap” means commodity x86‑64 nodes (≈$200 each).  
2) Writes are single‑partition, sequential record inserts.  
3) Throughput is measured in producer‑side I/O, not consumer lag.

---

**Approach**

1. **Cluster topology** – 3 brokers, 1 controller + 2 data nodes.  
2. **Topic design** – a single topic with many partitions (≥ 2000) to keep each broker’s load balanced.  
3. **Producer configuration** – high‑batch size (~1 MB), linger.ms=0, compression disabled, idempotence off.  
4. **Hardware tuning** – SSDs in RAID‑0, 10‑GbE NIC, tuned TCP buffer sizes.  
5. **Metrics collection** – `kafka-producer-perf-test.sh` + JMX (throughput, latency).  

---

**Depth**

- Each broker receives ~667 k writes/sec; with 2000 partitions the per‑partition rate is ~333 ops/s, well below a single core’s limit.  
- Batch size ≈1 MB and send interval = 0 ms allow the producer to saturate network I/O before hitting disk latency (~150 µs per record).  
- Using 3 nodes ensures the leader quorum (2/3) can commit without extra replication overhead, keeping the write path minimal.  

Complexity: **O(1)** per send; overall throughput linear in number of partitions up to the NIC limit.

---

**Edge Cases**

- Disk failure → data loss if `acks=0`; we mitigate with `acks=1`.  
- Network jitter could drop batches; Kafka retries add latency.  
- Producer overload leads to back‑pressure; monitor `bytes_in_flight`.

---

**Optimize & Communicate**

Future gains: enable GZIP compression (≈30 % bandwidth reduction), upgrade NIC to 25 GbE, or use NVMe SSDs for sub‑100 µs IO. I’d present the benchmark as a proof of concept that Kafka scales linearly with commodity hardware when tuned properly, highlighting trade‑offs between latency and throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
