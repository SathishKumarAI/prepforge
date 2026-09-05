---
qid: ing_3626f7beb0__star__local
question: 'Explain: Naive RAG (Retrieve-then-Generate) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 331
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:33-05:00'
sources: []
---

**Situation** – I was tasked with building a quick prototype for a customer‑support chatbot at a fintech startup that needed to pull up-to-date policy documents and FAQs without training a huge language model from scratch.

**Task** – Deliver a system that could fetch the most relevant policy snippet, then generate a concise, natural‑language response in under 3 seconds, while keeping costs low.

**Action** – I implemented a naive Retrieve‑then‑Generate (RAG) pipeline. First, I indexed the PDF and markdown policy files using ElasticSearch with BM25 scoring to surface top‑k passages based on the user query. Then I passed the concatenated passage plus prompt into GPT‑3.5 Turbo via OpenAI’s API, letting the model “write” an answer conditioned on the retrieved text. I added a simple post‑processing step: strip any policy IDs that might reveal internal references and truncate to 150 words. The trade‑off was minimal latency versus no fine‑tuning overhead; we avoided expensive vector embeddings or custom training.

**Result** – The prototype handled 200 queries per minute with an average response time of 2.8 seconds and a 92 % user satisfaction score in the beta test. I learned that a straightforward RAG approach can deliver near‑real‑time, cost‑effective answers when you pair efficient retrieval (BM25) with a powerful but general‑purpose language model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
