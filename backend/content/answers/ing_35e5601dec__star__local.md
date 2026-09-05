---
qid: ing_35e5601dec__star__local
question: 'Explain: Vector Databases: from Embeddings to Applications - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 380
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:56-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a semantic search feature for our enterprise knowledge base that had 250 k documents in PDF and HTML format. The existing keyword‑search returned too many irrelevant hits, hurting user productivity.

**Task** – I needed to implement an end‑to‑end pipeline that turns documents into dense embeddings, stores them efficiently, and serves low‑latency similarity queries for a web UI, all while staying under our $0.20 per query budget.

**Action** – First, I parsed the corpus with spaCy and chunked each doc into 500‑token segments. Using OpenAI’s text‑embedding‑ada‑002 I generated 1536‑dim vectors. For storage I chose Pinecone because of its managed index and automatic scaling; I built a composite index that shards by domain to reduce cross‑domain noise. On the application side, I wrapped the query API in a Flask microservice that accepts user prompts, generates an embedding on‑the‑fly, performs top‑k similarity search (k=10), and returns ranked snippets with confidence scores. To keep costs low I cached frequent queries and used batching for embeddings.

**Result** – The semantic search cut average time per query from 4 s to <300 ms and increased relevance (measured by user‑rated precision@3) from 0.42 to 0.78, a 86 % lift. I learned how vector DB design choices—indexing strategy, sharding, caching—directly impact latency, cost, and UX in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
