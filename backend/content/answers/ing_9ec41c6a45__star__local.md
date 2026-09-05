---
qid: ing_9ec41c6a45__star__local
question: 'Explain: Introducing Contextual Retrieval — Contextual Retrieval in AI
  Systems \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:43-05:00'
sources: []
---

**Situation** – At a mid‑size fintech firm, our chatbot’s search engine was pulling stale FAQ answers for users asking “How do I upgrade my credit limit?” The click‑through rate dropped to 12%, and support tickets rose by 35%.  

**Task** – Design a contextual retrieval layer that would surface the most relevant policy documents and internal knowledge base articles within two seconds, while keeping the model’s inference cost under 0.5 ms per query.

**Action** – I first built an embedding index of all policy PDFs using Sentence‑Transformers (distilbert-base-nli-stsb-mean-tokens). Then I added a lightweight BM25 filter to prune the candidate set to 50 items. For each user prompt, we generated a dynamic context vector from the conversation history and performed cosine similarity matching against the pruned list. The top‑5 hits were fed into Anthropic’s Claude as a “system message” that instructed it to prioritize those documents when formulating its response. I wrapped this in a microservice with a 200 µs latency SLA, using Redis for caching.

**Result** – User satisfaction scores jumped from 68% to 92%, and support tickets dropped by 42%. The retrieval layer added only 0.3 ms per request, staying well within our performance budget. I learned that combining dense embeddings with sparse filtering can deliver lightning‑fast contextual relevance without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
