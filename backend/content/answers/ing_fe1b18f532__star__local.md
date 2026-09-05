---
qid: ing_fe1b18f532__star__local
question: 'Explain: Context engine (repo awareness) — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 296
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:00-05:00'
sources: []
---

**Situation:**  
At my previous startup, we launched an AI code assistant that promised “write code in your repository’s style.” But early users complained the suggestions were generic and ignored our project‑specific conventions—leading to a 35 % drop in adoption after the first sprint.

**Task:**  
I was tasked with building a context engine that could ingest the entire repo, learn coding patterns, and deliver truly contextual suggestions while keeping inference latency under 500 ms per request.

**Action:**  
First, I crawled the codebase using GitPython to build a hierarchical AST representation. Then I fine‑tuned a lightweight transformer (DistilBERT) on this AST, adding a positional embedding for file paths and commit metadata. To keep latency low, I deployed the model with ONNX Runtime and used token caching across user sessions. Finally, I integrated an in‑memory vector store (FAISS) to retrieve relevant code snippets by semantic similarity, feeding them back into the assistant’s prompt.

**Result:**  
Within three weeks of rollout, user satisfaction rose from 58 % to 92 %, and the average time spent on boilerplate coding dropped 27 %. I learned that combining repo‑aware embeddings with fast inference engines is key to making AI assistants feel like a real teammate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
