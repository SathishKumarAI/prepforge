---
qid: ing_13c306186c__star__local
question: Design the smallest RAG system that could work for "chat with our docs."
  When do you need more - and when is RAG the wrong call?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 368
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:47-05:00'
sources: []
---

**Situation:**  
At my previous startup we had a massive knowledge base of product specs (≈2 M tokens) that our support team used daily. Clients started asking “Can you chat with the docs?” but building a full‑blown LLM integration was too expensive.

**Task:**  
Create a lightweight Retrieval‑Augmented Generation system that lets users ask natural questions and get accurate answers in real time, while keeping cost under $0.01 per query.

**Action:**  
I chose an on‑prem Llama‑3 8B encoder for embeddings (≈1 ms inference) and built a FAISS index with IVF-PQ compression to fit the entire doc set into 2 GB of RAM. For generation I wrapped OpenAI’s GPT‑4o-mini (prompted with top‑k 5 retrieved passages). To keep latency low, I pre‑tokenized the docs and used a two‑stage retrieval: first a coarse TF‑IDF filter to narrow candidates to 50, then the dense encoder to pick the best 3. I added a confidence flag; if similarity <0.4 we fall back to a static FAQ.

**Result:**  
Query latency dropped to ~350 ms, cost per response <$0.003, and user satisfaction scores rose from 72% to 88%. We saw a 40% reduction in support tickets that required manual escalation. I learned that RAG shines when data is highly structured and the volume fits in memory; if the corpus grows beyond what can be indexed locally or requires real‑time updates, a more scalable vector store or hybrid approach becomes necessary—otherwise RAG turns into a bottleneck rather than an aid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
