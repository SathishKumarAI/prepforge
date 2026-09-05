---
qid: vq_45f6b09a38__star__local
question: What will you do when NameNode is down?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 356
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:57-05:00'
sources: []
---

**Situation:**  
During a nightly data pipeline run on our Hadoop cluster, the NameNode went offline after an unexpected power surge at the rack. The downstream MapReduce jobs were already queued and would stall if the filesystem metadata wasn’t restored.

**Task:**  
I had to restore access to HDFS as quickly as possible so that the batch jobs could resume without data loss, while ensuring we didn’t compromise cluster stability or security.

**Action:**  
1. **Checked the standby NameNode** – our HA setup had a secondary node ready; I verified its health via `hdfs haadmin -getServiceState nn1`.  
2. **Switched the active role** with `hdfs haadmin -transitionToStandby nn1` and promoted the standby to active (`-transitionToActive`).  
3. **Restarted dependent services** (YARN ResourceManager, Hive Metastore) so they could reconnect to the new NameNode.  
4. **Ran a quick consistency check** using `hdfs fsck / -files -blocks -locations` to spot any orphaned blocks; repaired them with `-delete`.  
5. **Scheduled an immediate fail‑over test** in our Ops playbook and logged the incident for root cause analysis.

**Result:**  
The cluster was back online within 12 minutes, and all queued jobs completed on schedule—no data loss, and we avoided a 2‑hour outage. I updated our monitoring to alert earlier for power anomalies, reducing future downtime risk by 35%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
