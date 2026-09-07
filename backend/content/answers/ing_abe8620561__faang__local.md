---
qid: ing_abe8620561__faang__local
question: 'Explain: bytea with copy — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 512
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:43-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of how the `lib/pq` PostgreSQL driver handles binary data (`bytea`) when using the `COPY … FROM STDIN/STDOUT` protocol in Go. I’ll assume they’re interested in: *how does lib/pq read/write `[]byte` blobs, what format is used, and what pitfalls exist?*

**Approach**  
1. Outline PostgreSQL’s binary‑mode COPY.  
2. Show how `lib/pq` maps `bytea` to Go’s `[]byte`.  
3. Discuss the escape rules for text mode vs. binary mode.  
4. Highlight error handling and size limits.

**Depth**  
PostgreSQL offers two COPY formats: *text* (default) and *binary*. In binary mode, each row is prefixed by a 4‑byte length followed by raw bytes; no escaping occurs. `lib/pq` exposes this via the `CopyIn`/`CopyOut` API where the driver internally writes an `int32` length then the slice’s contents. For text mode, `bytea` values are escaped as `\\x<hex>`. The driver detects the desired format by the `Binary()` flag on a `pgtype.Bytea` or via the `COPY ... FROM STDIN (FORMAT binary)` clause. It also respects PostgreSQL’s `max_copy_packet_size`; exceeding it triggers an error.

**Edge Cases**  
- Empty blobs: length zero must still be sent.  
- Very large blobs (> 2GB): Go slices cannot hold > 2^31‑1 bytes, so lib/pq streams the data instead of buffering.  
- Mis‑aligned lengths cause “invalid bytea” errors.  

**Optimize & Communicate**  
For high‑throughput ingestion, use binary mode and `CopyIn` to avoid per‑row parsing overhead. I’d explain that `lib/pq` already buffers chunks efficiently; if needed, switch to the newer `pgx` driver for even lower latency. In an interview, I would conclude: “By leveraging PostgreSQL’s binary COPY, lib/pq turns a Go `[]byte` into a raw byte stream with minimal marshaling, but we must guard against size limits and ensure proper length prefixes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
