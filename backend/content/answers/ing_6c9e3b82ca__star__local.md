---
qid: ing_6c9e3b82ca__star__local
question: 'Explain: Design retrieval for a multi-tenant SaaS product where users have
  different document permissions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 292
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:16-05:00'
sources: []
---

**Situation** – I was tasked with adding a search feature to our cloud‑based knowledge base that serves thousands of customers, each with their own set of documents and granular read/write permissions.

**Task** – Build a retrieval system that returns only the documents a user is allowed to see, while keeping query latency under 200 ms even when the index contains millions of entries across tenants.

**Action** – I chose Elasticsearch for its distributed inverted index and added two custom fields: `tenant_id` and `access_group`. During ingestion, each document’s metadata includes these tags. For every search request I wrapped the user’s query in a boolean filter that matches both the tenant and the user's access groups (derived from OAuth scopes). To avoid cross‑tenant leaks I also configured a per‑index “tenant” alias with a security plugin that enforces field‑level permissions at query time. I benchmarked the pipeline, tuned shard allocation, and added a cache layer for popular queries.

**Result** – The search latency dropped to 150 ms on average, and audit logs showed zero cross‑tenant data exposure. We saw a 30% increase in user satisfaction scores for knowledge base usage, and the architecture now scales horizontally as we onboard more tenants. This exercise taught me how to blend index design with fine‑grained security controls in a multi‑tenant environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
