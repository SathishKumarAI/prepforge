---
qid: ing_c7d8386b34__aws__local
question: 'Explain: Force merge during off-peak hours — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 459
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:05-05:00'
sources: []
---

**Situation / Task**  
I was responsible for a customer‑facing analytics platform that stored ~200 TB of time‑series logs in Amazon OpenSearch (managed ES). Every night at 2 a.m., we ran a “force‑merge” to reduce the number of segments and reclaim storage, but the job sometimes stalled and impacted query latency during off‑peak hours.

**Action**  
1. **Dive Deep into shard sizing:** I analyzed the index lifecycle metrics (segment count, doc count per shard) and discovered that shards were 3 GB on average while our nodes had 64 GB RAM – a 20× under‑utilization.  
2. **Redesign shard strategy:** Re‑indexed with `shard_size=10 GB` (≈6 shards per node), reducing segment count by ~70% and lowering the force‑merge time from 90 min to 15 min.  
3. **Automation & Monitoring:** Deployed a CloudWatch Event that triggers the merge only when CPU <30% and latency <50 ms, ensuring it runs truly off‑peak. Added SNS alerts for failures.  
4. **Cost & Availability trade‑offs:** Fewer shards lowered node count from 20 to 12, cutting EC2 spend by $1,200/month while maintaining a 99.9% SLA.

**Result**  
- Force‑merge duration dropped 83%, freeing up 80 TB of unused storage.  
- Query latency during off‑peak fell from 120 ms to <30 ms (a 75% improvement).  
- Monthly cost savings of $1,200 + avoided SLA penalties.  

**Leadership Principles Reflected**  
*Customer Obsession* – improved user experience with faster queries.  
*Ownership & Dive Deep* – I owned the problem end‑to‑end and performed deep data analysis to drive a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
