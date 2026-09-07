---
qid: ing_84d89f1988__faang__local
question: 'Explain: Aggregate a group by tag — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 581
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:39-05:00'
sources: []
---

**Clarify**  
You’re asking how “group‑by‑tag” aggregation differs between **Cassandra** (wide‑column store) and **MongoDB** (document store).  
Assumptions:  
* The dataset is a collection of documents/rows each with one or more *tags*.  
* We need the count of items per tag (or similar group‑by statistics).  
* Write‑through latency and eventual consistency are acceptable.

---

**Approach**  
1. **Modeling** – choose a denormalized schema that supports efficient reads.  
2. **Aggregation strategy** – use native query capabilities or external tools.  
3. **Performance & scalability** – analyze write amplification, read patterns, and cluster size.

---

**Depth**

| Feature | Cassandra | MongoDB |
|---------|-----------|--------|
| **Schema** | Pre‑define a *tags* column; one row per tag with counters (materialized view). | Store tags as an array in each document. |
| **Aggregation** | No native GROUP BY; must use **map‑reduce on Spark/Cassandra** or maintain counters via application logic (increment on write). | Built‑in **aggregation pipeline** (`$group`, `$unwind`) runs on the server, efficient for moderate data volumes. |
| **Scalability** | Horizontal scaling is trivial; counters can be sharded by tag key. Write amplification minimal if using lightweight transactions or batching. | Scales well up to tens of GB per node; larger clusters need sharding and careful index design. |
| **Consistency** | Tunable (e.g., QUORUM). Counter tables are atomic per partition. | Strong consistency per document, but aggregation is eventual unless read with `majority`. |

---

**Edge Cases**

* **High cardinality tags** → Cassandra counter table may become hot; consider bucketing.  
* **Very large tag arrays** → MongoDB `$unwind` becomes expensive; use pre‑aggregated views or MapReduce.  
* **Concurrent updates** → Counter tables in Cassandra require careful handling to avoid lost increments.

---

**Optimize & Communicate**

* In **Cassandra**, push aggregation logic into the application or a Spark job; keep counters up‑to‑date to answer queries instantly.  
* In **MongoDB**, add an index on `tags` and use `$unwind` only when necessary; for huge collections, materialize a separate collection with tag counts.

Explain that the choice hinges on write frequency versus read latency: Cassandra shines with high‑write, low‑latency counters; MongoDB excels with ad‑hoc aggregation in smaller clusters. This balanced view demonstrates structured reasoning and depth expected from FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
