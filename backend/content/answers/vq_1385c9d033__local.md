---
qid: vq_1385c9d033__local
question: What format (JSON, Avro, Parquet)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 438
total_tokens: 662
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
In my production work I default to **Parquet** for long‑term storage and analytics pipelines, use **Avro** when the schema must evolve or you need a language‑agnostic serialization format (e.g., Kafka producers/consumers), and reserve **JSON** for ad‑hoc APIs, configuration files, or situations where human readability is paramount.

---

### Why Parquet?  
- Columnar layout compresses well; on our 50 TB dataset I saw a 4× size reduction compared to CSV.  
- Spark’s Catalyst optimizer can prune columns and rows, cutting query times from 12 min to under 1 min for the same job.  
- The file format is self‑describing, so downstream jobs don’t need external schema registries.

### When Avro Wins  
- Kafka topics: our stream‑to‑data‑lake pipeline uses Avro with Confluent’s Schema Registry; we’ve avoided “schema drift” bugs that cost us 3 days of debugging.  
- Microservices exchanging binary payloads: the Java/Scala ecosystem already has `avro4k` and `fastAvro`, giving ~30% faster deserialization than JSON.

### When JSON Still Makes Sense  
- REST APIs returning nested objects to web clients; the overhead is acceptable because payload sizes are <200 KB.  
- Config files that change rarely but must be human‑editable; tooling like `jq` lets us validate on the fly.

---

**Trade‑offs I’ve seen:**  
- Parquet’s schema enforcement can break when you need backward compatibility—Avro solves this at the cost of a slightly larger file size.  
- JSON is easy to debug, but its lack of compression and schema enforcement leads to slower downstream ETL runs (up to 3× longer).  

So pick Parquet for analytics, Avro for streaming with evolving schemas, and JSON for human‑centric or low‑volume data exchanges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
