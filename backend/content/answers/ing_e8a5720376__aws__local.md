---
qid: ing_e8a5720376__aws__local
question: 'Explain: Deduplicating Cache Writes Between Query Engine and Flux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 455
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:09-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a real‑time analytics layer on top of Athena (Presto) that fed a downstream Flux time‑series DB for dashboards. Every query result was cached in S3 and also written to Flux, but the two writes were duplicated because our cache invalidation logic didn’t coordinate between the engines. This doubled I/O costs (~$12K/month) and caused stale data drift of up to 15 min.

**Action**  
I took **Ownership** and led a cross‑functional task force. First, I *dive deep* into the write pipelines: Athena writes to an S3 bucket via EMR Spark; Flux receives data through its HTTP API. I proposed a single “deduplication” Lambda that subscribes to an SNS topic fired by the query engine. The Lambda checks a DynamoDB table for a unique key (query_id + timestamp). If the key exists, it skips the Flux write; otherwise it writes to both S3 and Flux and records the key.  
AWS services used: **Lambda** (serverless, 10 ms cold‑start), **SNS** (pub/sub), **DynamoDB** (low‑latency dedupe store), **S3** (immutable cache). I added CloudWatch metrics to track duplicate attempts.

**Result**  
After deployment, we reduced I/O by **48 %**, cutting costs from $12K to $6.2K/month. Stale data drift dropped below 1 min. The solution also improved system *availability*—Lambda scales automatically and has a built‑in retry mechanism, eliminating the single point of failure that previously existed in our custom Java service.

**Learnings**  
I learned that a small, idempotent Lambda can replace heavy stateful services when you separate concerns (query engine vs. cache). I also realized the value of *Bias for Action*—prototyping quickly revealed that DynamoDB’s eventual consistency was acceptable because we only needed to prevent duplicates in a single write window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
