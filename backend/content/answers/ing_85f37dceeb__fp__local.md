---
qid: ing_85f37dceeb__fp__local
question: 'Explain: Walk me through every stage of a production RAG pipeline, from
  raw documents to a cited answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 561
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:49:45-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) in production**

1. **Document ingestion & vectorisation**  
   *Problem:* Raw text is high‑dimensional and sparse; a model can’t “see” it directly.  
   *Solution:* Encode each document (or chunk) with an embedding model that maps semantics to a dense vector space. This turns similarity search into Euclidean distance optimisation.  
   *Insight:* The choice of embedding dimension balances recall (more dimensions capture nuance) against latency; many pipelines use *approximate nearest neighbour* (ANN) indexes, which exploit locality‑sensitive hashing to keep this trade‑off tight.

2. **Index construction & maintenance**  
   *Problem:* New documents arrive continuously; we need instant retrieval.  
   *Solution:* Build an ANN index (e.g., FAISS, Milvus) and update it incrementally via “re‑index” or “online” strategies. The index is a data structure that approximates the optimal nearest‑neighbour search problem under memory constraints.

3. **Query encoding & retrieval**  
   *Problem:* User queries are short, noisy, and ambiguous.  
   *Solution:* Encode the query with the same model; retrieve top‑k vectors via ANN. The underlying principle is *cosine similarity as a proxy for semantic relevance*, which reduces to an optimisation over dot products.

4. **Context assembly & re‑ranking**  
   *Problem:* Raw retrieved snippets may contain irrelevant or contradictory information.  
   *Solution:* Concatenate the top‑k passages into a prompt, optionally re‑rank them with a lightweight language model that evaluates factual consistency (a form of self‑critique). This step leverages the transformer’s attention to enforce coherence.

5. **Generation & citation**  
   *Problem:* The final answer must be both fluent and traceable.  
   *Solution:* Feed the assembled prompt into a large language model; use its *attention weights* or explicit token‑level evidence extraction to tag which passage supports each claim. The system then formats citations (e.g., “[DocID: 42]”) before returning the answer.

**Non‑obvious insight:**  
The most fragile link is **semantic drift** between the embedding space and the generation model’s internal representations. Small shifts in domain or phrasing can cause retrieved passages to misalign with the generator’s expectations, leading to hallucinations. A production RAG pipeline therefore often includes *cross‑model calibration*—fine‑tuning the retrieval encoder on the same data distribution used for the generator—to keep these two components tightly coupled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
