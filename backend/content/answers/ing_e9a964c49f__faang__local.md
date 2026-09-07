---
qid: ing_e9a964c49f__faang__local
question: 'Explain: Object Storage and Uploads — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:42:58-05:00'
sources: []
---

**Clarify**  
We’re designing an object‑storage service that accepts uploads (e.g., images, logs). The goal is to guarantee data integrity: the server must detect corruption during transfer or storage. I’ll assume we support multipart uploads, clients can provide their own checksum, and we expose a REST API.

**Approach**  
1. **Checksum calculation** – client computes a cryptographic hash (SHA‑256) over the whole file.  
2. **Metadata exchange** – during `PUT /object` the header `X-Checksum: <hash>` is sent.  
3. **Server verification** – as data streams in, we compute the same SHA‑256 incrementally and compare at the end.  
4. **Error handling** – on mismatch, return `400 Bad Request` and optionally a retry token.  
5. **Persistence** – store the checksum alongside object metadata; use it for later integrity checks (e.g., during replication or download).

**Depth**  
- **Streaming hash**: O(n) time, O(1) memory; uses a buffer of fixed size (4 KB).  
- **Security**: SHA‑256 resists collision attacks; we could add HMAC with a server secret for tamper proofing.  
- **Multipart uploads**: each part gets its own checksum; on assembly we compute the aggregate hash to match the client’s full file hash.

**Edge Cases**  
- Client omits checksum → fall back to optional integrity check during download.  
- Large files exceeding RAM → our streaming algorithm handles them fine.  
- Network failures mid‑upload → store partial data with a flag; client can resume and recompute checksum for remaining bytes.

**Optimize & Communicate**  
We could cache recent checksums in Redis to avoid recomputation on re‑uploads, reducing storage I/O. In production, we’d expose metrics (checksum failures, average hash time) and alert if failure rate spikes. This design balances correctness, performance, and simplicity—key for a FAANG‑grade object store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
