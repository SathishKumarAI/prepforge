---
qid: ing_a9ada5f49c__aws__local
question: 'Explain: Use case: Service deletes expired pastes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 445
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:57-05:00'
sources: []
---

**Situation & Task**  
When I joined the Paste‑bin team, we discovered that stale pastes were still stored in S3 for months, inflating storage costs by ~15 % and degrading search latency. My goal was to build an automated purge service that deleted expired pastes while guaranteeing no accidental data loss.

**Action – Design & Implementation**  
I scoped the problem: each paste had a TTL tag (`ExpiresAt`). I built a **Lambda‑driven workflow** triggered by a CloudWatch Event every 6 h. The Lambda scans an S3 inventory (via AWS Glue Catalog) to list objects whose `ExpiresAt` < now, then deletes them in batches of 1 000 using the **S3 Batch Delete API**. To avoid race conditions with concurrent writes, I added a DynamoDB “deletion lock” per key and used *eventual consistency* guarantees. For observability, I pushed metrics to CloudWatch (pastes deleted, failures) and sent alerts via SNS if deletions > 5 % of expected volume.

**Result**  
After 30 days we reduced S3 storage by **$1,200/month**, a 12‑month savings of ~$14k. Search latency dropped from 250 ms to 120 ms due to smaller index size. The service achieved **99.99 % availability** with zero false deletions (verified via automated unit tests and manual audit).  

**Leadership Principles Reflected**  
- **Ownership**: I drove the end‑to‑end solution, from requirement gathering to production rollout.  
- **Dive Deep**: I examined S3 inventory nuances, Lambda limits, and cost implications before choosing Batch Delete over single‑object deletes.  

**Bar‑raiser Takeaway**  
I showcased measurable impact, deep technical trade‑offs (batch size vs. concurrency), and a safety net that prevented data loss—exactly what an interviewer looks for in a high‑impact AWS engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
