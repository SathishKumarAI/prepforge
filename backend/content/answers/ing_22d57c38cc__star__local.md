---
qid: ing_22d57c38cc__star__local
question: What is RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 388
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:54-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup last year, our chat‑bot platform was struggling to answer niche compliance questions. Every time a user asked about a new regulation, the bot either gave a generic response or failed to find the latest policy text, hurting customer satisfaction and risking non‑compliance.

**Task:**  
I was tasked with boosting the bot’s accuracy on regulatory queries by 30 % within two months while keeping latency under 500 ms per request. The goal was to enable real‑time, up‑to‑date answers without having to retrain a massive language model from scratch.

**Action:**  
I introduced Retrieval-Augmented Generation (RAG). First, I built an ElasticSearch index of all regulatory documents and their metadata, using TF‑IDF vectors for fast similarity search. For each user query, the system fetched the top 5 relevant passages, passed them as context to a fine‑tuned GPT‑4 model via the OpenAI API, and let the model generate a concise answer anchored in those snippets. I added a lightweight caching layer with Redis to store recent queries and their retrieved contexts, cutting repeated search time. Finally, I set up an automated evaluation pipeline that compared generated answers against a curated QA dataset, flagging any drift.

**Result:**  
Within six weeks, the bot’s compliance‑query accuracy jumped from 58 % to 92 %, surpassing our target by 20 %. Latency stayed below 400 ms on average. The RAG approach also reduced our infrastructure costs because we avoided training a new large model; instead, we leveraged existing documents and a lightweight generative head. I learned that coupling retrieval with generation is the most pragmatic way to keep AI services both up‑to‑date and cost‑effective in regulated industries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
