---
qid: ing_0dce71ccee__fp__local
question: 'Explain: Pastebin — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 419
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:58-05:00'
sources: []
---

**Why a “Pastebin” must be built the way it is**

At its core, a Pastebin serves three hard constraints:

1. **Fast write and read** – users create millions of snippets per day; latency < 200 ms.
2. **Scalable storage** – each paste can grow to hundreds of megabytes, but most are tiny (≤ 10 KB).
3. **High availability & consistency** – a user should always see the exact text they posted.

These constraints imply a *write‑heavy* workload with *read‑mostly* short objects and *eventual* global consistency. The classic solution is a *partitioned, replicated key–value store*:

| Layer | Design choice | Why it works |
|-------|---------------|--------------|
| **API** | REST + WebSocket for live edits | HTTP gives idempotent writes; websockets support collaborative editing. |
| **Storage** | Sharded append‑only log (e.g., DynamoDB, Cassandra) | Append‑only logs are naturally immutable and fast to write; sharding distributes load. |
| **Caching** | CDN + in‑memory cache (Redis) | Most pastes are read more than written; caching keeps latency low. |
| **Security** | Signed URLs & rate limiting | Prevents abuse while keeping writes cheap. |

A non‑obvious insight: *use the paste’s SHA‑256 as its key*. This guarantees deduplication for identical snippets, drastically reducing storage and allowing a simple “paste‑by‑hash” lookup. It also turns the system into an **immutable content‑addressable store**, which is inherently consistent without explicit locks.

In short, a Pastebin is a textbook example of an immutable, append‑only key–value service that leverages hashing for deduplication and caching for speed—exactly what modern distributed databases are built to do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
