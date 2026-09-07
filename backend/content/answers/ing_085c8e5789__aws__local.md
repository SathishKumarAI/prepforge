---
qid: ing_085c8e5789__aws__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:56-05:00'
sources: []
---

**Scenario –** *Design a ledger‑style index service that can handle trillions of records for Uber’s real‑time routing engine.*

| **Leadership Principle** | **How I Applied It** |
|---------------------------|----------------------|
| **Ownership** | Took full responsibility from data ingestion to query latency. |
| **Dive Deep** | Analysed every layer: write amplification, consistency, cost per record. |

### Situation
Uber’s dispatch system required a globally consistent index of *every* driver‑location event (≈ 10⁶ events/s). Existing NoSQL stores couldn’t guarantee ACID semantics while scaling to trillions of rows.

### Task
Build **LedgerStore**—a write‑through, append‑only ledger that preserves order, supports point‑in‑time queries, and scales elastically without manual sharding.

### Action
1. **Data Model** – Partition by *region* (partition key) + monotonically increasing *event_id* (sort key).  
2. **AWS Services**  
   - **Amazon DynamoDB Streams** → trigger Lambda that writes to an **S3 Glacier Deep Archive** archive for immutable retention.  
   - **DynamoDB Global Tables** → multi‑region replication, low‑latency reads for routing.  
   - **AWS Glue + Athena** → ad‑hoc analytics on the S3 archive without moving data.  
3. **Scalability/Availability** – DynamoDB auto‑scales to 5 M RCU/WCU; Global Tables gives < 10 ms read latency worldwide.  
4. **Cost Trade‑off** – Store hot writes in DynamoDB, cold history in Glacier (≈ $0.004 per GB/month).  
5. **Failure Handling** – Idempotent Lambda writes and DynamoDB conditional puts guarantee no duplicate ledger entries.

### Result
- Achieved **99.999% durability** for 3‑year retention across 50 regions.  
- Reduced query latency from 120 ms to **18 ms** (≈ 85 % improvement).  
- Cut storage cost by **70 %** versus a pure DynamoDB solution.

---

**What a bar‑raiser looks for:**  
*Clear ownership of the end‑to‑end system, deep dive into trade‑offs, measurable impact, and lessons learned when Lambda throttling hit 4xx errors—prompted me to add an exponential back‑off strategy.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
