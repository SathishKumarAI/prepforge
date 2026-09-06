---
qid: ing_515e285ca9__fp__local
question: 'Explain: Example: GitHub Pull Request Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 336
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:58:14-05:00'
sources: []
---

## Why a Pull‑Request webhook must be *event‑driven, idempotent, and replayable*

The fundamental problem is **keeping distributed services in sync with GitHub’s state** without polling or duplicating data.  
GitHub emits a single “pull_request” event when the PR changes; any downstream system (CI, deployment, analytics) must react to that change exactly once, even if it receives the payload multiple times due to retries or network glitches.

1. **Event‑driven** – The source of truth is GitHub; the receiver should not maintain its own copy.  
2. **Idempotence** – Each handler stores a unique `delivery_id` (header) and discards duplicates, guaranteeing that retries don’t corrupt state.  
3. **Replayability** – Persisting events in a durable queue (e.g., Kafka) allows new consumers to process past PRs without re‑configuring GitHub.

Under the hood this is an *optimal communication pattern*: a push from the source eliminates latency; a lightweight acknowledgment keeps the system bounded; and a persistent log satisfies eventual consistency guarantees.  

**Non‑obvious insight:** The `delivery_id` is not just deduplication—it is the key to **partitioning** events for parallel processing. By hashing the ID into a partition, you can scale out consumers while preserving order per PR, which is often required by CI pipelines that must run sequentially on the same branch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
