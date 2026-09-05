---
qid: ing_06f77aa239__star__local
question: 'Explain: is 450 are consumed capacity is 450 — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 378
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:55-05:00'
sources: []
---

**Situation**  
When I joined the e‑commerce team, we were scaling a flash‑sale platform that hit 30 k requests per second during peak events. Our DynamoDB tables were running at their default on‑demand limits and the CloudWatch metrics showed a steady climb in *ConsumedReadCapacityUnits* to about **450**.

**Task**  
I had to keep latency under 200 ms while preventing throttling, all without rewriting our application logic or moving to another database. The goal was to understand why the capacity hit that number and how to balance it against cost.

**Action**  
First I mapped each query type to its read‑capacity usage: a single `GetItem` costs 1 unit for a <4 KB item, whereas a `Query` with 10 items of 2 KB each consumes 5 units. Using the SDK’s *BatchGet* I rewrote the most frequent access pattern to fetch 20 items in one call, cutting the read units from 20 to just 5. Then I enabled **Provisioned Capacity** and applied a **Auto Scaling policy** with a target utilization of 70 %. Finally, I added a lightweight cache layer (DAX) for the hottest keys, reducing the load on DynamoDB by ~30 %.

**Result**  
The average read capacity dropped from 450 to 280 units during peak hours, cutting our monthly cost by 18 % while keeping latency well below 150 ms. I learned that interpreting *ConsumedCapacity* is about mapping request patterns to unit costs and then architecting around those numbers rather than treating the metric as a black box.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
