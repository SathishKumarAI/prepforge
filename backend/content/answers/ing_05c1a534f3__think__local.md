---
qid: ing_05c1a534f3__think__local
question: 'Explain: Design an answer engine: a user types a question and gets a cited,
  streamed answer. Your end-to-end budget is 3 seconds to a complete short answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 637
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:06:37-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What* do we need? A system that takes a user query, retrieves relevant info, generates an answer with citations, streams it, and finishes in ≤ 3 s.  
- *Assumptions*: single‑sentence or short paragraph answers; citations are URLs/IDs; “streamed” means incremental text output; 3 s includes network, compute, and I/O.

**2️⃣ Mental model / framework**  
Treat the solution as a pipeline:  
1. **Fast front‑end** → tokenize + intent parse.  
2. **Sparse retrieval** → quick keyword match on an inverted index or vector store.  
3. **Dense re‑ranking** (optional) with a lightweight transformer.  
4. **Generation** → use a small, optimized language model (e.g., DistilGPT, LLaMA‑7B quantized).  
5. **Citation attachment & streaming** → post‑process tokens to inject citations and stream via WebSocket/HTTP2.

**3️⃣ Step‑by‑step reasoning**  

| Stage | Time budget | Technique |
|-------|-------------|-----------|
| 1. Query parse | < 50 ms | BPE + regex, no heavy inference |
| 2. Retrieval | < 200 ms | FAISS on 128‑dim vectors; filter top‑10 docs |
| 3. Re‑rank (optional) | < 300 ms | Tiny transformer or simple BM25 score |
| 4. Generation | < 1 s | Beam size = 2, max length ~120 tokens; quantized weights |
| 5. Citation injection & streaming | < 200 ms | Post‑process tokens, send via SSE |

Add a **caching layer** (Redis) for popular queries to shave milliseconds. Use **pre‑compiled model graphs** (ONNX/TensorRT) and **GPU inference** if available; otherwise CPU with SIMD.

**4️⃣ Common traps to avoid**  
- Over‑engineering retrieval: a simple inverted index + BM25 can be faster than dense vectors for short answers.  
- Heavy post‑processing: embedding citations during generation (prompt engineering) reduces extra passes.  
- Ignoring network latency: stream chunks immediately as they’re generated instead of waiting for full completion.

**5️⃣ Sanity‑check & communicate**  
- Benchmark each stage on target hardware; ensure cumulative ≤ 3 s.  
- Explain to stakeholders that the 3 s budget splits into *retrieval* (≈ 0.25 s) and *generation* (≈ 1 s), with safety margins for I/O.  
- Highlight trade‑offs: smaller models → faster but less fluent; richer citations → extra parsing time.

By following this staged, time‑budgeted pipeline—lightweight retrieval + quantized generation + inline citation injection—you can meet the 3‑second requirement while delivering concise, referenced answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
