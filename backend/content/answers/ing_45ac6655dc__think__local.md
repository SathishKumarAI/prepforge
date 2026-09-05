---
qid: ing_45ac6655dc__think__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 578
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:08:39-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - *What is “public docs”*? Assume a static set of Markdown/HTML files (≈ 10 k words).  
   - *What “answers questions” means*? Accept natural‑language queries, return the most relevant paragraph or link.  
   - *Weekend constraints*: ≤ 8 h coding + 2 h testing.

**2. Pick a mental model**  
   Use the **retrieve‑augment‑generate (RAG)** pipeline:  
   1. Index docs → searchable vector store.  
   2. Retrieve top‑k snippets by similarity.  
   3. Prompt a lightweight LLM to format an answer.

**3. Step‑by‑step plan**  
   1. **Data prep** (30 min): scrape the repo, split into 200–400 word chunks, strip metadata.  
   2. **Vectorization** (45 min): use a free embedding model (e.g., OpenAI’s `text-embedding-ada-002`) and store in Pinecone or FAISS locally.  
   3. **Retrieval API** (1 h): build a simple FastAPI endpoint that takes a query, returns top‑k snippets.  
   4. **LLM wrapper** (30 min): send retrieved text + question to GPT‑3.5 Turbo, ask for concise answer + source link.  
   5. **Front‑end demo** (1 h): minimal React/Vue page with a search box and results list.  
   6. **Testing & polishing** (30 min): add few unit tests, handle empty results.

**4. Deliberate skips**  
   - *Full‑blown semantic search engine*: no need for ElasticSearch or Solr; FAISS suffices.  
   - *Heavy UI/UX polish*: a barebones form is enough to demo the idea.  
   - *Complex caching or rate‑limit logic*: assume single user during demo.  
   - *Security hardening*: skip auth, focus on functionality.

**5. Sanity checks & communication**  
   • **Run a quick query** (“How do I reset my password?”) to confirm retrieval + generation works.  
   • **Explain the pipeline verbally**: “We first turn docs into vectors → fast similarity lookup → feed top snippets to GPT‑3.5 → return answer with source.”  
   • Highlight trade‑offs (embedding cost vs accuracy, LLM prompt size limits).  

This plan delivers a working prototype in ~6 h while leaving out unnecessary infrastructure and polish that would waste the weekend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
