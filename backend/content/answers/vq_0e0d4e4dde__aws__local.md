---
qid: vq_0e0d4e4dde__aws__local
question: What are the types of views?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 791
total_tokens: 1018
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:44-05:00'
sources: []
---

**Answer – Amazon Way**

> *Customer Obsession* – I always start by asking how each view type will help the data‑science team deliver insights faster for our customers.  
> *Dive Deep* – I map out the trade‑offs between freshness, storage cost, and query latency.

---

### 1️⃣ Regular (non‑materialized) views  

- **Definition**: A virtual table defined by a SELECT statement; data is recomputed on every read.  
- **Use case**: Quick ad‑hoc analytics where schema changes are frequent.  
- **AWS fit**: Athena or Redshift Spectrum can expose these as *views* over S3, incurring only query cost.

### 2️⃣ Materialized views  

- **Definition**: Persisted snapshot of a SELECT; refreshed on schedule or trigger.  
- **Use case**: High‑performance reporting dashboards that hit the same aggregates repeatedly.  
- **AWS fit**: Redshift’s `CREATE MATERIALIZED VIEW` or Athena’s *Materialized Views* (preview).  
- **Impact**: In our last sprint, a materialized view cut query time from 12 s to <1 s for 5 M rows—saving ~$300/month in compute.

### 3️⃣ Partitioned views  

- **Definition**: Logical grouping of data by key (e.g., date) that reduces scan scope.  
- **Use case**: Time‑series logs where only recent partitions are queried.  
- **AWS fit**: Athena’s partition pruning or Redshift’s table partitioning; can be combined with materialized views for further speed.

### 4️⃣ Incremental (change‑data capture) views  

- **Definition**: Views that expose only new/updated rows since last refresh, often via CDC.  
- **Use case**: Real‑time analytics pipelines.  
- **AWS fit**: Glue CDC + Kinesis Data Streams to feed a Redshift `INSERT` into a target table; query via a regular view.

---

### Design Snapshot (Redshift)

| Layer | Service | Cost driver | Availability |
|-------|---------|-------------|--------------|
| Ingest | S3 → Kinesis → Redshift COPY | Storage + ingestion throughput | 99.99% |
| Processing | Materialized View on aggregated sales | Compute per refresh | 99.9% |
| Consumption | Athena / QuickSight | Query volume | 99.95% |

**Scalability:** Auto‑scaling Redshift concurrency scaling for peak hours; S3 bucket auto‑tiering to keep storage cheap.  
**Trade‑offs:** Materialized views increase storage but cut query time dramatically; partitioned views reduce scan cost at the expense of more complex DDL.

---

### STAR Example

- **Situation:** Our product analytics team was stuck waiting 15 s per dashboard refresh on a 10 M row table.  
- **Task:** Reduce latency to <2 s while keeping costs under $1k/month.  
- **Action:** Implemented a materialized view in Redshift, refreshed nightly; added partitioning by `event_date`.  
- **Result:** Query time dropped from 15 s → 1.8 s (87% reduction); compute cost fell from $850 → $420/month. The team reported higher confidence in decisions—directly improving customer satisfaction scores.

---

**Bar‑raiser takeaway:** Show ownership by choosing the right view type for the workload, dive deep into AWS service features, quantify impact, and reflect on what could be better (e.g., exploring incremental refresh to shave another 20% latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
