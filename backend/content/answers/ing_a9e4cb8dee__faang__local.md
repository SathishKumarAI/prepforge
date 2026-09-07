---
qid: ing_a9e4cb8dee__faang__local
question: 'Explain: Creating Your First QA Pipeline with Retrieval-Augmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 567
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:04-05:00'
sources: []
---

**Clarify**

We’re asked to describe how to build a *retrieval‑augmented question‑answer (QA) pipeline*—a system that first fetches relevant text snippets from a knowledge base and then feeds them into a language model to generate accurate answers.  
Assumptions:  
- The knowledge source is a large document collection (e.g., Wikipedia, corporate docs).  
- We have an LLM (OpenAI‑style or HuggingFace) for generation.  
- Latency < 1 s per query; throughput ~100 QPS.

**Approach**

1. **Indexing & Retrieval** – vectorize documents with a dense encoder (e.g., Sentence‑BERT). Store embeddings in an ANN index (FAISS/ElasticSearch).  
2. **Query Encoder** – encode the user question to obtain a query vector.  
3. **Nearest‑Neighbour Search** – retrieve top‑k passages (k≈5–10) within a latency budget.  
4. **Prompt Construction** – prepend retrieved snippets as context to the prompt for the LLM.  
5. **Generation & Post‑processing** – let the model produce an answer; optionally rank multiple generations or verify with external checks.

**Depth**

- *Encoding*: Fine‑tune Sentence‑BERT on QA pairs for better semantic matching (embedding size 768).  
- *Indexing*: Use FAISS’s IVF+PQ for sub‑millisecond search at scale.  
- *Prompt*: `"Context: {passages}\nQuestion: {q}\nAnswer:"`.  
- *Generation*: Beam search (k=3) with length penalty to avoid overly long answers.  
- *Complexity*: Retrieval O(log N) per query; generation linear in prompt size.

**Edge Cases**

| Issue | Mitigation |
|-------|------------|
| Sparse knowledge → no relevant hits | Use fallback “I don’t know” or broader retrieval (token‑level). |
| Ambiguous queries | Ask clarifying follow‑up using LLM. |
| Over‑generation / hallucination | Apply factuality check via a separate verifier model. |
| Latency spikes | Batch queries; cache frequent embeddings. |

**Optimize & Communicate**

- **Scaling**: Shard the index, use GPU for inference.  
- **Monitoring**: Track recall@k and answer accuracy over time; retrain encoders quarterly.  
- **Explainability**: Log retrieved passages to allow audit of model reasoning.  

*Result*: A low‑latency, high‑accuracy QA system that transparently shows its evidence, meeting FAANG standards for reliability, scalability, and user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
