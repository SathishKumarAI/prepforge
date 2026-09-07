---
qid: ing_b0ca831d7a__aws__local
question: 'Explain: Refresh — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 417
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:55-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When launching our recommendation engine, we saw latency spike after a nightly data reload: cache entries were stale for up to 12 hrs, causing users to see outdated items. I owned the “Cache Refresh” feature to keep freshness without hurting throughput.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements** – Cache hit‑ratio > 95%, refresh latency < 2 s, memory ≤ 4 GB per node.  
2. **Design** – Adopted a *write‑through* Guava cache with an `ExpiryPolicy` that triggers `refreshAfterWrite`.  
   - On refresh, the loader queries DynamoDB (partition key = product ID) and updates only changed rows.  
   - Use **AWS Lambda** for the background refresh job; schedule via CloudWatch Events every 15 min.  
3. **Scalability/Availability** – The cache is local to each EC2 spot instance, so failure of one node doesn’t affect others. DynamoDB’s eventual consistency guarantees we read a consistent snapshot during refresh.  
4. **Cost** – Lambda invocations cost <$0.000016 per 1 ms; we run ~10 invocations/day → < $0.02/month.

**Result (Deliver Results)**  
Post‑deployment, cache hit‑ratio rose from 88 % to 96 %, latency dropped by 35 % (from 180 ms to 116 ms), and we eliminated stale recommendations entirely—user satisfaction scores improved by 12 points in A/B test.  

**Bar‑raiser notes** – I demonstrated ownership, deep dive into cache mechanics, quantified impact, and learned that a fine‑tuned `refreshAfterWrite` policy is cheaper than full rebuilds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
