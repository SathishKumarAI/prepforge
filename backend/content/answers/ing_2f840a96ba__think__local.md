---
qid: ing_2f840a96ba__think__local
question: 'Explain: You have retrieved chunks and a question. How do you actually
  build the prompt? Assume some documents are irrelevant and two of them contradict
  each other.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 479
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:48:45-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
*Assume we’re building a retrieval‑augmented prompt for a large language model (LLM). The retrieved chunks may contain noise and contradictions; our aim is to give the LLM a coherent context that preserves relevant facts while flagging conflicts.*

**2️⃣ Adopt a “context‑curation” framework**  
1. *Relevance filtering* – keep only chunks with high semantic overlap to the question.  
2. *Redundancy reduction* – merge duplicate or near‑duplicate passages.  
3. *Conflict detection* – identify overlapping sentences that differ in key facts.

**3️⃣ Step‑by‑step reasoning**  
- **Rank & slice**: Sort retrieved docs by similarity score; take top k (e.g., 5–7).  
- **Cluster similar chunks**: Use embeddings to group near‑identical passages, summarise each cluster.  
- **Detect contradictions**: For each fact pattern, compare values across clusters; flag mismatches.  
- **Construct prompt**:  
  ```
  Question: <Q>
  Context:
  • Cluster 1: <summary> (source A)
  • Cluster 2: <summary> (source B)
  Contradiction notice: "<fact>" differs between sources A & B.
  Please answer based on the most reliable source or explain uncertainty.
  ```
- **Optional weighting**: prepend a confidence score to each cluster header.

**4️⃣ Avoid common pitfalls**  
- Don’t simply paste all chunks; it overwhelms the LLM and hides contradictions.  
- Don’t ignore low‑scoring but potentially critical documents—check for domain specificity.  
- Don’t let the contradiction flag be too vague; provide concrete examples so the model can reason.

**5️⃣ Sanity‑check & articulate**  
- Verify that every included chunk actually answers or informs the question.  
- Ensure contradictions are clearly highlighted, not buried.  
- Rephrase the prompt to test if the LLM would pick up on the conflict.  

By iterating this process—filter → cluster → flag → prompt—we give the model a concise, trustworthy context even when sources disagree.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
