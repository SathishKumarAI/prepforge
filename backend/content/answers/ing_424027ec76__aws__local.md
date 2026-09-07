---
qid: ing_424027ec76__aws__local
question: 'Explain: Property access — GitHub - Netflix/archaius: Library for configuration
  management API \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 577
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:56-05:00'
sources: []
---

**Situation** – While migrating Netflix’s monolith to a micro‑service stack, we had to replace the legacy **Archaius** property loader with a cloud‑native solution that could scale to 10 000+ services and still honor feature flags at runtime.

**Task** – Design an architecture that:
1. Provides *fast, local* reads for configuration keys.
2. Supports *hot reload* of properties without redeploying services.
3. Guarantees *high availability* even if the config store is temporarily down.

**Action** – I proposed a two‑layer system:

| Layer | AWS Service | Role |
|-------|-------------|------|
| **Cache** | Amazon ElastiCache for Redis (cluster mode) | In‑memory, low‑latency read cache; supports key eviction policies. |
| **Source of Truth** | Amazon S3 + EventBridge + Lambda | Immutable property files stored in S3 buckets. When a file changes, an S3 event triggers a Lambda that updates the Redis cache and publishes an SNS topic for downstream services to subscribe to. |

*Design decisions*
- **Scalability:** Redis cluster scales horizontally; each service connects to a local read replica via DNS routing.
- **Availability:** If Redis is down, services fall back to a lightweight S3 client with exponential backoff (ensuring at least 99.9% availability).
- **Cost:** Using *cache‑aside* pattern reduces S3 GET traffic; Lambda invocations cost < $0.000016 per invocation.
- **Trade‑offs:** Slightly higher latency for first read after cache miss, but acceptable because most reads hit Redis.

**Result** – After deployment:
- Read latency dropped from 120 ms (Archaius over ZooKeeper) to **< 5 ms** on average.
- Cache hit ratio improved from 65% to **92%**, saving ~30 k S3 GETs per day (~$15/month).
- Feature flag rollout time reduced from 10 min to under 1 min, enabling real‑time A/B tests.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant configuration changes that directly improved user experience (faster feature toggles).
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end architecture and delved into Redis eviction policies to meet SLAs.
- **Bias for Action** – Implemented the solution in two weeks, avoiding a 3‑month refactor of the monolith.

*Bar‑raiser notes*: Look for evidence that you understood *why* each component was chosen, quantified impact, and how failures (e.g., Redis outage) were mitigated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
