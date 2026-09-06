---
qid: ing_6798fc87aa__think__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 477
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:53:56-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- *What is “Scenario 3” referring to?* Assume it’s a new use‑case in an interview or design brief.  
- *Enterprise search scope:* internal docs, compliance data, multi‑tenant architecture.  
- *RAG type:* Retrieval‑Augmented Generation (retrieval + generative model).  

**2. Adopt a design framework**  
1. **Problem definition** → query intent, privacy constraints, latency needs.  
2. **Data pipeline** → ingestion → indexing → vector store.  
3. **Retrieval layer** → dense vs sparse, hybrid search, relevance scoring.  
4. **Generation layer** → prompt engineering, hallucination control.  
5. **Evaluation & monitoring** → metrics (recall@k, F1), drift detection.  

**3. Step‑by‑step reasoning**  
- Map user intent to entity extraction → filter relevant corpora.  
- Use a vector index (FAISS/PGVector) for embeddings from a domain‑fine‑tuned encoder.  
- Combine with BM25 over metadata for hybrid recall.  
- Pass top‑k passages to a generative model (e.g., Llama‑2‑Chat) via a templated prompt that includes the retrieved context and user question.  
- Post‑process output: remove hallucinated facts, add citations.  

**4. Avoid common pitfalls**  
- Don’t ignore data privacy; mask PII before indexing.  
- Beware of “retrieval bias” – ensure coverage across departments.  
- Don’t over‑rely on a single encoder; fine‑tune on enterprise docs.  
- Avoid latency spikes by caching frequent queries.  

**5. Sanity check & verbalize**  
- Verify that the retrieval engine returns relevant passages for sample questions.  
- Run a quick generation demo to confirm the model uses context and cites sources.  
- Explain the flow aloud: “We ingest documents, embed them, retrieve top‑k, then let the LLM answer while referencing those snippets.”  

This metacognitive scaffold can be reused whenever you need to design or explain a RAG system for complex domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
