---
qid: vq_d0cae4a501__faang__local
question: ) what happens when two clients tries to access same file in Hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:53-05:00'
sources: []
---

**Clarify**  
*Problem:* Two clients attempt to read/write the same HDFS file concurrently.  
*Assumptions to confirm:* – Are both operations reads or one write? – Is the file open in append mode? – Does HDFS version support *file locking* (e.g., HDFS‑3 with `FSDataOutputStream`)?  

**Approach**  
1. **Read‑only case:** No conflict; HDFS serves multiple readers simultaneously via DataNodes’ block replicas.  
2. **Write case:** HDFS is *write‑once, read‑many*. Only one writer may hold the file open for output. Subsequent writers get a `FileAlreadyExistsException` or must use a new path.  

**Depth**  
- When a client opens an `FSDataOutputStream`, the NameNode creates a lease tied to that JVM’s process ID and timestamp.  
- The lease is renewed every 10 s; if another client tries to open for write, the lease holder can *force* release (e.g., via `fs -setrep` or `hdfs fsck`).  
- Readers are unaffected because HDFS streams read from immutable blocks once a file is closed.  

**Edge Cases**  
- Network partition: lease renewal fails → writer dies; remaining writers cannot proceed.  
- Client crash: lease expires after 30 s (default), allowing new writers to acquire the file.  
- Append mode (HDFS‑3): only one appender at a time; others block until lease release.  

**Optimize & Communicate**  
Explain that HDFS deliberately avoids complex locking for performance; instead it relies on *lease ownership* and *write‑once* semantics. If concurrent writes are required, recommend using HBase/Parquet with atomic upserts or an external lock service (Zookeeper). Clarify trade‑offs: strict consistency vs. throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
