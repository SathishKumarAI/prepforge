---
qid: ing_798240f3f7__star__local
question: 'Explain: Cleanup Service — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 315
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:41-05:00'
sources: []
---

**Situation** – In my last role at a SaaS startup, our public‑facing TinyURL service had been running for two years without an automated cleanup routine. Over time, the database accumulated millions of inactive or expired short links, inflating storage costs and slowing query performance.

**Task** – I was tasked to design and implement a cleanup service that would purge obsolete entries while keeping the system’s high availability intact, all within a 48‑hour deployment window and without any downtime for end users.

**Action** – I built a scheduled Lambda function (Python 3.9) that scanned the DynamoDB table in paginated batches, flagging links whose `last_accessed` timestamp was older than six months or whose expiration date had passed. Using conditional writes, the function moved flagged items to an archival S3 bucket and then deleted them from DynamoDB, ensuring atomicity. I added a retry back‑off mechanism and CloudWatch alarms for failures. The service ran in parallel across multiple shards, reducing run time to just 90 minutes.

**Result** – After deployment, we eliminated 1.8 million obsolete records, cutting storage costs by ~$4k/month. Query latency dropped from 350 ms to 120 ms, and the cleanup process completed with zero downtime. I learned how to balance aggressive data pruning with system reliability, and the importance of monitoring metrics in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
