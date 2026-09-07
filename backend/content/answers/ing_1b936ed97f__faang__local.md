---
qid: ing_1b936ed97f__faang__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 533
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:48:59-05:00'
sources: []
---

**Clarify**

The question asks for **three Retrieval‑Augmented Generation (RAG) patterns**—techniques that combine a language model with an external knowledge source—and guidance on when each is most appropriate.

---

### 1. *Document‑level RAG*
- **How it works:** Retrieve the top‑k full documents, embed them into the prompt, let the LLM generate the answer conditioned on those passages.
- **When to use:**  
  *Large, self‑contained sources* (e.g., policy manuals).  
  *Need for faithful citations or legal compliance.*  

### 2. *Chunk‑level RAG*
- **How it works:** Split documents into semantic chunks (sentences/paragraphs), retrieve relevant chunks, and feed them to the model.
- **When to use:**  
  *Highly detailed queries* where specific facts are buried in long texts.  
  *Scalable for massive corpora because chunk embeddings are smaller.*

### 3. *Hybrid RAG with External APIs*
- **How it works:** Combine retrieved text with live API calls (e.g., weather, stock prices) and let the model weave both into a coherent response.
- **When to use:**  
  *Dynamic or time‑sensitive information* that changes frequently.  
  *Applications requiring real‑time data fusion.*

---

**Depth**

- Document‑level RAG keeps context concise but may miss granular facts.  
- Chunk‑level RAG increases retrieval granularity, improving recall at the cost of larger prompts and higher token usage.  
- Hybrid RAG introduces latency from API calls; careful caching and async handling are essential.

**Edge Cases**

| Pattern | Breaks if… |
|---------|------------|
| Document‑level | Retrieval precision < 80 % → hallucination risk. |
| Chunk‑level | Chunks overlap or mis‑ranked → incoherent answer. |
| Hybrid | API latency > model timeout → partial responses. |

**Optimize & Communicate**

- Use **semantic similarity scoring** (FAISS, HNSW) for efficient chunk retrieval.  
- Cache frequently requested chunks/APIs to reduce round‑trip time.  
- Adopt a *prompt template* that clearly demarcates retrieved context from the LLM’s own generation.

Narrate your choice by aligning the pattern with **user intent**, **data size**, and **freshness requirements**—the core signal interviewers look for: structured reasoning, technical depth, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
