---
qid: ing_45666c067b__faang__local
question: 'Explain: Pattern: Naive RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 490
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:27-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain *Naïve Retrieval‑Augmented Generation (RAG)* as a design pattern for AI systems that combine retrieval and generation. I’ll assume: (1) the goal is to answer user queries; (2) we have an index of documents; (3) we use a generative model (e.g., GPT) after fetching evidence.

**Approach**  
I’ll first describe the core flow, then map it onto the classic *design‑pattern* taxonomy: *Creational*, *Structural*, *Behavioral*. Finally I’ll highlight pros/cons and typical trade‑offs.

**Depth**  

| Pattern | Role in Naïve RAG | Typical Implementation |
|---------|------------------|------------------------|
| **Factory (Creational)** | Builds the *retriever* (e.g., BM25, dense encoder) and the *generator* (LLM). | `RetrieverFactory.create(index_type)` + `GeneratorFactory.load(model_name)` |
| **Adapter (Structural)** | Wraps disparate APIs (vector store vs. LLM prompt interface) into a unified `RAGService`. | `VectorStoreAdapter`, `LLMPromptAdapter` |
| **Strategy (Behavioral)** | Chooses retrieval strategy (top‑k, semantic rank, fallback) and generation style (summarization, direct answer). | `RetrievalStrategy`, `GenerationStrategy` |

Workflow:  
1. Query → *Retriever* fetches top‑k snippets.  
2. Snippets + query are formatted into a prompt via the *Adapter*.  
3. Prompt fed to *Generator*, which outputs an answer.

**Edge Cases**  
- **No relevant docs** → fallback to generic LLM response.  
- **Over‑generation** (hallucination) if retrieval is weak; mitigate with confidence thresholds.  
- **Latency spikes** from large vector stores or heavy LLM calls; test with burst traffic.

**Optimize & Communicate**  
Improvements: cache frequent queries, use approximate nearest neighbors for speed, apply prompt‑engineering to reduce hallucinations. I’d explain my reasoning by walking through the pattern diagram, showing how each layer isolates concerns and allows independent scaling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
