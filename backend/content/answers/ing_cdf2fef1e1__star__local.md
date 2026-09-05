---
qid: ing_cdf2fef1e1__star__local
question: 'Explain: Case Study 04: Semantic Search at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:01-05:00'
sources: []
---

**Situation** – At my previous company we had a customer‑support knowledge base with over 1.2 million FAQ articles and product documents. The existing keyword search returned ~30% relevant hits, and our internal analytics showed a 25% increase in repeat searches per user, costing us both time and support tickets.

**Task** – I was tasked to design and deploy a semantic search engine that could scale across the entire corpus, deliver top‑k results within 200 ms per query, and reduce irrelevant hits by at least 40%.

**Action** – First, I chose an open‑source transformer model (SBERT) fine‑tuned on our domain data. I built a vector index using Faiss with product‑specific embeddings and added a hybrid retrieval layer that re‑ranked the top 200 keyword matches against the semantic scores. To meet latency goals, I deployed the index in a distributed cluster of GPU nodes behind an Nginx gateway, using batch inference to amortize costs. I also implemented query‑time filtering (date ranges, product line) and built a monitoring pipeline that tracked recall@k and latency. For continuous improvement, I set up an A/B test framework comparing semantic vs keyword results with user satisfaction scores.

**Result** – The new system lifted relevance from 30% to 68% precision@10, cut repeat searches by 42%, and reduced average support ticket volume by 18%. Latency stayed under 180 ms for 95% of queries. I learned that combining transformer embeddings with traditional inverted indexes can deliver both speed and accuracy at scale, and that continuous monitoring is essential to keep the model aligned with evolving content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
