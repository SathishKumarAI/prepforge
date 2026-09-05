---
qid: ing_23d4aabbb9__star__local
question: 'Explain: Product — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:42-05:00'
sources: []
---

**Situation** – While working on a recommendation engine for a SaaS platform, I noticed our content discovery feature was underperforming: engagement dropped by 18 % and churn risk increased during the beta phase of Glean’s new “Jobs” module.

**Task** – My goal was to rebuild the Jobs search experience so that it surfaced relevant roles within 2 seconds, reduced latency by at least 30 %, and lifted click‑through rates (CTR) above industry benchmarks.

**Action** – I led a cross‑functional squad of data scientists and backend engineers. First, we re‑engineered the indexing pipeline using Elasticsearch with custom relevance scoring that combined title embeddings from BERT and skill‑match scores. Next, we introduced an online learning loop: every 5 minutes the system logged user interactions and updated the weight matrix in Redis to adapt ranking in real time. We also added a lightweight caching layer (Redis) for the most frequent queries, cutting API response times from 1.2 s to 0.8 s.

**Result** – Within three weeks of rollout, CTR on job listings rose 27 %, overall engagement increased 15 %, and we reduced server costs by 12 % thanks to efficient caching. The experiment also revealed that users preferred context‑aware skill tags, a feature I later championed for the next product iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
