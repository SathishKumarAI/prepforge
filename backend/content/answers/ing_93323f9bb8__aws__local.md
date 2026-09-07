---
qid: ing_93323f9bb8__aws__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 432
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:51-05:00'
sources: []
---

**Situation & Task**  
While architecting a real‑time recommendation engine for a media startup, we needed to query users by **subscription tier** and **last‑login date** without compromising the primary key (userId). The team was skeptical about adding indexes because of cost concerns.

**Action**  
I proposed using **Global Secondary Indexes (GSIs)** on `tier` + `lastLogin`.  
* **Design:** One GSI with a composite partition key (`tier`) and sort key (`lastLogin`). I set the read/write capacity to 2× the projected traffic, then enabled *on‑demand* for burst periods.  
* **AWS services used:** DynamoDB (primary & index), CloudWatch for metrics, IAM roles for fine‑grained access, Lambda for automated scaling checks.  
* **Trade‑offs:** GSIs duplicate data, increasing write cost (~$0.25 per 100K writes) but cut query latency from ~200 ms to <20 ms and saved us $3k/month in avoided RDS costs.

**Result**  
Within a month, read queries by tier ran 10× faster; the recommendation API hit 99th‑percentile latency of 15 ms. The write amplification stayed under 1.2× projected cost, keeping the budget intact. I documented the trade‑offs in a post‑mortem and presented it at our quarterly tech review.

**Reflection**  
*Ownership:* I owned the decision from concept to deployment.  
*Dive Deep:* I profiled traffic, modeled costs, and iterated on capacity settings.  
*Bias for Action:* I rolled out GSIs before the user surge hit, preventing a potential outage.  

The bar‑raiser will hear clear ownership, data‑driven impact, and a learning loop that balances cost against performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
