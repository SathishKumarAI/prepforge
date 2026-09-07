---
qid: vq_f698cb0cf3__faang__local
question: Give examples of the SerDe classes which hive uses to Serialize and Deserialize
  data ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 658
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:49-05:00'
sources: []
---

**Clarify**  
You’re asking for concrete Hive *SerDe* (Serializer/Deserializer) implementations that translate between on‑disk text/binary formats and Hive’s internal row representation. I’ll assume you want the most common ones used in production, not a complete list of every custom SerDe.

**Approach**  
1. List the built‑in SerDes shipped with Hive.  
2. For each, give its typical use case (format it handles) and any notable flags or options.  
3. Mention that many others exist (e.g., Avro, Parquet, ORC), but they are often wrapped in higher‑level tables rather than raw SerDe names.

**Depth**  

| SerDe Class | Format Handled | Typical Options |
|-------------|----------------|-----------------|
| `org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe` | Delimited text (CSV, TSV) | `field.delim`, `serialization.format` |
| `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe` | Column‑oriented binary | No public options; used by Hive’s native columnar tables |
| `org.apache.hadoop.hive.serde2.avro.AvroSerDe` | Avro files | `avro.schema.literal`, `avro.schema.url` |
| `org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe` | Parquet files | None (schema inferred from file) |
| `org.apache.hadoop.hive.ql.io.orc.OrcSerde` | ORC files | None (schema inferred) |
| `org.apache.hadoop.hive.serde2.OpenCSVSerde` | CSV with quotes/escapes | `separatorChar`, `quoteChar`, `escapeChar` |
| `org.apache.hadoop.hive.contrib.serde.JSONSerDe` | JSON lines | `column.jsonpath` mapping per column |

*Complexity*:  
- LazySimpleSerDe: O(number of fields) per row, minimal overhead.  
- Columnar/Parquet/ORC SerDes: O(1) per column access due to vectorized I/O.  

**Edge Cases**  
- Mixed delimiters or malformed rows cause `LazySimpleSerDe` to throw parsing exceptions; you’d test with corrupted data and verify error handling.  
- JSONSerDe requires a valid JSON path for each column; missing paths produce nulls—test with optional fields.  
- AvroSerDe needs the schema to match the file; mismatches raise `AvroRuntimeException`.

**Optimize & Communicate**  
For large‑scale ingestion, prefer Parquet/ORC SerDes because they support predicate pushdown and compression, reducing I/O by up to 80%. If you must read legacy CSV logs, LazySimpleSerDe with tuned `serde.advanced.optimize` can help. In interviews, highlight that choosing the right SerDe is a trade‑off between schema flexibility (JSON/Avro) and performance (Parquet/ORC). Conclude by noting that custom SerDes can be plugged in if none of these fit specific needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
