---
qid: ing_92d8df3d98__star__local
question: 'Explain: 🔎 RAG & Retrieval — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:42-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, our customer support bot was failing to answer queries about regulatory compliance. The FAQ database had 3,500 static documents, but users were still getting generic or wrong answers, hurting satisfaction scores (down from 92% to 78%).

**Task:**  
I needed to build an intelligent retrieval‑augmented generation (RAG) pipeline that could fetch the most relevant policy text and generate concise, accurate responses in real time, while keeping latency under 800 ms.

**Action:**  
First, I vectorized all documents with a fine‑tuned SBERT model, storing embeddings in Pinecone for sub‑millisecond similarity search. For every user query, I fetched the top‑3 passages via cosine similarity and passed them, along with the prompt “Explain this regulation to me,” into an OpenAI GPT‑4 Turbo instance. To avoid hallucinations, I added a post‑generation verification step that checked the response against the retrieved snippets using a lightweight rule engine. I also implemented batching of queries during peak hours to keep API costs low.

**Result:**  
Within two weeks, answer accuracy rose from 78% to 94%, and user satisfaction climbed back to 91%. Response latency stayed below 750 ms, and we cut our OpenAI usage by 35% through efficient retrieval. I learned that combining dense retrieval with a lightweight verification layer is key to building trustworthy RAG systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
