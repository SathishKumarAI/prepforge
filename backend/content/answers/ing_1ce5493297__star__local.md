---
qid: ing_1ce5493297__star__local
question: 'Explain: 🔎 RAG & Retrieval — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 328
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:15-05:00'
sources: []
---

**Situation** – In a client‑facing chatbot project, our team noticed that the answer quality dropped sharply when users asked domain‑specific questions. The model was generating generic responses because it had no access to up‑to‑date internal knowledge bases.

**Task** – I needed to build an end‑to‑end Retrieval-Augmented Generation (RAG) pipeline that could fetch relevant documents from a proprietary FAQ corpus and inject them into the generation step, all while keeping latency under 800 ms for live chat.

**Action** – First, I indexed the 12 k FAQ entries with ElasticSearch, using BM25 scoring and embedding‑based hybrid retrieval (OpenAI’s text‑embedding‑ada‑002). I then wrapped the LangChain RAG wrapper around a fine‑tuned GPT‑4o model, passing top‑3 retrieved passages as context. To stay within latency limits, I pre‑cached embeddings in Redis and employed token‑pruning on the context before feeding it to the LLM. Continuous A/B testing with 1,000 live sessions guided hyperparameter tuning of retrieval thresholds.

**Result** – The bot’s accuracy on domain‑specific queries rose from 58 % to 92 %, user satisfaction scores jumped by 18 points, and average response time stayed at 720 ms. I learned that blending sparse TF‑IDF with dense embeddings yields the best trade‑off between relevance and speed in production RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
