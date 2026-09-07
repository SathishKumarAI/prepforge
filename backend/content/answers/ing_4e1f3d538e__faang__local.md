---
qid: ing_4e1f3d538e__faang__local
question: 'Explain: Summary — How to Choose the Number of Topics/Partitions in a Kafka
  Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 499
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:46:17-05:00'
sources: []
---

**Clarify**  
We’re asked how to decide *k*, the number of topics (or partitions) that a Kafka cluster should expose for a given workload. Key assumptions:  
- Topic is the logical unit of data distribution; partition count determines parallelism and retention limits.  
- Workload characteristics (throughput, latency tolerance, consumer parallelism, retention policy) are known or can be measured.

**Approach**  
1. **Profile current load** – record message rate, size, per‑producer/consumer throughput.  
2. **Map to partitions** – Kafka can process roughly *P* × (≈ 5–10 MB/s) per partition (hardware dependent).  
3. **Match consumer parallelism** – each consumer in a group reads one partition; ensure enough partitions for desired concurrency.  
4. **Consider retention & replication** – more partitions spread disk usage but increase metadata overhead.

**Depth**  
- **Throughput rule of thumb**: `P ≈ (TotalRate / MaxRatePerPartition)` where `MaxRatePerPartition` is derived from broker performance tests.  
- **Consumer scaling**: If you want *C* consumers, set `P ≥ C`.  
- **Retention**: Larger retention needs more partitions to keep per‑partition disk usage reasonable.  
- **Replication factor**: Each partition’s data is stored on R brokers; larger P increases network I/O for replicas.

Complexity: O(1) calculation after profiling; trade‑off between CPU/memory overhead (metadata grows with P) and latency/parallelism gains.

**Edge Cases**  
- Sudden traffic spikes → under‑partitioned clusters become bottlenecks.  
- Very small messages → many partitions may waste disk space.  
- Multi‑tenant workloads → topics per tenant can simplify isolation but increase total partition count.

**Optimize & Communicate**  
Iteratively adjust *P*: start with a conservative estimate, monitor broker metrics (disk usage, I/O wait), then incrementally add partitions while ensuring consumers rebalance smoothly. Document the rationale: “We set 200 partitions to support 1 Gbps throughput and 400 concurrent consumers, based on our benchmark that each partition handles ~5 MB/s.” This transparent reasoning satisfies FAANG interviewers who value structured problem solving and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
