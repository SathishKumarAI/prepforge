---
qid: ing_dd78f81c4d__aws__local
question: 'Explain: Durability — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 442
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:00-05:00'
sources: []
---

**Situation & Task**  
When launching a real‑time bidding platform for programmatic ads, I was tasked to guarantee *durability* of every bid while still meeting sub‑millisecond latency. The data had to satisfy ACID properties so that no impressions were lost or double‑counted.

**Action**  
I designed a hybrid storage layer:  
- **Amazon DynamoDB** (with on‑demand capacity) for high‑throughput, low‑latency writes, enabling *Atomic* updates via conditional expressions.  
- A **transaction log** in **Amazon S3 Glacier Deep Archive** backed by an **AWS Lambda** ingestion pipeline that periodically snapshots the DynamoDB state to S3 using *DynamoDB Streams*.  
- For *Recoverable ACID*, I employed **Amazon RDS Aurora Serverless v2** as a secondary ledger, replicating every transaction via **Aurora Global Database**.  

The system uses *optimistic locking* and *idempotent writes* to enforce *Consistency* and *Isolation*. If a write fails, the Lambda retries up to 5 times before flagging for manual intervention.

**Result**  
After deployment, we achieved:  
- **99.9999 % durability** (one loss in ~10⁹ transactions).  
- **<1 ms average latency** for bid writes.  
- Cost reduction of **23 %** compared to a pure RDS solution by offloading bulk writes to DynamoDB.

**Reflection**  
I learned that *ownership* means iterating on trade‑offs: we initially used a single RDS instance, but scalability limits forced us to shift to the hybrid approach. The bar‑raiser looks for deep dives into failure modes (e.g., stream lag) and quantitative impact—both of which I documented in post‑mortem slides that informed our next sprint’s capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
