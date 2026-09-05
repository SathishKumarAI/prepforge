---
qid: ing_3dbf6afd2a__star__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 299
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:45-05:00'
sources: []
---

**Situation:** In a recent project for a mid‑size e‑commerce client, the support team had about 12 k tickets from the past year that were being fed into an open‑source LLM. They insisted on fine‑tuning the model to get a “brand‑specific” voice, but our internal audit flagged potential data privacy risks and cost spikes.

**Task:** My goal was to convince the client that a Retrieval Augmented Generation (RAG) approach using their knowledge base would meet their performance needs while mitigating risk and keeping costs under $5k/month.

**Action:** I first mapped the ticket taxonomy against the existing KB, then built a vector index with FAISS on embeddings from OpenAI’s `text-embedding-3-small`. I set up a lightweight Flask API to serve queries, adding a privacy filter that stripped any PII before indexing. I demonstrated latency (under 300 ms) and accuracy by running a live Q&A session during the meeting, showing recall‑precision curves and cost per query versus fine‑tuning.

**Result:** The client approved RAG; we launched with a $2k/month budget and achieved a 92% user satisfaction score in the first month. I learned that transparent trade‑offs (privacy, cost, speed) can outweigh “own model” rhetoric when backed by concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
