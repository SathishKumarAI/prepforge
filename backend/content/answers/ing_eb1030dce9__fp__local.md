---
qid: ing_eb1030dce9__fp__local
question: 'Explain: Documentation — PgBouncer - lightweight connection pooler for
  PostgreSQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 503
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:50-05:00'
sources: []
---

**PgBouncer – a minimalist PostgreSQL connection pooler**

The *fundamental problem* is that each TCP session to PostgreSQL incurs an expensive handshake, authentication and buffer allocation. In high‑traffic web stacks a single application server can open thousands of connections, exhausting the database’s `max_connections` limit and wasting CPU cycles on idle sockets.

PgBouncer solves this by **decoupling client sessions from backend sessions**: it keeps a small pool of real PostgreSQL connections and multiplexes many lightweight “client” connections over them. The design follows two core principles:

1. **Resource‑bounded optimization** – the pool size is bounded by `pool_size` per user/database, guaranteeing that at most `max_connections × pool_size` backend sockets exist. This turns an \(O(n)\) cost (one socket per client) into a constant‑time allocation.
2. **Stateless proxying** – PgBouncer forwards SQL text verbatim and only rewrites the binary protocol framing. It never parses or modifies queries, preserving the database’s semantics while keeping its own state minimal.

The *non‑obvious insight* is that most latency in a web stack comes from connection churn, not query execution. By making the pooler stateless and lightweight, PgBouncer reduces context switching and kernel socket overhead, yielding a linear speed‑up proportional to the number of idle connections it reuses.

**Key config knobs**

| Parameter | Role |
|-----------|------|
| `pool_mode` (`session`, `transaction`, `statement`) | Determines how long a backend stays tied to a client session. |
| `max_client_conn` | Upper bound on incoming sockets. |
| `default_pool_size` | Default per‑user/database pool size. |

**Typical workflow**

1. Client → PgBouncer (TCP) – lightweight handshake, authentication forwarded.
2. PgBouncer checks its cache; if a suitable backend is idle, it forwards the query immediately.
3. If no backend is free, PgBouncer queues the client until one becomes available.

Because all state lives in the database and PgBouncer merely relays bytes, adding or removing workers in a horizontally scaled application stack is trivial: just point them to the same PgBouncer endpoint. This elegant separation of concerns turns a fragile resource into a robust, scalable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
