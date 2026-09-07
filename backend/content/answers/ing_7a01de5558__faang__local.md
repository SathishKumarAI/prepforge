---
qid: ing_7a01de5558__faang__local
question: How would you index a 100k-file monorepo so an AI editor can retrieve relevant
  context - and keep the index fresh as the user edits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 524
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:27:21-05:00'
sources: []
---

**Clarify**  
We have a single Git‑like repository with ~100 k files (~hundreds of MB). An AI editor must fetch *relevant* snippets when the user edits any file, and the index must stay in sync with ongoing changes (add/delete/modify). We assume: 1) CPU & memory are bounded (≈8 GB RAM), 2) latency < 200 ms for a typical edit, 3) the editor runs on the developer’s machine.

**Approach**  
1. **Incremental flat index** – use a lightweight key/value store (e.g., LMDB/SQLite) mapping file‑path → tokenized content.  
2. **Chunking & embeddings** – split each file into ~200 token chunks, compute fast sentence‑piece embeddings with a quantized model (e.g., DistilBERT 4‑bit). Store the embedding vectors alongside the chunk text.  
3. **Change watcher** – hook into the editor’s file‑system events; for each edit, re‑parse only the affected file, update its chunks/embeddings in the store. Use a background worker to batch updates and avoid UI stalls.  
4. **Query pipeline** – on user query (e.g., “show me where this function is used”), embed the prompt, perform an approximate nearest‑neighbor search (FAISS or HNSW) over the stored vectors, return top‑k chunks.  

**Depth**  
- Storage: 100 k files × 10 chunks/file ≈ 1 M vectors; at 4 bytes per float for 768‑dim embeddings → ~3 GB disk, fits in RAM with caching.  
- Update cost: re‑embedding a single file is < 50 ms on modern CPUs.  
- Search: HNSW gives sub‑millisecond query latency.  

**Edge Cases**  
- Binary or large files: skip indexing; store a flag and return “binary content omitted”.  
- Simultaneous edits: queue updates, dedupe by file path.  
- File deletions: remove entries from the index.  

**Optimize & Communicate**  
Explain trade‑offs: using quantized embeddings keeps latency low but slightly reduces semantic precision; chunk size balances granularity vs overhead. Stress that incremental updates keep the index fresh without full rebuilds, satisfying real‑time editing needs while keeping resource usage minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
