---
qid: ing_32b1fdf068__star__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 344
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:52-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we launched a chatbot that answered compliance questions using RAG. After deployment the average end‑to‑end latency was 1.8 s and our monthly spend on the LLM API hit $3,000, exceeding the budget.

**Task** – I had to cut the response time below 1 s and bring the cost down by at least 30 % while keeping answer quality above 90 % precision.

**Action** – First I profiled the pipeline: embedding generation (300 ms), vector store query (200 ms), prompt assembly (50 ms), and LLM inference (800 ms). I swapped OpenAI’s base model for a cheaper, smaller one for embeddings and cached frequent queries. Then I switched from Pinecone to an in‑memory Faiss index on a GPU instance, reducing search time by 60 %. For the generation step I introduced a retrieval‑only pass with a distilled T5 model that produced concise answers, cutting inference cost per token by 40 %. Finally, I added a pre‑fetcher that warmed embeddings for likely user intents.

**Result** – Latency dropped to 0.9 s and monthly API spend fell to $1,800 (a 40 % cut). The answer quality stayed at 92 % precision on our internal audit set. I learned that profiling each component first lets you target the biggest cost‑latency levers without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
