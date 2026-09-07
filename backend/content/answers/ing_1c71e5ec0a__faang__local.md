---
qid: ing_1c71e5ec0a__faang__local
question: 'Explain: Reranking — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 542
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:02-05:00'
sources: []
---

**Reranking – Retrieval‑Augmented Generation (RAG) & Retrieval**

| **Phase** | **What it does** | **Key Tech** |
|-----------|------------------|--------------|
| **Retrieval** | Fetches a set of relevant documents from a large corpus (e.g., web, KB). | BM25, dense vector search (FAISS), sparse‑dense hybrid. |
| **Reranking** | Re‑orders the retrieved set to surface the best evidence for the query. | Cross‑encoder LLMs (e.g., T5, RoBERTa) scoring relevance; bi‑encoder embeddings fine‑tuned on QA data. |
| **Generation (RAG)** | Generates an answer conditioned on the top‑ranked documents and the user prompt. | Seq2Seq models with retrieval conditioning or prompting tricks (“Answer using these facts”). |

### Clarify
- *Goal:* Produce factual, context‑aware answers while keeping latency low.
- *Assumptions to confirm:* Size of corpus, real‑time constraints, acceptable hallucination rate.

### Approach
1. **Index** the corpus with dense embeddings + sparse term vectors.  
2. **Retrieve** top‑k candidates (e.g., k=10) via ANN search.  
3. **Rerank** with a cross‑encoder that scores query–doc pairs; pick top‑m (m<k).  
4. **Feed** the m docs + prompt into a RAG model to generate answer.

### Depth
- Retrieval: O(log N) for ANN + linear scan over k candidates.  
- Reranking: Each cross‑encoder inference is O(L²) on sequence length; fine‑tuned on SQuAD/TriviaQA.  
- Generation: Transformer decoder with attention over concatenated docs (O(m·L)).  
- Trade‑off: Larger m → better coverage but higher latency and memory.

### Edge Cases
- **No relevant docs:** fallback to purely generative LLM.  
- **Conflicting evidence:** use majority vote or confidence thresholds.  
- **Document noise:** apply filtering heuristics (length, source trustworthiness).

### Optimize & Communicate
- Cache embeddings for frequent queries; batch cross‑encoder inference.  
- Use early‑exit in decoder if confidence high.  
- Explain to stakeholders: “We retrieve 10 docs quickly, then a powerful model reorders them so the generator only sees the most reliable facts, reducing hallucinations while staying under our latency SLA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
