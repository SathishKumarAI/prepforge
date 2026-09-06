---
qid: vq_12e35fafcc__faang__local
question: How will you update the rows that are already exported?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:28-05:00'
sources: []
---

**Clarify**  
We’re asked how to keep a downstream system in sync when source rows change after an initial export. I’ll assume:  
1) The data lake/warehouse holds the “source” table.  
2) We have already exported a snapshot to another storage or service (e.g., S3, BigQuery).  
3) Updates can be inserts, deletes, or modifications.  

**Approach**  
1. **Change Data Capture (CDC)** – use transactional logs (Debezium, Kafka Connect, etc.) to stream changes.  
2. **Delta/Upsert logic** – for each change event, upsert the record in the target system; delete events trigger a remove.  
3. **Idempotency & versioning** – include a monotonically increasing `version` or `ts` field so repeated events are safe.  

**Depth**  
- Pull CDC from the source (e.g., MySQL binlog).  
- Transform to canonical format, enrich with target key.  
- Write to target via an idempotent sink: e.g., Parquet + partition by date, or BigQuery `MERGE`.  
- Complexity: O(1) per event; batch window keeps throughput high.  
- Trade‑offs: CDC latency vs. batch re‑export cost; need fault‑tolerant message queue.  

**Edge Cases**  
- Schema evolution – add a schema registry to track changes.  
- Duplicate events – rely on idempotent key + version.  
- Large deletes – may require full refresh or tombstone markers.  

**Optimize & Communicate**  
Explain that we’ll start with a lightweight CDC pipeline, monitor lag, and iterate to a “full refresh” fallback if change volume spikes. Highlight how this keeps the target system consistent without re‑exporting everything, meeting FAANG expectations for real‑time data integrity and scalable engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
