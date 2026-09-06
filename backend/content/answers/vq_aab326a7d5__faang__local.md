---
qid: vq_aab326a7d5__faang__local
question: How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:29-05:00'
sources: []
---

**Clarify**  
You’re asked how to copy a large dataset from source to sink in Azure Data Factory (ADF) while leveraging *parallelism* via *partitioning*. I’ll assume:  

1. Source supports paging or queryable partitions (e.g., SQL, Cosmos DB).  
2. Sink can accept concurrent writes (Blob, ADLS Gen2, Synapse).  
3. You want to maximize throughput without exhausting source throttling.

**Approach**  
1. **Determine a partition key** – e.g., date, hash of ID, or range on numeric column.  
2. **Create a pipeline with “Copy Data” activity** that uses *source query* parameterized by the partition value.  
3. **Add a “ForEach” loop** (or dynamic dataset) to iterate over partition values.  
4. Set the ForEach’s *Batch count* or *Concurrency* property to launch multiple copies in parallel.  

**Depth**  
- Use *source query windowing*: `WHERE id BETWEEN @start AND @end`.  
- In ADF, pass these bounds as activity parameters; the Copy activity can read them via expression language.  
- For dynamic datasets, define a dataset with a parameter for the partition filter and bind it in the Copy activity.  
- Monitor *parallelism* with `maxConcurrentCopies` (ADF v2) or By setting `copyBehavior = "Parallel"` in the sink settings.  

**Edge Cases**  
- Source throttling: implement retry logic or use *Retry count/interval*.  
- Uneven partition sizes: may cause idle workers; consider dynamic re‑partitioning or weighted batch counts.  
- Data skew: ensure key distribution is uniform to avoid hotspots.

**Optimize & Communicate**  
Explain that choosing a high cardinality, evenly distributed key (e.g., hash of GUID) gives the best scalability. If source limits concurrent connections, lower concurrency and increase chunk size instead. Mention cost trade‑offs: more parallel runs mean higher ADF pipeline units but faster completion. Conclude by highlighting monitoring via ADF’s run history and metrics to tune batch count for optimal throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
