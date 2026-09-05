---
qid: ing_a36455a3eb__star__local
question: 👎 What are disadvantages of DynamoDB? — AWS-Services/1_Databases/AmazonDynamoDB/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 299
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:44-05:00'
sources: []
---

**Situation:** While migrating our e‑commerce platform from a relational database to Amazon DynamoDB, we hit a performance bottleneck during peak traffic. The product catalog had over 5 million items and required real‑time inventory updates.

**Task:** I needed to identify why the throughput was inconsistent and design a solution that maintained low latency without blowing up costs.

**Action:** I started by inspecting the table’s primary key schema; we were using a simple hash key (product_id) with no sort key, which caused hot partitions. I redesigned the schema to include a composite key (category#product_id) and implemented global secondary indexes for price‑range queries. Next, I enabled DynamoDB Auto Scaling but set conservative target utilization (70%) to avoid over‑provisioning. I also switched from on‑demand to provisioned capacity for predictable traffic windows and added conditional writes with optimistic locking to reduce write conflicts. Finally, I used CloudWatch metrics and X-Ray traces to fine‑tune read/write capacities per partition.

**Result:** After the changes, average latency dropped from 120 ms to 35 ms during peak hours, and our cost decreased by ~25% because we avoided over‑provisioned hot partitions. The exercise taught me that while DynamoDB excels at scale, careful key design and capacity planning are essential to avoid hidden performance and cost pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
