---
qid: ing_0da89633a7__star__local
question: 'Q: What is "Agentic RAG" and how does it differ from "Advanced RAG"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 386
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:50-05:00'
sources: []
---

**Situation** – At my previous company we had a chatbot that answered customer support tickets in real time. The baseline Retrieval‑Augmented Generation (RAG) model fetched the top 5 documents from our knowledge base and fed them to GPT‑4, but users complained it was too slow and sometimes returned irrelevant info.

**Task** – I was tasked with reducing latency by 40 % while keeping or improving answer relevance for high‑volume queries. The goal was to move from a static “Advanced RAG” pipeline (pre‑ranked retrieval + single pass generation) to an “Agentic RAG” architecture that could reason about which documents to fetch next.

**Action** – I re‑engineered the system into an agent framework:  
1. **Perception** – The prompt first asks GPT‑4 what evidence it needs.  
2. **Retrieval** – A lightweight vector search (FAISS) returns one document at a time.  
3. **Decision** – GPT‑4 evaluates if the doc suffices; if not, it requests another chunk.  
4. **Execution** – Once satisfied, it generates the final answer. I also added a confidence threshold and fallback to a cached summary.

This iterative loop cut the average response time from 2.8 s to 1.6 s (≈43 % faster) and increased user satisfaction scores by 12 points on our internal survey.

**Result** – The agentic RAG reduced latency, improved precision (BLEU‑score up by 0.08), and taught me that letting the model act as its own retrieval planner can outperform a static advanced pipeline when resources are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
