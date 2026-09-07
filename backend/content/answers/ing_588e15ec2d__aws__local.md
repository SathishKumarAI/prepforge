---
qid: ing_588e15ec2d__aws__local
question: 'Explain: Shrink an existing index to fewer shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 504
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:53-05:00'
sources: []
---

**Situation / Task**  
While working on the e‑commerce search stack at my last company, our OpenSearch domain grew to 100 GB over a year. We had provisioned **12 data nodes with 24 shards**, but query latency had jumped from 120 ms to 400 ms, and the cost was $1,200/month—double what we budgeted. I was tasked with reducing shard count while keeping performance.

**Action**  
*Ownership & Dive Deep*:  
I first ran a detailed analysis (using **OpenSearch Dashboards’ index stats**) to confirm that many shards were under‑utilized (< 5 % storage). I then drafted a migration plan:

1. Create a new index template with **4 primary shards** and the same mapping.
2. Use **`_reindex` API with `max_docs`** in batches of 500,000 to avoid memory spikes.
3. Route search traffic to the new index via an AWS **Application Load Balancer** with a path rewrite rule—ensuring zero downtime.
4. Spin up an **AWS Lambda** function that monitors reindex progress and triggers a switch‑over once > 95% of docs are copied.

I also leveraged **S3 Glacier** for cold logs, reducing the OpenSearch node count by 30 %.  

*Bias for Action & Invent & Simplify*:  
Instead of manually scripting bulk API calls, I packaged the entire workflow into a reusable Terraform module. This cut future onboarding time from 2 weeks to 3 days.

**Result**  
- Shard count dropped from 24 to **4**, reducing node memory footprints by **70 %**.
- Query latency fell back to **110 ms** (‑30 % vs baseline).
- Monthly cost shrank to **$480** (+ 60 % savings).
- The migration completed in 18 hours with zero service interruption.

**Reflection**  
I learned that shard count should be driven by *actual* storage and query patterns, not legacy defaults. I now routinely audit indices quarterly and use CloudWatch metrics to trigger automated scaling policies—ensuring the system remains cost‑effective while delivering on customer expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
