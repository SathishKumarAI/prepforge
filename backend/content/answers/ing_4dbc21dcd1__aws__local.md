---
qid: ing_4dbc21dcd1__aws__local
question: 'Explain: How to pick a good shard key for even data distribution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:22-05:00'
sources: []
---

**Situation** – While leading a migration of our recommendation engine from on‑prem to DynamoDB, we hit severe hot‑partition spikes that throttled 28 % of read traffic during peak hours.

**Task** – I had to choose a shard key that would evenly spread the data and eliminate hotspots while keeping costs low.

**Action**  
1. **Dive Deep into access patterns**: logged every request for two weeks, identified that “user‑id + timestamp” was the most common query pair.  
2. **Customer Obsession & Ownership**: I scoped the impact on latency (target < 100 ms) and cost (< $0.05 per million reads).  
3. **Design**: Adopted a composite key `PK = "USER#<user-id>"` + `SK = "<timestamp>"`.  
4. **AWS services**:  
   * DynamoDB Global Tables for multi‑region availability.  
   * AWS Lambda (2 ms) to pre‑hash user IDs into 256 buckets (`bucketId = hash(userId)%256`) and prepend bucket to PK, ensuring even distribution.  
5. **Scalability & Cost**: Provisioned 200 RCU/WCU with auto‑scaling; after redesign, read capacity consumption dropped from 18 kRCU to 4.6 kRCU (−74 %) and latency improved from 320 ms to 78 ms.

**Result** – The new shard strategy delivered a 3× faster recommendation response for 95 % of users while cutting DynamoDB costs by $12k/month. I documented the process, shared it in our engineering handbook, and introduced automated key‑selection tooling that now powers all future migrations.  

*Bar‑raiser focus*: clear ownership, data‑driven reasoning, deep technical dive, measurable impact, and lessons learned from the throttling failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
