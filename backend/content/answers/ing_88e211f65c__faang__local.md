---
qid: ing_88e211f65c__faang__local
question: 'Explain: the correct value to compare the put — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 432
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:32-05:00'
sources: []
---

**Clarify**  
The interview asks for the *correct value* used when comparing the **put** operation in DynamoDB during the 2018 re:Invent session “Amazon DynamoDB Under the Hood.” I’ll assume they mean the metric that DynamoDB reports to gauge write throughput – the *write capacity units (WCUs)* consumed by a put, or the *latency* of a PutItem call. Clarify with the interviewer whether they want the WCU value, latency, or something else.

**Approach**  
1. Identify the operation in question: `PutItem`/`BatchWrite`.  
2. Determine what DynamoDB measures for that operation (WCUs consumed, read/write latency).  
3. Explain how the reported metric is calculated and why it matters for scaling.  
4. Provide a concise answer and ask follow‑up if needed.

**Depth**  
For a single `PutItem`, DynamoDB consumes **1 write capacity unit per 256 bytes** of data written (rounded up). Thus, when comparing puts, the *correct value* is the **write capacity units consumed**, not raw size or latency. This metric directly ties to provisioned throughput and cost: 10 WCUs = 10 writes/second for items ≤ 2.5 KB each.

If the interview refers to performance, DynamoDB reports **average latency** (ms) per operation; however, the *capacity* metric is what you compare when scaling or billing.

**Edge cases**  
- Items larger than 256 bytes: WCUs are rounded up.  
- Conditional writes or transactions consume additional WCUs.  
- BatchWrite may report total WCUs across all items, not per item.

**Optimize & communicate**  
State the metric clearly, mention its scaling relevance, and note that understanding WCUs is essential for cost‑effective design. If asked to elaborate, I’d discuss how DynamoDB auto‑scales based on observed WCU usage and how misreading this value can lead to throttling or overspending.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
