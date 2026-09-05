---
qid: ing_6a715d9dc1__star__local
question: 'Explain: The AI Agent Tech Stack Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 371
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:20-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a conversational AI for the customer support portal that could handle ticket triage and auto‑populate knowledge base articles. The existing system was rule‑based, slow, and couldn’t scale past 500 concurrent users.

**Task** – My goal was to design an end‑to‑end tech stack that would let us deploy a self‑learning agent in under three months while keeping latency below 200 ms per user interaction.

**Action** – I started with **LangChain** as the orchestration layer, wiring together embeddings from **OpenAI’s GPT‑4o** and retrieval from an **FAISS vector store**. For real‑time inference, I wrapped the model in a lightweight **FastAPI** service behind an NGINX reverse proxy. To manage state and conversation flow, I used **Redis Streams** for event sourcing and a simple **SQLite** table for long‑term logs. Continuous learning was handled by a nightly job that re‑embeds new support tickets into FAISS and updates the vector index. Finally, I added an A/B testing harness using **Optuna** to tune temperature and max tokens on the fly.

**Result** – The new agent cut average ticket resolution time from 18 minutes to 6 minutes (a 66% reduction) and increased first‑contact resolution by 12%. Latency stayed under 180 ms, and the system comfortably handled 2,000 concurrent users. I learned that a modular stack—LangChain + OpenAI + FAISS + Redis—lets you iterate quickly while keeping production concerns like latency and observability in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
