---
qid: ing_b79c885934__aws__local
question: 'Explain: NoSQL Databases — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 689
total_tokens: 921
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:07-05:00'
sources: []
---

**Behavioral (STAR – Customer Obsession & Ownership)**  
*Situation:* At my previous company we had a recommendation engine that stored user‑interaction logs in a single RDS instance. By Q2 the system hit **50 % CPU saturation** during peak traffic, causing 4 s latency spikes and a 12 % drop in click‑through rate (CTR).  
*Task:* I volunteered to redesign the data layer so we could scale horizontally while keeping cost under $10k/month.  
*Action:* I migrated logs to **Amazon DynamoDB** with a partition key of `user_id` and a sort key of `timestamp`. I added **DynamoDB Streams → Lambda → S3** for archival analytics, and enabled **Auto‑Scaling** with a target utilization of 70 %. I also implemented **Global Tables** across us-east-1 & eu-west-1 to reduce read latency for our global users.  
*Result:* Post‑migration, CPU usage dropped to <15 %, read latency fell from 4 s to <200 ms, and CTR rose by **18 %** within one month. Monthly spend stayed at $8.7k due to auto‑scaling and provisioned throughput tuning.  

---

**Technical/System Design – NoSQL Scalability**

1. **Data Model:**  
   *Partition key:* `user_id` (high cardinality).  
   *Sort key:* `event_timestamp`.  
   This ensures even write distribution and fast range queries for a user’s activity window.

2. **Throughput & Capacity Management**  
   - Use **DynamoDB Auto‑Scaling** on both read/write units with alarms to trigger when utilization >70 %.  
   - Enable **Provisioned Throughput with Bursting** (using the `BurstCapacity` feature) for flash traffic peaks.

3. **High Availability & Multi‑AZ**  
   - Deploy a **Global Table** so each region has its own replica, reducing cross‑region read latency to <30 ms and providing failover in case of AZ outage.

4. **Cost Control**  
   - Turn off **On‑Demand Capacity** after the first week of usage; switch to **Provisioned** once traffic patterns are stable.  
   - Use **DAX (DynamoDB Accelerator)** only for read‑heavy workloads where 10 ms latency is critical; otherwise rely on native caching.

5. **Data Lake & Analytics**  
   - Stream changes via **Streams → Lambda** into **Amazon S3** in Parquet format, enabling Athena queries without impacting operational performance.

6. **Trade‑offs**  
   - *Pros:* Linear scalability, 99.999 % availability, fully managed.  
   - *Cons:* Limited multi‑column joins and complex aggregations; mitigated by using the data lake for heavy analytics.

This design delivers predictable, low‑latency reads/writes at scale while keeping operational overhead minimal—exactly what a bar‑raiser expects from an AWS‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
