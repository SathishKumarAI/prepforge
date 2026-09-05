---
qid: ing_f08297b90e__star__local
question: 'Explain: Embeddings and RAG libraries — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 386
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:02-05:00'
sources: []
---

**Situation** – At my last role, our product team wanted to add a chatbot that could answer user queries with up‑to‑date knowledge from our internal knowledge base and external APIs. The existing FAQ bot was static and users complained about stale answers.

**Task** – I had to build an end‑to‑end Retrieval Augmented Generation (RAG) pipeline that would embed documents, index them for fast similarity search, and feed the retrieved snippets into a large language model so it could generate concise, context‑aware responses within 2 seconds per request.

**Action** – I chose the open‑source stack: *FAISS* for vector indexing, *sentence‑transformers* to create embeddings from our documents, and *LangChain* as the orchestration framework. First, I preprocessed ~30k internal docs, generated 768‑dimensional embeddings with a fine‑tuned `all-MiniLM-L6-v2`, and stored them in a FAISS index. In LangChain I defined a retriever that queried the index with cosine similarity, then passed top‑5 passages to an OpenAI GPT‑3.5 model wrapped in a prompt template. I added caching via Redis and tuned batch sizes to keep latency under 1.8 s.

**Result** – The new chatbot reduced user support tickets by 38% and improved average satisfaction scores from 4.2 to 4.7/5. It also cut backend compute costs by 15% thanks to the efficient retrieval step. I learned how embedding quality directly impacts RAG accuracy, and that choosing the right open‑source components can deliver production‑ready AI at a fraction of the cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
