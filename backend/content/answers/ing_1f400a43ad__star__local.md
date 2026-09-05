---
qid: ing_1f400a43ad__star__local
question: 'Explain: RAG Architecture Questions — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 357
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:47-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a customer‑support chatbot that needed to pull up-to-date policy documents from a constantly growing internal knowledge base. The existing FAQ bot was static and had a 40 % hit‑rate on user queries, so we decided to move to Retrieval‑Augmented Generation (RAG).

**Task:**  
I had to design the RAG pipeline: index the documents, retrieve relevant passages for each query, feed them into an LLM, and ensure latency stayed below 1.5 seconds while keeping cost per request under $0.05.

**Action:**  
I chose Elasticsearch with BM25 for fast vector‑based retrieval, then stored embeddings in Pinecone to support semantic search. For the generator I used OpenAI’s GPT‑3.5 Turbo with a prompt that wrapped the retrieved snippets and asked the model to answer concisely. To keep costs low, I capped context length at 4 k tokens and implemented a caching layer for repeated queries. I also added a post‑generation sanity check that flagged any answer longer than 200 words for manual review.

**Result:**  
After deployment, user satisfaction scores rose from 72 % to 88 %, the hit‑rate climbed to 73 %, and average latency dropped to 1.2 seconds. The cost per request stayed at $0.03. I learned that balancing retrieval quality with model prompt length is key to a practical RAG system, and that lightweight caching can dramatically reduce both latency and expense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
