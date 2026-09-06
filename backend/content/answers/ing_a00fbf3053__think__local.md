---
qid: ing_a00fbf3053__think__local
question: Why Not General Databases? — Vector Databases
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 588
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:40:02-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *What exactly is “Why Not General Databases?”* – we’re comparing vector‑search systems (like Milvus, Pinecone) with traditional relational/NoSQL stores.  
   - Assume the user wants a conceptual answer: why not just use a classic DB for vector similarity?  
   - Note that the answer should cover scalability, indexing, query patterns, and performance.

**2. Adopt a comparison framework**  
   - **Data model**: flat vectors vs. rows/columns or key‑value pairs.  
   - **Indexing & search**: B‑trees/LSM trees vs. ANN (Approximate Nearest Neighbor) structures such as IVF, HNSW, PQ.  
   - **Query workload**: point reads/writes vs. high‑throughput similarity queries.  
   - **Consistency / latency**: strong ACID vs. eventual consistency with relaxed guarantees for speed.

**3. Step‑by‑step reasoning**  
   1. *Indexing cost*: traditional indexes (B‑tree) are linear in dimension; ANN indices partition space and compress, giving sub‑linear search time.  
   2. *Memory & CPU*: vector similarity requires dot products or cosine calculations; specialized GPUs/TPUs accelerate this but are not needed for simple key lookups.  
   3. *Accuracy vs. speed trade‑off*: ANN sacrifices exactness for latency—acceptable in recommendation/search contexts.  
   4. *Schema flexibility*: vectors are dense, high‑dimensional blobs; relational schemas struggle to express similarity constraints naturally.  
   5. *Operational complexity*: vector DBs bundle quantization, re‑indexing, and distance metrics as first‑class citizens; adding this to a generic DB would be cumbersome.

**4. Common traps**  
   - Assuming “vector search is just another query” ignores the algorithmic differences.  
   - Overlooking that many general DBs can store blobs but cannot efficiently compute nearest neighbors without extra layers (e.g., Faiss integration).  
   - Forgetting that vector DBs often expose a unified API for both CRUD and similarity, simplifying application logic.

**5. Sanity‑check & communicate**  
   - Verify each point with real benchmarks: e.g., 1 M vectors of dimension 512 → ANN index ≈10 ms vs. linear scan > seconds.  
   - Summarize concisely: *“Because vector similarity demands specialized indexing, sub‑linear search, and often relaxed consistency, general databases lack the built‑in mechanisms to deliver the required performance at scale.”*  
   - Offer a brief example (e.g., recommending movies) to illustrate practical impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
