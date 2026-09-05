---
qid: ing_8273469f6d__star__local
question: Ready to power your search with AI? — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 346
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:19-05:00'
sources: []
---

**Situation**  
When my team launched a new e‑commerce catalog, our product search was built on vanilla Elasticsearch. By Q2 the click‑through rate dropped to 3.1 % and we were receiving complaints that synonyms and brand variations weren’t being matched correctly.

**Task**  
I had to redesign the search layer so it could understand intent, disambiguate misspellings, and surface relevant results in under 200 ms while keeping the existing infrastructure cost‑effective.

**Action**  
First, I introduced a lightweight OpenAI embeddings model (Ada) that converted each product title and description into dense vectors. These vectors were indexed in an auxiliary vector store using Pinecone, which integrates natively with our existing Elasticsearch cluster via a custom plugin. Next, I replaced the legacy “must” queries with hybrid search: we perform a semantic similarity lookup against the vector index, then filter by price range and stock status in Elasticsearch. To keep latency low, I cached popular query embeddings on Redis and tuned the ES shards to 3 replicas for high availability.

**Result**  
Within three weeks of rollout, click‑through rate climbed to 6.8 % (a 120 % lift), and average search latency dropped from 350 ms to 180 ms. The hybrid approach also cut index size by 25 % because we only stored vectors for the most frequently accessed products. I learned that blending semantic AI with traditional keyword engines can dramatically improve relevance without replacing Elasticsearch as the primary data store, preserving its strengths in analytics and filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
