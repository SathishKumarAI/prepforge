---
qid: ing_2462075763__star__local
question: 'Explain: Snapshots — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 360
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:04-05:00'
sources: []
---

**Situation**  
In my last role at a media company we had a Hadoop cluster that stored terabytes of video metadata and user logs. The data lake grew by ~30 % each quarter, and our quarterly compliance audit required an immutable backup of the entire namespace every Friday night for 90 days. Our existing incremental snapshots were taking hours to compute and consuming too much storage.

**Task**  
I was tasked with designing a more efficient snapshot strategy that reduced nightly processing time to under 45 minutes while keeping retention costs within budget, all without impacting normal read/write workloads.

**Action**  
I implemented HDFS’s built‑in snapshot feature by enabling snapshots on the root directory of our data lake. Using the `hdfs dfsadmin -setSnapshotDir` command, I created a dedicated snapshot directory and scheduled a cron job to run `snapshotCreate` every Friday at 2 am. To cut storage costs, I leveraged the incremental nature of HDFS snapshots: only new or modified blocks were stored as deltas, so each snapshot consumed ~5 % of the base volume. I also wrote a small MapReduce job that pruned snapshots older than 90 days and logged the reclaimed space.

**Result**  
Nightly snapshot creation time dropped from 2 hours to 30 minutes, and storage usage for backups fell by 70 %. The audit team was satisfied with the immutable copies, and we saved roughly $4,500 annually on HDFS storage. I learned how to balance performance, cost, and compliance using native HDFS features rather than external tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
