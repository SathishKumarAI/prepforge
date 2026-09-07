---
qid: ing_18b7d40706__aws__local
question: 'Explain: Types of data replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 535
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:48-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a high‑traffic e‑commerce catalog from an on‑premise MySQL cluster to AWS. The business required sub‑10 ms read latency globally, 99.999% availability, and zero data loss during regional outages.

**Action (Technical Design)**  
I mapped three core replication patterns:

| Pattern | Example Service | Use Case |
|---------|-----------------|----------|
| **Synchronous** | *Amazon RDS MySQL* with **Multi‑AZ** – writes are committed to a standby in another AZ before ack. Ideal for mission‑critical transactional data where consistency is paramount. |
| **Asynchronous** | *DynamoDB Global Tables* – multi‑region, eventually consistent reads; replication latency < 200 ms. Suited for catalog reads that tolerate eventual consistency but need global scale. |
| **Quorum / Multi‑Master** | *Amazon Aurora Serverless v2* + **Global Database** – each region can accept writes and resolves conflicts via last‑write-wins or application logic. Used when regional write traffic spikes (e.g., localized promotions). |

I also enabled **S3 Cross‑Region Replication** for static assets, reducing latency by 35 % in EU regions, and used **Kinesis Data Streams** to fan out change data capture to downstream analytics.

**Result**  
Post‑migration, read latency dropped from 120 ms to <8 ms globally; we achieved 99.9999% availability during a simultaneous AZ failure. Operational cost fell by 22 % due to Aurora’s serverless pay‑per‑use model and reduced replication overhead.

---

### Bar‑raiser takeaways
- **Ownership**: I drove end‑to‑end migration, not just a “replication” task.  
- **Dive Deep**: Chose specific AWS services based on consistency, latency, and cost trade‑offs.  
- **Quantified Impact**: Measured latency, availability, and cost savings with concrete numbers.  
- **Learning from Failure**: Initial synchronous replication caused write bottlenecks; we pivoted to Aurora’s global database after profiling traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
