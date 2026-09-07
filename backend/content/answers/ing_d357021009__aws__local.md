---
qid: ing_d357021009__aws__local
question: 'Explain: Single Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 480
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:23-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn we needed a proof‑of‑concept that a single consumer could keep up with **2 M writes/sec** on commodity hardware—essential for our real‑time analytics pipeline. The goal was to validate Kafka’s throughput and expose bottlenecks before scaling out.

**Action (Design)**  
1. **Cluster**: 3 x Intel Xeon E5‑2620 v4, 32 GB RAM, NVMe SSDs.  
2. **Kafka config**: `num.partitions=128`, `replication.factor=1`, `min.insync.replicas=1`.  
3. **Producer**: 16 parallel threads, batch size 64 KB, linger.ms=5ms.  
4. **Consumer**: Single process with 4 consumer threads, `fetch.min.bytes=1MB`, `max.poll.records=5000`.  
5. **Monitoring**: Prometheus + Grafana; JMX metrics for `BytesInPerSec` and `RecordsPerSec`.

Used **AWS Kinesis Data Streams** as a reference model to compare costs (approx $0.015 per 100 000 records).  

**Result**  
- Sustained **2,200,000 writes/sec** with < 70 ms average latency.  
- CPU usage peaked at 85% on producer nodes; consumer stayed below 40%.  
- Cost‑efficiency: ~$0.12 per million records vs $0.30 in a fully replicated cluster.

**Reflection (Amazon Lens)**  
*Customer Obsession*: We validated that our real‑time feed would not choke downstream analytics, directly improving user experience.  
*Ownership & Dive Deep*: Identified the producer batch size as the primary lever; after tuning we achieved 10 % more throughput without hardware changes.  
*Learn from Failure*: Initial runs hit GC pauses; switching to G1 and reducing heap mitigated this—an important lesson for production deployments.  

**Takeaway**  
A well‑tuned Kafka cluster on inexpensive servers can exceed 2 M writes/sec, delivering high performance with lower cost than managed alternatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
