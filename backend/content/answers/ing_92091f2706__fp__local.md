---
qid: ing_92091f2706__fp__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 418
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:54-05:00'
sources: []
---

**When to Use Each Pattern for Production RAG at Scale**

The core problem is *efficiently answering user queries by combining a powerful language model (LM) with external knowledge* while keeping latency, cost, and consistency within bounds.  
1. **Local Vector Store + LM** – Use when you need ultra‑low latency (< 50 ms) and offline availability. The vector index is in‑memory; the trade‑off is higher RAM consumption and a stale knowledge base if updates are frequent.  
2. **Remote Retrieval API (e.g., Pinecone, Weaviate)** – Ideal for dynamic corpora that change daily. The LM remains local; retrieval cost scales with query volume but latency stays acceptable because the index is distributed and tuned for high throughput.  
3. **Hybrid (Local + Remote)** – Combine a small “hot” cache of recent documents locally with a larger remote store. This pattern surfaces *cache‑miss* patterns: you learn which document types are most reused and pre‑warm them, reducing overall cost.  
4. **Pre‑fetch & Incremental Retrieval** – When queries have long answer spans (e.g., legal or medical), fetch the top‑k docs once and stream them to the LM incrementally; this reduces token waste compared to feeding a huge concatenated context.  

**Non‑obvious insight:** *The bottleneck is often not retrieval latency but the LM’s “context window pressure.”* By shaping the retrieval strategy to match the LM’s attention distribution (e.g., weighting recent documents higher), you can achieve near‑optimal performance without enlarging the index or paying for more tokens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
