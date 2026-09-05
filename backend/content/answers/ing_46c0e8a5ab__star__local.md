---
qid: ing_46c0e8a5ab__star__local
question: 'Explain: What Worked Well — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 364
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:10-05:00'
sources: []
---

**Situation:**  
At my previous company we had a legacy knowledge base of over 1.2 million internal documents, but our customer‑support chatbot was only answering 45% of queries accurately. The engineering team needed to lift that accuracy without rewriting the entire search stack.

**Task:**  
I was tasked with designing an Enterprise Retrieval Augmented Generation (RAG) pipeline that could ingest the existing docs, retrieve relevant snippets on demand, and generate concise, policy‑compliant answers in real time—targeting a 70% improvement in answer quality within three months.

**Action:**  
First, I built a vector index using FAISS over embeddings from OpenAI’s `text-embedding-ada-002`, adding custom tokenization to preserve legal terminology. Next, I wrapped the index in a lightweight REST service with FastAPI and integrated it into our existing chatbot via LangChain. For generation, I fine‑tuned GPT‑4 on a curated set of 10,000 Q&A pairs, enforcing strict source citation by passing retrieved snippets as prompt context. To keep latency under 800 ms, I deployed the model behind an NVIDIA A100 GPU cluster and added query caching for frequent terms.

**Result:**  
Within two months, the chatbot’s accuracy jumped to 72%, reducing support tickets by 35% and cutting average resolution time from 12 min to 6 min. The success also proved that a modular RAG architecture could scale with new document types without costly re‑engineering. I learned how balancing retrieval precision and generation fluency is key to enterprise AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
