---
qid: ing_6178beadee__star__local
question: 'Explain: Building Agentic RAG with Llamaindex - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 400
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:57-05:00'
sources: []
---

**Situation:**  
During my last semester at university I was part of a capstone team building an AI‑powered study companion for medical students. Our prototype had to fetch up‑to‑date research papers, summarize them, and answer exam‑style questions in real time. The initial model struggled with latency and relevance when pulling documents from PubMed.

**Task:**  
I needed to implement an agentic Retrieval-Augmented Generation (RAG) pipeline that could autonomously decide which sources to query, fetch the most relevant passages, and generate concise answers—all while staying within a 2‑second response window for our mobile app.

**Action:**  
I chose LlamaIndex as the vector store because of its flexible node types and built‑in agent framework. I indexed over 15,000 PubMed abstracts using OpenAI’s embeddings (text-embedding-3-large) and stored them in an HNSW index. Then, I wrote a custom `Agent` that first parsed user queries with GPT‑4o to identify key medical concepts, used those as search terms, and fetched the top 5 passages via LlamaIndex’s `QueryEngine`. The agent passed these passages back to GPT‑4o in a structured prompt for answer generation. To keep latency low, I batched embeddings at training time and cached recent queries.

**Result:**  
The new RAG system cut average response time from 3.8 s to 1.7 s and improved answer relevance scores by 22% (measured via a rubric of factual accuracy and depth). I learned how to balance index granularity with latency, the importance of prompt engineering for agent instructions, and that a well‑configured LlamaIndex pipeline can turn raw retrieval into a fast, reliable AI assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
