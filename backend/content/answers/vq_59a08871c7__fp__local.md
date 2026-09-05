---
qid: vq_59a08871c7__fp__local
question: Name the different commands for starting up and shutting down the hadoop
  daemons?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 558
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:36:21-05:00'
sources: []
---

**Why we need separate start/stop commands**

Hadoop’s architecture splits the cluster into *system* and *application* layers: the system layer (NameNode, DataNode, ResourceManager, NodeManager, SecondaryNameNode, etc.) provides storage and job scheduling; the application layer (MapReduce, YARN, Hive) runs user jobs.  The two layers must be brought up in a specific order so that services can register with one another before any data‑processing code starts.  Stopping them in reverse order guarantees graceful hand‑over of tasks and clean release of sockets.

**Commands**

| Daemon | Start command | Stop command |
|--------|---------------|--------------|
| **NameNode** (metadata) | `start-dfs.sh` or `hdfs --daemon start namenode` | `stop-dfs.sh` or `hdfs --daemon stop namenode` |
| **DataNode** | `start-dfs.sh` / `hdfs --daemon start datanode` | `stop-dfs.sh` / `hdfs --daemon stop datanode` |
| **SecondaryNameNode** | `start-dfs.sh` / `hdfs --daemon start secondarynamenode` | `stop-dfs.sh` / `hdfs --daemon stop secondarynamenode` |
| **ResourceManager** (YARN scheduler) | `start-yarn.sh` or `yarn --daemon start resourcemanager` | `stop-yarn.sh` or `yarn --daemon stop resourcemanager` |
| **NodeManager** | `start-yarn.sh` / `yarn --daemon start nodemanager` | `stop-yarn.sh` / `yarn --daemon stop nodemanager` |
| **JobTracker/TaskTracker** (MapReduce v1) | `start-mapred.sh` or `mapred --daemon start jobtracker` / `tasktracker` | `stop-mapred.sh` or `mapred --daemon stop jobtracker` / `tasktracker` |

**Non‑obvious insight**

The *secondary* daemon (`SecondaryNameNode`) is not a backup of the primary; it performs periodic checkpoints of the namespace image.  If you shut down only the NameNode, the cluster can lose the most recent edits log—hence the need to keep `SecondaryNameNode` running during maintenance or restarts. This subtlety often surprises newcomers who think any “secondary” daemon is merely a fail‑over copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
