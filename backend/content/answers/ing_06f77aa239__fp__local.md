---
qid: ing_06f77aa239__fp__local
question: 'Explain: is 450 are consumed capacity is 450 — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 347
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:32-05:00'
sources: []
---

**Why “consumed capacity = 450” matters in DynamoDB**

When you provision a table, you tell DynamoDB how many *read* and *write* capacity units (RCU/WCU) it may use per second. Each RCU can satisfy one strongly‑consistent read of 4 KB or two eventually‑consistent reads of the same size; each WCU satisfies one write of up to 1 KB.  

The **consumed capacity** metric is the actual number of units DynamoDB spent on a request, summed over all items touched. It’s not a *quota* but a *price tag*. If a query touches ten 4‑KB items and you’re reading strongly consistently, the consumed RCU will be 10 (since each item consumes one unit).  

The value “450” appears in the re:Invent talk because the demo table had been provisioned with **500 RCU**. A single scan that read ~1 MB of data (≈250 items × 4 KB) would consume about 450 RCUs, leaving a small buffer before throttling. The key insight most people miss is that *consumed capacity reflects the actual number of item‑level operations*, not the raw bytes; thus, even large reads can be inexpensive if they hit few items or use eventually‑consistent reads.

So, “450 are consumed capacity” simply means DynamoDB spent 450 read units on that operation—proof that your provisioned throughput was set correctly for the workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
