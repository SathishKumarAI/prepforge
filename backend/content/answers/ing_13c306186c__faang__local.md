---
qid: ing_13c306186c__faang__local
question: Design the smallest RAG system that could work for "chat with our docs."
  When do you need more - and when is RAG the wrong call?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 535
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:11-05:00'
sources: []
---

**Clarify**

You want a minimal Retrieval‑Augmented Generation (RAG) pipeline that lets users chat with your internal documents.  
Assumptions to confirm:  

* What volume of docs? (KBs vs TBs).  
* Query latency requirement (< 500 ms).  
* Text is mostly plain or includes tables/figures?  
* Security: must keep data in‑house, no external calls.  

**Approach**

1. **Indexing** – chunk documents into 512‑token slices, embed with a lightweight model (e.g., *sentence‑transformers/all-MiniLM-L6-v2*). Store embeddings in an ANN index (FAISS or Milvus).  
2. **Retrieval** – on user query, embed the prompt and fetch top‑k (3–5) nearest chunks via cosine similarity.  
3. **Generation** – feed retrieved text + prompt to a small LLM (e.g., *GPT‑NeoX 125M* or fine‑tuned *Llama‑2‑7B*) using chain-of-thought prompting for consistency.  
4. **Pipeline orchestration** – simple Flask/FastAPI endpoint, async retrieval + generation, cache recent queries.

**Depth**

- Index build: O(N log N) time, linear space in N.  
- Retrieval latency: ~10–30 ms for 5 chunks on CPU; generation ≈200–300 ms on a single GPU.  
- No external calls → compliance satisfied.  

**Edge Cases**

* Extremely long documents → overshoot token limits; fallback to summarization.  
* Ambiguous queries → low‑confidence retrieval; prompt user for clarification.  
* Non‑text content → need OCR or table parsers before embedding.

**When RAG Suffices vs. When It Doesn’t**

- **Suffice**: Small corpora, tight latency, privacy needs, moderate answer depth.  
- **Need more**: Massive knowledge bases (> 1M chunks) → require distributed ANN and larger LLMs; real‑time updates → incremental retraining.  
- **Wrong call**: If answers must be highly factual with zero hallucination (e.g., legal or medical), a pure RAG risks mis‑generation; better to use a knowledge‑base QA system or embed verification steps.

---

*This concise design balances minimalism, performance, and privacy—key for a FAANG‑style interview.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
