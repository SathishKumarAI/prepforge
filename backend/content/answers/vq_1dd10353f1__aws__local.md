---
qid: vq_1dd10353f1__aws__local
question: What is a Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 430
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:34-05:00'
sources: []
---

**Situation**  
During my internship at AWS I was tasked with refactoring the “Data‑Sync Service” that pulled data from on‑prem databases into DynamoDB. The team was confused about what a *Table* meant in our context, and this ambiguity caused repeated schema changes.

**Task**  
I needed to give the team a clear, scalable definition of a Table, show how it maps to AWS services, and provide a concrete design that would support millions of rows with sub‑second latency.

**Action**  
1. **Define “Table”** – In relational databases a table is a collection of rows sharing a schema; in DynamoDB a *table* is the top‑level namespace that stores items (rows) identified by a primary key.  
2. **Design** –  
   - Primary Key: `partitionKey = userId`, `sortKey = eventTimestamp` for time‑series queries.  
   - Global Secondary Indexes on `eventType` and `status`.  
   - Enable **Provisioned Capacity with Auto Scaling** (min 100 RCU/WCU, max 10 000) to handle peak traffic.  
3. **Services & Trade‑offs** – Use DynamoDB for low latency and automatic scaling; add **DAX** if read amplification is needed. Costs are predictable per RCUs/WCUs; trade‑off is eventual consistency unless you enable strongly consistent reads (slightly higher cost).  
4. **Metrics** – After deployment, request latency dropped from 350 ms to <50 ms and throughput increased from 1k to 100k RCU with a 30% cost increase—well within SLA.

**Result**  
The team adopted the new definition; schema churn fell by 70%, and we met our quarterly performance target. I documented best practices in an internal wiki, which became the reference for all future table designs across services. This demonstrates **Ownership**, **Dive Deep**, and a data‑driven impact—qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
