---
qid: ing_39c1ae63de__think__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 528
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:42:18-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- The user wants a *step‑by‑step mental model* for hybrid retrieval (keyword + vector + rerank).  
- Assume they know basic IR concepts but want to understand **when each stage “earns its cost”** in a pipeline.  
- Define “cost”: compute time, memory, latency, or monetary expense.

**2️⃣ Mental model / framework**

- Treat the pipeline as three sequential filters:  
  1. *Keyword* (fast, exact) → reduces candidate set.  
  2. *Vector* (semantic similarity) → re‑orders within that set.  
  3. *Rerank* (learned or rule‑based) → final top‑k selection.  
- Think of it as a **cost–benefit funnel**: early stages prune many documents cheaply; later stages spend more on fewer items.

**3️⃣ Reasoning step by step**

1. **Keyword stage** – uses inverted index, sublinear search. Earns its cost when you need to guarantee recall for exact terms (e.g., legal docs).  
2. **Vector stage** – dense embeddings, GPU/CPU similarity; higher compute per doc. It pays off when semantic nuance matters and the candidate set is already small enough that the added latency is acceptable.  
3. **Rerank stage** – heavy models (BERT‑style) or handcrafted heuristics. Earns its cost only on a handful of top‑k candidates, where precision gains justify expensive inference.

**4️⃣ Common traps to avoid**

- Assuming vector search alone can replace keyword indexing; it can’t guarantee exact recall without the index.  
- Over‑optimizing the vector stage for latency when the candidate pool is still huge – you’ll waste GPU cycles.  
- Ignoring cache/memory effects: rerank models often require large context windows that may not fit in memory.

**5️⃣ Sanity‑check & verbalize**

- Verify that each stage reduces the search space by at least an order of magnitude before moving to a more expensive one.  
- Explain aloud: “We first use keyword matching to cut 90 % of docs quickly, then embed the remaining 10 % and compute cosine similarity on GPU, finally we feed the top‑50 into a BERT reranker that guarantees our final precision.”  

This structured walk‑through lets you internalize when each component’s cost is justified.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
