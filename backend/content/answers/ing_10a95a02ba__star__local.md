---
qid: ing_10a95a02ba__star__local
question: 'Explain: Design a connector framework that syncs content and permissions
  from 100+ SaaS apps into one index.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 380
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:43-05:00'
sources: []
---

**Situation**  
At my previous company we had an enterprise knowledge portal that needed to pull documents and access controls from over a hundred SaaS services—Google Drive, SharePoint, Box, Salesforce, Jira, and dozens of niche tools. The existing data lake was fragmented; each app had its own API, rate limits, and permission models, so users saw stale or incomplete content.

**Task**  
I was tasked with building a unified connector framework that could ingest both content and fine‑grained permissions into a single Elasticsearch index while keeping sync latency below 15 minutes and respecting each provider’s OAuth scopes and throttling constraints.

**Action**  
I designed a micro‑service architecture using Python FastAPI for the orchestrator, Celery workers for parallel ingestion, and an event‑driven message bus (Kafka) to decouple source connectors from the indexer. Each connector wrapped the vendor SDKs in a common interface that exposed `list_items`, `get_item`, and `get_permissions`. I added exponential backoff and circuit breakers per app, and stored incremental change tokens (e.g., Google Drive’s `modifiedTime` or Salesforce’s `LastModifiedDate`) to avoid full scans. Permissions were flattened into ACL documents linked by user IDs, then merged into the main index via a bulk pipeline that updated or deleted stale entries.

**Result**  
Within three months we achieved 99.7 % data freshness and reduced sync time from hours to under 10 minutes for most apps. The portal now shows consistent search results with correct access rights, cutting support tickets by 35 %. I learned the value of treating each SaaS as a first‑class citizen in the pipeline and the power of incremental change tracking for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
