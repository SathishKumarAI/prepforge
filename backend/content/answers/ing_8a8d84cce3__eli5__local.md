---
qid: ing_8a8d84cce3__eli5__local
question: 'Explain: Capacity Mode — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 205
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:49-05:00'
sources: []
---

**Capacity mode is like the size of a highway for your data.**  
Think of each *shard* as a lane that can carry a fixed amount of traffic—about 1 MB per second or 5,000 records. If you need more lanes (more shards), the highway gets wider and can handle more cars at once.  

With **On‑Demand capacity mode**, Amazon automatically adds or removes lanes based on how many cars are coming in. You don’t decide; the system scales itself—great if traffic is unpredictable.  

With **Provisioned capacity mode**, you choose the number of lanes ahead of time, like buying a specific amount of road space. This works well when your traffic pattern is steady and predictable, letting you lock in cost.  

So, capacity mode decides whether Amazon builds the highway for you or lets you set its width yourself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
