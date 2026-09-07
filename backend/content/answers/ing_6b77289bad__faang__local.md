---
qid: ing_6b77289bad__faang__local
question: 'Explain: AWS components we use the same same — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 792
total_tokens: 1052
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:45-05:00'
sources: []
---

**1️⃣ Clarify**

> *What is being asked?*  
Explain how Amazon’s DynamoDB was architected in 2018, focusing on the core AWS services and components that underpin its hyper‑scale, low‑latency design.  
*Assumptions to confirm:*  
- Audience knows basic AWS terminology (EC2, S3, Lambda).  
- Interested in *architecture*, not just API usage.

---

**2️⃣ Approach**

Outline a high‑level diagram:  
1. **Data ingestion** → EC2/Container + App Load Balancer → *DynamoDB Streams*  
2. **Storage layer** → SSD‑backed *Elastic Block Store (EBS)* + *Amazon S3* for backups  
3. **Metadata & routing** → *AWS CloudWatch*, *SNS/SQS*, *Auto Scaling Groups*  
4. **Replication / consistency** → *DynamoDB Global Tables* using *Kinesis Data Streams*  
5. **Monitoring & security** → IAM, KMS, VPC endpoints  

Explain each component’s role and why it was chosen.

---

**3️⃣ Depth**

| Layer | AWS Service | Why It Matters |
|-------|-------------|----------------|
| **Compute** | EC2 + Auto‑Scaling | Handles request traffic; scales with demand. |
| **Load Balancing** | Application Load Balancer | Distributes reads/writes, provides TLS termination. |
| **Storage** | EBS (NVMe SSD) | Low‑latency block storage for hot data. |
| **Durability** | S3 + Glacier | Object backup and long‑term archival. |
| **Replication** | Kinesis Data Streams → DynamoDB Global Tables | Cross‑region replication, eventual consistency. |
| **Metadata Routing** | DynamoDB Partition Key hashing | Even distribution across shards. |
| **Observability** | CloudWatch Metrics & Alarms | Real‑time health monitoring; auto‑remediation. |
| **Security** | IAM + KMS | Fine‑grained access control and encryption at rest. |

*Complexity:*  
- Read/write latency ~ 10 ms (single AZ).  
- Consistency: tunable via *Read Capacity Units* (RCUs) vs *Write Capacity Units* (WCUs).  
- Cost trade‑off: On‑Demand vs Provisioned capacity + DynamoDB Accelerator (DAX).

---

**4️⃣ Edge Cases**

| Scenario | What breaks? | Mitigation |
|----------|--------------|------------|
| Sudden traffic spike | Auto‑Scaling lag, throttling | Pre‑warm instances; use on‑demand capacity. |
| Partial network failure | Cross‑region replication delay | Enable *Multi‑AZ* and *Read Replicas*. |
| Data corruption | Disk failure in EBS | Use RAID‑0 across multiple volumes + S3 snapshots. |

Testing: simulate 10× traffic, cut network to one AZ, verify data consistency after recovery.

---

**5️⃣ Optimize & Communicate**

- **Optimizations:**  
  - *Partition key design* (avoid hotspots).  
  - *Batch writes/reads* to reduce RPC overhead.  
  - Enable *DAX* for read‑heavy workloads.  

- **Narration style:**  
  “Think of DynamoDB as a distributed hash table sitting on top of SSDs, orchestrated by AWS services that auto‑scale, monitor, and secure everything. Each component is chosen to meet the twin goals of sub‑10 ms latency and petabyte‑scale durability.”  

*Wrap up:* Summarize that DynamoDB’s “under the hood” is a tightly coupled stack—compute, storage, replication, observability—all built on AWS primitives designed for scale, resilience, and low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
