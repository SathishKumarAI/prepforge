---
qid: ing_07177dcdd1__faang__local
question: 'Explain: Creating a Hybrid Retrieval Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:57-05:00'
sources: []
---

**1️⃣ Clarify**  
You want to build a *hybrid retrieval pipeline*—a system that first retrieves documents using dense embeddings (semantic search) and then re‑ranks them with sparse keyword matching or another model. Confirm assumptions: the corpus size, latency requirements, available compute, and whether you need end‑to‑end training or just inference.

**2️⃣ Approach**  
1. **Preprocess & index**: Encode each document into a dense vector (e.g., Sentence‑BERT) and store it in an ANN index (FAISS/HNSW).  
2. **Query stage**:  
   * Convert user query to a dense vector → nearest‑neighbor search for top‑k candidates.  
   * Run a lightweight BM25 or exact TF‑IDF on the same set for keyword relevance.  
3. **Re‑ranking**: Feed both scores (plus optional features like passage length) into a small neural ranker or linear combiner to produce final ranking.  
4. **Evaluation**: Use metrics such as MAP, NDCG@10 on held‑out queries.

**3️⃣ Depth**  
- *Complexity*: ANN search is O(log N) amortized; BM25 is linear in k.  
- *Trade‑offs*: Dense vectors capture semantics but miss exact keyword matches; sparse retrieval is fast and precise for named entities. Hybrid balances recall & precision.  
- *Implementation*: In Haystack, `DensePassageRetriever` + `BM25Retriever` → `Pipeline` → optional `EmbeddingSimilarityCascader`.

**4️⃣ Edge Cases**  
- Extremely short queries: fallback to BM25 only.  
- Out‑of‑vocabulary terms: use subword embeddings.  
- Very large corpora: shard ANN index and parallelize ranking.

**5️⃣ Optimize & Communicate**  
Explain how adding a *late fusion* layer (e.g., LambdaMART) can further boost NDCG without heavy retraining. Highlight that the pipeline is modular—swap encoders or indexes as newer models appear. Conclude by stressing measurable gains: “In our prototype, hybrid retrieval raised MAP from 0.32 to 0.47 on a medical QA dataset.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
