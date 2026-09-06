---
qid: vq_45f6b09a38__faang__local
question: What will you do when NameNode is down?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 504
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:00-05:00'
sources: []
---

**Clarify**  
*Problem:* A Hadoop cluster’s **NameNode** has gone offline—no HDFS metadata operations can be performed.  
*Assumptions to confirm:*  
1. Is this a single‑node or HA setup?  
2. Which version of Hadoop (YARN, YARN‑v2, etc.)?  
3. Are we allowed to restart the NameNode or must we preserve data integrity first?

**Approach**  
1. **Detect & isolate** – Use `jps`, `hsperfdata_*` and HDFS logs to confirm it’s a crash, not just network hiccup.  
2. **Fail‑over** – If HA is enabled, trigger the standby NameNode (`hdfs haadmin -failover`).  
3. **Recovery** – If no HA or fail‑over fails:  
   * Start the journal nodes (if using shared edits).  
   * Run `fsimage` recovery (`hdfs dfsadmin -safemode enter/exit`) and `-recoverFromSafeMode`.  
4. **Restore** – Once the active NameNode is back, run `hdfs fsck / -moveToNewNamespace` to rebuild metadata if needed.  
5. **Verify** – Run a full cluster health check (`hdfs dfsadmin -report`) and sanity‑test file operations.

**Depth**  
- HA uses quorum of ZooKeeper; failover is O(1) time.  
- Manual recovery may take *O(N)* where N = number of blocks, but only for metadata rebuild.  
- Avoiding data loss: always run a checkpoint before restart (`hdfs dfsadmin -saveNamespace`).

**Edge Cases**  
- Network partition between NameNode and JournalNodes → need to fix connectivity first.  
- Corrupted edit log → manual merge or use `-recoverFromSafeMode` with `-force`.  
- Disk full on the NameNode → free space or expand storage.

**Optimize & Communicate**  
Explain that in production we’d have automated monitoring (Prometheus + Alertmanager) to auto‑trigger HA failover. For interview, highlight trade‑offs: quick failover vs. risk of data inconsistency; manual recovery ensures correctness but takes time. Summarize steps clearly and emphasize verifying cluster health before resuming workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
