---
qid: vq_ab0a8d99bc__faang__local
question: what is hbase compaction technique and write operation hbase using spark??
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 1018
total_tokens: 1256
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:40-05:00'
sources: []
---

**Clarify**  
You’re asking about *how* HBase keeps its on‑disk data tidy (compaction) and *how* a Spark job can push writes into an HBase table efficiently. I’ll assume the table is already created, the client has HBase 2.x, and we’re targeting high throughput rather than latency.

**Approach**  
1. Explain compaction types & triggers.  
2. Detail the Spark‑to‑HBase write pattern (RDD → `Put` → Hadoop API or connector).  
3. Touch on tuning knobs and trade‑offs.

---

### 1. HBase Compaction Technique

| Type | When it runs | What it does | Cost |
|------|--------------|-------------|------|
| **Minor** | Scheduled every few minutes (default `hbase.regionserver.compaction.period`) or when the number of storefiles exceeds a threshold (`hfile.num.files`). | Merges the newest *n* HFiles into one, dropping deleted rows. Keeps read performance high by reducing file count. | Low CPU/IO; can be throttled with `minorCompactionThreshold`. |
| **Major** | Triggered manually (CLI) or when compaction is forced (`hbase.major.compaction.period`). | Scans *all* HFiles in a region, merges them into a single sorted file, and discards tombstones. Reclaims disk space and removes obsolete versions. | High CPU/IO; blocks reads/writes for the duration of the merge (unless `minorCompactionThreshold` is set to allow overlapping). |

**Tuning knobs**  
- `hbase.hstore.compaction.minFiles`, `maxFiles`: control how many files trigger a minor compaction.  
- `hfile.block.cache.size`, `blocksize`: influence read locality during compaction.  
- `compact.policy.class` (e.g., *CompactingHStore*) determines the algorithm.

---

### 2. Writing to HBase from Spark

```scala
import org.apache.hadoop.hbase.{TableName, HBaseConfiguration}
import org.apache.hadoop.hbase.client.{ConnectionFactory, Put}
import org.apache.hadoop.hbase.mapreduce.TableOutputFormat
import org.apache.spark.sql.SparkSession
import org.apache.spark.rdd.RDD

val spark = SparkSession.builder.appName("SparkToHBase").getOrCreate()
val conf = HBaseConfiguration.create()
conf.set(TableOutputFormat.OUTPUT_TABLE, "my_table")
conf.set("mapreduce.outputformat.class", classOf[TableOutputFormat[_]].getName)

val rdd: RDD[(String, Array[(String, String)])] = // (rowKey, List[(cf, value)])

val putsRDD: RDD[(ImmutableBytesWritable, Put)] = rdd.map {
  case (key, cells) =>
    val put = new Put(Bytes.toBytes(key))
    cells.foreach { case (cf, v) => put.addColumn(Bytes.toBytes(cf), Bytes.toBytes("qual"), Bytes.toBytes(v)) }
    (new ImmutableBytesWritable, put)
}

putsRDD.saveAsNewAPIHadoopDataset(conf)
```

- **Batch size**: use `conf.setInt("hbase.client.write.buffer", 64 * 1024 * 1024)` for larger batches.  
- **Parallelism**: set Spark executor memory and cores to match HBase region servers; too many parallel writers can saturate the network.

---

### Edge Cases & Testing

| Scenario | What can break | Test strategy |
|----------|----------------|---------------|
| Too few partitions → one executor writes everywhere | Hot‑spotting, single point of failure | `spark.sql.shuffle.partitions` vs. region count |
| Region split during write | Data loss or duplicates | Enable HBase’s *auto‑split* and verify consistency with checksums |
| Large payloads | Out‑of‑memory in Spark driver | Use `mapPartitions` to stream puts, monitor executor memory |

---

### Optimize & Communicate

- **Use the new `org.apache.hadoop.hbase.spark.HBaseContext`** if available; it bundles bulk loading and reduces boilerplate.  
- **Explain trade‑offs**: Minor compactions keep reads fast but can leave many HFiles; major compactions reclaim space at a cost.  
- **Narrate decisions**: “I’ll set `minorCompactionThreshold=5` to reduce file churn, then schedule a nightly major compaction during low traffic.”

This structure shows clear problem restatement, systematic planning, depth in both concepts, awareness of pitfalls, and a concise communication style that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
