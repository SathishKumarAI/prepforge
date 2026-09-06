---
qid: ing_0fe02452ef__think__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 547
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:45:29-05:00'
sources: []
---

We must outline numbered thoughts for candidate. Provide 5 points as requested, 150-220 words.**1️⃣ Clarify the scope & assumptions**  
   - Assume “ledger” means immutable, append‑only records (e.g., blockchain, financial logs).  
   - Assume the reader knows basic DB categories (relational, NoSQL, graph, time‑series, etc.).  
   - Goal: map 15 database types to typical ledger use‑cases (consistency, scalability, query patterns).

**2️⃣ Adopt a mental model**  
   - Use **“consistency vs. performance vs. flexibility”** triad.  
   - Group databases by primary feature set: ACID (SQL), BASE (NoSQL), append‑only (WAL, event‑sourcing), specialized (graph, time‑series).  
   - For each type list key strengths, weaknesses, and typical ledger patterns.

**3️⃣ Step‑by‑step reasoning**  
   1. List the 15 types: MySQL/PostgreSQL, Oracle, SQLite, MongoDB, Cassandra, DynamoDB, Redis (append‑only), RocksDB, LevelDB, Apache Kafka, Pulsar, Neo4j, JanusGraph, InfluxDB, TimescaleDB.  
   2. For each, ask: *What guarantees does it provide?* → ACID, eventual consistency, write‑ahead logging, etc.  
   3. Map those guarantees to ledger needs: immutability, audit trail, rapid writes, complex joins, or graph traversals.  
   4. Produce a concise “when to use” bullet per type.

**4️⃣ Avoid common traps**  
   - Don’t conflate *performance* with *throughput*; remember write‑latency matters for ledgers.  
   - Resist the temptation to label every NoSQL DB as “eventual”; many offer tunable consistency.  
   - Beware of overemphasizing cost or vendor lock‑in—focus on functional fit.

**5️⃣ Sanity‑check & verbalize**  
   - Verify each mapping by running a quick mental ledger scenario (e.g., transaction log, smart contract state).  
   - Practice explaining one type to a non‑technical colleague; if you can’t simplify “append‑only with WAL” into “writes never overwrite”, the explanation is too complex.  
   - End with a clear decision tree: start with ACID for strict auditability → move to append‑only NoSQL if write speed dominates, etc.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
