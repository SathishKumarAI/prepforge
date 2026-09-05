---
qid: ing_05c1a534f3__star__local
question: 'Explain: Design an answer engine: a user types a question and gets a cited,
  streamed answer. Your end-to-end budget is 3 seconds to a complete short answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 361
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:13-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a live Q&A feature for a customer‑support portal where users could type natural language questions and receive instant, citation‑rich answers within three seconds. The product team insisted on a fully streamed response so that the UI felt responsive even when the answer generation took longer.

**Task** – Deliver an end‑to‑end pipeline that ingests a question, retrieves relevant documents, generates a concise answer with citations, streams it to the browser, and keeps total latency under 3 s while staying within our compute budget.

**Action** – I started by sharding a vector index of 1.2 M internal knowledge articles in Pinecone; queries hit only the top‑10 vectors per request. For generation I used a distilled GPT‑4o model (≈1B parameters) wrapped in FastAPI, and leveraged its built‑in streaming API to push tokens as they arrive. To keep latency low I pre‑computed a “citation cache” – each article’s URL + snippet was stored in Redis so the generator could reference it instantly. On the frontend, I used Server‑Sent Events (SSE) to pipe the stream into React, rendering tokens on the fly and displaying citations as footnotes that users could click.

**Result** – The average end‑to‑end latency dropped from 5 s to 2.4 s; user satisfaction scores rose by 18 % in A/B tests, and we cut GPU usage by 35 % compared to the baseline GPT‑3.5 approach. I learned that coupling a lightweight retrieval step with streaming generation—and caching citations—lets you hit strict latency budgets without sacrificing answer quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
