---
qid: ing_0fe02452ef__faang__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 761
total_tokens: 1001
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:24-05:00'
sources: []
---

**Clarify**

We’re asked to explain *ledger‑style* databases—those that keep a tamper‑proof, append‑only record of every transaction—and to outline **15 concrete database families** (SQL, NoSQL, distributed, immutable, etc.) and when each is appropriate.

---

**Approach**

1. List the 15 types in bullet form.  
2. For each, give:  
   * Core architecture/consistency model.  
   * Typical use‑case(s).  
3. Keep the explanation concise (≈10 words per type) to stay within 240 words.

---

**Depth**

| # | Database Type | Architecture & Consistency | When to Use |
|---|---------------|---------------------------|-------------|
| 1 | **Relational DB (PostgreSQL, MySQL)** | ACID, row‑level locking | Structured financial ledgers, audit trails. |
| 2 | **Multi‑Version Concurrency Control (MVCC) DB** | Snapshot isolation, append‑only WAL | High read throughput, immutable audit logs. |
| 3 | **Distributed SQL (CockroachDB, Spanner)** | Global ACID + replication | Cross‑region banking ledgers. |
| 4 | **Immutable Append‑Only Store (WORM, S3 Object Versioning)** | Write‑once, read‑many | Regulatory compliance records. |
| 5 | **Event Sourcing DB (Kafka Streams, EventStore)** | Log‑based event store | Microservices that replay state from events. |
| 6 | **Blockchain / DLT** | Decentralized consensus, cryptographic hash chains | Cryptocurrencies, smart contracts. |
| 7 | **Time‑Series DB (InfluxDB, TimescaleDB)** | Ordered by timestamp, retention policies | IoT transaction logs, financial tick data. |
| 8 | **Graph DB (Neo4j, JanusGraph)** | Edge append‑only, ACID per node | Fraud detection, KYC relationship chains. |
| 9 | **Columnar Store (Vertica, ClickHouse)** | Compression, read‑heavy analytics | Ledger summarization, BI dashboards. |
|10 | **Key–Value Store (Cassandra, DynamoDB)** | Tunable consistency, eventual write‑once | Session tokens, counters in ledger systems. |
|11 | **Hybrid OLTP/OLAP DB (Snowflake)** | Separate compute & storage, immutable tables | Consolidated reporting from live ledgers. |
|12 | **Object‑Relational DB with Temporal Tables** | System period tracking | Versioned financial records. |
|13 | **Secure Multi‑Party Computation DB** | Shared secrets, homomorphic encryption | Privacy‑preserving audit logs. |
|14 | **Federated Ledger (Corda)** | Permissioned DLT, smart contracts | Inter‑bank settlements. |
|15 | **Cold‑Storage Archive (Hadoop HDFS, Glacier)** | Deep‑archive, immutable | Long‑term compliance retention. |

---

**Edge Cases**

* Very high write latency → prefer MVCC or append‑only stores.  
* Need zero downtime scaling → distributed SQL or Kafka.  
* Regulatory “immutable” requirement → WORM or blockchain.

---

**Optimize & Communicate**

I’d finish by mapping a scenario (e.g., a multinational bank) to the above list, highlighting trade‑offs: consistency vs. latency, cost of storage, and regulatory constraints. This demonstrates structured reasoning, clear communication, and depth—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
