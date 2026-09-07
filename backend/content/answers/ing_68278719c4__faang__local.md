---
qid: ing_68278719c4__faang__local
question: 'Explain: Scenario – The Canadian census — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 539
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:03-05:00'
sources: []
---

**Clarify**  
We’re asked how **Amazon DynamoDB’s adaptive capacity** handles *uneven* read/write traffic on the Canadian census dataset (e.g., some regions queried far more often). Assume we have a key‑value table where the partition key is a region code and the sort key is a census year. We want to know whether adaptive capacity automatically balances throughput across partitions or if it can become outdated.

**Approach**  
1. Review DynamoDB’s *on‑demand* vs *provisioned* modes.  
2. Understand how *adaptive capacity* works: it monitors real‑time request rates per partition key and shifts write capacity from “idle” partitions to those that spike.  
3. Evaluate the census use case: many regions, but a few may receive heavy analytics traffic.  
4. Identify limits: adaptive capacity only applies to provisioned mode; on‑demand is fully elastic.  

**Depth**  
- In **provisioned mode**, you set a *base* RCUs/WCUs per table. Adaptive capacity monitors *hot* partitions (those exceeding the base rate). It redistributes spare capacity from *cold* partitions, but only up to 100 % of the provisioned amount.  
- If a region’s traffic grows beyond its allocated share and there is no spare capacity left, the request throttles until you manually increase the table’s provisioned throughput or enable auto‑scaling.  
- In **on‑demand mode**, DynamoDB automatically scales per‑partition capacity without manual intervention; however, it can still suffer from *hot key* issues if many requests target a single partition key concurrently.

**Edge Cases**  
- Sudden traffic spikes that exceed the table’s total provisioned capacity → throttling.  
- Long‑term skew where a region permanently dominates traffic → adaptive capacity never frees enough spare WCUs, requiring manual adjustment.  
- Mixed workloads (reads heavy, writes light) can mislead the algorithm; read/write ratios must be considered.

**Optimize & Communicate**  
For production census analytics:  
1. Use **on‑demand** if traffic patterns are unpredictable.  
2. If using provisioned mode, enable **auto‑scaling** with a generous upper bound to accommodate peaks.  
3. Partition the table by *region-year* or use a composite key to spread load.  

Explain that while adaptive capacity mitigates uneven access, it isn’t a silver bullet; monitoring and proactive scaling remain essential for high‑availability census services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
