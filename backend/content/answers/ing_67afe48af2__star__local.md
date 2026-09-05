---
qid: ing_67afe48af2__star__local
question: 'Explain: Retrieval-Augmented Generation (RAG) — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 329
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:13-05:00'
sources: []
---

**Situation** – While leading the chatbot feature for our customer support platform, we noticed that our LLM‑powered answers were often generic and missed niche product details, causing a 15 % drop in user satisfaction scores.

**Task** – I needed to build an answer system that could pull up-to-date, domain‑specific facts while still generating fluent responses, all within the 2 s latency budget of our real‑time API.

**Action** – I implemented a Retrieval-Augmented Generation (RAG) pipeline:  
1. Indexed our internal knowledge base with Elasticsearch, using BM25 and dense vector embeddings from a Sentence‑Transformers model to surface top‑k relevant documents.  
2. Passed the retrieved snippets into a fine‑tuned GPT‑4 Turbo via prompt engineering that explicitly asked the LLM to “use the following facts.”  
3. Added a lightweight caching layer (Redis) for frequent queries and throttled retrieval calls to keep token usage under 200 per request.  
4. Deployed A/B tests, monitoring perplexity and ROUGE scores against baseline.

**Result** – The RAG‑enabled bot increased user satisfaction by 22 % and reduced average response time from 3.2 s to 1.8 s. I learned that combining sparse retrieval with dense embeddings gives the best balance of relevance and speed, and that careful prompt framing is essential for the LLM to effectively incorporate retrieved content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
