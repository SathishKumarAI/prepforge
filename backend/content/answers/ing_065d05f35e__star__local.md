---
qid: ing_065d05f35e__star__local
question: What is contextual retrieval? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 305
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:34-05:00'
sources: []
---

**Situation:** While leading the search‑engine upgrade at a media company, our click‑through rate on article recommendations dropped from 12% to 7% after we migrated to a new index engine. The team suspected that the context of user queries was being lost.

**Task:** I needed to design and implement a contextual retrieval system that could surface articles relevant not just to the query text but also to the surrounding content, session history, and user profile, restoring engagement above 10%.

**Action:** First, I built a lightweight semantic layer using spaCy to extract entities and topics from each article. Next, I stored these embeddings in ElasticSearch’s dense vector fields. For contextual retrieval, I combined query vectors with recent page vectors (last five articles visited) weighted by recency, then used cosine similarity for ranking. I also added a reinforcement‑learning loop that adjusted weights based on click feedback. Throughout, I benchmarked latency to keep it under 200 ms per request.

**Result:** The new system lifted the click‑through rate from 7% to 11.8% within two weeks of rollout, and session length increased by 15%. It also reduced server load by 12% thanks to vector caching. I learned that blending semantic similarity with real‑time context can dramatically improve relevance without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
