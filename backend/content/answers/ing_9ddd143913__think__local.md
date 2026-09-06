---
qid: ing_9ddd143913__think__local
question: 'Explain: Data Characteristics — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 446
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:32:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- Ask whether “data characteristics” refers only to *quality* (missingness, noise, imbalance) or also to *volume/velocity* and *structure*.
- Assume a typical SaaS product with relational data + streaming logs; no domain‑specific constraints.

**2️⃣ Adopt a systematic framework**

Use the classic **Data‑Maturity → Data‑Quality → System Design** pipeline:

1. **Identify key attributes** (size, schema, distribution, lineage).
2. **Map to design concerns** (storage choice, indexing, ETL complexity, real‑time needs).

**3️⃣ Step‑by‑step reasoning**

- *Volume*: Estimate rows/month → decide on sharding vs. columnar store.
- *Velocity*: Is data arriving in batches or streams? → Kafka + Spark Streaming or batch ETL.
- *Variety*: Structured tables vs. semi‑structured logs → use a hybrid (PostgreSQL + Parquet).
- *Veracity*: Missing values, outliers → build validation pipelines; consider anomaly detection.
- *Value*: Which fields drive business metrics? Prioritize indexing and caching.

For each attribute, ask: “How does this influence latency requirements?” and “What trade‑offs exist between consistency vs. availability?”

**4️⃣ Avoid common pitfalls**

- Don’t treat “big data” as a single monolith; split by use‑case.
- Ignore schema evolution—design for flexible JSON columns or versioned tables.
- Assume all missing values are errors; sometimes they carry semantic meaning.

**5️⃣ Sanity‑check & verbalize**

- Sketch a quick diagram: raw ingestion → staging → clean layer → analytics layer.  
- Explain choices aloud: “Because we have 10⁸ rows/month, a columnar store gives us compression and faster analytical queries.”  
- Re‑evaluate against constraints (budget, team skillset) before finalizing.

By following this numbered loop—clarify, model, reason, avoid traps, validate—you’ll systematically cover data characteristics in any system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
