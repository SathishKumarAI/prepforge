---
qid: ing_0a004433b0__star__local
question: How do you make a RAG system produce trustworthy citations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 344
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:04-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an internal knowledge assistant for the legal department. The team required that every generated answer be backed by verifiable documents, and our initial RAG prototype kept pulling in outdated case summaries from a shared drive.

**Task** – I needed to redesign the retrieval pipeline so that citations were accurate, version‑controlled, and traceable back to the source document, all while keeping response latency under 2 seconds for live chat.

**Action** – First, I replaced the naive TF‑IDF index with a vector store built on FAISS, indexing embeddings from a fine‑tuned BERT model trained on legal text. To guarantee trustworthiness, I added a metadata layer that stored each document’s SHA‑256 hash and version timestamp. During generation, the LLM was prompted with a custom “Citation‑Template” that forced it to output citations in the format `[DocID:hash]`. Afterward, an automated post‑processing step validated that every cited hash matched an entry in our index; mismatches triggered a re‑retrieval or a fallback to a human‑reviewed answer.

**Result** – The updated system cut citation errors from 12 % to <1 %, reduced average response time from 3.5 s to 1.8 s, and the legal team reported a 30 % drop in follow‑up queries about source validity. I learned that coupling semantic retrieval with deterministic metadata verification is key to trustworthy RAG outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
