---
qid: ing_57045f555b__star__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 390
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:55-05:00'
sources: []
---

**Situation**  
I was handed a 12‑GB text corpus and asked to prototype a Retrieval‑Augmented Generation (RAG) service in six hours. The client’s goal was to quickly assess feasibility before investing in a full product.

**Task**  
My mission: design an end‑to‑end pipeline that ingests the corpus, builds a searchable vector index, and returns context‑aware answers with minimal latency—ideally under 2 s per query—while keeping memory usage below 8 GB on a single node.

**Action**  
First I sketched the architecture: use FastAPI for the API layer, FAISS (GPU‑enabled if available) for vector search, and a lightweight LLM wrapper around OpenAI’s GPT‑4o via their SDK. I wrote a quick data ingestion script to chunk PDFs/HTML into 1 kB passages, generate embeddings with `text-embedding-3-large`, and store them in an IVF+PQ index. I added metadata fields (source title, date) for post‑filtering. For the retrieval step I set up a two‑stage filter: first a coarse FAISS search returning top‑10 vectors, then a semantic similarity score against the query to re‑rank. Finally, I built a `/ask` endpoint that concatenates the top 3 passages and feeds them into GPT‑4o with a prompt template.

**Result**  
Within 4 h I had a working prototype that returned answers in ~1.8 s on a laptop with an RTX 3060 GPU. The recall@10 was 92% against a manually annotated benchmark. I learned the value of quick prototyping with FAISS and OpenAI’s embeddings, and that spending a few minutes designing the metadata schema pays off when scaling later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
