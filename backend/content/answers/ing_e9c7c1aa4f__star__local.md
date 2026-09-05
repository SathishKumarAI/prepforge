---
qid: ing_e9c7c1aa4f__star__local
question: 'Explain: Replica Placement: The First Baby Steps — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 378
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:44-05:00'
sources: []
---

**Situation** – At my previous company we migrated a legacy data warehouse to Hadoop for batch analytics. During the first month of operation we noticed that read latency on our most frequently accessed fact tables spiked during peak hours; users complained about slow query performance.

**Task** – I was tasked with optimizing HDFS replica placement so that hot files were stored on nodes with higher I/O capacity and network bandwidth, thereby reducing read contention and improving overall throughput without increasing storage cost.

**Action** – First, I ran `hdfs fsck -listcorruptfileblocks` to identify the most heavily accessed blocks. Using Hadoop’s `FsDataset` API I wrote a script that parsed the block reports and mapped each file’s block locations to node rack topology. Next, I leveraged the HDFS client’s `DataNode` RPC to trigger manual re-replication: for each hot block, I removed one replica from a low‑performance DataNode and added a new replica on a high‑capacity node in a different rack. I also tuned the `dfs.replication.min` parameter to 2 for critical files and adjusted `dfs.block.replicator.classname` to use the RackAwarePlacementPolicy with custom rack weights. Finally, I monitored the changes with Ganglia dashboards and set up an alert if latency exceeded 200 ms.

**Result** – After re‑placement, read latency on the hot fact tables dropped from ~600 ms to under 120 ms during peak hours— a 80 % improvement—while keeping total storage usage unchanged. I learned that proactive replica placement, combined with rack awareness and custom weighting, can dramatically boost HDFS performance without extra hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
