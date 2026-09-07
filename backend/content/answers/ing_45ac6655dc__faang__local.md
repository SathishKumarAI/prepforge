---
qid: ing_45ac6655dc__faang__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 483
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:53-05:00'
sources: []
---

**Clarify**

*Goal*: Build a quick‑prototype Q&A system for the company’s public docs.  
Assumptions to confirm:  
1. Docs are static, mostly Markdown/HTML, size ≈ 10 k files (~200 MB).  
2. Queries will be natural language questions (e.g., “How do I reset my password?”).  
3. Response time ≤ 1 s per query and no need for live updates during the weekend.

**Approach**

1. **Data ingestion** – scrape all docs, split into chunks (~500 words) with titles/paths.  
2. **Embedding** – use a lightweight sentence‑embedding model (e.g., `sentence-transformers/all-MiniLM-L6-v2`) on CPU; store vectors in FAISS for fast similarity search.  
3. **Retrieval + Generation** – feed the top‑k retrieved chunks to an open‑source LLM (e.g., GPT‑NeoX 125M or Bloom) with a simple prompt template that preserves doc context.  
4. **API layer** – Flask/ FastAPI endpoint that accepts a question, runs retrieval+generation, returns JSON.

**Depth**

- Retrieval: FAISS index built in ~2 min; similarity search O(log N).  
- Generation: 125M parameters run on CPU (~1–2 s per inference); acceptable for weekend demo.  
- No fine‑tuning or external APIs to avoid API costs and latency.

**Edge Cases**

- Unseen terminology → fallback to “I’m not sure” with a link to the docs index.  
- Very long questions → truncate to 256 tokens.  
- Ambiguous queries → prompt LLM to ask clarifying question (not implemented due to time).

**Optimize & Communicate**

- If time permits, swap embeddings for `paraphrase-MiniLM-L6-v2` (faster) or cache top‑k results per query pattern.  
- Highlight trade‑offs: CPU‑only LLM vs. higher quality cloud API; minimal latency but lower accuracy.  
- Conclude by noting that this prototype can be scaled with a GPU backend, larger models, and real‑time doc updates for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
