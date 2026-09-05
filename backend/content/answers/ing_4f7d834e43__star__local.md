---
qid: ing_4f7d834e43__star__local
question: 'Explain: The enterprise-search domain depth — Glean Interview Guide (2026):
  Process, Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 344
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:22-05:00'
sources: []
---

**Situation**  
In my last role at a SaaS firm, we were rolling out an internal knowledge‑base search for over 30,000 documents and 10,000 users. The existing keyword‑only engine returned irrelevant hits; our support tickets rose by 18% because people couldn’t find policy docs quickly.

**Task**  
I was tasked with designing a deeper semantic search layer that could understand intent, handle synonyms, and rank results by context relevance—all while keeping response latency under 300 ms for live users.

**Action**  
First, I built an index using Elasticsearch’s dense vector fields to store BERT embeddings of each document. I fine‑tuned a domain‑specific RoBERTa model on our internal FAQ corpus, then deployed it as a microservice that generated query vectors in real time. Next, I implemented hybrid scoring: BM25 for lexical overlap plus cosine similarity with the vector score, weighted 0.6–0.4 after A/B testing. To preserve latency, I added a cache layer (Redis) for the top‑10 most frequent queries and used async request handling in FastAPI. Finally, I set up Kibana dashboards to monitor hit relevance metrics.

**Result**  
Within two months, click‑through rate on search results jumped 35%, while time‑to‑answer fell from 4.2 min to 1.7 min. User satisfaction scores improved by 22%. I learned that combining dense embeddings with classic IR techniques gives the best trade‑off between relevance and speed in enterprise search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
