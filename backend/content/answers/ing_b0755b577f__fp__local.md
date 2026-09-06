---
qid: ing_b0755b577f__fp__local
question: 'Explain: Context — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 402
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:38-05:00'
sources: []
---

**Transactional Outbox – why it’s a must‑have in event‑driven ML pipelines**

When an ML model updates state (e.g., a new feature vector is stored), the system often needs to broadcast that change—perhaps to a recommendation engine, audit log, or downstream inference service. The *core problem* is atomicity: we want the database write **and** the event publication to either both succeed or both fail. If only one succeeds, we risk data drift and inconsistent predictions.

The outbox solves this by turning two operations into one transaction:

1. **Insert** a row in an “outbox” table (within the same DB transaction that writes the feature).
2. A separate *poller* reads un‑sent outbox rows, publishes them to Kafka/HTTP, then marks them sent.

Because the insert is part of the main transaction, failure rolls back both operations—no orphan events. The poller guarantees eventual delivery; if it crashes, another instance can pick up unsent rows.

**Deeper principle:** This is a *decomposition of ACID into an append‑only log* that decouples durability from latency. By treating the outbox as a write‑once source of truth, we leverage the database’s guarantee for ordering and idempotence while allowing asynchronous consumers to scale independently.

**Non‑obvious insight:** The poller can be *eventually consistent* with the main transaction if it uses optimistic locking (e.g., `WHERE sent_at IS NULL`). This means you don’t need a heavy “exactly once” broker; idempotent consumers plus the outbox’s unique constraint give you the same safety for far less operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
