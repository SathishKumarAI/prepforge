---
qid: ing_bad03fd581__aws__local
question: 'Explain: B. Cassandra Schema — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 659
total_tokens: 895
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:08-05:00'
sources: []
---

**Situation (S)**  
I was hired by an e‑commerce startup that had 1 M active users and needed a real‑time recommendation API. Their stack was Go + Cassandra, but the read latency kept creeping past 200 ms, hurting conversion rates.

**Task (T)**  
Redesign the Cassandra schema so the “user‑profile → recommendations” endpoint could serve 99.9 % of requests in <50 ms while keeping cost under $3k/month on AWS.

**Action (A)**  

| Step | What I did | Why it matters |
|------|------------|----------------|
| **1️⃣ Schema dive** | Mapped the data model to a *wide‑row* design: `user_id` as partition key, `rec_type+timestamp` as clustering columns. Added a materialized view for “top‑N per user” so reads hit one node only. | Wide rows keep hot partitions balanced; MV gives O(1) read time. |
| **2️⃣ Read path** | Implemented Go’s gocql driver with connection pooling (5 sessions/host) and query caching via Redis (`AWS ElastiCache`). | Pooling removes TCP handshakes, caching eliminates 70 % of Cassandra hits. |
| **3️⃣ Write strategy** | Batched writes (batch size = 32) during user actions; used *lightweight transactions* only for “first‑time” flag updates. | Batching reduces disk I/O; LWTs avoid unnecessary consistency overhead. |
| **4️⃣ Monitoring & auto‑scale** | Deployed CloudWatch metrics, set alarms on latency > 70 ms → Auto Scaling Group (ASG) of Cassandra nodes + Spot Instances for cost savings. | Keeps SLA and controls spend. |

**Result (R)**  
* Latency dropped from 200 ms to **38 ms** average (95th percentile < 60 ms).  
* Throughput rose to **15k RPS** with a single ASG of 4 nodes.  
* Monthly cost fell from $7.5k to **$2.8k**, saving ~63 %.  
* Conversion rate increased by **12 %** due to faster recommendations.

---

### AWS Services Used
- **Amazon Keyspaces (Cassandra)** – managed cluster, autoscaling.
- **ElastiCache for Redis** – query cache.
- **CloudWatch & Auto Scaling** – observability + elasticity.
- **EC2 Spot Instances** – cost‑effective compute.

### Bar‑raiser Takeaways  
* **Ownership**: I drove the end‑to‑end redesign and paid attention to both performance and spend.  
* **Dive Deep**: I dissected Cassandra’s partitioning, clustering, and LWT semantics; I measured latency at each layer.  
* **Quantified Impact**: Delivered concrete numbers (latency, RPS, cost savings).  
* **Learning from Failure**: Early prototypes suffered from hot partitions; the final design fixed that by re‑partitioning data and adding a materialized view.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
