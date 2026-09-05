---
qid: ing_0737216bdf__fp__local
question: 'Explain: Types of data architecture — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 510
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:07-05:00'
sources: []
---

**What is data architecture?**  
At its core, data architecture answers the *optimization* question: how do we represent, store, and retrieve information so that downstream analytical or operational tasks consume it with minimal latency and maximal integrity? It formalizes a set of **data‑flow constraints** (consistency, availability, scalability) into concrete schemas, storage engines, and governance rules. Think of it as the “software stack” for data—just as an operating system defines how processes talk to memory, data architecture dictates how raw facts traverse from ingestion to insight.

---

### 1. **Transactional (OLTP) Architecture**  
*Purpose*: Capture every atomic event in real‑time.  
*Why it works*: Uses highly normalized relational schemas; ACID guarantees keep each transaction isolated and durable. The cost is slower reads for analytical workloads because joins become expensive.  

### 2. **Analytical (OLAP) Architecture**  
*Purpose*: Enable fast, ad‑hoc aggregation across massive histories.  
*Why it works*: Denormalized star/ snowflake schemas, columnar storage, and pre‑aggregated fact tables trade write speed for read speed. The underlying principle is *pre‑computation* to reduce online join cost.

### 3. **Data Lake Architecture**  
*Purpose*: Store raw, unstructured or semi‑structured data at scale.  
*Why it works*: Leveraging object stores (S3, ADLS) and schema‑on‑read, it postpones modeling until consumption time. This flexibility aligns with the principle of *data as a first‑class citizen*, allowing downstream teams to impose whatever structure they need.

### 4. **Hybrid / Federated Architecture**  
*Purpose*: Combine the best of OLTP, OLAP, and lakes.  
*Why it works*: By orchestrating data movement (e.g., CDC pipelines) and applying *data virtualization*, we avoid duplication while maintaining consistency across silos.

---

#### Non‑obvious insight
Most designers focus on storage format; the real lever is **data lineage**—the transparent audit trail that tells *why* a value exists where it does. Without lineage, optimization stalls: you cannot safely purge or re‑materialize data because downstream systems silently depend on specific versions. Lineage turns data architecture into a *trust network*, enabling aggressive performance tuning without sacrificing correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
