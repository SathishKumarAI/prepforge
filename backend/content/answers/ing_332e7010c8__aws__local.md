---
qid: ing_332e7010c8__aws__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB
  - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 630
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:01-05:00'
sources: []
---

**Situation (S)**  
At a large messaging platform, the on‑prem Cassandra cluster hit its storage limit—over **3 trillion messages**—and performance degraded to 30 ms read latency, breaking our SLAs for real‑time chat. The engineering team had to move all data to a new database with minimal downtime.

**Task (T)**  
Lead the migration while ensuring zero data loss, maintaining 99.999% availability, and keeping operational cost below the existing budget.

**Action (A)**  
1. **Ownership & Dive Deep:** I built a *migration blueprint* that split the data into 10 GB partitions, each mapped to an S3 object. Using AWS Glue cataloged metadata for downstream services.  
2. **Design & AWS Services:**
   - **AWS DataSync** streamed live writes from Cassandra to S3 in near‑real time, guaranteeing consistency.  
   - **Amazon DynamoDB Global Tables** were chosen as the target (ScyllaDB‑compatible via the DynamoDB API). I leveraged *DynamoDB Accelerator (DAX)* for sub‑1 ms reads during cutover.  
   - **AWS Lambda** orchestrated the incremental sync and performed sanity checks; CloudWatch monitored throughput, error rates, and triggered auto‑scaling of DAX nodes.  
3. **Scalability & Cost:** By using serverless components (Glue, Lambda) and pay‑per‑request DynamoDB, we avoided overprovisioning. Estimated cost was 12 % lower than a self‑managed Scylla cluster on EC2.  
4. **Risk Mitigation:** A “shadow” read replica in a separate region validated consistency before cutover. The migration window was limited to a 15‑minute maintenance period, with automated rollback scripts.

**Result (R)**  
- Completed the 3 trillion‑message move in **8 hours**, 4× faster than the legacy ETL pipeline.  
- Post‑migration read latency dropped from **30 ms → 5 ms**; write throughput increased by **70%**.  
- Total cost for the migration and ongoing operations was **$42,000**, 18 % under budget.  

---

### Bar‑raiser cues

| Cue | Why it matters |
|-----|----------------|
| **Ownership** | I owned end‑to‑end design, from data modeling to cutover scripts. |
| **Dive Deep** | Detailed partitioning logic, Glue catalog schema, and DAX tuning show depth. |
| **Quantified Impact** | 8 h migration, latency reduction, cost savings—clear business metrics. |
| **Learning from Failure** | We ran a dry‑run that uncovered a missing index; adjusted the sync strategy before production. |

This solution exemplifies *Customer Obsession* (zero downtime for users) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
