---
qid: ing_cc95b88892__faang__local
question: 'Explain: Transactional replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 516
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:55-05:00'
sources: []
---

**Transactional Replication – A Quick FAANG‑style Primer**

| Step | What I’ll Cover |
|------|----------------|
| **Clarify** | *What* is asked? Explain the concept of transactional replication, list its major types (snapshot, statement‑level, row‑level), give concrete DB examples (SQL Server, PostgreSQL logical decoding), and outline typical use cases. Ask whether we’re focusing on relational engines or also NoSQL. |
| **Approach** | 1️⃣ Define “transactional replication” as the near‑real‑time propagation of DML changes across replicas while preserving ACID guarantees. <br>2️⃣ Categorize by change capture method.<br>3️⃣ Map each type to a popular system and highlight strengths/weaknesses.<br>4️⃣ Finish with a short use‑case table (high‑traffic read scaling, disaster recovery, geo‑distribution). |
| **Depth** | • **Snapshot Replication** – bulk copy at interval; fast init but stale data. <br>• **Statement‑Level Replication** – sends SQL text; good for simple schemas, risk of semantic drift if functions change. <br>• **Row‑Level (Logical) Replication** – streams WAL/transaction logs (e.g., PostgreSQL logical decoding, MySQL binlog), preserves row integrity, supports conflict resolution. <br>• **Hybrid / Change Data Capture (CDC)** – combines log parsing with event streaming (Kafka + Debezium). Complexity: O(log N) for log tailing, network overhead proportional to write volume; trade‑off between latency and consistency. |
| **Edge Cases** | • Schema changes during replication → versioned DDL or failover.<br>• Bi‑directional conflicts in multi‑master setups → need conflict resolution policies.<br>• Network partitions – eventual consistency vs. strict isolation. Testing: simulate high write bursts, partition recovery, and schema evolution. |
| **Optimize & Communicate** | • Use *logical decoding* to reduce bandwidth (only changed rows). <br>• Buffer small batches for latency‑sensitive apps; use asynchronous commits for throughput. <br>Explain that the choice hinges on consistency requirements vs. write load: snapshot for cold data, row‑level for hot OLTP, CDC for event‑driven architectures. |
**Word Count:** ~190 words |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
