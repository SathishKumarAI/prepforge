---
qid: vq_2baf956b5a__star__local
question: Why do we use Hdfs for files with large data sets but not when there are
  lot of small files?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 326
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:14-05:00'
sources: []
---

**Situation:**  
During a migration project at my previous company, we were moving the nightly log ingestion pipeline from an on‑premise file system to Hadoop. The raw logs were about 5 TB per day, split into roughly 200 000 files each around 25 MB.

**Task:**  
I had to decide whether to store these daily batches in HDFS or keep them in a local distributed FS (Gluster) and design the ingestion strategy so that downstream MapReduce jobs could process the data efficiently without overwhelming the NameNode.

**Action:**  
I benchmarked file creation rates, looked at block replication overhead, and reviewed HDFS metadata limits. I discovered that HDFS handles large blocks well but each 25 MB file still consumes a NameNode inode and triggers 3‑replica writes, causing network congestion and slowing down job start times. I restructured the pipeline to concatenate small logs into larger 1 GB files before writing them to HDFS, while leaving the original raw files in Gluster for quick access by other services.

**Result:**  
The NameNode load dropped from 12 k inodes per day to 60, and job startup time improved by 40%. The ingestion cost decreased by 25%, and I learned that HDFS shines with few large blocks, whereas many tiny files hurt metadata performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
