---
qid: ing_382c1adf6b__star__local
question: 'Q: When would you use LLM-based reranking?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 309
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:38-05:00'
sources: []
---

**Situation:** While building a question‑answering system for an e‑commerce site, we noticed that our BM25 retrieval returned many irrelevant product pages for user queries like “best waterproof running shoes.” The precision at top‑10 was only 35 %, hurting conversion.

**Task:** I needed to improve the relevance of the final ranked list without adding a costly second search pass or rewriting the entire pipeline.

**Action:** I integrated an LLM‑based reranker. First, I extracted the top 20 BM25 hits and passed each (query + page snippet) through GPT‑4 via OpenAI’s API, scoring them on relevance. Then I combined the LLM score with the original BM25 rank using a weighted linear interpolation (α = 0.6). To keep latency low, I cached embeddings for frequent queries and used batch calls. I also tuned the prompt to focus on product‑specific features like material and use case.

**Result:** Precision@10 jumped from 35 % to 78 %, and click‑through rate increased by 22 %. The system stayed within our SLA of <300 ms per request, proving LLM reranking is a practical boost when retrieval precision is the bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
