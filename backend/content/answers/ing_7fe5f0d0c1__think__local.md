---
qid: ing_7fe5f0d0c1__think__local
question: Users ask "how many open orders are blocked on a supplier issue?" Plain
  RAG gets this wrong. Why, and what's the right architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 518
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:27:15-05:00'
sources: []
---

**1️⃣ Clarify & state assumptions**

- The user wants *real‑time* counts of “open orders” that are stalled because a specific supplier is blocked.
- “Plain RAG” (Red‑Amber‑Green status) usually aggregates high‑level metrics; it doesn’t track the causal chain from order → supplier → block.
- Assume we have transactional data (orders, suppliers, status flags) in a relational or graph store.

**2️⃣ Mental model / framework**

Think of the problem as a *filtered aggregation* over a **relational graph**:
```
Order ← Supplier
   ↑          |
  Blocked?   IsBlocked
```
The architecture must support:
- Joining orders to suppliers.
- Filtering by supplier‑block status.
- Counting in near real‑time.

**3️⃣ Step‑by‑step reasoning**

1. **Data ingestion**: Stream order events into a data lake or event store (Kafka, Kinesis). Supplier block updates go to the same stream.
2. **Materialized view / incremental aggregation**: Use a streaming engine (Spark Structured Streaming, Flink) to maintain a table `open_orders_by_supplier` that counts open orders per supplier whenever an order or block status changes.
3. **Query layer**: Expose this table via a fast analytical store (ClickHouse, Druid, or Snowflake). The RAG dashboard queries it with a simple filter (`supplier_id = X AND blocked = true`) and gets the count instantly.
4. **RAG logic**: Compute thresholds on the fly in the query or in the UI layer; the dashboard shows Red/Amber/Green based on the current count.

**4️⃣ Common traps to avoid**

- *Static aggregation*: Pre‑computing totals once a day will miss real‑time supplier blocks.
- *Missing joins*: Forgetting that an order’s status must be “open” and the supplier must be flagged blocked.
- *Over‑normalization*: Pulling all orders into memory for each query is expensive; use incremental updates instead.

**5️⃣ Sanity check & communication**

- Verify with a small dataset: insert an open order, block its supplier, run the aggregation – count should increase by one.
- Explain to stakeholders that the “right architecture” couples streaming ingestion + incremental view maintenance + fast analytical store, rather than relying on a static RAG table. This yields accurate, up‑to‑date counts for blocked orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
