---
qid: ing_144afcd588__think__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 512
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:03:15-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify what “types of databases” means: relational, NoSQL (document, key‑value, graph, columnar, time‑series), NewSQL, in‑memory, file‑based, etc.  
- Assume the audience has a basic ML background but may not know database internals.  
- Decide on the target depth: a high‑level overview of 15 categories with one‑sentence use cases.

**2️⃣ Adopt a mental model**  
Use the *“data need → storage pattern → performance trade‑offs”* framework:
1. **Data structure & schema** (structured vs semi‑/unstructured).  
2. **Query patterns** (OLTP, OLAP, real‑time analytics, graph traversal).  
3. **Scalability & consistency requirements** (ACID vs BASE).  

Map each database type onto this triad.

**3️⃣ Reason step by step**  
- List the 15 categories first (e.g., MySQL, PostgreSQL, MongoDB, Cassandra, Redis, Neo4j, ClickHouse, InfluxDB, SQLite, Oracle, MariaDB, DynamoDB, Bigtable, HBase, Snowflake).  
- For each, answer: *What data shape?* *What workloads?* *Why it’s chosen in ML pipelines (e.g., feature store, model serving, training data lake)*.  
- Group similar types to avoid repetition and show progression from simple to specialized.

**4️⃣ Avoid common traps**  
- Don’t conflate “NoSQL” with a single product; emphasize categories.  
- Skip deep technical jargon that distracts from the ML angle (e.g., skip exact consistency models unless relevant).  
- Beware of bias toward popular cloud services; include open‑source alternatives.

**5️⃣ Sanity‑check & communicate**  
- Verify each database’s primary use case against real ML scenarios (feature ingestion, hyperparameter tuning logs, inference latency).  
- Keep sentences concise: one or two lines per type.  
- End with a quick decision guide (e.g., “If you need fast key‑value lookups for feature retrieval → Redis; if you need complex joins over structured data → PostgreSQL”).  

Follow this scaffold to produce a clear, reusable explanation of 15 database types and their ML use cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
