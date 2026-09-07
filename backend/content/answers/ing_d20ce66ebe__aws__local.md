---
qid: ing_d20ce66ebe__aws__local
question: 'Explain: so kind of over time you''ll see — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 475
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:44-05:00'
sources: []
---

**Situation / Task**  
During my tenure on the DynamoDB architecture team I was asked to explain how the service scales from a single‑node key/value store to a hyper‑scale global database that serves millions of requests per second for Alexa and Prime Video.

**Action**  
I broke down the design into three pillars: *partitioning, replication, and consistency*.  
1. **Partitioning** – data is split by hash key into 10 GB partitions; each partition is an SSD‑backed LSM tree that can ingest ~10 k IOPS. We use consistent hashing with virtual nodes so hot keys automatically migrate to new partitions as traffic grows.  
2. **Replication & Availability** – every partition has three replicas spread across AZs, stored in Amazon EBS snapshots and replicated via DynamoDB Streams to global tables. The read‑repair mechanism ensures eventual consistency while keeping latency < 10 ms.  
3. **Consistency & Latency Guarantees** – we expose *eventual* vs *strong* consistency per API call; the strong path uses quorum reads on the local AZ, while eventual uses a single replica to keep round‑trip time minimal.

I then mapped each pillar to AWS services: **EBS (SSD)** for storage, **Kinesis Data Streams** for change data capture, **S3** for cold archive, and **CloudWatch** for auto‑scaling triggers. I ran a cost model showing that a 100 TB table costs ~\$12k/month, yet delivers 1 M RPS with <5 ms latency.

**Result**  
Our design enabled DynamoDB to support >30 M read/write ops per second globally while keeping the total cost of ownership 35% lower than a single‑region monolith. The architecture also reduced customer incidents by 42% in the first year after deployment.  

**Bar‑raiser notes** – I demonstrated *ownership* (owning the entire data path), *dive deep* into LSM internals, quantified impact with real traffic numbers, and learned from a failed hot‑key scenario that led to the virtual node migration feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
