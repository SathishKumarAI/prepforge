---
qid: ing_1109778d65__star__local
question: 'Explain: RAG & Retrieval - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 346
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:48-05:00'
sources: []
---

**Situation** – At my previous startup we were building a customer support chatbot that needed to pull up-to-date policy documents for each query. The knowledge base had grown to over 5 000 PDF files and the existing keyword search returned too many irrelevant hits, slowing response time by 2 seconds per request.

**Task** – I was asked to design a system that could retrieve the most relevant document fragments in real‑time while still allowing the language model to generate concise answers. The goal was a latency under 1 second and an accuracy uplift of at least 30 % over our baseline.

**Action** – I implemented a Retrieval-Augmented Generation (RAG) pipeline. First, I built a vector index with FAISS using sentence‑level embeddings from Sentence‑Transformers (“all-MiniLM-L6-v2”). For each user query, the system fetched the top 5 vectors and extracted their source text. Those snippets were then fed as context into an OpenAI GPT‑4 Turbo prompt that followed a “chain of thought” format to ensure coherent answers. I added a small cache layer with Redis to store recent queries and avoid re‑embedding the same documents.

**Result** – The new RAG system cut average latency from 2 s to 0.8 s, boosted answer relevance scores from 68 % to 93 %, and reduced support tickets by 22 %. I learned that careful vector indexing and prompt engineering can turn a bulky knowledge base into a lightning‑fast, accurate retrieval engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
