---
qid: ing_10a95a02ba__faang__local
question: 'Explain: Design a connector framework that syncs content and permissions
  from 100+ SaaS apps into one index.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 499
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:14-05:00'
sources: []
---

**Clarify**  
We need a single searchable index that aggregates *content* (documents, messages, etc.) **and** their *access‑control lists* from over 100 SaaS products. The connector must pull data incrementally, respect each app’s auth model, and expose a unified query API. Key assumptions: all apps provide an API (REST/GraphQL), rate limits are known, and we can store metadata in a relational or document DB.

**Approach**  
1. **Connector Registry** – one class per SaaS with `authenticate()`, `listChanges(since)`, `fetchObject(id)`.  
2. **Orchestrator** – schedules pulls (cron/worker queue), tracks last‑synced timestamps per app.  
3. **Indexing Layer** – a unified schema: `id, source_app, content, permissions, updated_at`. Permissions stored as a set of principals.  
4. **Sync Engine** – incremental fetch → transform → upsert into index; delete handling via tombstones.  
5. **Security Layer** – validate token scopes, encrypt credentials in transit and at rest.

**Depth**  
- Use async workers (e.g., Celery) to parallelize pulls; rate‑limit per app using leaky bucket.  
- Store incremental checkpoints in a key‑value store (Redis).  
- Indexing with Elasticsearch or OpenSearch for full‑text search + ACL filtering via field‑level security.  
- Complexity: O(N) per sync cycle where N = number of changed objects; memory bounded by batch size.

**Edge Cases**  
- API failures → exponential backoff, alerting.  
- Permission drift (e.g., user revoked) → re‑index on next pull or via webhook.  
- Duplicate IDs across apps – prefix with app name.

**Optimize & Communicate**  
- Batch requests to reduce round trips; pre‑fetch related metadata in a single call if API allows.  
- Cache auth tokens to avoid repeated handshakes.  
- Provide a REST endpoint `/search?query=&app=…&user=…` that internally applies ACL filters.  
- Document the design and publish unit/integration tests for each connector. This modular, rate‑aware, and security‑first approach scales horizontally and meets FAANG’s emphasis on clear communication and robust engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
