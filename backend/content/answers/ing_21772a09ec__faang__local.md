---
qid: ing_21772a09ec__faang__local
question: What about initial and ongoing costs? — Use vertical partitioning to scale
  data efficiently in Amazon DynamoDB | AWS Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 476
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:40-05:00'
sources: []
---

**Clarify**  
The interviewer asks how vertical partitioning affects *initial* and *ongoing* cost in Amazon DynamoDB.  
Assumptions: we’re using provisioned capacity (or on‑demand), the table is read/write heavy, and we split a wide table into multiple smaller ones based on hot attributes.

**Approach**  
1. Identify which columns are frequently queried together → create separate tables (partitions).  
2. Estimate per‑table throughput & storage needs.  
3. Compute costs for each table: provisioned R/W units + storage, then sum.  
4. Compare to the single‑wide‑table baseline.

**Depth**  
- **Provisioned mode:**  
  - *Read capacity*: `RCU = (hot reads per sec × read size) / 4 KiB`.  
  - *Write capacity*: `WCU = writes per sec`.  
  - *Storage cost*: $0.25/GB‑month.  
- **On‑demand mode:** $1.25 per million write request units and $0.25 per million read request units; storage same as above.  

By moving rarely accessed columns to separate tables, we reduce the RCU/WCU required for hot reads/writes, cutting the *ongoing* monthly bill proportionally. Initial cost may rise slightly because you pay for multiple tables’ provisioning, but the net savings appear after a few weeks of traffic.

**Edge Cases**  
- If writes touch many partitions simultaneously, write‑throughput costs could increase.  
- Data consistency across partitions must be managed manually (e.g., via transactions).  
- Too fine a split leads to high latency due to cross‑partition joins.

**Optimize & Communicate**  
Explain that vertical partitioning is a trade‑off: lower read/write cost for hot paths versus added operational complexity. Recommend monitoring CloudWatch metrics, adjusting provisioned units, and consolidating tables if usage patterns shift. This shows clear reasoning, quantitative analysis, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
