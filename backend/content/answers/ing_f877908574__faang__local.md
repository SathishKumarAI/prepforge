---
qid: ing_f877908574__faang__local
question: 'Explain: IoT Telemetry — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:17:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of how **IoT telemetry data can be stored and queried in Apache HBase** – a distributed NoSQL store on top of HDFS. Key assumptions: high‑velocity, time‑series sensor streams; need for real‑time ingestion, low‑latency reads, and horizontal scalability.

**Approach**  
1. **Schema design** – row key = *deviceID#timestamp* (or reverse timestamp for recent-first).  
2. **Column families** – e.g., `meta` (firmware, location) and `data` (temperature, humidity, etc.).  
3. **Ingestion pipeline** – use Kafka → Flume/Logstash → HBase client or HBase bulk load via MapReduce/Apache Spark for batch bursts.  
4. **Indexing & filtering** – leverage HBase’s row‑key scan, secondary indexes via Apache Phoenix or Bloom filters for high cardinality columns.

**Depth**  
- *Write path*: HBase writes to memstore then WAL; compaction merges into SSTables on disk.  
- *Read path*: Region servers serve scans; caching (block cache) boosts repeated queries.  
- *Consistency*: Strongly consistent per cell, tunable read‑write consistency via `read`/`scan`.  
- *Scalability*: Horizontal scaling by adding region servers; HBase handles rebalancing automatically.

**Edge Cases**  
- **Timestamp collisions** → use UUID or sequence to ensure uniqueness.  
- **Burst traffic** → pre‑allocate regions, enable async writes.  
- **Schema evolution** – add new columns in existing families without downtime.

**Optimize & Communicate**  
- *Performance*: Use column family compression (Snappy), tune `hfile.block.cache.size`.  
- *Cost*: Leverage HBase’s compaction to reduce storage overhead.  
- *Monitoring*: Integrate with Prometheus/Grafana for region health and latency.  
Explain that this architecture satisfies IoT telemetry needs: low‑latency ingestion, efficient time‑series queries, and elastic scaling—exactly what a FAANG product would demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
