---
qid: ing_2ffc09833b__faang__local
question: 'Explain: Query Routing and Classification — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:48-05:00'
sources: []
---

**Clarify**  
We’re asked how a production Retrieval‑Augmented Generation (RAG) system routes user queries to the most relevant knowledge source and classifies them for downstream processing. I’ll assume: *a large document store*, *multiple specialized indexes* (e.g., legal, medical), and an *LLM that consumes retrieved snippets*. The goal is low latency, high precision, and graceful degradation.

**Approach**  
1. **Feature extraction** – embed the query with a lightweight encoder (e.g., DistilBERT).  
2. **Classification layer** – a multi‑label MLP predicts target domains or fallback “generic”.  
3. **Routing engine** – uses the predicted tags to pick one or more vector indices; if uncertain, it falls back to a global index.  
4. **Retrieval + RAG** – retrieve top‑k snippets per chosen index, pass them with the query to the LLM.

**Depth**  
- *Embedding*: 384‑dim float vectors; stored in FAISS HNSW for sub‑millisecond search.  
- *Classifier*: ≤10 M params, <5 ms inference on a single GPU.  
- *Routing logic*: deterministic priority list; if confidence <0.4, query all indexes (costly but safe).  
Complexity: O(log N) per index search; overall latency ≈ 50–80 ms in production.

**Edge Cases**  
- Ambiguous queries (“heart attack”) → multiple tags → multi‑index retrieval.  
- Out‑of‑domain inputs → classifier flags “generic”; use fallback knowledge base.  
- Index drift: monitor recall by periodically re‑ranking against ground truth.

**Optimize & Communicate**  
- Cache frequent query embeddings to avoid recomputation.  
- Use quantized vectors (int8) for storage savings without sacrificing top‑k quality.  
Explain trade‑offs: tighter routing reduces latency but may miss cross‑domain answers; broader routing improves coverage at cost of speed. Conclude with monitoring metrics—precision@k, latency percentiles—to validate the design in real traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
