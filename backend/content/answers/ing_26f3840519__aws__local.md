---
qid: ing_26f3840519__aws__local
question: 'Explain: Index lifecycle state machine — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 463
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:58-05:00'
sources: []
---

**Situation & Task**  
At Uber I led the **LedgerStore** team that had to support *trillions* of real‑time vehicle‑location indexes for surge pricing and ETA calculations. The existing monolith was hitting 60 % CPU on our largest nodes, and we risked violating SLA (≤ 200 ms query latency) during peak hours.

**Action – Design & Implementation**  
I proposed a **state‑machine driven index lifecycle** that partitions the index into *hot*, *warm* and *cold* states.  
- **Hot**: in-memory cache on an Amazon ElastiCache Redis cluster (cluster mode).  
- **Warm**: persisted to an Aurora PostgreSQL sharded cluster, using partitioned tables keyed by geohash.  
- **Cold**: archived into S3 Glacier Deep Archive for compliance and audit, with a Lambda‑driven lifecycle policy that promotes back to warm when queried.

The state machine is orchestrated via AWS Step Functions, triggered by CloudWatch metrics (CPU > 70% → move from hot to warm; inactivity > 48 h → move to cold). We use **AWS Kinesis Data Streams** for ingest and **DynamoDB Streams** for change‑data capture.  

I introduced a **cost‑aware scheduler** that batches promotions/demotions, reducing S3 read costs by 35 % while keeping latency under the SLA.

**Result**  
- Query latency dropped from 400 ms to **< 180 ms** during peak, meeting SLA 99.9%.  
- Infrastructure cost fell 42 % YoY (primarily via S3 Glacier usage).  
- Scalability increased: we handled a 5× traffic spike without new hardware.

**Reflection & Learning**  
The biggest lesson was the importance of *dive deep* into metrics before scaling. A naive horizontal scale would have spent $1M/month; our state machine saved that and gave us ownership over both cost and performance.  

**Leadership Principles Highlighted**: **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
