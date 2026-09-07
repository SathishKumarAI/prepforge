---
qid: ing_c283d85f42__faang__local
question: 'Explain: System Design Guided Practice - Sponsor — Cloud Spanner Database
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:18-05:00'
sources: []
---

**Clarify**  
The interview asks for a *system‑design* sketch that lets a sponsor (e.g., an ad network or fintech firm) run analytics on data stored in **Google Cloud Spanner**. I’ll assume the sponsor needs:  
- Real‑time ingestion of high‑volume events  
- Near‑zero‑latency reads for dashboards  
- Periodic batch jobs for ML model training  

**Approach**  
1. Ingest → Pub/Sub → Dataflow → write to Spanner (partitioned by sharding key).  
2. For low‑latency queries, build a read replica cluster in the same region and enable **read‑only replicas**.  
3. Expose a REST/GraphQL API that forwards reads to the replica; writes go through the primary.  
4. Batch jobs pull snapshots from Spanner into BigQuery (via Dataflow) for ML training.  

**Depth**  
- *Spanner* guarantees strong consistency and 99.999% availability with multi‑region replication.  
- Use **range partitioning** on a timestamp + userID key to balance load; set `max_partition_size` to ~10 GB.  
- Dataflow workers run in autoscaling mode, ensuring 0.5 ms read latency for the API.  
- BigQuery integration uses Cloud Storage staging; ML pipelines use Vertex AI.  

**Edge Cases**  
- Spanner write contention spikes → add more partitions or switch to `INSERT … ON CONFLICT`.  
- Cross‑region reads may suffer higher latency → fall back to local replicas.  
- Dataflow failures → retry policies and dead‑letter queues in Pub/Sub.  

**Optimize & Communicate**  
Explain trade‑offs: stronger consistency vs. latency, cost of read replicas versus performance gains, and the benefit of leveraging Spanner’s global transactions for auditability. Conclude with a high‑level diagram and key metrics (throughput, latency, cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
