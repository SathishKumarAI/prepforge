---
qid: ing_5eac90cdbf__star__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 356
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:19-05:00'
sources: []
---

**Situation** – In a fintech startup I was building a real‑time fraud detection pipeline that fed into a Cloud Spanner database to keep account balances up to date across three regions. A spike in traffic during a holiday promotion caused some write operations to lag, and we started seeing temporary inconsistencies: users could be flagged for fraud twice or payments would appear as pending in one region while settled in another.

**Task** – I had to guarantee that every balance update was globally consistent, reduce the window of stale reads, and keep latency under 50 ms per transaction so our UI didn’t flash “pending” states.

**Action** – I enabled Spanner’s *Strong Consistency* mode and re‑architected the write path: each payment was wrapped in a distributed transaction using the `BEGIN_TRANSACTION` API with an `OPTIMISTIC_READS` policy. I added a retry loop that leveraged the `TransactionOptions` to back off on contention, and I tuned the `read_timestamp` for reads to use the *Read‑Only Transaction* feature, which pulls a snapshot from the most recent commit. Finally, I instrumented Cloud Monitoring dashboards to track read/write latencies per region.

**Result** – After deployment, stale‑read incidents dropped from 12 % of transactions to <0.1 %. The average transaction latency stayed at 38 ms, and we eliminated duplicate fraud flags entirely. I learned that proper use of Spanner’s strong consistency APIs combined with fine‑grained retry logic is key to balancing global correctness against performance in a multi‑region environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
