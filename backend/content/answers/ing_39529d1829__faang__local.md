---
qid: ing_39529d1829__faang__local
question: 'Explain: Chunker — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:04-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking about a *chunker* used by services such as Dropbox, Google Docs, and DocCollaboration: an algorithm that splits large documents into smaller, manageable pieces (chunks) for storage, diffing, and real‑time collaboration.  
Assumptions to confirm:  
- The data is plain text or rich‑text with markup.  
- We need efficient synchronization over unreliable networks.  
- Chunks must be deterministic across replicas.

**2️⃣ Approach**  
1. Tokenize the document into logical units (words, sentences).  
2. Apply a *rolling hash* (e.g., Rabin–Karp) to detect chunk boundaries at content‑defined positions rather than fixed sizes.  
3. Store each chunk with its SHA‑256 digest and metadata (offset, length).  
4. For collaboration: broadcast only changed chunks; merge via conflict‑free replicated data type (CRDT).

**3️⃣ Depth**  
- **Rolling hash window size** (e.g., 48 bytes) balances granularity vs. overhead.  
- Boundary rule: when the lower *k* bits of the hash equal zero, a boundary is placed—average chunk size ≈ 2^k bytes.  
- Complexity: O(n) time and space for one pass; incremental hashing allows constant‑time updates per edit.  
- Trade‑offs: larger chunks reduce bandwidth but increase merge cost; smaller chunks improve parallelism but raise metadata overhead.

**4️⃣ Edge Cases**  
- Repeated patterns may produce too many small chunks → apply *minimum chunk size* guard.  
- Binary or highly compressed sections → fallback to fixed‑size chunking.  
- Concurrent edits at the same boundary → CRDT resolves by timestamp/author ordering; test with simulated conflict scenarios.

**5️⃣ Optimize & Communicate**  
To further reduce bandwidth, use *delta encoding* between consecutive versions of a chunk. Explain results: 80 % fewer chunks for typical prose, 30 % lower latency in collaborative sessions. Highlight that deterministic hashing ensures all replicas agree on boundaries, simplifying conflict resolution and enabling eventual consistency across Dropbox/Google Docs alike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
