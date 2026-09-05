---
qid: ing_12e790a97e__fp__local
question: 'Explain: Cursor System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 394
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:55-05:00'
sources: []
---

**Cursor‑system design** is the architectural blueprint that lets a large language model (LLM) “know” where in a long document or knowledge base it should look next—essentially a *search engine inside the model*.  
From first principles, an LLM must answer queries under strict latency and memory limits. The naive way is to feed the entire corpus into the prompt; this explodes token budgets and dilutes relevance. Therefore we split the problem:  

1. **Indexing** – compress the corpus into *dense embeddings* (or sparse term vectors) so that each chunk can be retrieved by similarity search in sub‑linear time.  
2. **Retrieval** – use a nearest‑neighbour index (FAISS, Annoy, or HNSW) to return the top‑k relevant passages for a user query.  
3. **Re‑ranking / Fusion** – feed those passages back into the LLM as context; the model re‑weights them with its own attention mechanism, yielding the final answer.

Mathematically this is an *information‑retrieval + probabilistic inference* pipeline: we estimate \(P(\text{answer}\mid \text{query}, \text{passages})\) by conditioning on a small, highly relevant subset of the corpus.  

**Non‑obvious insight:** The retrieval index should be **dynamic**, not static. Fine‑tuning embeddings on the fly (e.g., via online contrastive learning from user feedback) continuously aligns the vector space with evolving language use and domain shifts—something most interviewers overlook but is essential for production AI services that must stay fresh without re‑training the entire LLM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
