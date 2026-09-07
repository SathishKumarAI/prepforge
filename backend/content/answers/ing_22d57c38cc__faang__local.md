---
qid: ing_22d57c38cc__faang__local
question: What is RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 468
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:26-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What is RAG?” – I’ll assume the interviewee means **Retrieval‑Augmented Generation**, a modern NLP paradigm that blends large language models (LLMs) with external knowledge sources to answer queries more accurately and efficiently.

---

**2️⃣ Approach**  

| Step | What to cover |
|------|---------------|
| Define RAG | Architecture, key components |
| Why it matters | Limitations of pure LLMs |
| Typical use‑cases | Search engines, chatbots, QA systems |
| Implementation sketch | Retrieval module → LLM prompt |

---

**3️⃣ Depth**

- **Architecture**:  
  - *Retriever*: BM25, dense vector search (FAISS), or transformer‑based embeddings.  
  - *Generator*: GPT‑style model that ingests the retrieved documents as context.  
  - *Fusion*: Concatenate top‑k snippets or use cross‑attention to weigh evidence.

- **Benefits**:  
  - *Grounded responses*: Less hallucination, factual consistency.  
  - *Scalability*: Retriever handles massive corpora; generator processes only a small subset.  
  - *Cost*: Smaller LLM can be used if retrieval narrows the search space.

- **Challenges**:  
  - Retrieval quality directly impacts generation.  
  - Latency trade‑off between index query time and inference time.  
  - Handling contradictory evidence in retrieved docs.

---

**4️⃣ Edge Cases**

| Scenario | What to test |
|----------|--------------|
| Empty or noisy query | Does retriever return reasonable defaults? |
| Highly specialized domain | Retrieval index coverage, embedding alignment |
| Contradictory documents | Generator’s ability to weigh and reconcile |

---

**5️⃣ Optimize & Communicate**

- **Optimization**: Use approximate nearest neighbor search (FAISS) for sub‑millisecond retrieval; cache top‑k results.  
- **Communication**: “RAG lets us keep the LLM small yet powerful by feeding it curated evidence on demand, much like a human consulting a reference book before answering.”  

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
