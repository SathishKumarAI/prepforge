---
qid: ing_f37cf7b60f__faang__local
question: 'Explain: will retain the integrity of the document'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants to know how we would ensure that a machine‑learning model or pipeline does not corrupt or alter the source document it processes—i.e., *retaining document integrity*. I’ll assume: (1) the document is immutable after ingestion, (2) we need auditability and reproducibility, and (3) no side‑effects should leak into downstream systems.

**Approach**  
1. **Immutable storage** – store the raw file in a write‑once/read‑many (WORM) object store or append‑only log.  
2. **Checksums & signatures** – compute SHA‑256/PGP signatures at ingestion and verify them before each use.  
3. **Versioned metadata** – keep a separate, tamper‑evident ledger (e.g., blockchain or immutable database) that records every transformation.  
4. **Read‑only data pipelines** – enforce file system permissions and container isolation so that ML code cannot write back to the source bucket.

**Depth**  
- Ingest → compute checksum → store in S3 with `x-amz-object-lock` enabled (WORM).  
- Store a signed record of the hash in DynamoDB with an immutable timestamp.  
- Every transformation reads the raw blob, writes results to a new location, and logs the original hash + new hash.  
Complexity: O(n) for checksum, negligible storage overhead; audit trail cost is linear in number of transformations.

**Edge Cases**  
- Corrupted uploads → detect via checksum mismatch.  
- Concurrent modifications (unlikely due to WORM).  
- Large files → chunked hashing and parallel verification.  
Testing: unit tests on hash consistency, integration test that a pipeline cannot alter the source blob.

**Optimize & Communicate**  
To improve latency, cache hashes locally during processing; for security, rotate signing keys quarterly. I would explain this flow to interviewers as a “guard‑rail” architecture that guarantees document immutability while still allowing flexible ML experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
