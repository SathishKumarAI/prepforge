---
qid: ing_f62d9fa2aa__star__local
question: 'Explain: RAG, Agents and Context Engineering — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:56-05:00'
sources: []
---

**Situation** – While leading a product‑team at a fintech startup, we were tasked with launching a conversational AI that could draft compliance reports on demand. Our internal language model produced generic responses and often missed key regulatory clauses.

**Task** – I needed to build an agent that could fetch up‑to‑date legal documents (RAG), use them as context for generation, and dynamically adjust the prompt based on user intent (context engineering).

**Action** – First, I integrated a vector store (FAISS) with our knowledge base of 2,000 regulatory PDFs. The RAG pipeline retrieves the top‑3 relevant passages per query and feeds them into a fine‑tuned GPT‑4 model. Next, I built an “intent‑aware agent” using LangChain’s AgentExecutor: it parses user input, decides whether to retrieve new data or generate from scratch, and orchestrates calls to the RAG component. For context engineering, I crafted dynamic prompt templates that insert retrieved clauses in a structured format, ensuring the model stays grounded. I also set up an evaluation loop with BLEU scores and human review.

**Result** – The system cut report drafting time by 70% (from 45 min to 13 min) and improved compliance accuracy from 82% to 97%. I learned that combining retrieval, agent orchestration, and precise prompt scaffolding turns a generic LLM into a domain‑specific, trustworthy assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
