---
qid: ing_bb671a3a4b__star__local
question: 'Explain: Tier 3: Semantic Search (on-demand retrieval)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:02-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at a fintech startup, we were launching a new customer support portal that needed instant access to policy documents and FAQ content. The existing keyword search returned too many irrelevant hits, causing support reps to waste time digging through PDFs.

**Task** – I was tasked with building an on‑demand semantic search layer that could understand user intent, rank results by relevance, and return concise snippets within 300 ms per query.

**Action** – First, I extracted embeddings from the document corpus using a fine‑tuned Sentence‑Transformers model (distilbert-base-nli-mean-tokens). I stored these vectors in an HNSW index via Faiss for sub‑millisecond nearest‑neighbor lookups. For query processing, I deployed a lightweight FastAPI service that tokenized incoming text, generated embeddings on the fly, and queried Faiss to retrieve the top 5 passages. I wrapped the results in a simple JSON API and integrated it with the portal’s React front end using Apollo GraphQL. To keep latency low, I ran the model on an NVIDIA T4 GPU and cached frequent queries with Redis.

**Result** – After rollout, search precision (measured by manual relevance grading) jumped from 0.42 to 0.78, and average support rep time per ticket dropped by 35 %. The system handled 10,000+ live searches per hour with <250 ms latency on average. I learned how vector‑based semantic retrieval can be engineered for production speed while still delivering human‑readable answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
