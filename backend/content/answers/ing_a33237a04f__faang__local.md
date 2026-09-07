---
qid: ing_a33237a04f__faang__local
question: 'Explain: Schema Evolution — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 482
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:01-05:00'
sources: []
---

**Clarify**  
You’re asking how a data‑platform can support *schema evolution* while still delivering *Change Data Capture (CDC)* for downstream services. I’ll assume: • Transactional source (e.g., Postgres) that may add/rename columns over time; • A CDC engine (Debezium, Kafka Connect) streams row changes; • Consumers need a stable API and minimal downtime.

**Approach**  
1. **Capture raw change events** – keep the original row with all fields (including nulls for missing ones).  
2. **Versioned schema registry** – store every DDL as a new Avro/Proto schema version, tagging each CDC event with its version.  
3. **Transformation layer** – at consumption time, materialize the “current” schema by merging historical and new fields; use *schema‑merge* logic (additive only).  
4. **Back‑fill & migration** – run batch jobs to back‑populate missing columns for older rows when a new column appears.

**Depth**  
- CDC events carry `{table, pk, op, ts, schema_version}`.  
- Schema registry uses *compatibility* rules (BACKWARD/COMPATIBLE) so old consumers can still read newer data.  
- Transformation cost is O(1) per event if we maintain a mapping of field offsets; otherwise O(n) to rebuild rows.  
- Consistency: use Kafka topics per table, partition by PK, guaranteeing order and atomicity.

**Edge Cases**  
- **Non‑additive changes** (drop/rename columns): flag as *incompatible* and trigger schema migration alerts.  
- **Large binary blobs**: store pointer in CDC payload to object store.  
- **Schema drift across environments**: enforce strict validation before promoting a new version.

**Optimize & Communicate**  
Future improvements: use *schema‑on‑read* with Parquet/Avro files for analytics; implement an automated schema migration wizard that generates SQL DDL and back‑fill scripts. When explaining, I’d emphasize the separation of concerns—capture vs. transformation—and how this design scales to millions of events per second while preserving consumer stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
