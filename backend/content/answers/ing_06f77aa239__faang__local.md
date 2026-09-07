---
qid: ing_06f77aa239__faang__local
question: 'Explain: is 450 are consumed capacity is 450 — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 619
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:40-05:00'
sources: []
---

**1️⃣ Clarify**

The question asks why *consumed capacity* in DynamoDB can be “450” as mentioned at re:Invent 2018.  
Assumptions I’d confirm:

- We’re talking about **Provisioned‑Throughput mode**, not on‑demand.  
- The table has a **read/write capacity unit (RCU/WCU)** configuration.  
- “450” refers to the total number of *units* consumed in a given period.

**2️⃣ Approach**

Explain DynamoDB’s internal accounting:

1. Map each request type → RCU or WCU cost.  
2. Show how multiple operations aggregate.  
3. Relate that to the “450” figure (e.g., 150 read units × 3, or 50 writes × 9).  

**3️⃣ Depth**

- **Read:** One strongly‑consistent read of a 4 KB item = 1 RCU; eventually consistent = 0.5 RCU.  
- **Write:** One write of up to 1 MB = 1 WCU.  
- For larger items, cost scales linearly (e.g., 8 KB read = 2 RCUs).  

If a table has `450` RCUs provisioned and receives:

```
150 strongly‑consistent reads of 4 KB   → 150 × 1 = 150 RCUs
200 eventually‑consistent reads of 4 KB→ 200 × 0.5 = 100 RCUs
50 writes (≤1 MB)                      → 50 × 1 = 50 WCU
```

Total consumed in the period: `150 + 100 = 250 RCUs` and `50 WCUs`.  
If the table is provisioned for `450` RCUs, consuming `250` means it’s operating at ~55 % capacity.  

**4️⃣ Edge Cases**

- **Batch operations:** A single `BatchWriteItem` with 10 items still counts as 10 writes.  
- **Large items (>1 MB):** DynamoDB splits them; cost increases per 1 MB chunk.  
- **Auto‑Scaling:** If capacity scales down, the same workload could exceed limits → throttling.

Test by simulating varying read/write patterns and measuring CloudWatch metrics (`ConsumedReadCapacityUnits`, `ConsumedWriteCapacityUnits`).

**5️⃣ Optimize & Communicate**

- Enable **auto‑scaling** to match traffic spikes.  
- Use **eventual consistency** when possible to halve RCU usage.  
- For write‑heavy workloads, consider **On‑Demand mode** or **DAX** caching.

I’d conclude by summarizing: “450” is simply the sum of all unit costs for the operations performed during a period, reflecting DynamoDB’s fine‑grained capacity accounting that lets us predict and optimize throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
