---
qid: vq_67c0c44372__fp__local
question: What is SQL* Loader and what is it good for?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 455
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:38-05:00'
sources: []
---

**SQL\*Loader: a data‑to‑table conduit**

At its core, the problem is *massive ingestion*: you have an external flat file (CSV, fixed‑width, etc.) that contains billions of rows, and you need to materialise it in an Oracle table with minimal latency and maximal throughput. SQL\*Loader turns this into a deterministic optimisation problem: minimise I/O time subject to the constraints of the target schema.

1. **Direct vs. conventional path** – In the direct path, rows bypass the database buffer cache and are written straight to data files via `ALTER TABLE ... APPEND`. This eliminates the overhead of logging each insert, yielding up to 10× speedup for large loads. The trade‑off is that you cannot use triggers or constraints during load; they must be deferred.

2. **Control file semantics** – The control file encodes a *finite state machine* mapping file positions to column values. By specifying character sets, delimiters, and nulls explicitly, SQL\*Loader performs a single pass over the source, which is optimal in terms of I/O complexity (O(n)).

3. **Error handling** – Instead of aborting on the first bad row, it writes errors to a log file and continues, effectively turning an otherwise brittle batch process into a robust pipeline.

**Why it matters**

- **Throughput**: Direct path can load >10 GB/s on commodity hardware.
- **Resource isolation**: By using the direct path you avoid consuming buffer cache, keeping OLTP workloads unaffected.
- **Declarative mapping**: The control file is essentially a domain‑specific language that captures the exact parsing logic once, eliminating ad‑hoc scripts.

**Non‑obvious insight**

Most people overlook that SQL\*Loader’s *direct path* is not just a performance trick—it is an instance of *write‑back caching*. By writing directly to data files and deferring consistency checks until commit, Oracle turns the loader into a parallelised bulk inserter that leverages disk striping and asynchronous I/O, achieving near‑linear scalability with additional storage controllers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
