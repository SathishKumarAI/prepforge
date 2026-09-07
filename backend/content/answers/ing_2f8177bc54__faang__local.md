---
qid: ing_2f8177bc54__faang__local
question: 'Explain: Distributed Computing — Must Know System Design Building Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 720
total_tokens: 954
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:17-05:00'
sources: []
---

**Distributed Computing – Core System‑Design Building Blocks**

| # | Building Block | Why It Matters |
|---|-----------------|---------------|
| **1** | *Partitioning & Sharding* | Splits data across nodes; enables parallel query execution and fault isolation. |
| **2** | *Replication & Consistency Models* | Provides high availability (e.g., Raft, Paxos) while balancing latency vs. consistency (CAP). |
| **3** | *Task Scheduling & Work‑Stealing* | Dynamically balances load across workers (e.g., YARN, Mesos, Kubernetes). |
| **4** | *Data Serialization / Format* | Compact, schema‑aware formats (Parquet, Avro) reduce network I/O and enable columnar analytics. |
| **5** | *Communication Protocols & RPC* | gRPC/Thrift with back‑pressure support for low‑latency, high‑throughput inter‑service calls. |
| **6** | *Fault Detection & Recovery* | Heartbeats, retry policies, and stateless design to recover from node failures without data loss. |
| **7** | *Monitoring & Observability* | Metrics (Prometheus), logs (ELK), traces (OpenTelemetry) for debugging distributed pipelines. |

### How I’d Design a Distributed ML Pipeline

1. **Clarify**  
   - Goal: Train a deep network on 10 TB of data, serving predictions with <50 ms latency.  
   - Constraints: Multi‑region deployment, GDPR compliance, budget ≤ $200k/month.

2. **Approach**  
   - Store raw data in S3 (partitioned by time), materialize feature tables in a distributed columnar store (Dremio/BigQuery).  
   - Use Spark/Yarn for distributed preprocessing; TensorFlow‑On‑K8s with Horovod for synchronous SGD across GPU nodes.  
   - Deploy inference via gRPC microservice behind a Kubernetes Ingress, backed by an autoscaling pool of TF Serving containers.

3. **Depth**  
   - *Partitioning*: Hash‑partition on user ID to keep related data together; use range partitioning for time series.  
   - *Consistency*: Use eventual consistency for feature tables (reads may lag <1 s), strong consistency for model checkpoints via etcd.  
   - *Scheduling*: Kubernetes CronJobs trigger nightly training; worker pods auto‑scale based on CPU/memory metrics.  
   - Complexity: Training O(N) across *P* workers → ≈O(N/P); inference latency dominated by RPC round‑trip (~10 ms).  

4. **Edge Cases**  
   - Network partitions → fallback to stale model replicas.  
   - Feature drift → automated retraining trigger when deviance > threshold.  
   - Data skew → dynamic re‑partitioning during Spark jobs.

5. **Optimize & Communicate**  
   - Use mixed precision training (FP16) to cut GPU memory by 50 %.  
   - Cache hot embeddings in Redis for sub‑millisecond lookup.  
   - Present design with a diagram, justify trade‑offs (CAP, cost vs latency), and outline rollback procedures.

*This structured approach demonstrates clear problem framing, thoughtful architecture, depth of technical detail, and awareness of real‑world constraints—exactly what FAANG interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
