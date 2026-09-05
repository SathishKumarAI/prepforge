---
qid: ing_33744f658d__star__local
question: 'Q: How would you evaluate a RAG system? — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 407
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:44-05:00'
sources: []
---

**Situation** – At my previous company we launched an internal FAQ chatbot that used a RAG pipeline built on LangChain with Pinecone for vector search and OpenAI’s GPT‑4o for generation. Within the first month, user satisfaction dropped from 92 % to 68 %, so I was tasked with diagnosing why the responses were off‑target.

**Task** – My goal was to design a systematic evaluation framework that quantified both retrieval quality and generation relevance, and then use it to pinpoint bottlenecks in the pipeline before re‑training or re‑indexing.

**Action** – First, I set up an automated test harness: 500 real user queries were crawled from the helpdesk logs. For each query I extracted the top‑k retrieved documents (k = 5) and had GPT‑4o generate answers. Using a custom rubric, three domain experts scored retrieval relevance (0–3) and answer coherence (0–3). I also computed cosine similarity between query embeddings and retrieved vectors to catch semantic drift. The results showed that 62 % of low scores were due to stale vectors; the embedding model had not been updated since the knowledge base grew by 30 %. I re‑indexed with SentenceTransformers‑all-MiniLM-L6-v2, re‑run the tests, and observed a 25 % lift in overall relevance, raising satisfaction back to 90 %.

**Result** – The evaluation pipeline now runs nightly, giving us a real‑time dashboard of retrieval accuracy (mean relevance score) and generation quality. It cut manual review time by 70 % and helped the product team prioritize indexing updates over expensive model tweaks. I learned that a rigorous, metric‑driven evaluation is essential for maintaining RAG performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
