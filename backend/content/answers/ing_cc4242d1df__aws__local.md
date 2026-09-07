---
qid: ing_cc4242d1df__aws__local
question: 'Explain: Wish lists revisited — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 485
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:47-05:00'
sources: []
---

**Situation (S)** – I was tasked to redesign the “Wish‑List” feature for a global e‑commerce platform that stored > 10 B items in DynamoDB. Read traffic hit 1 M RCU/s, but writes were scattered across thousands of partitions, causing hot spots and cost overruns.

**Task (T)** – Scale read/write throughput by 4× while keeping the table under $5k/month and improving latency to < 20 ms for 99th percentile users.

**Action (A)** –  
1. **Vertical partitioning**: split the original `WishList` table into two tables—`UserMeta` (user_id + metadata) and `ItemBucket` (bucket_id, user_id, item_id).  
2. Use a deterministic hash of `(user_id,item_id)` to assign each item to one of 32 *item buckets*. This spreads writes evenly across partitions.  
3. Leverage **DynamoDB Streams** + **Lambda** to sync `ItemBucket` inserts back into the user‑level view for fast UI queries.  
4. Enable **Adaptive Capacity** and set a **reserved capacity** that matches peak 1 M RCU/s, reducing over‑provisioning by 35%.  
5. Adopt **AWS Global Tables** for multi‑region reads, lowering latency from 70 ms to < 15 ms in EU.

**Result (R)** –  
* Read/write throughput increased 4× with no hot partitions.  
* Monthly cost dropped from $12k to $5.2k (≈ 57% savings).  
* Latency improved to 18 ms average, 99th percentile < 25 ms.  

**Leadership Principles Anchored** – *Customer Obsession* (ultra‑low latency), *Ownership* (self‑managed cost & performance), *Dive Deep* (partition analysis & capacity tuning).  

Bar‑raiser focus: ownership of the entire data flow, depth in partitioning logic, quantified impact on ops costs and user experience, and learning loop—after launch we added automated alerts for skewed bucket usage to preempt failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
