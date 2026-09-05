---
qid: ing_ec1b740f40__eli5__local
question: 'Explain: Metrics — Pydantic Logfire: AI Observability for LLMs, Apps &
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 223
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:25-05:00'
sources: []
---

Think of an AI system as a smart city where each building (your model, app, or retrieval‑augmented generation component) needs its own traffic lights and speed cameras.  
**Pydantic Logfire** is the city’s monitoring office: it watches every “vehicle” (API call, inference step, RAG query), records how fast it moves (latency), how many people use it (request count), and whether any accidents happen (errors).  

The **metrics** are the traffic reports you can read at a glance—like a dashboard showing average speed, peak congestion times, or error rates. Pydantic Logfire collects these numbers automatically, stores them in a time‑series database, and lets you query or plot them later.  

So, instead of guessing whether your LLM is running smoothly, you get clear, real‑time numbers that tell you exactly where the traffic jams are and how to fix them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
