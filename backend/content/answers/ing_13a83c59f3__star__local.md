---
qid: ing_13a83c59f3__star__local
question: 'Explain: Unified, High-Relevance Search — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:40-05:00'
sources: []
---

**Situation** – At my previous company we launched a new knowledge‑base product, but users were frustrated: the internal search returned too many irrelevant documents and missed key insights. Our engineering team was under pressure to meet a Q3 launch deadline while keeping infrastructure costs low.

**Task** – I was tasked with redesigning the search engine so that it could deliver unified, high‑relevance results across all content types (docs, code snippets, policy PDFs) within 200 ms per query and reduce the server load by at least 30%.

**Action** – First, I mapped our data into a single vector space using a transformer encoder fine‑tuned on domain jargon. Next, I implemented approximate nearest‑neighbor indexing with FAISS, adding a relevance re-ranking layer that blended cosine similarity with metadata signals (author recency, document size). To keep latency low, I deployed the MCP server as a microservice behind an Nginx reverse proxy and used gRPC for inter‑service calls. I also introduced caching of top‑k results per user session to cut redundant computations.

**Result** – After A/B testing, search relevance (measured by MAP) improved from 0.42 to 0.68, while average latency dropped from 350 ms to 180 ms and CPU usage fell by 35%. The project was delivered on schedule, and I learned that coupling semantic embeddings with lightweight metadata scoring can dramatically lift user satisfaction without bloating infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
