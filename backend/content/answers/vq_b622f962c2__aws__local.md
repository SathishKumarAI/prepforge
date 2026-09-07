---
qid: vq_b622f962c2__aws__local
question: Elaborate on the process that overwrite the replication factor in Hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 438
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:26-05:00'
sources: []
---

**Situation –**  
In my last role on a data‑engineering team at an e‑commerce firm, we migrated our 30 TB nightly fact table from an on‑prem Hadoop cluster to **Amazon EMR** to cut storage costs and improve query latency. The default HDFS replication factor (3) was too high for the new environment, inflating S3‑backed storage by ~40 %.  

**Task –**  
I owned a quick, safe strategy to lower the replication factor from 3 to 2 without compromising data durability or impacting downstream Athena jobs.

**Action –**  
1. **Audit & Plan:** Used `hdfs dfs -count -q /data/fact` to capture block distribution and identified all non‑critical partitions.  
2. **Set Replication:** Executed `hdfs fs -setrep -w 2 /data/fact/*`. The `-w` flag blocks until the operation completes, ensuring consistency before any job starts.  
3. **Validate:** Ran `hdfs fsck /data/fact -files -blocks -locations` to confirm block replication and ran a dry‑run of the nightly Spark ETL.  
4. **Automate:** Added the command to our EMR bootstrap script and created an AWS Lambda that triggers on S3 bucket versioning events, ensuring any new partitions inherit `replication=2`.  

**Result –**  
Storage cost dropped 30 % (≈$1.8k/month). Query latency improved by 12 %, and we saw no data loss during a week‑long validation period. The process now runs automatically with zero manual intervention.

**Leadership Principles:** *Ownership* (I took full responsibility for the migration), *Dive Deep* (used HDFS diagnostics to validate safety), and *Bias for Action* (implemented an automated, repeatable solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
