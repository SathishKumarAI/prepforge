---
qid: ing_aa3accb39d__faang__local
question: 'Explain: Log-based Incremental Replication | Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 526
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:51-05:00'
sources: []
---

**Clarify**  
You’re asking how Stitch implements *log‑based incremental replication*—i.e., capturing only the changes that occur in a source database and applying them downstream. I’ll assume we’re talking about relational sources (MySQL/PostgreSQL) where change data capture (CDC) is available via binary logs or WALs, and that Stitch targets a destination warehouse (Snowflake, BigQuery, etc.).

**Approach**  
1. Identify the CDC source (binlog/WAL).  
2. Parse the log stream into structured events (INSERT/UPDATE/DELETE with timestamps).  
3. Persist an offset marker so replication can resume after failures.  
4. For each event, transform it to the target schema and write it as a row or delta batch.  
5. Maintain idempotency and conflict resolution logic.

**Depth**  
- **Log parsing**: Stitch uses open‑source libraries (e.g., Debezium for Kafka, mysql-binlog-parser) that read binary logs, translate them into Avro/JSON events, and stream via S3 or a queue.  
- **Offset management**: Offsets are stored in Stitch’s metadata store; on restart, the worker seeks to the last committed offset.  
- **Transformation & load**: Events are batched (e.g., 10 k rows) and written to the destination using bulk APIs (Snowflake COPY, BigQuery Load). Updates/deletes are handled by *upsert* logic—Stitch writes a row with a `__stitch_operation` flag or uses merge statements.  
- **Complexity**: O(N) per event stream; latency is bounded by batch interval and network throughput. Trade‑offs involve larger batches (throughput vs. freshness).

**Edge Cases**  
- Schema changes mid‑stream → Stitch triggers a full sync fallback.  
- Out‑of‑order events due to replication lag → timestamp ordering logic ensures idempotence.  
- Network partitions → offset rollback prevents duplicate application.

**Optimize & Communicate**  
To reduce latency, enable *micro‑batching* (e.g., 1 s windows) and use Kafka Connect for real‑time push. For cost, compress log payloads before transfer. In an interview, I’d explain these choices, quantify throughput gains, and highlight how Stitch’s design balances consistency, speed, and resource usage—exactly the trade‑offs FAANG teams value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
