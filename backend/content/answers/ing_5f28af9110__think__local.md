---
qid: ing_5f28af9110__think__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 556
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:17:50-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *What is being asked?* – We need to judge whether DynamoDB was an appropriate database for Canva’s media‑upload pipeline.  
- *Assumptions*: The blog describes a high‑throughput, globally distributed use case; we’re evaluating DynamoDB against alternatives (e.g., relational DBs, other NoSQL stores).  

**2️⃣ Pick a mental framework**  
Use the classic **“CAP + Cost + Consistency”** lens:  
- *Consistency & Availability*: Does the workload tolerate eventual consistency?  
- *Scalability*: Can it handle 50 M uploads/day (≈ 580 req/s) without throttling?  
- *Operational complexity*: How much management overhead is involved?  
- *Cost model*: Pay‑per‑request vs. provisioned throughput, data size, and storage costs.

**3️⃣ Reason step by step**  
1. **Throughput needs** – 50M uploads/day ≈ 580 req/s; DynamoDB can scale to millions of RCU/WCU with auto‑scaling.  
2. **Data model fit** – Each upload is a single item (metadata + S3 link). A simple partition key (user or media ID) fits well in DynamoDB’s key‑value style.  
3. **Consistency** – The system likely tolerates eventual consistency for read-after-write (metadata can be refreshed later).  
4. **Operational overhead** – DynamoDB is fully managed; no sharding or replication concerns, which suits a rapidly growing product.  
5. **Cost** – Pay‑as‑you‑go with provisioned throughput gives predictable pricing; S3 handles bulk storage cheaply.  

Combine these points to conclude: DynamoDB meets scalability, low latency, and operational simplicity for Canva’s use case.

**4️⃣ Common traps**  
- *Assuming relational DBs are always better*: they lack horizontal scaling without sharding.  
- *Ignoring eventual consistency*: not all workloads tolerate it; verify against read‑after‑write patterns.  
- *Overlooking cost of hot partitions*: uneven access patterns can cause throttling if not planned.

**5️⃣ Sanity check & verbalise**  
- Re‑examine the workload: 50 M/day ≈ 580 req/s → DynamoDB’s limits are far higher.  
- Confirm that the data model (simple key/value) matches.  
- Check that eventual consistency fits the UX.  

If all checks pass, confidently state: “Yes, DynamoDB was the right choice for Canva’s media upload scaling.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
